import React from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import Logo from '../assets/logo.svg'
import WalletIcon from '../assets/wallet.jpg'
import AvatarImg from '../assets/placeholder.jpg'
import { useCart } from '../context/CartContext' // 👈 Cart context import

export default function TopNav() {
  const { cartItems } = useCart() // cart items count

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white shadow-sm">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-24 cursor-pointer" />
        </Link>
        <div className="relative hidden md:block">
          <input
            placeholder="Search by vibe, product, or image..."
            className="rounded-full border px-4 py-2 w-72 outline-none focus:border-trybePink transition"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right: Wallet + Cart + Avatar */}
      <div className="flex items-center gap-6">
        {/* Wallet */}
        <Link to="/wallet" className="hover:scale-110 transition-transform">
          <img
            src={WalletIcon}
            alt="Wallet"
            className="w-8 h-8 object-contain"
          />
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative hover:scale-110 transition-transform">
          <FiShoppingCart size={24} className="text-gray-700" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Avatar */}
        <img
          src={AvatarImg}
          alt="avatar"
          className="w-10 h-10 rounded-full border cursor-pointer hover:scale-105 transition-transform"
        />
      </div>
    </header>
  )
}
