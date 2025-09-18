import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Profile({ userDetails }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`http://localhost:5000/api/video/${id}`);
      if (response.data.status == true) {
        setVideo(response.data.user);
      }
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-200 to-purple-300 flex items-center justify-center text-3xl font-bold text-white">
        {userDetails.username?.[0]?.toUpperCase() || "A"}
      </div>

      {/* Username */}
      <h2 className="mt-4 text-xl font-semibold">{userDetails.username}</h2>
      <p className="text-gray-500 text-sm text-center">
        Fashion enthusiast | Style blogger | Gen Z vibes ✨
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-8 mt-4 text-center">
        <div>
          <p className="font-bold">{userDetails.posts?.length || 0}</p>
          <p className="text-sm text-gray-500">Posts</p>
        </div>
        <div>
          <p className="font-bold">1.2k</p>
          <p className="text-sm text-gray-500">Followers</p>
        </div>
        <div>
          <p className="font-bold">890</p>
          <p className="text-sm text-gray-500">Following</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">
        <button className="bg-pink-400 text-white hover:bg-pink-500 rounded-full px-6 py-2">
          Edit Profile
        </button>
        <button className="border border-gray-400 rounded-full px-6 py-2">
          Settings
        </button>
      </div>

      {/* Wallet & Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full max-w-md">
        <div className="bg-pink-100 p-4 rounded-xl text-center">
          <p className="font-bold text-pink-600">₹185</p>
          <p className="text-sm text-gray-600">Wallet Balance</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-xl text-center">
          <p className="font-bold text-purple-600">12</p>
          <p className="text-sm text-gray-600">Orders</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl text-center">
          <p className="font-bold text-green-600">8.2k</p>
          <p className="text-sm text-gray-600">Total Likes</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl text-center">
          <p className="font-bold text-blue-600">4.8</p>
          <p className="text-sm text-gray-600">Review Rating</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mt-8 border-b w-full max-w-md pb-2">
        <button className="text-pink-500 font-semibold border-b-2 border-pink-500">
          My Posts
        </button>
        <button className="text-gray-500 hover:text-pink-500">My Orders</button>
      </div>

      {/* Posts Grid (Videos from populate) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 w-full max-w-2xl">
        {video.posts && video.posts.length > 0 ? (
          video.posts.map((post) => (
            <div
              key={post._id}
              className="cursor-pointer"
              onClick={() => setSelectedVideo(post.video)}
            >
              <video
                src={post.video}
                className="w-full h-40 object-cover rounded-xl"
                muted
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No posts yet
          </p>
        )}
      </div>

      {/* Modal for full video */}
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedVideo(null)} // click outside closes modal
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()} // modal ke andar click prevent close
          >
            {/* Close button */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-black font-bold hover:bg-gray-200 transition"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            {/* Video */}
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
