"use client";

import { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => {
      setFadeOut(true);
    }, 1000); // loader visible duration

    const remove = setTimeout(() => {
      setLoading(false);
    }, 1200); // matching transition duration

    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center
        bg-white dark:bg-black transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4
            border-gray-300 border-t-black"
        />
        <p
          className="text-sm tracking-widest uppercase text-zinc-950
            dark:text-zinc-50"
        >
          Loading
        </p>
      </div>
    </div>
  );
};

export default Loading;
