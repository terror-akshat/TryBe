const { Products, VideoPost } = require("../Schema/databaseSchema.js");
const cosinineSimilarity = require("../Utils/cosineSimilarity.js");
const axios = require("axios");
const { cloudinary } = require("../cloudinary/cloudinary.js");

const fetchProductImage = async (req, res) => {
  try {
    const fetchImage = await Products.find({});
    res.status(200).json({ status: true, fetchImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const vibeSerach = async (req, res) => {
  const { text } = req.query;

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

const productVideoUpload = async (req, res) => {
  try {
    const { title, review, tags } = req.body;

    if (!title || !review || !tags || !req.files?.video) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const pro = await Products.find({});
    for (let p of pro) {
      if (p.title === title) {
        var product = p;
        break;
      }
    }
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const videoFile = req.files.video;

    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: "video", folder: "products", upload_preset: "Demo" },
      async (error, result) => {
        if (error) return res.status(500).json({ error });

        const newVideo = new VideoPost({
          productId: product._id,
          title,
          review,
          tags: Array.isArray(tags) ? tags : tags.split(","),
          video: result.secure_url,
        });

        product.reviews = newVideo._id;
        await product.save();
        await newVideo.save();

        return res.status(201).json({
          message: "Video uploaded successfully",
          data: newVideo,
        });
      }
    );

    uploadStream.end(videoFile.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const fetchSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json({ status: true, product });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const fetchAllVideo = async (req, res) => {
  try {
    const videos = await VideoPost.find({});
    res.status(200).json({ status: true, videos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchTitle = async (req, res) => {
  try {
    const response = await Products.find({}, { title: 1, _id: 1 });
    return res.status(200).json({
      status: true,
      titles: response,
    });
  } catch (error) {
    console.error("Error fetching titles:", error);
    return res.status(500).json({
      status: false,
      message: "Error fetching titles",
      error: error.message,
    });
  }
};

const vibeSearchVideo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "text is required" });

    const response = await axios.post("http://0.0.0.0:8000/embed", { text });
    const embedding = response.data.embedding;

    const videos = await VideoPost.find();
    const products = await Products.find();

    const match = videos.map((video) => {
      const product = products.find(
        (p) => String(p._id) === String(video.productId)
      );
      return {
        videoId: video._id,
        product: product || null,
      };
    });

    const scored = match
      .filter((p) => p.product && p.product.embedding)
      .map((p) => {
        const score = cosinineSimilarity(embedding, p.product.embedding);
        return { score, videoId: p.videoId };
      });

    scored.sort((a, b) => b.score - a.score);

    const top5 = scored
      .slice(0, 10)
      .map((item) =>
        videos.find((v) => String(v._id) === String(item.videoId))
      );

    return res.status(200).json({ top5 });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const tagSearch = async (req, res) => {
  try {
    const { tag } = req.query;
    if (!tag) return res.status(400).json({ message: "Tag is required" });

    const videos = await VideoPost.find({}, { productId: 1 });
    const products = await Products.find({});
    return res.status(200).json({ status: true, videos });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = {
  fetchProductImage,
  vibeSerach,
  productVideoUpload,
  fetchSingleProduct,
  fetchAllVideo,
  fetchTitle,
  vibeSearchVideo,
  tagSearch,
};
