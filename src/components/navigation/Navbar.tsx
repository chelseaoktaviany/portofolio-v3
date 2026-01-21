"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@mui/material";

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
    "px-4 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors cursor-pointer";

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
      className="w-full fixed z-[9999] bg-transparent top-0 backdrop-blur-sm
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
          <Link href="/">ch.</Link>
        </span>

        {/* link items (desktop version) */}
        <ul
          className="hidden md:flex space-x-10 text-xl text-zinc-950
            dark:text-zinc-300 font-(family-name:--font-afacad)"
        >
          <li className="flex justify-center items-center">
            {linkItem.map((item) => (
              <a key={item.id} href={item.href} className={item.className}>
                {item.name}
              </a>
            ))}
          </li>
        </ul>

        {/* dark mode button (desktop version) */}
        <Button
          className="hidden md:flex sm:hidden p-2 rounded-full
            hover:bg-zinc-950/5 dark:hover:bg-zinc-50/5 transition-colors"
          onClick={handleDarkMode}
        >
          <span className="text-lg text-zinc-950 dark:text-zinc-50">
            {isDark ? <WbSunnyOutlinedIcon /> : <BedtimeOutlinedIcon />}
          </span>
        </Button>
      </nav>

      <div
        className="md:hidden flex justify-between items-center px-2 py-5 mb-2"
      >
        {/* dark mode button (mobile version) */}
        <Button
          className="mt-4 text-zinc-900 dark:text-zinc-50"
          onClick={handleDarkMode}
        >
          <span className="text-lg text-zinc-950 dark:text-zinc-50">
            {isDark ? <WbSunnyOutlinedIcon /> : <BedtimeOutlinedIcon />}
          </span>
        </Button>

        {/* menu item button (mobile version) */}
        <Button
          className="md:hidden float-right text-zinc-900 dark:text-zinc-50"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <span className="text-lg text-zinc-950 dark:text-zinc-50">
            {isOpenMenu ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
          </span>
        </Button>
      </div>

      {/* mobile menu items */}
      {isOpenMenu && (
        <div
          className="md:hidden h-screen bg-zinc-50/90 dark:bg-zinc-900/90 px-8
            py-15"
        >
          <ul className="flex flex-col gap-4 text-zinc-950 dark:text-zinc-50">
            {linkItem.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="hover:text-zinc-950 dark:hover:text-zinc-50
                    transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
