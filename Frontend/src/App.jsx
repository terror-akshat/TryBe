import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Home from './pages/Home'
import Discover from './pages/Discover'
import PostUpload from './pages/PostUpload'
import Wallet from './pages/Wallet'
import Profile from './pages/Profile'
import Chatbot from './components/Chatbot'

export default function App() {
  return (
    <div className="min-h-screen">
      <TopNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/post" element={<PostUpload />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Chatbot />
      <BottomNav />
    </div>
  )
}
