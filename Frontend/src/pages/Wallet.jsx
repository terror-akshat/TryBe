import React from "react";
import { useState } from "react";
import { FaWallet, FaRegHeart, FaUsers } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

const Wallet = () => {
  const [balance] = useState(185);
  const transactions = [
    { id: 1, title: "Video review reward", time: "2 hours ago", amount: "+₹25", type: "credit" },
    { id: 2, title: "Free delivery on order #TR12345", time: "1 day ago", amount: "-₹50", type: "debit" },
    { id: 3, title: "Post engagement bonus", time: "3 days ago", amount: "+₹30", type: "credit" },
    { id: 4, title: "Daily check-in reward", time: "5 days ago", amount: "+₹15", type: "credit" },
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Wallet Balance Card */}
      <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 shadow-sm text-center mb-6">
        <div className="flex flex-col items-center">
          <div className="bg-pink-100 p-3 rounded-full mb-2">
            <FaWallet className="text-pink-500 text-2xl" />
          </div>
          <h2 className="text-lg font-semibold">Wallet Balance</h2>
          <p className="text-3xl font-bold mt-1">₹{balance}</p>
        </div>
        <div className="flex gap-4 mt-6 justify-center">
          <button className="px-4 py-2 bg-pink-400 text-white rounded-full shadow hover:bg-pink-500">
            Use for Free Delivery
          </button>
          <button className="px-4 py-2 bg-purple-200 text-purple-700 rounded-full shadow hover:bg-purple-300">
            Convert to Discounts
          </button>
        </div>
      </div>

      {/* Earn More Credits Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 shadow-sm mb-6">
        <h3 className="font-semibold text-lg mb-4">Earn More Credits</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="bg-pink-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-2">
              <MdOutlineReviews className="text-pink-500 text-xl" />
            </div>
            <p className="font-medium text-sm">Post Reviews</p>
            <p className="text-xs text-gray-500">Up to ₹50 per video</p>
          </div>
          <div>
            <div className="bg-pink-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-2">
              <FaRegHeart className="text-pink-500 text-xl" />
            </div>
            <p className="font-medium text-sm">Engage Daily</p>
            <p className="text-xs text-gray-500">₹10–20 for likes & comments</p>
          </div>
          <div>
            <div className="bg-pink-100 w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-2">
              <FaUsers className="text-pink-500 text-xl" />
            </div>
            <p className="font-medium text-sm">Refer Friends</p>
            <p className="text-xs text-gray-500">₹100 per referral</p>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BsClockHistory className="text-gray-600" />
          <h3 className="font-semibold text-lg">Transaction History</h3>
        </div>
        <div className="space-y-3">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div>
                <p className="font-medium">{tx.title}</p>
                <p className="text-sm text-gray-500">{tx.time}</p>
              </div>
              <span
                className={`font-semibold ${
                  tx.type === "credit" ? "text-green-500" : "text-red-500"
                }`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
