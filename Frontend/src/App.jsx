import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import PostUpload from "./pages/PostUpload";
import Wallet from "./pages/Wallet";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";
import Chatbot from "./components/Chatbot";
import { CartProvider } from "./context/CartContext";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  const [vibeDataFetch, setVibeDataFetch] = useState([]);
  return (
    <CartProvider>
      {" "}
      <div className="min-h-screen flex flex-col">
        <TopNav setVibeDataFetch={setVibeDataFetch} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home vibeDataFetch={vibeDataFetch} />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/post" element={<PostUpload />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<CartPage />} />
             <Route path="/product/:id" element={<ProductDetail />}/>
          </Routes>
        </main>

        <Chatbot />
        <BottomNav />
      </div>
    </CartProvider>
  );
}
