import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { FaStar } from "react-icons/fa";
import axios from "axios";
export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetch = async (req, res) => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/fetch-single-product/${id}`
        );
        console.log(response.data.product);

        if (response.data.status == true) {
          setItem(response.data.product);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto">
      {/* LEFT: Product Image */}
      <div className="flex-1 flex flex-col items-center">
        <img
          src={item?.images?.[0]}
          alt={item.title}
          className="w-full max-w-md rounded-lg shadow-md"
        />
      </div>

      {/* RIGHT: Product Info */}
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-semibold">{item.title}</h1>

        {/* Rating */}
        <div className="flex items-center gap-2 text-yellow-500">
          <span className="text-gray-600 text-sm">{item.rating} ★ rating</span>
        </div>

        {/* Price Section */}
        <div className="text-2xl font-bold text-green-700">
          ₹{item.price}
          <span className="line-through text-gray-500 text-lg ml-2">
            ₹{item.old_price}
          </span>
          <span className="ml-3 text-red-500 text-lg">{item.discount}</span>
        </div>

        {/* Description */}
        <p className="text-gray-700">{item.description}</p>

        {/* Sizes */}
        <div>
          <h3 className="font-medium mb-2">Available Sizes:</h3>
          <div className="flex gap-2">
            {item?.size?.length > 0 ? (
              item.size.map((s, index) => (
                <span
                  key={index}
                  className="px-3 py-1 border rounded cursor-pointer hover:bg-gray-100"
                >
                  {s}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No sizes available</span>
            )}
          </div>
        </div>

        {/* Shipping Info */}
        <p className="text-sm text-gray-600">🚚 {item.shippingInformation}</p>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => addToCart(item)}
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
