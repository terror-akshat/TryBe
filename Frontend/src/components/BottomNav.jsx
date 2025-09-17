import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlineCompass } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineWallet, AiOutlineUser } from "react-icons/ai"; // ✅ Outline version for unity

export default function BottomNav() {
  const navItems = [
    { to: "/home", icon: <AiOutlineHome size={24} />, label: "Home" },
    { to: "/discover", icon: <AiOutlineCompass size={24} />, label: "Discover" },
    { to: "/post", icon: <FiPlusCircle size={32} />, label: "Post", isCenter: true },
    { to: "/wallet", icon: <AiOutlineWallet size={24} />, label: "Wallet" },
    { to: "/profile", icon: <AiOutlineUser size={24} />, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
      bg-white/90 backdrop-blur-md px-10 py-3 rounded-full shadow-lg 
      flex justify-between items-center w-[90%] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl z-50">
      
      {navItems.map((item, i) => (
        <NavLink
          key={i}
          to={item.to}
          aria-label={item.label}
          className={({ isActive }) =>
            `relative flex flex-col items-center justify-center 
            transition-all duration-200 text-sm
            ${
              item.isCenter
                ? "bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 -mt-10 shadow-xl text-white"
                : isActive
                ? "text-pink-500"
                : "text-gray-500 hover:text-pink-400"
            }`
          }
        >
          {item.icon}
          {!item.isCenter && (
            <span className="text-[11px] mt-1 hidden sm:block">{item.label}</span>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
