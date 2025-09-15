import React from "react";
import { useParams } from "react-router-dom";
import {products} from "../data/products";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return <h2 className="p-4 text-red-500">❌ Product not found (ID: {id})</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
      {/* LEFT: Product Image */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* RIGHT: Product Info */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-semibold">{product.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-500">
          {[...Array(Math.round(product.rating))].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm">
            {product.rating} ★ rating
          </span>
        </div>

        {/* Price Section */}
        <div className="text-2xl font-bold text-green-700">
          ₹{product.price}
          <span className="line-through text-gray-500 text-lg ml-2">
            ₹{product.old_price}
          </span>
          <span className="ml-3 text-red-500 text-lg">{product.discount}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Sizes */}
        <div>
          <h3 className="font-medium mb-2">Available Sizes:</h3>
          <div className="flex gap-2">
            {product.size.map((s) => (
              <span
                key={s}
                className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Shipping Info */}
        <p className="text-sm text-gray-600">🚚 {product.shippingInformation}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold"
          >
            Add to Cart
          </button>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
