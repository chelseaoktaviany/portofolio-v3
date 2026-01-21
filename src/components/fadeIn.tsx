"use client";

import { useState, useEffect } from "react";

const FadeIn = ({ children }: { children: React.ReactNode }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ease-out
        ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
