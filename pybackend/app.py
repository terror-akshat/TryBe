from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

# Load model once at startup
model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

# FastAPI app
app = FastAPI()

# Request body schema
class TextRequest(BaseModel):
    text: str

@app.post("/embed")
def get_embedding(request: TextRequest):
    embedding = model.encode([request.text])[0].tolist()
    return {"embedding": embedding}