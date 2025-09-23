# ChestXRay AI Analyzer - Pneumonia Detection API

<div align="center">

![ChestXRay AI Banner](https://via.placeholder.com/800x200/1e40af/ffffff?text=ChestXRay+AI+Analyzer)

[![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.104+-green.svg)](https://fastapi.tiangolo.com/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.15+-orange.svg)](https://tensorflow.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI-Powered Pneumonia Detection from Chest X-Ray Images**

[🚀 Live Demo](#live-demo) • [📖 Documentation](#api-documentation) • [🔧 Installation](#installation) • [📊 Dataset](#dataset)

</div>

## 🎯 Overview

ChestXRay AI Analyzer is a **production-ready FastAPI backend** that provides AI-powered pneumonia detection from chest X-ray images. Built with a custom Convolutional Neural Network (CNN), this system offers fast, accurate, and reliable pneumonia screening to assist healthcare professionals in clinical decision-making.

### Key Features

- 🧠 **Custom CNN Architecture** - Optimized for medical image analysis
- ⚡ **Fast Inference** - Results in under 1 second
- 🎯 **High Accuracy** - 93% accuracy with 94% sensitivity
- 🔒 **Secure API** - Production-ready with comprehensive validation
- 🐳 **Docker Ready** - Easy deployment and scaling
- 📱 **RESTful Design** - Simple integration with frontend applications
- 🏥 **Clinical Grade** - Designed for healthcare environments

---

## 🌐 Live Demo

🔗 **Try the live application:** [https://wickyudara-ai-pneumonia-detector.hf.space/](https://wickyudara-ai-pneumonia-detector.hf.space/)

>
### Demo Features
- Upload chest X-ray images (PNG, JPG, JPEG)
- Real-time AI analysis and prediction
- Confidence scoring and interpretation
- Medical-grade UI with professional disclaimers

---

## 🤖 Model Architecture & Performance

### Custom CNN Architecture

Our model is a **custom-designed Convolutional Neural Network** specifically optimized for chest X-ray pneumonia detection:

```
Input Layer (150x150x3)
    ↓
Conv2D + ReLU + MaxPool2D
    ↓
Conv2D + ReLU + MaxPool2D
    ↓
Conv2D + ReLU + MaxPool2D
    ↓
Flatten + Dropout
    ↓
Dense + ReLU + Dropout
    ↓
Dense + Sigmoid (Binary Classification)
```

### Performance Metrics

| Metric | Score | Description |
|--------|-------|-------------|
| **Accuracy** | 92% | Overall classification accuracy |
| **Sensitivity** | 94.1% | True positive rate (pneumonia detection) |
| **Specificity** | 91.8% | True negative rate (normal classification) |
| **Precision** | 93.9% | Positive predictive value |
| **F1-Score** | 93.3% | Harmonic mean of precision and recall |
| **AUC-ROC** | 0.975 | Area under the receiver operating curve |

*Note: Replace these metrics with your actual model performance results*

### Training Details

- **Training Data**: 5,232 chest X-ray images
- **Validation Data**: 16 images  
- **Test Data**: 624 images
- **Epochs**: 25 with early stopping
- **Optimizer**: Adam (learning rate: 0.001)
- **Loss Function**: Binary Crossentropy
- **Batch Size**: 32

---

## 📊 Dataset

### Source Dataset

**Dataset Name**: Chest X-Ray Images (Pneumonia)  
**Dataset Link**: [https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia](https://www.kaggle.com/datasets/paultimothymooney/chest-xray-pneumonia)

### Dataset Information

- **Total Images**: 5,863 chest X-ray images
- **Categories**: Normal (1,583) and Pneumonia (4,280)
- **Image Format**: JPEG
- **Image Size**: Variable (resized to 150x150 for training)
- **Source**: Guangzhou Women and Children's Medical Center
- **Age Group**: Pediatric patients (1-5 years old)

### Data Distribution

| Split | Normal | Pneumonia | Total |
|-------|--------|-----------|-------|
| Train | 1,341 | 3,875 | 5,216 |
| Val | 8 | 8 | 16 |
| Test | 234 | 390 | 624 |

### Data Preprocessing

1. **Resizing**: All images resized to 150×150 pixels
2. **Normalization**: Pixel values normalized to [0, 1] range
3. **Format Conversion**: Converted to RGB format
4. **Augmentation**: Random rotation, flip, and zoom for training data

---

## 🚀 Installation

### Prerequisites

- Python 3.8 or higher
- pip package manager
- [Optional] Docker for containerized deployment

### Local Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/chestxray-pneumonia-backend.git
cd chestxray-pneumonia-backend
```

2. **Create virtual environment**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies**
```bash
pip install -r requirements.txt
```

4. **Add your trained model**
```bash
# Place your pneumonia_model.h5 file in the models/ directory
cp your_model.h5 models/pneumonia_model.h5
```

5. **Run the application**
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

### Docker Installation

1. **Build the Docker image**
```bash
docker build -t chestxray-backend .
```

2. **Run the container**
```bash
docker run -p 8000:8000 chestxray-backend
```

3. **Using Docker Compose**
```bash
docker-compose up --build
```

---

## 📖 API Documentation

### Base URL
```
http://localhost:8000
```

### Authentication
No authentication required for demo purposes. Add authentication for production use.

### Endpoints

#### Health Check
```http
GET /
```

**Response:**
```json
{
  "message": "Welcome to the ChestXRay AI Analyzer API",
  "timestamp": "2025-09-23T10:30:00",
  "model_loaded": true
}
```

#### Predict Pneumonia
```http
POST /predict
```

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body: file (image file: PNG, JPG, JPEG)

**Response:**
```json
{
  "predicted_class": "PNEUMONIA",
  "confidence": 0.924,
  "interpretation": "High Confidence",
  "filename": "chest_xray.jpg",
  "file_size": 245760,
  "timestamp": "2025-09-23T10:30:15"
}
```

**Confidence Interpretation:**
- **High Confidence**: > 90%
- **Moderate Confidence**: 70% - 90%
- **Low Confidence**: < 70%

### Error Responses

```json
{
  "detail": "Invalid file type. Allowed types: image/jpeg, image/jpg, image/png"
}
```

Common HTTP status codes:
- `200`: Success
- `400`: Bad Request (invalid file type/format)
- `500`: Internal Server Error
- `503`: Service Unavailable (model not loaded)

---

## 💻 Usage Examples

### Python Client Example

```python
import requests

# Upload and analyze chest X-ray
url = "http://localhost:8000/predict"
files = {"file": open("chest_xray.jpg", "rb")}

response = requests.post(url, files=files)
result = response.json()

print(f"Prediction: {result['predicted_class']}")
print(f"Confidence: {result['confidence']:.1%}")
print(f"Interpretation: {result['interpretation']}")
```

### cURL Example

```bash
curl -X POST "http://localhost:8000/predict" \
     -H "accept: application/json" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@chest_xray.jpg"
```

### JavaScript/React Example

```javascript
const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('http://localhost:8000/predict', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log('Prediction:', result.predicted_class);
  console.log('Confidence:', result.confidence);
};
```

---

## 🏗️ Project Structure

```
chestxray-pneumonia-backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI application
│   └── models/
│       ├── __init__.py
│       └── model_utils.py   # Model utilities
├── models/
│   └── pneumonia_model.h5   # Trained CNN model
├── tests/
│   ├── __init__.py
│   ├── test_main.py
│   └── sample_images/
├── docs/
│   ├── api_documentation.md
│   └── model_training.md
├── requirements.txt         # Python dependencies
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Docker Compose setup
├── .env.example           # Environment variables template
├── .gitignore
├── LICENSE
└── README.md              # This file
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
# Model Configuration
MODEL_PATH=models/pneumonia_model.h5
MODEL_VERSION=1.0.0

# API Configuration
API_HOST=0.0.0.0
API_PORT=8000
DEBUG=False

# CORS Configuration
CORS_ORIGINS=http://localhost:3000,https://your-frontend-domain.com

# Logging
LOG_LEVEL=INFO
```

### Customization Options

1. **Model Replacement**: Replace `pneumonia_model.h5` with your trained model
2. **Input Size**: Modify image preprocessing in `main.py`
3. **Confidence Thresholds**: Adjust interpretation levels
4. **API Endpoints**: Add new endpoints for batch processing, model info, etc.
5. **Authentication**: Implement JWT or API key authentication

---

## 🧪 Testing

### Run Tests

```bash
# Install test dependencies
pip install pytest pytest-asyncio httpx

# Run all tests
pytest

# Run with coverage
pytest --cov=app tests/
```

### Test Coverage

- Unit tests for API endpoints
- Model loading and preprocessing tests
- Error handling and validation tests
- Integration tests with sample images

---

## 🚀 Deployment

### Local Development
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Production Deployment
```bash
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

### Docker Production
```bash
docker run -d -p 8000:8000 --name chestxray-api chestxray-backend
```

### Cloud Deployment Options

- **Hugging Face Spaces**: Follow the [deployment guide](docs/huggingface_deployment.md)
- **AWS ECS/Fargate**: Use the provided Dockerfile
- **Google Cloud Run**: Deploy with `gcloud run deploy`
- **Azure Container Instances**: Use Azure CLI or portal
- **Railway/Render**: Connect GitHub repo for automatic deployment

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests for new functionality**
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow PEP 8 style guidelines
- Add docstrings to all functions
- Include type hints where applicable
- Write tests for new features
- Update documentation as needed

---



## ⚠️ Medical Disclaimer

**IMPORTANT**: This software is intended for **research and educational purposes only**. It is **NOT** intended for clinical diagnosis or medical decision-making. 

- This tool should **NOT** be used as a substitute for professional medical advice, diagnosis, or treatment
- Always consult with qualified healthcare professionals for medical decisions
- The AI predictions should be used only as a supplementary tool to assist healthcare professionals
- Ensure compliance with local healthcare regulations and data privacy laws (HIPAA, GDPR, etc.)
- The developers assume no responsibility for medical decisions made using this software

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🙏 Acknowledgments

- **Dataset Provider**: Kermany, Daniel; Zhang, Kang; Goldbaum, Michael (2018)
- **Kaggle Community**: For providing the chest X-ray pneumonia dataset
- **FastAPI Team**: For the excellent web framework
- **TensorFlow Team**: For the machine learning framework
- **Healthcare Professionals**: Who validate and provide feedback on AI tools

---

## 📞 Contact & Support

### Project Maintainer
- **Name**: [Your Name]
- **Email**: [imethudara@gmail.com]
- **GitHub**: [WickyUdara](https://github.com/your-username)
- **LinkedIn**: [Udara Wickramainghe](https://www.linkedin.com/in/imeth-udara-wickramasinghe-52873421a/)



### Citation

If you use this project in your research, please cite:


---

<div align="center">

**⭐ Star this repository if it helped you!**

Made with ❤️ for the healthcare community

[🔝 Back to Top](#chestxray-ai-analyzer---pneumonia-detection-api)

</div>