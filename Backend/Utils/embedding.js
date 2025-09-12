const axios = require("axios");
require("dotenv").config();

async function generateEmbedding(text) {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2",
      { inputs: text },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.AI_MODIL_TOKEN}`,
        },
      }
    );

    return response.data; // ye ek array of embeddings return karega
  } catch (error) {
    console.error("Error generating embedding:", error.response?.data || error.message);
    throw error;
  }
}

module.exports = { generateEmbedding };