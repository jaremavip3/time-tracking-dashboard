"use client";
import { useState } from "react";
import Image from "next/image";
import data from "/data.json";
import "../app/globals.css";

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
    <body className="">
      <div className="min-h-screen w-full bg-VeryDarkBlue text-white flex flex-col items-center justify-center py-10 px-3 ">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 grid-rows-2 gap-5 w-9/12 ">
          <div className="col-span-1 row-span-2 flex flex-col text-white bg-clr-neutral-dark-blue rounded-xl ">
            <div className="flex  bg-clr-bg-blue rounded-xl pl-7 pr-2 gap-4  sm:flex-row items-center md:flex-col">
              <Image
                className="self-start mt-5"
                src="/images/image-jeremy.png"
                alt="Jeremy"
                width={100}
                height={100}
              />
              <div className="pb-10">
                <p className="text-clr-neutral-pale-blue">Report for</p>
                <h2 className="text-3xl">Jeremy Robson</h2>
              </div>
            </div>
            <div className="flex  items-start p-7 text-clr-neutral-pale-blue sm:flex-row place-content-center justify-around md:flex-col">
              <button
                className={`hover:text-white ${timeframe === "daily" ? "text-white" : ""}`}
                onClick={() => handleTimeframeChange("daily")}>
                Daily
              </button>
              <button
                className={`hover:text-white ${timeframe === "weekly" ? "text-white" : ""}`}
                onClick={() => handleTimeframeChange("weekly")}>
                Weekly
              </button>
              <button
                className={`hover:text-white ${timeframe === "monthly" ? "text-white" : ""}`}
                onClick={() => handleTimeframeChange("monthly")}>
                Monthly
              </button>
            </div>
          </div>

          {data.map((item, index) => {
            // Find the corresponding item in the list array
            const listItem = list.find(
              (listItem) => listItem.name.toLowerCase() === item.title.toLowerCase()
            );
            const colorVariants = {
              Work: "flex justify-end bg-clr-work-light-red  h-16",
              Play: "flex justify-end bg-clr-play-soft-blue h-16",
              Study: "flex justify-end bg-clr-study-light-red h-16",
              Exercise: "flex justify-end bg-clr-exercise-lime-green h-16 ",
              Social: "flex justify-end bg-clr-social-violet h-16",
              "Self Care": "flex justify-end bg-clr-self-care-light-orange h-16",
            };

            return (
              <div
                key={index}
                className="min-w-28 rounded-lg flex flex-col overflow-hidden bg-clr-neutral-dark-blue ">
                <div className={`${colorVariants[item.title]} ...`}>
                  {listItem && (
                    <Image priority src={listItem.img} alt={item.title} width={80} height={50} />
                  )}
                </div>
                <div className="flex flex-col p-5 bg-clr-neutral-dark-blue -mt-5 rounded-xl hover:bg-clr-neutral-desaturated-blue">
                  <div className="flex items-center place-content-between">
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
