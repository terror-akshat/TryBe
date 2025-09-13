const Products = require("../Schema/databaseSchema.js");

const fetchProductImage = async (req, res) => {
  try {
    const fetchImage = await Products.find({});
    res.status(200).json({ status: true, fetchImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getImage = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://drive.google.com/uc?export=view&id=${id}`,
      {
        responseType: "arraybuffer",
      }
    );
    res.set("Content-Type", response.headers["content-type"]);
    res.send(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchProductImage, getImage };