import uvicorn
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import numpy as np
from PIL import Image
import io
import tensorflow as tf
import logging
from contextlib import asynccontextmanager
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(levelname)s:%(name)s:%(message)s')
logger = logging.getLogger(__name__)

model = None
class_names = ['NORMAL', 'PNEUMONIA']

@asynccontextmanager
async def lifespan(app: FastAPI):
    global model
    logger.info("Starting up ChestXRay AI Analyzer API...")
    try:
        model = tf.keras.models.load_model('models/pneumonia_model.h5')
        logger.info("Model loaded successfully from models/pneumonia_model.h5")
    except Exception as e:
        logger.error(f"Error loading model: {e}")
        model = None
    yield
    logger.info("Shutting down API.")

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, change to your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    """Health check endpoint"""
    return {
        "message": "Welcome to the ChestXRay AI Analyzer API",
        "timestamp": datetime.now().isoformat(),
        "model_loaded": model is not None
    }

def preprocess_image(image_bytes: bytes):
    """Preprocess uploaded image for prediction"""
    try:
        image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
        image = image.resize((150, 150))
        image_array = np.array(image) / 255.0
        image_array = np.expand_dims(image_array, axis=0)
        return image_array
    except Exception as e:
        logger.error(f"Error preprocessing image: {e}")
        raise HTTPException(status_code=400, detail="Invalid image file")

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    if model is None:
        raise HTTPException(status_code=503, detail="Model is not loaded")
    
    allowed_types = ["image/jpeg", "image/jpg", "image/png"]
    if file.content_type not in allowed_types:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid file type. Allowed types: {', '.join(allowed_types)}"
        )
    
    try:
        contents = await file.read()
        img_array = preprocess_image(contents)

        prediction = model.predict(img_array)
        confidence = float(prediction[0][0])

        if confidence > 0.5:
            predicted_class = 'PNEUMONIA'
            confidence_score = confidence
        else:
            predicted_class = 'NORMAL'
            confidence_score = 1 - confidence

        if confidence_score > 0.9:
            interpretation = "High Confidence"
        elif confidence_score > 0.7:
            interpretation = "Moderate Confidence"
        else:
            interpretation = "Low Confidence"
        logger.info(f"Prediction made: {predicted_class} with confidence {confidence_score:.4f}")
        return JSONResponse({
            "predicted_class": predicted_class,
            "confidence": confidence_score,
            "interpretation": interpretation,
            "filename": file.filename,
            "file_size": len(contents),
            "timestamp": datetime.now().isoformat(),
        })

    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error making prediction: {e}")
        raise HTTPException(status_code=500, detail=f"Error making prediction: {e}")
