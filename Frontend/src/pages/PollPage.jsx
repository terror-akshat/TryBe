// src/pages/PollPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePoll } from "../context/PollContext";

export default function PollPage() {
  const { id } = useParams(); // pollId from URL
  const {
    pollItems,
    clearPoll,
    votes,
    question,
    setQuestion,
    pollId,
    setPollId,
  } = usePoll();

  const [shareLink, setShareLink] = useState("");
  const [showResult, setShowResult] = useState(false);

  // Check if pollId from URL matches saved pollId
  const [validPoll, setValidPoll] = useState(true);

  useEffect(() => {
    if (id && pollId && id !== String(pollId)) {
      setValidPoll(false);
    } else if (id && !pollId) {
      // Try load from localStorage (already done in context init)
      const saved = localStorage.getItem("pollData");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (String(parsed.pollId) === id) {
          setValidPoll(true);
        } else {
          setValidPoll(false);
        }
      } else {
        setValidPoll(false);
      }
    }
  }, [id, pollId]);

  const handleShare = () => {
    if (!question.trim()) {
      alert("⚠️ Please add a question before sharing poll!");
      return;
    }
    const newId = Date.now();
    setPollId(newId);
    const link = `${window.location.origin}/poll/${newId}`;
    setShareLink(link);
    navigator.clipboard.writeText(link);
    alert("Poll link copied ✅");
  };

  if (!validPoll) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">Poll Not Found ⚠️</h2>
        <p>Maybe it was cleared or not created yet.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🗳️ Poll</h2>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Poll Question
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your poll question..."
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      {pollItems.length === 0 ? (
        <p>No items in poll.</p>
      ) : (
        pollItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg mb-3"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img || item.image}
                alt={item.name}
                className="w-20 h-20 rounded object-cover"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Votes: {votes[item.id] || 0}</p>
              </div>
            </div>
          </div>
        ))
      )}

      <div className="flex gap-4 mt-6">
        <button
          onClick={handleShare}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Share Poll
        </button>
        <button
          onClick={clearPoll}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Clear Poll
        </button>
        <button
          onClick={() => setShowResult(true)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Show Result
        </button>
      </div>

      {shareLink && (
        <p className="mt-4">
          Share this link:{" "}
          <a
            href={shareLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {shareLink}
          </a>
        </p>
      )}

      {showResult && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px] relative">
            <h3 className="text-xl font-bold mb-4">📊 Poll Results</h3>
            <p className="mb-4">{question}</p>
            {pollItems.map((item) => (
              <div key={item.id} className="border p-3 rounded mb-3">
                <p className="font-semibold">{item.name}</p>
                <p>Votes: {votes[item.id] || 0}</p>
              </div>
            ))}
            <button
              onClick={() => setShowResult(false)}
              className="absolute top-2 right-2 px-3 py-1 bg-gray-300 rounded"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
