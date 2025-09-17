import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFilter, FaSearch } from "react-icons/fa";
import axios from "axios";

export default function Discover() {
  const tags = [
    "Trending",
    "Casual",
    "Ethnic",
    "Party",
    "Workwear",
    "Men",
    "Women",
  ];

  const [text, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // 👈 multiple select
  const [posts, setPosts] = useState([]);
  const [vibeVideo, setVibeVideo] = useState([]);
  const [showTags, setShowTags] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/fetch-video"
        );
        setPosts(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const handleOnClick = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/vibe-search-video",
        { params: { text } }
      );
      if (response.data.status === true) {
        setVibeVideo(response.data.videos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTagSelect = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleApplyTags = async () => {
    try {
      if (selectedTags.length === 0) {
        setVibeVideo([]); // reset
        return;
      }

      const response = await axios.get("http://localhost:5000/api/tag-search", {
        params: { tags: selectedTags.join(",") },
      });

      if (response.data.status) {
        setVibeVideo(response.data.videos);
      } else {
        setVibeVideo([]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* 🔍 Search & Filter Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 shadow-md z-50">
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full max-w-md">
          <button onClick={handleOnClick}>
            <FaSearch className="text-gray-500 mr-2" />
          </button>
          <input
            type="text"
            placeholder="Search outfits, brands, styles..."
            value={text}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <button
          onClick={() => setShowTags(!showTags)}
          className="ml-3 px-3 py-2 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm"
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* 🏷️ Tag Filter Section */}
      {showTags && (
        <div className="flex flex-col gap-2 px-4 py-3 bg-white shadow-md sticky top-14 z-40">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <button
                key={i}
                onClick={() => handleTagSelect(tag)}
                className={`px-3 py-1 rounded-full text-sm transition ${
                  selectedTags.includes(tag)
                    ? "bg-purple-600 text-white"
                    : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* ✅ Apply Button */}
          <button
            onClick={handleApplyTags}
            className="mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm"
          >
            Apply Filters
          </button>
        </div>
      )}

      {/* 🎥 Video Feed */}
      <div className="flex flex-col items-center">
        {(vibeVideo.length > 0 ? vibeVideo : posts).map((post) => (
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

              {/* Post Tags */}
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
