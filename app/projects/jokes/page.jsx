"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const typeWriter = (text, setter) => {
    let i = 0;
    setter("");
    const interval = setInterval(() => {
      setter((prev) => prev + text.charAt(i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 50);
  };

  const fetchRandomJokes = async () => {
    setLoading(true);
    setShowPunchline(false);
    setTypedText("");
    const res = await fetch(URL);
    const jokesData = await res.json();
    setRandomJokes(jokesData);
    setTimeout(() => {
      setLoading(false);
      typeWriter(jokesData.setup, setTypedText);
    }, 400);
  };

  const revealPunchline = () => {
    setShowPunchline(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-yellow-100/10 to-transparent pointer-events-none"></div>

      {/* Floating Joke ID */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-6 left-6 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow-lg"
        >
          #{randomJokes.id}
        </motion.div>
      )}

      {/* Main Joke Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-gray-900 border border-yellow-400 rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-center relative"
      >
        <h1 className="text-4xl font-extrabold text-yellow-400 mb-8 drop-shadow-lg">
          🎤 Comedy Night
        </h1>

        {loading ? (
          <p className="animate-pulse text-gray-300">Fetching your joke...</p>
        ) : (
          <>
            <motion.p
              key={typedText}
              className="text-2xl font-semibold text-gray-100 min-h-[60px]"
            >
              {typedText}
            </motion.p>

            <AnimatePresence>
              {showPunchline && (
                <motion.div
                  key="punchline"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 text-3xl font-bold text-yellow-300 drop-shadow-lg"
                >
                  {randomJokes.punchline} 😂
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center gap-6 mt-10">
              {!showPunchline && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={revealPunchline}
                  className="px-8 py-3 text-lg font-semibold bg-yellow-400 text-black rounded-full shadow-md hover:bg-yellow-300 transition"
                >
                  Reveal Punchline
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={fetchRandomJokes}
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-md hover:from-pink-400 hover:to-purple-500 transition"
              >
                Next Joke 🔄
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default RandomJokes;
