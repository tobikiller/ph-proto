"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [beforescroll, setBeforeScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBeforeScroll(window.scrollY > 40);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  const links = [
    {
      id: 0,
      name: "Rooms",
      href: "/",
    },
    {
      id: 1,
      name: "Services",
      href: "/",
    },
    {
      id: 2,
      name: "Gallery",
      href: "/",
    },
    {
      id: 3,
      name: "Resturations",
      href: "/",
    },
  ];

  const [activeHover, setActiveHover] = useState(false);

  const handleMouseHover = () => {
    setActiveHover(true);
  };

  const handleMouseOut = () => {
    setActiveHover(false);
  };

  return (
    <nav>
      <div className=" bg-hunyadi-yellow text-light-yellow text-lg w-full text-center font-PlayfairDisplay py-4">
        Save up to 30% on your next-reservation
      </div>

      <div
        className={` ${
          beforescroll ? "  fixed lg:-top-[0.5px]" : " fixed top-10"
        } ${
          scroll
            ? "  fixed w-full    overflow-auto lg:pt-5  z-40 lg:h-[200px] "
            : "pt-2  fixed w-full  overflow-auto lg:top-12 lg:h-[200px] "
        }`}
      >
        <ul
          onMouseOver={handleMouseHover}
          onMouseOut={handleMouseOut}
          className={`${
            activeHover
              ? "max-w-full mx-auto px-7 lg:px-20 py-4 flex justify-between items-center bg-light-yellow transition-all duration-300  delay-200 "
              : "max-w-full mx-auto px-7 lg:px-20 py-4 flex justify-between items-center transition-all duration-300  delay-200"
          } ${
            scroll
              ? " max-w-6xl md:rounded-full mx-auto px-20 py-4 flex justify-between items-center drop-shadow-lg shadow-2xl shadow-orange-200  bg-light-yellow transition-all duration-300  delay-200"
              : "max-w-full mx-auto px-20 py-4 flex justify-between items-center"
          }`}
        >
          <Link href="/">
            {/* <img
              className="w-auto lg:w-[240px]"
              src="assets/icons/JC-logo.svg"
              alt=""
            /> */}
            <span
              onMouseOver={handleMouseHover}
              onMouseOut={handleMouseOut}
              className={`${
                activeHover
                  ? "font-Montel text-black duration-150 delay-1505 text-lg uppercase"
                  : "font-Montel text-light-yellow text-lg uppercase "
              } ${scroll ? " text-slate-800" : "text-black"}`}
            >
              jc prestige hotel
            </span>
          </Link>

          <div
            className={`hidden lg:flex space-x-5 ${
              navActive ? "active" : ""
            } nav_list `}
            key={links.id}
          >
            {links.map((links) => (
              <Link href={links.href} key={links.id}>
                {" "}
                <li
                  onMouseOver={handleMouseHover}
                  onMouseOut={handleMouseOut}
                  className={`${
                    activeHover
                      ? "font-loryena tracking-[5px] text-base text-slate-700 uppercase hover:scale-110  ease-in-out transition-colors delay-100   "
                      : "font-loryena tracking-[5px] text-base text-light-yellow uppercase hover:scale-110 transition ease-in-out "
                  } ${scroll ? " text-slate-800" : "text-light-yellow"} `}
                >
                  {links.name}
                </li>
              </Link>
            ))}
          </div>

          {}
          <div>
            <Link
              href="/"
              onMouseOver={handleMouseHover}
              onMouseOut={handleMouseOut}
              className={`${
                activeHover
                  ? "relative  font-loryena tracking-[5px] text-xs sm:text-base text-slate-700 p-1 sm:p-2 uppercase  rounded-sm flex flex-col gap-1 item-center transition-colors delay-500  "
                  : "relative  font-loryena tracking-[5px] text-xs sm:text-base text-light-yellow p-1 sm:p-2 uppercase  rounded-sm flex flex-col gap-1 item-center "
              } ${scroll ? " text-slate-800" : "text-light-yellow"}`}
            >
              <span
                onMouseOver={handleMouseHover}
                onMouseOut={handleMouseOut}
                className={`${
                  activeHover
                    ? "w-full dot_in h-[0.2px] bg-jet  "
                    : "w-full dot_in h-[0.2px] bg-light-yellow "
                } ${scroll ? " bg-slate-800" : "text-light-yellow"}`}
              ></span>
              Book a room
              <span
                onMouseOver={handleMouseHover}
                onMouseOut={handleMouseOut}
                className={`${
                  activeHover
                    ? "w-full dot_in h-[0.2px] bg-jet  "
                    : "w-full dot_in h-[0.2px] bg-light-yellow "
                } ${scroll ? " bg-slate-800" : "bg-light-yellow"} `}
              ></span>
            </Link>
          </div>

          <div
            className="btn space-y-1 block lg:hidden"
            onClick={() => setNavActive(!navActive)}
          >
            <div className="w-7 h-0.5 bg-light-yellow"></div>
            <div className="w-7 h-0.5 bg-light-yellow"></div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
