const { generateEmbedding } = require("../Utils/embedding.js");
const Product = require("../Schema/databaseSchema.js");

const updateEmbedding = async function () {
  // const products = await Product.find({});
  // for (let p of products) {
  //   const text = `${p.title} ${p.description} ${p.category} ${p.tags.join(
  //     " "
  //   )}`;
  //   const embedding = await generateEmbedding(text);
  //   p.embedding = embedding;
  //   await p.save();
  // }
  // console.log("Embedding update for all products");
  const response = await generateEmbedding("heelo word");
  console.log(response[0].length);

  process.exit();
};

module.exports = updateEmbedding;
