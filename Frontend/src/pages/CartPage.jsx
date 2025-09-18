import React from "react";
import { useCart } from "../context/CartContext";
import { usePoll } from "../context/PollContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CartPage({ id }) {
  const { cartItems, removeFromCart } = useCart();
  const { addToPoll } = usePoll(); //used addtoPoll

  // Calculate totals
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const discount = subtotal > 0 ? 50 : 0; // example flat discount
  const shipping = subtotal > 75 ? 0 : 5; // free shipping if > $75
  const total = subtotal - discount + shipping;

  const handleOnAddProduct = (id) => {
    const product = cartItems.find((p) => p._id === id);
    addToPoll(product);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-6">🛍️ Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty 🛒</p>
          <Link
            to={`/home/${id}`}
            className="mt-4 inline-block px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:opacity-90"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl p-4 border"
              >
                {/* Product Image */}
                <img
                  src={item.images[0] || "https://via.placeholder.com/150"}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                {/* Product Info */}
                <div className="flex-1 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-green-600">
                    Free shipping on orders over $75
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center justify-center md:justify-start mt-3 space-x-2">
                    <button className="px-3 py-1 bg-gray-200 rounded">-</button>
                    <span>{item.quantity || 1}</span>
                    <button className="px-3 py-1 bg-gray-200 rounded">+</button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col items-center space-y-2 mt-4 md:mt-0">
                  <button className="px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:opacity-90">
                    Buy Now - ${item.price.toFixed(2)}
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-6 py-2 border border-red-400 text-red-500 rounded-lg hover:bg-red-50"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleOnAddProduct(item._id)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:opacity-90"
                  >
                    Add to Poll
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Order Summary */}
          <div className="bg-white shadow-lg rounded-2xl p-6 h-fit">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Items ({cartItems.length})</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Discount</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <p className="mt-3 text-sm text-pink-500">
              🎉 You’re saving ${discount.toFixed(2)} on this order!
            </p>

            <button className="w-full mt-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Proceed to Checkout
            </button>
            <button className="w-full mt-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              <Link to={`/home/${id}`}>Continue Shopping</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
