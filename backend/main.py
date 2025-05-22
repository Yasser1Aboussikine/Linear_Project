from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from transformers import pipeline
from PIL import Image
import io
import uvicorn
from typing import Optional
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI()

# Security settings
API_KEY = os.getenv("API_KEY", "your-secret-key-here")
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:3000")

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the image classification pipeline
classifier = pipeline("image-classification", model="tonyassi/celebrity-classifier")

async def verify_api_key(x_api_key: Optional[str] = Header(None)):
    if not x_api_key or x_api_key != API_KEY:
        raise HTTPException(status_code=401, detail="Invalid API key")
    return x_api_key

def predict_celebrity(image_bytes: bytes):
    # Convert bytes to PIL Image
    image = Image.open(io.BytesIO(image_bytes)).convert("RGB")
    
    # Run prediction
    result = classifier(image)
    
    # Get top match
    top = result[0]
    
    return {
        "name": top["label"],
        "score": round(top["score"], 4)
    }

@app.post("/predict")
async def predict(
    file: UploadFile = File(...),
    api_key: str = Depends(verify_api_key)
):
    image_bytes = await file.read()
    result = predict_celebrity(image_bytes)
    return result

@app.get("/")
async def root():
    return {"message": "Celebrity Classifier API is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
