"use client";

import { useState } from "react";

import { Button } from "@mui/material";

import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // setting dark mode toggle
  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const classNames = "px-4 hover:text-zinc-50 transition-colors cursor-pointer";

  const linkItem = [
    {
      id: 0,
      name: "home",
      href: "#",
      className: classNames,
    },
    {
      id: 1,
      name: "about",
      href: "#about",
      className: classNames,
    },
    {
      id: 2,
      name: "skills",
      href: "#skills",
      className: classNames,
    },
    {
      id: 3,
      name: "experiences",
      href: "#experiences",
      className: classNames,
    },
    {
      id: 4,
      name: "projects",
      href: "#projects",
      className: classNames,
    },
    {
      id: 5,
      name: "contacts",
      href: "#contacts",
      className: classNames,
    },
  ];

  return (
    <header
      className="w-full fixed bg-transparent top-0 z-50 backdrop-blur-sm
        border-b border-zinc-50/5"
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-2 flex items-center
          justify-between"
      >
        <span
          className="my-5 text-2xl tracking-wide
            font-(family-name:--font-archivo-black)"
        >
          ch.
        </span>

        {/* link items */}
        <ul
          className="flex space-x-10 text-xl text-zinc-300
            font-(family-name:--font-afacad)"
        >
          <li className="flex justify-center items-center">
            {linkItem.map((item) => (
              <a key={item.id} href={item.href} className={item.className}>
                {item.name}
              </a>
            ))}
          </li>
        </ul>

        <Button
          className="p-2 rounded-full hover:bg-zinc-50/5 transition-colors"
          onClick={handleToggleDarkMode}
        >
          <span className="text-lg text-zinc-50">
            {isDarkMode ? <WbSunnyOutlinedIcon /> : <BedtimeOutlinedIcon />}
          </span>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
