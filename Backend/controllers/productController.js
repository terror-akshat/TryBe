const Products = require("../Schema/databaseSchema.js");

const fetchProductImage = async (req, res) => {
  try {
    const fetchImage = await Products.find({});
    res.status(200).json({ status: true, fetchImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchProductImage }