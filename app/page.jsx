"use client";

import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const page = () => {
  return (
    <div className="">
      <div className=" gradient w-full h-screen ">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex justify-center items-end  flex-col">
            <div className="space-y-5 text-center">
              <p className=" uppercase font-loryena text-light-yellow text-xl tracking-[10px]">
                hotel
              </p>
              <h1 className="font-Montel uppercase text-5xl sm:text-7xl text-light-yellow leading-10">
                jc hotel prestige
              </h1>
              <p className=" uppercase font-loryena text-light-yellow text-xl tracking-[10px]">
                bastos
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 w-full flex items-center justify-center">
          <img
            className="mx-auto animate-bounce"
            src="assets/icons/keyboard_arrow_down.svg"
            alt=""
          />
        </div>
      </div>
      <section className="max-w-7xl mx-auto relative mt-14 px-7 space-y-7">
        <div className="grid place-content-centers place-items-center space-y-5">
          <div className="dot flex">
            <img src="assets/icons/isolation_mode.svg" alt="iso" />
          </div>
          <h2 className="  font-PlayfairDisplay uppercase text-xl sm:text-5xl md:text-6xl text-jet text-center">
            BIENVENUE SUR LE SITE DE L'HOTEL JC PRESTIGE
          </h2>
        </div>
        {/* carousel */}
        <div className="carousel">
          <Carousel
            withIndicators
            height={500}
            slideSize="33.333333%"
            slideGap="md"
            loop
            withControls={false}
            align="start"
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: "10%" },
            ]}
          >
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-guest-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-underguest bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-guest-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-room bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
            <Carousel.Slide className="h-full w-[350px] ">
              <div className=" bg-underguest bg-center bg-cover bg-no-repeat rounded-xl w-full h-full">
                <div className="relative w-full h-full flex justify-center items-end pb-4">
                  <div className="  text-center ">
                    <p className="font-PlayfairDisplay text-light-yellow uppercase ">
                      grand Room
                    </p>
                    <p className="uppercase font-Montel text-light-yellow text-4xl">
                      Relax room
                    </p>
                    <p className=" font-loryena tracking-widest text-light-yellow uppercase ">
                      grand room
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>

        <Link
          href="/"
          className="flex text-center uppercase hover:scale-105 transition ease-in-out delay-150 items-center justify-center font-loryena flex-col max-w-fit gap-1 mx-auto mt-5"
        >
          <span className="  w-full h-[0.8px]  bg-hunyadi-yellow"></span>
          Expolore All Rooms
          <span className=" w-full  h-[0.8px]  bg-hunyadi-yellow "></span>
        </Link>
      </section>
      <section className="max-w-7xl mx-auto relative mt-14 px-7 space-y-7">
        <div className="grid place-content-centers place-items-center space-y-5">
          <h2 className="  font-PlayfairDisplay uppercase text-xl sm:text-5xl md:text-6xl text-jet text-center">
            A glance eye of our places
          </h2>
        </div>
        {/* marquee place */}
        <Marquee>
          <div className="carousel overflow-hidden">
            <div className="flex h-[400px] gap-1">
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/intro.jpg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 h-[400px] gap-1">
                <img
                  className="w-full h-fit"
                  src="/assets/images/staircase.jpg"
                  alt=""
                />
                <img
                  className="w-full h-fit"
                  src="/assets/images/outside.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/parlor.jpg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 h-[400px] gap-1">
                <img
                  className="w-[400px] h-fit"
                  src="/assets/images/salon.jpg"
                  alt=""
                />
                <img
                  className="w-full h-fit"
                  src="/assets/images/outside.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/stairs.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>

        <Link
          href="/"
          className="flex text-center uppercase hover:scale-105 transition ease-in-out delay-150 items-center justify-center font-loryena flex-col max-w-fit gap-1 mx-auto mt-5"
        >
          <span className="  w-full h-[0.8px]  bg-hunyadi-yellow"></span>
          View All
          <span className=" w-full  h-[0.8px]  bg-hunyadi-yellow "></span>
        </Link>
      </section>
      <section className="max-w-7xl mx-auto relative mt-14 px-7 space-y-7">
        <div className="flex md:flex-row flex-col justify-between w-full  space-y-5">
          <h2 className="  font-PlayfairDisplay uppercase text-xl sm:text-5xl md:text-6xl text-jet text-left max-w-sm">
            Events & Weedings
          </h2>
          <div>
            <p className=" font-PlayfairDisplay text-base text-jet max-w-sm">
              Set accross three historic buildings, Hotel JC prestige has
              several areas that were designed with community and camaraderie in
              mind
            </p>
            <Link
              href="/"
              className="flex text-center uppercase hover:scale-105 transition ease-in-out delay-150 items-center justify-start font-loryena flex-col max-w-fit gap-1  mt-5"
            >
              <span className="  w-full h-[0.8px]  bg-hunyadi-yellow"></span>
              View All
              <span className=" w-full  h-[0.8px]  bg-hunyadi-yellow "></span>
            </Link>
          </div>
        </div>
        {/* marquee place */}
        <Marquee direction="right">
          <div className="carousel overflow-hidden">
            <div className="flex h-[400px] gap-1">
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/kissing.jpg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 h-[400px] gap-1">
                <img
                  className="w-full h-fit"
                  src="/assets/images/makeup.jpg"
                  alt=""
                />
                <img
                  className="w-full h-fit"
                  src="/assets/images/womanhalf.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/readingbible.jpg"
                  alt=""
                />
              </div>
              <div className="grid grid-cols-1 h-[400px] gap-1">
                <img
                  className="w-full h-fit"
                  src="/assets/images/makeup.jpg"
                  alt=""
                />
                <img
                  className="w-full h-fit"
                  src="/assets/images/womanhalf.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="w-full h-fit"
                  src="/assets/images/tradtionalwoman.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default page;
