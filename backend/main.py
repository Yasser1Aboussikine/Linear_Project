from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
from PIL import Image
import io
import uvicorn
from typing import Optional
import os
from dotenv import load_dotenv
import logging

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

app = FastAPI()

# Security settings
API_KEY = os.getenv("API_KEY", "your-secret-key-here")
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "*"],  # Added * for Railway deployment
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Global variable for lazy loading
classifier = None

def get_classifier():
    global classifier
    if classifier is None:
        logger.info("Loading celebrity classifier model...")
        try:
            classifier = pipeline("image-classification", model="tonyassi/celebrity-classifier")
            logger.info("Model loaded successfully")
        except Exception as e:
            logger.error(f"Failed to load model: {e}")
            raise HTTPException(status_code=500, detail="Failed to load model")
    return classifier

async def verify_api_key(x_api_key: Optional[str] = Header(None)):
    if not x_api_key or x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return x_api_key

def predict_celebrity(image_bytes: bytes):
    # Convert bytes to PIL Image
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    
    # Get classifier instance
    clf = get_classifier()
    
    # Run prediction
    result = clf(image)
    
    # Get top match
    top = result[0]
    
    return {
        "name": top["label"],
        "score": round(top["score"], 4)
    }

@app.get("/")
async def root():
    return {"message": "Celebrity Classifier API is running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    api_key: str = Depends(verify_api_key)
):
    try:
        logger.info(f"Processing file: {file.filename}")
        image_bytes = await file.read()
        result = predict_celebrity(image_bytes)
        logger.info(f"Prediction successful: {result}")
        return result
    except Exception as e:
        logger.error(f"Prediction failed: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    logger.info(f"Starting server on port {port}")
    uvicorn.run(app, host="0.0.0.0", port=port)