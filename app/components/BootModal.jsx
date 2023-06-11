"use client";

import { useState, useEffect } from "react";

const BootModal = () => {
  const [scroll, setScroll] = useState(false);
  const [message, setmessage] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  });
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setmessage(window.scrollY > 200);
    });
  });

  return (
    <>
      <div className="fixed bottom-10 right-1 z-40 flex ">
        <div
          className={` ${
            message
              ? "bg-light-yellow text-black duration-700 delay-200 h-max p-5 rounded-lg flex opacity-1 justify-start w-[200px] mr-3"
              : " duration-100 delay-150 p-0 rounded-none h-0 opacity-0   justify-start  mr-0"
          }`}
        >
          <p
            className={`${
              message
                ? "block font-Montel text-xs "
                : "hidden bg-light-yellow text-black"
            }`}
          >
            Hello there Welcome to JC what can we Help you with today ?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div
            className={`${
              scroll
                ? " bg-hunyadi-yellow w-[50px] h-[50px] rounded-full flex justify-center items-center z-80 transtion-all duration-150 delay-150"
                : "bg-light-yellow w-[50px] h-[50px] rounded-full flex justify-center items-center z-80 transtion-all duration-150 delay-150"
            }`}
          >
            <img src="/assets/icons/smart_toy.png" alt="bots" />
          </div>
          <p className=" font-loryena uppercase text-center text-jet">
            jc bots
          </p>
        </div>
      </div>
    </>
  );
};

export default BootModal;
