import React from "react";

export default function PostUpload() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Heading */}
      <h1 className="text-2xl font-semibold">Share Your Style</h1>
      <p className="text-gray-500 text-sm">
        Upload a video review and earn wallet credits!
      </p>

      {/* Upload Box */}
      <div className="mt-6 w-full max-w-md border-2 border-dashed border-pink-200 rounded-2xl p-6 text-center bg-pink-50">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl">
            ⬆️
          </div>
          <p className="font-semibold">Upload Review Video</p>
          <p className="text-gray-500 text-sm">
            Show off your outfit and help others shop with confidence
          </p>
        </div>

        {/* Video / Photo Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="px-4 py-2 rounded-full bg-pink-400 text-white hover:bg-pink-500 text-sm">
            🎥 Video
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-400 text-white hover:bg-purple-500 text-sm">
            📸 Photo
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="w-full max-w-md mt-6">
        <label className="text-sm font-medium">Write a short caption...</label>
        <textarea
          placeholder="Tell your followers about this look! What's the vibe? Where would you wear it?"
          className="w-full border border-gray-300 rounded-xl p-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
          rows={3}
        />
      </div>

      {/* Tags */}
      <div className="w-full max-w-md mt-6">
        <p className="text-sm font-medium">Add tags (optional)</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {["#ootd", "#casual", "#summer", "#trendy", "#affordable"].map(
            (tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm cursor-pointer hover:bg-purple-200"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      {/* Post Button */}
      <button className="mt-6 w-full max-w-md py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold hover:opacity-90 shadow-md">
        Post Now
      </button>

      {/* Footer Note */}
      <p className="mt-4 text-xs text-gray-500 text-center">
        Earn up to ₹50 wallet credits for quality reviews! 🎉
      </p>
    </div>
  );
}
