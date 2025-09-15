const {Products} = require("../Schema/databaseSchema.js");
const { default: axios } = require("axios");

const updateEmbedding = async function () {
  const products = await Products.find({});
  for (let p of products) {
    const text = `${p.title}${p.description}${p.category}${p.tags.join(" ")}`;
    try {
      const response = await axios.post("http://0.0.0.0:8000/embed", { text });
      // console.log(response.data.embedding);
      p.embedding = response.data.embedding;
      await p.save();
    } catch (error) {
      console.log(error);
    }
  }
  console.log("embedding is successfully create");

  process.exit();
};

module.exports = updateEmbedding;