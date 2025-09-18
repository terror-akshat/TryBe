// src/context/PollContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const PollContext = createContext();

export const PollProvider = ({ children }) => {
  const [pollItems, setPollItems] = useState([]);
  const [question, setQuestion] = useState("");
  const [votes, setVotes] = useState({});
  const [pollId, setPollId] = useState(null);

  // Load poll from localStorage if exists
  useEffect(() => {
    const saved = localStorage.getItem("pollData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setPollItems(parsed.pollItems || []);
      setQuestion(parsed.question || "");
      setVotes(parsed.votes || {});
      setPollId(parsed.pollId || null);
    }
  }, []);

  // Save poll to localStorage whenever it changes
  useEffect(() => {
    if (pollId) {
      localStorage.setItem(
        "pollData",
        JSON.stringify({ pollItems, question, votes, pollId })
      );
    }
  }, [pollItems, question, votes, pollId]);

  const addToPoll = (item) => {
    setPollItems((prev) => {
      const key = item.id ?? item.productId;
      if (prev.find((p) => (p.id ?? p.productId) === key)) {
        alert("This item is already in the poll!");
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeFromPoll = (id) => {
    setPollItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearPoll = () => {
    setPollItems([]);
    setQuestion("");
    setVotes({});
    setPollId(null);
    localStorage.removeItem("pollData");
  };

  const votePoll = (id) => {
    setVotes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  return (
    <PollContext.Provider
      value={{
        pollItems,
        addToPoll,
        removeFromPoll,
        clearPoll,
        question,
        setQuestion,
        votes,
        votePoll,
        pollId,
        setPollId,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};

export const usePoll = () => {
  const ctx = useContext(PollContext);
  if (!ctx) {
    throw new Error("usePoll must be used inside PollProvider");
  }
  return ctx;
};
