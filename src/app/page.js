"use client";
import { useState } from "react";
import Image from "next/image";
import data from "/data.json";

export default function Home() {
  const list = [
    {
      name: "Work",
      img: "/images/icon-work.svg",
      color: "bg-clr-work-light-red",
    },
    {
      name: "Play",
      img: "/images/icon-play.svg",
      color: "bg-clr-play-soft-blue",
    },
    {
      name: "Study",
      img: "/images/icon-study.svg",
      color: "bg-clr-study-light-red",
    },
    {
      name: "Exercise",
      img: "/images/icon-exercise.svg",
      color: "bg-clr-exercise-lime-green",
    },
    {
      name: "Social",
      img: "/images/icon-social.svg",
      color: "bg-clr-social-violet",
    },
    {
      name: "Self Care",
      img: "/images/icon-self-care.svg",
      color: "bg-clr-self-care-light-orange",
    },
  ];
  const [timeframe, setTimeframe] = useState("daily");

  const handleTimeframeChange = (selectedTimeframe) => {
    setTimeframe(selectedTimeframe);
  };

  return (
    <body>
      <div className="bg-clr-neutral-very-dark-blue h-dvh grid grid-cols-1 grid-rows-1 justify-items-center items-center">
        <div className=" grid grid-cols-4 grid-rows-2 gap-5 w-9/12 ">
          <div className=" col-span-1 row-span-2 flex flex-col text-white bg-clr-neutral-dark-blue   rounded-xl">
            <div className="flex flex-col bg-clr-bg-blue rounded-xl pl-7 gap-10 justify-around">
              <Image src="/images/image-jeremy.png" alt="Jeremy" width={100} height={100} />
              <div>
                <p className="">Report for</p>
                <h2 className="text-3xl">Jeremy Robson</h2>
              </div>
            </div>
            <div className="flex flex-col items-start  p-7">
              <button onClick={() => handleTimeframeChange("daily")}>Daily</button>
              <button onClick={() => handleTimeframeChange("weekly")}>Weekly</button>
              <button onClick={() => handleTimeframeChange("monthly")}>Monthly</button>
            </div>
          </div>

          {data.map((item, index) => {
            // Find the corresponding item in the list array
            const listItem = list.find(
              (listItem) => listItem.name.toLowerCase() === item.title.toLowerCase()
            );
            const colorVariants = {
              Work: "flex justify-end  bg-clr-work-light-red basis-1/4",
              Play: "flex justify-end bg-clr-play-soft-blue basis-1/4",
              Study: "flex justify-end  bg-clr-study-light-red basis-1/4",
              Exercise: "flex justify-end bg-clr-exercise-lime-green basis-1/4",
              Social: "flex justify-end bg-clr-social-violet basis-1/4",
              "Self Care": "flex justify-end bg-clr-self-care-light-orange basis-1/4",
            };

            return (
              <div
                key={index}
                className="rounded-lg text-white flex flex-col overflow-hidden  bg-clr-neutral-dark-blue  ">
                <div className={`${colorVariants[item.title]} ...`}>
                  {listItem && <Image src={listItem.img} alt={item.title} width={50} height={50} />}
                </div>
                <div className="flex flex-col p-5  bg-clr-neutral-dark-blue  rounded-lg basis-3/4">
                  <div className="flex items-center place-content-between ">
                    <h1 className="">{item.title}</h1>
                    <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        fill="#BBC0FF"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-4xl">{item.timeframes[timeframe].current}hrs</h2>
                  <p className="text-clr-neutral-pale-blue">
                    Last Week -{item.timeframes[timeframe].previous}hrs
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </body>
  );
}
