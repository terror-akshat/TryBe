from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.post("/embed")
def get_embedding(request: TextRequest):
    embedding = model.encode([request.text])[0].tolist()
    return {"embedding": embedding}

# uvicorn app:app --host 0.0.0.0 --port 8000