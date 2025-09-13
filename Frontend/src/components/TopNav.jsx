import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import WalletIcon from '../assets/wallet.jpg'   // 👈 apna wallet icon add karke import karo
import AvatarImg from '../assets/placeholder.jpg' // 👈 avatar image ka path

import { FiSearch } from 'react-icons/fi'

export default function TopNav(){
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-white">
      {/* Left: Logo + Search */}
      <div className="flex items-center gap-3">
        <img src={Logo} alt="Logo" style={{ width: 90 }} />
        <div className="relative">
          <input 
            placeholder="Search by vibe, product, or image..." 
            className="search-outline rounded-full border px-4 py-2 w-80 outline-none" 
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right: Wallet + Avatar */}
      <div className="flex items-center gap-4">
        <Link to="/wallet">
          <img 
            src={WalletIcon} 
            alt="Wallet" 
            className="w-8 h-8 object-contain hover:scale-110 transition-transform" 
          />
        </Link>
        <img 
          src={AvatarImg} 
          alt="avatar" 
          className="w-10 h-10 rounded-full border hover:scale-105 transition-transform" 
        />
      </div>
    </header>
  )
}
