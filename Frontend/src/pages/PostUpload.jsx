import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PostUpload() {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [tags, setTags] = useState("");
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [similarProducts, setSimilarProducts] = useState([]);
  const [filteredTitles, setFilteredTitles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !review || !tags || !video) {
      setMsg("⚠️ All fields are required!");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("title", title);
      formData.append("review", review);
      formData.append("tags", tags);
      formData.append("video", video);

      const res = await axios.post(
        "http://localhost:5000/api/upload-video",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMsg("✅ " + res.data.message);
      setTitle("");
      setReview("");
      setTags("");
      setVideo(null);
    } catch (error) {
      console.error(error);
      setMsg("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (title.length > 0) {
      const fetch = async () => {
        try {
          const response = await axios.get(
            "http://localhost:5000/api/fetch-title"
          );
          if (response.data.status === true) {
            setSimilarProducts(response.data.titles);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetch();
    }
  }, [title]);
  console.log(similarProducts);

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen bg-white flex flex-col items-center p-6"
    >
      {/* Heading */}
      <h1 className="text-2xl font-semibold">Share Your Style</h1>
      <p className="text-gray-500 text-sm">
        Upload a video review and earn wallet credits!
      </p>

      {/* Upload Box */}
      <div className="mt-6 w-full max-w-md border-2 border-dashed border-pink-200 rounded-2xl p-6 text-center bg-pink-50">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files[0])}
          className="hidden"
          id="videoUpload"
        />
        <label
          htmlFor="videoUpload"
          className="cursor-pointer flex flex-col items-center gap-2"
        >
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl">
            ⬆️
          </div>
          <p className="font-semibold">Upload Review Video</p>
          <p className="text-gray-500 text-sm">
            Show off your outfit and help others shop with confidence
          </p>
        </label>
        {video && (
          <p className="mt-2 text-sm text-green-600">
            🎥 Selected: {video.name}
          </p>
        )}
      </div>

      {/* Title */}

      {/* Title */}
      <div className="w-full max-w-md mt-6 relative">
        <label className="text-sm font-medium">Product Title</label>
        <input
          value={title}
          onChange={(e) => {
            const inputValue = e.target.value;
            setTitle(inputValue);

            if (inputValue.trim() === "") {
              setFilteredTitles([]);
            } else {
              const matches = similarProducts
                .map((item) => item.title)
                .filter((t) =>
                  t.toLowerCase().startsWith(inputValue.toLowerCase())
                );
              setFilteredTitles(matches);
            }
          }}
          placeholder="Enter product title"
          required
          className="w-full border border-gray-300 rounded-xl p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {filteredTitles.length > 0 && (
          <ul className="absolute w-full border border-gray-300 rounded-xl mt-1 bg-white shadow-md z-10 max-h-40 overflow-y-auto">
            {filteredTitles.map((t, i) => (
              <li
                key={i}
                onClick={() => {
                  setTitle(t);
                  setFilteredTitles([]);
                }}
                className="p-2 cursor-pointer hover:bg-pink-100"
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Review */}
      <div className="w-full max-w-md mt-6">
        <label className="text-sm font-medium">Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Share your experience..."
          required
          className="w-full border border-gray-300 rounded-xl p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          rows={3}
        />
      </div>

      {/* Tags */}
      <div className="w-full max-w-md mt-6">
        <label className="text-sm font-medium">Tags (comma separated)</label>
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="#ootd, #summer"
          className="w-full border border-gray-300 rounded-xl p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
      </div>

      {/* Post Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full max-w-md py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold hover:opacity-90 shadow-md disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Post Now"}
      </button>

      {/* Message */}
      {msg && <p className="mt-4 text-sm text-center">{msg}</p>}
    </form>
  );
}
