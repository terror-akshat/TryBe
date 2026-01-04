# 🚀 Trybe

> TRYBE = TRY + VIBE  
> A smarter shopping experience — seamless, engaging

---

# 🖼 Logo
<p align="center"><img width="600" height="502" alt="image" src="https://github.com/user-attachments/assets/ebd0a2d6-b61e-498e-a64d-7fc545aaf297" /></p>

## MVP Video URL-  
https://youtu.be/zXrMzAiIkQI?si=FGw7vJshXzFaMB2v


## 🎯 Problem Statement

Theme 2: The GenZ Way of Shopping  

Current issues with traditional shopping platforms:  
- 🔒 Ultimate GlamClan features are buried, making them hard to discover.  
- 🎁 Rewards are hidden, reducing accessibility and user engagement.  
- 🧠 Fashion GPT (vibe-based search) is not integrated with normal search.  
- 🔎 Lack of vibe-based search functionality in discovery sections like GlamStream.  

---

## 💡 Opportunity

Why Trybe is a Game-Changer  
- Easier access = higher engagement + better experiences.  
- Boosts visibility, trust, and social connections.  
- Perfectly aligns with GenZ’s preference for authenticity, social sharing, and discovery.  
- Positions Trybe (and partners like Myntra) as a trendsetter in fashion-tech innovation.  

📊 Proven Success Inspiration:  
- YouTube Shorts → Watch time ↑ 135% by moving to homepage.  
- Instagram Reels → 3× engagement after homepage placement.  

---

## ✅ Proposed Solution

TRYBE = TRY + VIBE

### 🔹 Features Enhanced & Added
- 🏆 Always-visible rewards on the homepage → Boosts engagement.  
- 🔍 Integrated mood/vibe-based search → Simplifies discovery.  
- 🎥 Video reviews with links & interactions → Social + influencer-driven content.  
- ⬆ Easy video uploads with captions → Fresh, user-driven engagement.  
- 🏷 Added vibe & category filters in GlamStream → Smarter, contextual recommendations.  

---

## 🛠 Tech Stack

Frontend  
- React 18  
- TailwindCSS  
- Vite  
- React Router, Swiper, React Player  

Backend  
- Node.js + Express  
- MongoDB + Mongoose  
- Cloudinary (video uploads)  
- Axios, Bcrypt  
- Express File Upload  

PyBackend (AI Service)  
- FastAPI  
- Uvicorn  
- Sentence Transformers (all-MiniLM-L6-v2)  

---

## 📂 Project Structure
```
Trybe/
├── Backend/
│ ├── cloudinary/ # Cloudinary config & utilities
│ ├── controllers/ # API controllers
│ ├── Database/ # Database connection setup (MongoDB)
│ ├── DatasetCreation/ # Seed data & embeddings
│ ├── routes/ # API routes
│ │ └── route.js
│ ├── Schema/ # Mongoose schemas
│ │ ├── databaseSchema.js
│ │ └── userSchema.js
│ ├── Utils/ # Utility functions
│ ├── .env # Environment variables
│ ├── package.json # Backend dependencies
│ └── server.js # Backend entry point
│
├── Frontend/
│ ├── src/ # React source code
│ │ ├── assets/ # Images, icons, static assets
│ │ ├── components/ # Reusable React components
│ │ ├── context/ # Context API for state management
│ │ ├── data/ # Static data / config
│ │ ├── pages/ # Page-level components
│ │ ├── utils/ # Frontend utility functions
│ │ ├── App.jsx # Main App component
│ │ ├── index.css # Global styles
│ │ └── main.jsx # React DOM entry point
│ ├── .env
│ ├── .gitignore
│ ├── index.html
│ ├── package.json # Frontend dependencies
│ ├── postcss.config.cjs # PostCSS config
│ └── tailwind.config.cjs # TailwindCSS config
│
├── pybackend/ # FastAPI service for AI embeddings
│ ├── pycache/ # Python cache
│ ├── app.py # FastAPI entry point
│ ├── requirements.txt # Python dependencies
│ └── .gitignore
│
├── .gitignore
└── README.md
```


---

## ⚡ Getting Started

### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/trybe.git
```
cd trybe


### 2️⃣ Setup Backend (Node.js API)
```bash
cd Backend
npm install
```


### 3️⃣ Create a .env file in Backend/ with:
```.env
MONGO_URI = <your_mongodb_connection>
CLOUDINARY_CLOUD_NAME = <your_cloud_name>
CLOUDINARY_API_KEY = <your_api_key>
CLOUDINARY_API_SECRET = <your_api_secret>
```

### 4️⃣ Run server:
```bash
npm start
Server runs at http://localhost:5000
```

### 3️⃣ Setup Frontend (React + Vite)
```bash
cd Frontend
npm install
npm run dev
Frontend runs at http://localhost:5173
```

### 4️⃣ Setup PyBackend (FastAPI Service)
- ### Create a requirements.txt file in pybackend/ with:
```bash
fastapi 
 uvicorn 
 sentence-transformers
```

- ### 5️⃣ Creating Virtual environment in pybackend
  ```bash
  python -m venv venv
  venv\Scripts\activate
  ```
  
- ### 6️⃣ Run command for pybackend-
```bash
pip install -r requirements.txt
uvicorn app:app --host 0.0.0.0 --port 8000
Embedding API available at http://0.0.0.0:8000/embed
```




## 7️⃣ 📡 API Endpoints
| Method | Endpoint                        | Description                         |
| ------ | --------------------------------| ---------------------------------   |
| POST   | /api/register                   | Register new user                   |
| POST   | /api/login                      | Login user                          |
| GET    | /api/fetch-Image                | Get all product images              |
| GET    | /api/vibe-search?text=...       | Search products by text embedding   |
| GET    | /api/vibe-search-video?text=... | Search videos by vibe               |
| GET    | /api/fetch-title                | Get all product titles              |
| POST   | /api/upload-video/:id           | Upload video review for a product   |
| GET    | /api/tag-search?tags=tag1,tag2  | Get videos by tags                  |
| GET    | /api/video/:id                  | Get user + posts                    |
| GET    | /api/fetch-single-product/:id   | Get single product                  |

## 8️⃣ ⚡ **Note on Model**  
```
 The AI service in **pybackend/** uses `sentence-transformers (all-MiniLM-L6-v2)` for text embeddings.  
 - Optimized for **semantic similarity search**  
 - Lightweight and fast → perfect for vibe-based product search  
 - Can be swapped with larger models (e.g., `mpnet`, `bert-base`) if higher accuracy is needed
```

# 9️⃣ 🖼 Architecture & Screenshots

- ### 🏗 Architecture
  ![WhatsApp Image 2025-09-22 at 18 34 12_84a6fd2c](https://github.com/user-attachments/assets/0329a695-23de-4d8b-bd15-63e192cd06eb)



- ### UI Previews
- Login
     
  ![WhatsApp Image 2025-09-22 at 18 17 32_71ef8c82](https://github.com/user-attachments/assets/f842ceae-6dc5-41e0-a699-595ae5e91e9f)

- Home Page
  ![WhatsApp Image 2025-09-22 at 18 18 15_de9c9738](https://github.com/user-attachments/assets/204aa597-551e-4dc9-99ba-00a6aeec2f6e)
  

- Profile Page
  ![WhatsApp Image 2025-09-22 at 18 20 05_4dcc36a3](https://github.com/user-attachments/assets/de3714a7-4370-480e-a871-c06084e17932)
  

- Discover
  ![WhatsApp Image 2025-09-22 at 18 21 22_770ce095](https://github.com/user-attachments/assets/b9514764-63c1-45f9-b2ea-f8858937fad9)

- Upload a Reel
  
  ![WhatsApp Image 2025-09-22 at 18 21 41_b2fdd13d](https://github.com/user-attachments/assets/4d4c66a3-1fad-4a36-be8d-256a6f17e4d9)




## 🔟 🚀 Future Enhancements
- 📱 In-App Product Sharing with friends
- 🎉 Festive Contests & Trend Challenges
- 🗳 User Polls & Feedback → Personalized recommendations
- ⭐ Product rating system
