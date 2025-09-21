# ChestXRay AI Analyzer - Complete Setup Guide

## 🎯 Project Overview

This is a complete web application for AI-powered pneumonia detection from chest X-ray images. The project consists of:

- **Frontend**: React application with Tailwind CSS
- **Backend**: FastAPI server with ML model integration
- **AI Model**: Your trained Keras model (.h5 file)

## 📋 Prerequisites

Before starting, ensure you have the following installed on your system:

1. **Node.js** (v14 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Python** (v3.8 or higher)
   - Download from: https://python.org/
   - Verify installation: `python --version`

3. **Git** (optional but recommended)
   - Download from: https://git-scm.com/

## 🚀 Step-by-Step Installation

### Step 1: Project Structure Setup

Create a main project directory and organize your files:

```bash
mkdir chest-xray-analyzer
cd chest-xray-analyzer
```

You should have the following structure after setting up:

```
chest-xray-analyzer/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── models/
│   ├── models/
│   │   └── pneumonia_model.h5  # Your trained model here
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

### Step 2: Backend Setup (FastAPI)

#### 2.1 Navigate to Backend Directory

```bash
cd backend
```

#### 2.2 Create Python Virtual Environment

**For Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**For macOS/Linux:**
```bash
python -m venv venv
source venv/bin/activate
```

#### 2.3 Install Python Dependencies

```bash
pip install -r requirements.txt
```

#### 2.4 Add Your Trained Model

1. Copy your trained `.h5` model file to `backend/models/pneumonia_model.h5`
2. If your model has a different name, update the path in `backend/app/main.py` line 31:

```python
model_path = "models/your_model_name.h5"
```

#### 2.5 Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cp .env.example .env
```

Edit the `.env` file if needed:
```
MODEL_PATH=models/pneumonia_model.h5
API_HOST=0.0.0.0
API_PORT=8000
CORS_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
LOG_LEVEL=INFO
```

#### 2.6 Test Backend Installation

Start the FastAPI server:

```bash
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Or simply:

```bash
python app/main.py
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [xxxxx] using watchfiles
INFO:     Started server process [xxxxx]
INFO:     Waiting for application startup.
INFO:     Model loaded successfully from models/pneumonia_model.h5
INFO:     Application startup complete.
```

Test the API by visiting:
- Main endpoint: http://localhost:8000/
- API documentation: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

### Step 3: Frontend Setup (React)

#### 3.1 Open New Terminal and Navigate to Frontend

```bash
# Open a new terminal window/tab
cd frontend  # or cd ../frontend if you're still in backend/
```

#### 3.2 Install Node.js Dependencies

```bash
npm install
```

#### 3.3 Install Tailwind CSS

Tailwind should be installed automatically with npm install, but if you need to set it up manually:

```bash
npm install -D tailwindcss postcss autoprefixer
```

#### 3.4 Configure Environment Variables

Create a `.env` file in the frontend directory:

```bash
cp .env.example .env
```

The `.env` file should contain:
```
REACT_APP_API_URL=http://localhost:8000
REACT_APP_APP_NAME=ChestXRay AI Analyzer
```

#### 3.5 Start the React Development Server

```bash
npm start
```

The React app will automatically open in your browser at:
- http://localhost:3000

## 🔧 Running the Complete Application

### Method 1: Manual Start (Recommended for Development)

1. **Terminal 1 - Backend:**
```bash
cd backend
# Activate virtual environment (if not already activated)
source venv/bin/activate  # or venv\Scripts\activate on Windows
python app/main.py
```

2. **Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

### Method 2: Using Docker (Optional)

If you prefer using Docker:

```bash
cd backend
docker build -t chest-xray-backend .
docker run -p 8000:8000 -v $(pwd)/models:/app/models chest-xray-backend
```

## 📱 Using the Application

1. **Access the Application**
   - Open your browser and go to http://localhost:3000

2. **Upload a Chest X-Ray Image**
   - Click on the upload area or drag and drop an image
   - Supported formats: PNG, JPG, JPEG
   - Maximum file size: 10MB

3. **Get Analysis Results**
   - Click "Analyze Image" to get AI predictions
   - View results with confidence levels
   - Review detailed analysis and recommendations

## 🛠️ Customization Guide

### Updating the AI Model

1. Replace your model file in `backend/models/pneumonia_model.h5`
2. If your model has different input requirements, update the preprocessing function in `backend/app/main.py`:

```python
def preprocess_image(image_bytes):
    # Update these lines based on  moyourdel's requirements
    image = image.resize((224, 224))  # Change size if needed
    img_array = img_array / 255.0     # Update normalization if needed
```

3. Update class names if different:

```python
class_names = ['Normal', 'Pneumonia']  # Update these labels
```

### Customizing the Frontend

1. **Colors and Styling**: Edit `frontend/tailwind.config.js`
2. **Content**: Modify components in `frontend/src/components/`
3. **API Integration**: Update API calls in `frontend/src/components/Upload.js`

### Adding Features

- **User Authentication**: Implement login/logout functionality
- **Result History**: Store and display previous analyses
- **Batch Processing**: Allow multiple image uploads
- **PDF Reports**: Generate detailed analysis reports

## 🐛 Troubleshooting

### Common Backend Issues

**1. Model Loading Error**
```
Error: Model not found
Solution: Ensure your .h5 file is in backend/models/ directory
```

**2. CORS Error**
```
Error: CORS policy blocking request
Solution: Check CORS_ORIGINS in .env file includes frontend URL
```

**3. Import Error**
```
Error: No module named 'tensorflow'
Solution: Make sure virtual environment is activated and dependencies installed
```

### Common Frontend Issues

**1. Module Not Found**
```
Error: Module not found: Can't resolve 'tailwindcss'
Solution: Run npm install to install all dependencies
```

**2. API Connection Error**
```
Error: Network Error or Failed to fetch
Solution: Ensure backend is running on http://localhost:8000
```

**3. Build Errors**
```
Error: Failed to compile
Solution: Check for syntax errors in React components
```

### Port Conflicts

If ports 3000 or 8000 are already in use:

**For Backend:**
```bash
python -m uvicorn app.main:app --port 8001
```
Update frontend .env: `REACT_APP_API_URL=http://localhost:8001`

**For Frontend:**
```bash
PORT=3001 npm start
```


## 📚 Additional Resources

### Documentation Links
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TensorFlow/Keras Documentation](https://www.tensorflow.org/guide/keras)

### Model Training Resources
- [Pneumonia Detection Dataset](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)
- [Transfer Learning Tutorial](https://www.tensorflow.org/tutorials/images/transfer_learning)
- [Medical Image Analysis Best Practices](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7608487/)

## 🎉 Success Checklist

- [ ] Backend server running on http://localhost:8000
- [ ] Frontend application running on http://localhost:3000
- [ ] Model loaded successfully (check backend logs)
- [ ] Can upload and analyze chest X-ray images
- [ ] Results display with confidence levels
- [ ] No console errors in browser

## 💡 Tips for Success

1. **Test with Sample Images**: Use sample chest X-ray images to verify functionality
2. **Monitor Logs**: Keep an eye on both frontend (browser console) and backend logs
3. **Model Performance**: Test with various image qualities and formats
4. **Responsive Design**: Test the application on different screen sizes
5. **Error Handling**: Test error scenarios (invalid files, network issues)



---

**Happy coding! 🚀** Your AI-powered chest X-ray analyzer is ready to help healthcare professionals detect pneumonia more efficiently.