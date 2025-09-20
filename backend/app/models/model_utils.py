# Utility functions for model handling
import tensorflow as tf
from tensorflow import keras
import numpy as np
from PIL import Image
import io

def create_model_architecture():
    """
    Create the model architecture (example using transfer learning)
    This is for reference - you'll use your already trained model
    """
    base_model = keras.applications.ResNet50(
        weights='imagenet',
        include_top=False,
        input_shape=(224, 224, 3)
    )

    # Freeze base model layers
    base_model.trainable = False

    # Add custom classification layers
    model = keras.Sequential([
        base_model,
        keras.layers.GlobalAveragePooling2D(),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(128, activation='relu'),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(2, activation='softmax')  # Binary classification
    ])

    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )

    return model

def validate_image(image_bytes):
    """Validate uploaded image"""
    try:
        image = Image.open(io.BytesIO(image_bytes))
        # Check if image is valid
        image.verify()
        return True
    except Exception:
        return False

def get_model_summary():
    """Get model architecture summary"""
    model = create_model_architecture()
    return model.summary()
