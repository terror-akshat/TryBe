const Products = require("../Schema/databaseSchema.js");
const cosinineSimilarity = require("../Utils/cosineSimilarity.js");
const axios = require("axios");
const fetchProductImage = async (req, res) => {
  try {
    const fetchImage = await Products.find({});
    res.status(200).json({ status: true, fetchImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const vibeSerach = async (req, res) => {
  const  {text}  = req.query;
  console.log(text);

  if (!text) return res.status(400).json({ message: "Text is required" });

  try {
    const response = await axios.post("http://0.0.0.0:8000/embed", { text });
    const embedding = response.data.embedding;

    const products = await Products.find();
    const scored = products.map((p) => {
      const score = cosinineSimilarity(embedding, p.embedding);
      return { score, product: p };
    });
    scored.sort((a, b) => b.score - a.score);
    const top5 = scored.slice(0, 10).map((item) => item.product);
    console.log(top5.length);

    return res.status(200).json({ status: true, products: top5 });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

module.exports = { fetchProductImage, vibeSerach };