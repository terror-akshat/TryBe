import React from "react";

export default function Profile({ userDetails }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white min-h-screen">
      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-200 to-purple-300 flex items-center justify-center text-3xl font-bold text-white">
        A
      </div>

      <h2 className="mt-4 text-xl font-semibold">{userDetails.username}</h2>
      <p className="text-gray-500 text-sm text-center">
        Fashion enthusiast | Style blogger | Gen Z vibes ✨
      </p>

      <div className="flex justify-center gap-8 mt-4 text-center">
        <div>
          <p className="font-bold">42</p>
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

      <div className="flex gap-3 mt-5">
        <button className="bg-pink-400 text-white hover:bg-pink-500 rounded-full px-6 py-2">
          Edit Profile
        </button>
        <button className="border border-gray-400 rounded-full px-6 py-2">
          Settings
        </button>
      </div>

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

      {/* Posts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="post1"
          className="w-full h-40 object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
          alt="post2"
          className="w-full h-40 object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
          alt="post3"
          className="w-full h-40 object-cover rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
          alt="post4"
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
