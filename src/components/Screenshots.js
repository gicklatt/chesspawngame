"use client";

import Image from "next/image";
import { useRef } from "react";
import { basePath } from "../config";

const screenshots = [
  { src: "/screenshots/home.png", alt: "Home Screen", label: "Home" },
  {
    src: "/screenshots/gameplay.png",
    alt: "Gameplay - Chess Board",
    label: "Gameplay",
  },
  {
    src: "/screenshots/levels.png",
    alt: "Level Selection",
    label: "Levels",
  },
  {
    src: "/screenshots/tutorial.png",
    alt: "Tutorial",
    label: "Tutorial",
  },
  { src: "/screenshots/shop.png", alt: "Shop & Themes", label: "Shop" },
  {
    src: "/screenshots/daily-spin.png",
    alt: "Daily Spin Wheel",
    label: "Daily Spin",
  },
];

export default function Screenshots() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="screenshots" className="bg-deft-800 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See It In Action
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-deft-200/70">
            From strategic gameplay to daily challenges, explore what makes ChessPawn
            unique.
          </p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:flex"
            aria-label="Scroll left"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white/20 md:flex"
            aria-label="Scroll right"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex gap-6 overflow-x-auto pb-4"
          >
            {screenshots.map((shot) => (
              <div key={shot.label} className="flex-shrink-0">
                <div className="w-[220px] overflow-hidden rounded-[2rem] border-[4px] border-deft-600/50 bg-deft-900 shadow-xl sm:w-[240px]">
                  <Image
                    src={`${basePath}${shot.src}`}
                    alt={shot.alt}
                    width={240}
                    height={520}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-deft-200/60">
                  {shot.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
