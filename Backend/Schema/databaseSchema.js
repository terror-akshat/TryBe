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
  reviews: [String],
  images: [String],
  embedding: [Number],
});

module.exports = mongoose.model("Product", ProductSchema);
