import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart, FiBarChart2 } from "react-icons/fi";
import Logo from "../assets/logo.svg";
import WalletIcon from "../assets/wallet.jpg";
import AvatarImg from "../assets/placeholder.jpg";
import { useCart } from "../context/CartContext";
import axios from "axios";

export default function TopNav({ setVibeDataFetch, id }) {
  const nav = useNavigate();
  const { cartItems } = useCart();
  const [text, setText] = useState("");
  const [vibe, setVibe] = useState([]);

  const handleOnClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/vibe-search",
        { params: { text } }
      );
      if (response.data.status === true) {
        setVibeDataFetch(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-24 cursor-pointer" />
        </Link>
        <div className="relative hidden md:block">
          <input
            placeholder="Search by vibe, product, or image..."
            className="rounded-full border px-4 py-2 w-72 outline-none focus:border-trybePink transition"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={handleOnClick}
            type="button"
            className="absolute right-3 top-2.5 text-gray-400 hover:text-trybePink"
            aria-label="Search"
          >
            <FiSearch />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => nav("/")}
          type="button"
          className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100 transition"
        >
          Logout
        </button>

        <Link to="/wallet" className="hover:scale-110 transition-transform">
          <img
            src={WalletIcon}
            alt="Wallet"
            className="w-8 h-8 object-contain"
          />
        </Link>

        <Link
          to="/cart"
          className="relative hover:scale-110 transition-transform"
        >
          <FiShoppingCart size={24} className="text-gray-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
        {/* Poll */}
        <Link
          to={"/poll"}
          className="relative hover:scale-110 transition-transform"
        >
          <FiBarChart2 size={24} className="text-purple-600" />
        </Link>
        <button onClick={() => nav(`/profile/${id}`)}>
          <img
            src={AvatarImg}
            alt="avatar"
            className="w-10 h-10 rounded-full border cursor-pointer hover:scale-105 transition-transform"
          />
        </button>
      </div>
    </header>
  );
}
