"use client";

import { images } from "@/commons/images";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";

gsap.registerPlugin(Draggable);
const monthlyWeatherData = [
  {
    month: "JAN",
    temp: "7\u00B0C",
    condition: "Snow",
    details: "06:30 min",
    bg: images.bgWeather,
  },
  {
    month: "FEB",
    temp: "9\u00B0C",
    condition: "Rain",
    details: "06:30 min",
    bg: images.location2,
  },
  {
    month: "MAR",
    temp: "15\u00B0C",
    condition: "Cloudy",
    details: "06:30 min",
    bg: images.location1,
  },
  {
    month: "APR",
    temp: "20°C",
    condition: "Sunny",
    details: "06:30 min",
    bg: images.location3,
  },
  {
    month: "MAY",
    temp: "25°C",
    condition: "Sunny",
    details: "06:30 min",
    bg: images.location4,
  },
  {
    month: "JUN",
    temp: "30°C",
    condition: "Hot",
    details: "06:30 min",
    bg: images.location5,
  },
  {
    month: "JUL",
    temp: "35°C",
    condition: "Hot",
    details: "06:30 min",
    bg: images.bgWeather,
  },
  {
    month: "AUG",
    temp: "37°C",
    condition: "Extreme",
    details: "06:30 min",
    bg: images.location1,
  },
  {
    month: "SEP",
    temp: "32°C",
    condition: "Hot",
    details: "06:30 min",
    bg: images.location3,
  },
  {
    month: "OCT",
    temp: "25°C",
    condition: "Mild",
    details: "06:30 min",
    bg: images.location4,
  },
  {
    month: "NOV",
    temp: "18°C",
    condition: "Cool",
    details: "06:30 min",
    bg: images.bgWeather,
  },
  {
    month: "DEC",
    temp: "12°C",
    condition: "Cold",
    details: "06:30 min",
    bg: images.location1,
  },
];

export default function WeatherDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  // const cardsRef = useRef<HTMLDivElement[]>([]);
  // const containerRef = useRef<HTMLDivElement>(null);
  // const nowRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!nowRef.current || !cardsRef.current[currentIndex]) return;

  //   const activeCard = cardsRef.current[currentIndex];
  //   const container = activeCard.parentElement;

  //   if (!container) return;

  //   const cardRect = activeCard.getBoundingClientRect();
  //   const containerRect = container.getBoundingClientRect();

  //   const offsetX =
  //     cardRect.left - containerRect.left + cardRect.width / 2 - 16; // 16 là half chiều rộng approx của chữ NOW

  //   gsap.to(nowRef.current, {
  //     x: offsetX,
  //     duration: 0.3,
  //     ease: "power2.out",
  //   });
  // }, [currentIndex]);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const container = containerRef.current;
  //   const cards = cardsRef.current;

  //   const isDesktop = window.innerWidth >= 768;
  //   if (!isDesktop) return;

  //   const totalWidth = cards.reduce(
  //     (sum, card) => sum + card.offsetWidth + 16,
  //     0
  //   );

  //   Draggable.create(container, {
  //     type: "x",
  //     bounds: {
  //       minX: -(totalWidth - container.offsetWidth),
  //       maxX: 0,
  //     },
  //     inertia: true,
  //     edgeResistance: 0.5,
  //     onDragEnd: function () {
  //       const draggedX = this.x;
  //       const closestIndex = Math.round(
  //         -draggedX / (cards[0].offsetWidth + 16)
  //       );
  //       setCurrentIndex(Math.min(Math.max(closestIndex, 0), cards.length - 1));
  //     },
  //   });

  //   return () => {
  //     if (Draggable.get(container)) Draggable.get(container).kill();
  //   };
  // }, []);

  const handleNavigation = (direction: "left" | "right") => {
    setCurrentIndex((prev) => {
      const newIndex =
        direction === "left"
          ? (prev - 1 + monthlyWeatherData.length) % monthlyWeatherData.length
          : (prev + 1) % monthlyWeatherData.length;
      return newIndex;
    });
  };

  // useEffect(() => {
  //   // Animate background change
  //   gsap.fromTo(bgRef.current, { opacity: 0 }, { opacity: 1, duration: 0 });

  //   // Animate border highlight
  //   cardsRef.current.forEach((el, idx) => {
  //     if (el) {
  //       gsap.to(el, {
  //         border:
  //           idx === currentIndex ? "2px solid white" : "2px solid transparent",
  //         duration: 0,
  //       });
  //     }
  //   });
  // }, [currentIndex]);

  const handleMonthClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      // Animation đã được xử lý trong useEffect với currentIndex dependency
    }
  };

  return (
    <div className="w-full h-screen flex md:items-center items-start justify-center">
      <div className="relative w-[90%] md:h-[95%] h-[30%]  ">
        {/* Background Image */}
        <div className="absolute inset-0 pl-10 pr-10 rounded-2xl" ref={bgRef}>
          <Image
            src={monthlyWeatherData[currentIndex].bg}
            alt="Scenic background"
            fill
            className="object-cover rounded-2xl"
            priority
          />
          <div className="absolute inset-0 bg-black/20 rounded-2xl" />
        </div>

        {/* Weather Widget */}
        <div className="absolute top-6 left-6 z-10">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 text-white">
            <div className="text-3xl font-light mb-1">
              {monthlyWeatherData[currentIndex].temp}
            </div>
            <div className="text-sm opacity-80">NYC</div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleNavigation("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white rounded-full w-10 h-10 hidden md:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleNavigation("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm hover:bg-black/30 text-white rounded-full w-10 h-10 hidden md:flex"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Monthly Weather Timeline */}
        <div className="absolute md:bottom-0 bottom-[-9rem] left-0 right-0 z-10">
          {/* MOBILE VIEW */}
          <div className="md:hidden flex justify-start w-full overflow-x-auto gap-4 scrollbar-hide  pr-6 pb-4">
            {monthlyWeatherData.map((data, idx) => (
              <div
                key={data.month}
                onClick={() => handleMonthClick(idx)}
                className={`cursor-pointer flex-shrink-0 rounded-xl p-3 bg-black/20 min-w-[80px] text-center border transition-all ${
                  idx === currentIndex ? "bg-white/10" : "bg-white/30"
                }`}
              >
                <div className="text-black text-xs font-medium mb-2 opacity-80">
                  {data.month}
                </div>
                <div className="text-black text-lg font-semibold mb-1">
                  {data.temp}
                </div>
                <div className="text-black text-xs opacity-70 mb-1">
                  {data.condition}
                </div>
                <div className="text-black text-xs opacity-60">
                  {data.details}
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP VIEW: hiển thị đủ 12 tháng với Swiper */}
          <div className="hidden md:flex w-full px-16 pb-4 gap-2">
            {monthlyWeatherData.map((data, idx) => (
              <div
                key={data.month}
                onClick={() => handleMonthClick(idx)}
                className={`cursor-pointer flex-1 rounded-xl p-2 bg-black/30 text-center border transition-all w-[5.25rem] min-w-0 ${
                  idx === currentIndex
                    ? "bg-white/10 border-white"
                    : "bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.01)_100%)] border-white"
                }`}
              >
                <div className="text-white text-xs font-medium mb-2 opacity-80">
                  {data.month}
                </div>
                <div className="text-white text-lg font-semibold mb-1">
                  {data.temp}
                </div>
                <div className="text-white text-xs opacity-70 mb-1">
                  {data.condition}
                </div>
                <div className="text-white text-xs opacity-60">
                  {data.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
