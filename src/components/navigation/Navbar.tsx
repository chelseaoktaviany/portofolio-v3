"use client";

import { useState } from "react";

import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const classNames =
    "px-4 font-normal duration-300 ease-in-out hover:font-bold transition-all cursor-pointer";

  const linkItem = [
    {
      id: 0,
      name: "about",
      href: "#about",
      className: classNames,
    },
    {
      id: 1,
      name: "skills",
      href: "#skills",
      className: classNames,
    },
    {
      id: 2,
      name: "projects",
      href: "#projects",
      className: classNames,
    },
    {
      id: 3,
      name: "contacts",
      href: "#contacts",
      className: classNames,
    },
  ];

  return (
    <header
      className="w-full fixed z-9999 bg-transparent top-0 backdrop-blur-sm
        border-b border-zinc-950/5 dark:border-zinc-50/5"
    >
      <nav
        className="container hidden md:flex items-center justify-between w-full
          mx-auto px-6 py-2"
      >
        <span
          className="my-5 text-2xl tracking-wide
            font-(family-name:--font-archivo-black)"
        >
          <a href="/">ch.</a>
        </span>

        {/* link items (desktop version) */}
        <ul
          className="hidden md:flex space-x-10 text-xl
            font-(family-name:--font-afacad)"
        >
          <li className="flex justify-center items-center">
            {linkItem.map((item) => (
              <a key={item.id} className={item.className} href={item.href}>
                {item.name}
              </a>
            ))}
          </li>
        </ul>

        {/* dark mode button (desktop version) */}
        <button
          className="hidden md:flex sm:hidden p-2 rounded-full
            hover:bg-zinc-950/5 dark:hover:bg-zinc-50/5 transition-colors"
          onClick={handleDarkMode}
        >
          <span className="text-lg text-zinc-950 dark:text-zinc-50">
            {isDark ? <WbSunnyOutlinedIcon /> : <BedtimeOutlinedIcon />}
          </span>
        </button>
      </nav>

      <div
        className="md:hidden flex justify-between items-center my-4 px-8 py-2
          mb-2"
      >
        <span
          className="text-2xl tracking-wide
            font-(family-name:--font-archivo-black)"
        >
          <a href="/">ch.</a>
        </span>

        {/* dark mode button (mobile version) */}
        <button
          className="text-zinc-900 dark:text-zinc-50"
          onClick={handleDarkMode}
        >
          <span className="text-lg text-zinc-950 dark:text-zinc-50">
            {isDark ? <WbSunnyOutlinedIcon /> : <BedtimeOutlinedIcon />}
          </span>
        </button>

        {/* menu item button (mobile version) */}
        <button
          className="md:hidden text-zinc-900 dark:text-zinc-50"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span className="text-center text-lg text-zinc-950 dark:text-zinc-50">
            {isOpenMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </span>
        </button>
      </div>

      {/* mobile menu items */}
      {isOpenMenu && (
        <div className="md:hidden h-screen">
          <ul className="flex flex-col p-8">
            <li className="flex flex-col">
              {linkItem.map((item) => (
                <a key={item.id} className="mb-5" href={item.href}>
                  {item.name}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
