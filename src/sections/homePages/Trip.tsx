"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "@/commons/images";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useMediaQuery } from "react-responsive";

export const TripPage: React.FC = () => {
  const imageMaps = [
    images.map3,
    images.map2,
    images.map1,
    images.map4,
    images.map5,
  ];
  const imagesLocation = [
    images.location1,
    images.location2,
    images.location3,
    images.location4,
    images.location5,
  ];
  const contentImageLocation = [
    {
      title: "Ha Giang Loop tour: Itinerary in 4 Days 5 Nights",
      accomodation: "Phòng Doom",
      motorbike: "Xe wave, Vision",
      tourGuide: "01 Tour guide with good English",
      transport: "Xe VIP, có trung chuyển",
      duration: "4 days 3 nights",
    },
    {
      title: "Sapa Adventure Tour",
      accomodation: "Khách sạn 3 sao",
      motorbike: "Xe Sirius",
      tourGuide: "1 hướng dẫn viên bản xứ",
      transport: "Xe giường nằm",
      duration: "4 days 3 nights",
    },
    {
      title: "Ninh Binh One Day Trip",
      accomodation: "Không cần lưu trú",
      motorbike: "Xe tự túc",
      tourGuide: "Hướng dẫn viên tiếng Anh",
      transport: "Xe limousine",
      duration: "4 days 3 nights",
    },
    {
      title: "Da Nang – Hoi An Experience",
      accomodation: "Homestay",
      motorbike: "Xe Vision",
      tourGuide: "1 tour guide thân thiện",
      transport: "Xe đưa đón tận nơi",
      duration: "4 days 3 nights",
    },
    {
      title: "Mekong Delta Cruise",
      accomodation: "Thuyền nghỉ",
      motorbike: "Không áp dụng",
      tourGuide: "HDV du lịch chuyên nghiệp",
      transport: "Tàu cao tốc",
      duration: "4 days 3 nights",
    },
  ];
  const contentImageLocationMobile = [
    {
      price: "$215",
      locationAndDate: "Ha Giang Loop 4d3n tour",
      include: "included 2 ways bus",
    },
    {
      price: "$215",
      locationAndDate: "Ha Giang Loop 4d3n tour",
      include: "included 2 ways bus",
    },
    {
      price: "$215",
      locationAndDate: "Ha Giang Loop 4d3n tour",
      include: "included 2 ways bus",
    },
    {
      price: "$215",
      locationAndDate: "Ha Giang Loop 4d3n tour",
      include: "included 2 ways bus",
    },
    {
      price: "$215",
      locationAndDate: "Ha Giang Loop 4d3n tour",
      include: "included 2 ways bus",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (isMobile) return;

    const observers: IntersectionObserver[] = [];

    sectionsRef.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isMobile]);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.3,
      spacing: 15,
    },
  });

  if (isMobile) {
    return (
      <div className="container-trip h-[90%] px-4">
        <p className="text-xl font-semibold pl-4">EXPLORE</p>
        <p className="best-trip-mobie text-[1rem] md:text-[3.5rem]  pb-4">
          BEST TRIPS FOR YOU
        </p>

        <div ref={sliderRef} className="keen-slider pl-3">
          {imagesLocation.map((img, index) => (
            <div key={index} className="keen-slider__slide ">
              <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md group relative">
                <Image
                  src={img}
                  alt={`Location ${index + 1}`}
                  className="object-cover w-full h-full"
                />

                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-sm">
                  <div className="absolute -top-3 rounded-full left-3 bg-white/30 text-white px-2 py-1 rounded z-10 text-black text-sm flex items-center gap-1">
                    <Image
                      src={images.clock}
                      alt="Clock"
                      className="img-clock"
                    />
                    {contentImageLocation[index].duration}
                  </div>
                  <p className="title-location font-semibold text-lg">
                    {contentImageLocationMobile[index].locationAndDate}
                  </p>

                  <p className="text-sm">
                    {contentImageLocationMobile[index].include}
                  </p>
                  <p className="text-2xl font-bold">
                    {contentImageLocationMobile[index].price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container-trip flex justify-around ">
      {/* LEFT PANEL (MAP IMAGE) - Hidden on mobile */}
      <div className="left w-1/2 sticky top-10">
        <p className="text-xl font-semibold">EXPLORE</p>
        <p className="best-trip">BEST TRIPS FOR YOU</p>
        <Image
          src={imageMaps[activeIndex]}
          alt="Map"
          width={600}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="right w-1/2 space-y-10">
        {imagesLocation.map((img, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="flex items-center"
          >
            <div className="w-full h-[520px] rounded-lg overflow-hidden shadow-md group relative">
              <div className="absolute top-3 rounded-full right-3 bg-white/30 text-white px-2 py-1 rounded z-10 text-black text-sm flex items-center gap-1">
                <Image src={images.clock} alt="Clock" className="img-clock" />
                {contentImageLocation[index].duration}
              </div>

              <Image
                src={img}
                alt={`Location ${index + 1}`}
                width={800}
                height={520}
                className="object-cover w-full h-full"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-sm">
                <p className="title-location font-semibold text-lg mb-2">
                  {contentImageLocation[index].title}
                </p>

                <div className="flex justify-between">
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-center gap-1">
                      <Image src={images.house} alt="House" />
                      <span>Accomondation:</span>{" "}
                      {contentImageLocation[index].accomodation}
                    </li>
                    <li className="flex items-center gap-1">
                      <Image src={images.motor1} alt="Motorbike" />
                      <span>Motorbike:</span>{" "}
                      {contentImageLocation[index].motorbike}
                    </li>
                    <li className="flex items-center gap-1">
                      <Image src={images.card} alt="Card" />
                      <span>Tour guide:</span>{" "}
                      {contentImageLocation[index].tourGuide}
                    </li>
                    <li className="flex items-center gap-1">
                      <Image src={images.bus} alt="Bus" />
                      <span>Transport:</span>{" "}
                      {contentImageLocation[index].transport}
                    </li>
                  </ul>

                  <div className="relative w-[10rem] mb-8 cursor-pointer">
                    <div className="transition-all duration-500 group-hover:-translate-y-6 pb-1 text-right">
                      <span className="block text-xl font-extrabold opacity-60">
                        From to
                      </span>
                      <p className="text-4xl font-bold">$140</p>
                    </div>
                    <button className="font-bold mt-2 absolute w-[80%] h-[80%] right-0 transform -translate-y-1/2 translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white px-4 py-2 rounded">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
