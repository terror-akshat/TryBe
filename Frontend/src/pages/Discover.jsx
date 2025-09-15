import React, { useState } from "react";
import{Link} from "react-router-dom";
import { FaHeart, FaRegCommentDots, FaShareAlt, FaFilter, FaSearch } from "react-icons/fa";

const posts = [
  {
    id: 1,
    username: "@fashionista_maya",
    role: "Fashion Creator",
    video: "https://videos.pexels.com/video-files/2697545/2697545-hd_1280_720_25fps.mp4",
    caption: "Perfect women vibe with this flowy dress! 💕",
    likes: 234,
    comments: 18,
    shares: 7,
  },
  {
    id: 2,
    username: "@style_guru_raj",
    role: "Fashion Creator",
    video: "https://videos.pexels.com/video-files/3043162/3043162-hd_1280_720_25fps.mp4",
    caption: "Casual Friday outfit → weekend brunch ready 😍",
    likes: 189,
    comments: 25,
    shares: 12,
  },
  {
    id: 3,
    username: "@boho_belle",
    role: "Fashion Creator",
    video: "https://videos.pexels.com/video-files/856191/856191-hd_1280_720_25fps.mp4",
    caption: "Boho vibes but make it modern 🌸",
    likes: 445,
    comments: 34,
    shares: 18,
  },
];

export default function Discover() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* 🔍 Search + Filter Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 shadow-md z-50">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full max-w-md">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search outfits, brands, styles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>
        <button className="ml-3 px-3 py-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm">
          <FaFilter /> Filters
        </button>
      </div>

      {/* 🎥 Video Feed */}
      <div className="flex flex-col items-center">
        {posts
          .filter((post) =>
            post.caption.toLowerCase().includes(search.toLowerCase())
          )
          .map((post) => (
            <div
              key={post.id}
              className="w-full max-w-md bg-white shadow-md rounded-2xl overflow-hidden mb-8"
            >
              {/* Video */}
              <video
                src={post.video}
                className="w-full h-96 object-cover"
                muted
                loop
                autoPlay
                playsInline
                controls={false}
              />

              {/* Info Section */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{post.username}</h3>
                <p className="text-xs text-gray-500">{post.role}</p>
                <p className="mt-2 text-sm text-gray-700">{post.caption}</p>

                {/* Actions */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4 text-gray-600 text-sm">
                    <span className="flex items-center gap-1">
                      <FaHeart className="text-red-500" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaRegCommentDots /> {post.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaShareAlt /> {post.shares}
                    </span>
                  </div>
                  <Link to={`/product/${post.id}`}>

                  <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs shadow hover:opacity-90">
                    Shop This Look
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}