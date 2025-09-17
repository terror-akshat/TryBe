const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  price: { type: Number, required: true },
  old_price: { type: Number },
  discount: { type: String },
  rating: { type: Number, default: 0 },
  tags: [String],
  weight: Number,
  dimensions: {
    width: Number,
    height: Number,
    depth: Number,
  },
  size: [String],
  shippingInformation: String,
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "videoPost",
    },
  ],
  images: [String],
  embedding: [Number],
});

const videoPost = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductSchema",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  review: {
    type: String,
  },
  tags: [String],
  video: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("Product", ProductSchema);
const VideoPost = mongoose.model("VideoPost", videoPost);

module.exports = { Products, VideoPost };
