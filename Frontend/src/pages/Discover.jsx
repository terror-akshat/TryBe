import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaRegCommentDots,
  FaShareAlt,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import axios from "axios";

export default function Discover() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/fetch-video"
        );
        setPosts(response.data.videos);
        console.log(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

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
        {posts.map((post) => (
          <div
            key={post._id}
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
              <h3 className="font-semibold text-gray-800">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{post.review}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm"
                  >
                    {tag.replace(/"/g, "")}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-4">
                <Link to={`/product/${post.productId}`}>
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
