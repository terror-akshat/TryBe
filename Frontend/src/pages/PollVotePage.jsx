// src/pages/PollVotePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { usePoll } from "../context/PollContext";

export default function PollVotePage() {
  const { id } = useParams(); // poll id from link
  const { pollItems, votes, votePoll } = usePoll();

  if (!pollItems.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">Poll Not Found ⚠️</h2>
        <p className="text-gray-600">
          Maybe it was cleared or not created yet.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Poll Results</h2>

      {pollItems.map((item) => (
        <div
          key={item._id}
          className="flex items-center justify-between border p-4 rounded-lg mb-3"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.images[0] || item.image}
              alt={item.name}
              className="w-20 h-20 rounded object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-500">Votes: {votes[item._id] || 0}</p>
            </div>
          </div>
          <button
            onClick={() => votePoll(item._id)}
            className="px-4 py-2 bg-pink-500 text-white rounded hover:opacity-80"
          >
            Vote
          </button>
        </div>
      ))}
    </div>
  );
}
