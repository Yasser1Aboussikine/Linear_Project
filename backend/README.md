# Celebrity Classifier Backend

This is the backend service for the Celebrity Classifier application. It provides image classification and celebrity image retrieval functionality.

## Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file with the following content:
```
API_KEY=your-secret-key-here
FRONTEND_URL=http://localhost:3000
```

4. Add a default celebrity image:
- Create a file named `default_celebrity.jpg` in the backend directory
- This will be used as a fallback when celebrity image retrieval fails

## Running Locally

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Endpoints

1. `POST /predict`
   - Upload an image for celebrity classification
   - Requires API key in `X-API-Key` header
   - Optional query parameter: `add_overlay` (boolean)

2. `GET /celebrity-image/{name}`
   - Get a celebrity image by name
   - Requires API key in `X-API-Key` header

3. `GET /`
   - Health check endpoint

## Deployment

### Backend Deployment Options:

1. **Fly.io**
   - Install Fly CLI
   - Run `fly launch`
   - Set environment variables in Fly dashboard

2. **Heroku**
   - Create a new Heroku app
   - Add buildpacks for Python
   - Set environment variables in Heroku dashboard
   - Deploy using Git

### Environment Variables for Production:

- `API_KEY`: Your secret API key
- `FRONTEND_URL`: Your frontend application URL 