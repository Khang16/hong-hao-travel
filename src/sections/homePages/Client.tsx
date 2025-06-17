"use client";

import { images } from "@/commons/images";
import { ButtonOrange } from "@/components/ui/ButtonOrange";
import { ButtonTransparent } from "@/components/ui/ButtonTransparent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ClientSayPage: React.FC = () => {
  const imagesClient = [
    images.location1,
    images.location2,
    images.location3,
    images.location4,
    images.location1,
    images.location2,
  ];

  const imageSocials = [images.iconXanh, images.tiktok, images.face, images.ig];
  const cloudImages = [
    images.may1,
    images.may2,
    images.may3,
    images.may4,
    images.may5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imagesClient.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesClient.length]);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = 120;

    gsap.utils.toArray<HTMLElement>(".cloud-image").forEach(($el) => {
      const width = $el.clientWidth;
      const y = Math.random() * (windowHeight - 50);
      const delay = gsap.utils.random(0, 3);
      const repeatDelay = gsap.utils.random(0, 2);
      const duration = gsap.utils.random(20, 60);

      gsap.set($el, {
        opacity: 1,
        y,
        x: gsap.utils.random(windowWidth, windowWidth + 100),
      });

      gsap.to($el, {
        duration,
        x: -width,
        repeat: -1,
        delay,
        repeatDelay,
        ease: "none",
      });
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center container-travel mt-5 py-10"
      style={{ backgroundImage: `url(${images.bgClientSay.src})` }}
    >
      <p className="title-client-say text-center text-white text-2xl font-bold mb-6">
        CLIENT SAY ...
      </p>

      {/* Slider Image Section */}
      <div className="slide-travel flex justify-center mb-10">
        <Image
          src={imagesClient[currentIndex]}
          alt="client-say"
          className="object-cover rounded-2xl"
        />
      </div>

      {/* Social Icons */}
      <div className="text-center mb-10">
        <p className="text-white font-bold text-base mb-2">View us on:</p>
        <div className="icon-social flex items-center justify-center gap-3">
          {imageSocials.map((imgSocial, key) => (
            <div key={key} className="w-8 h-8 relative">
              <Image
                src={imgSocial}
                alt={`social-icon-${key}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hover Card Section */}
      <div className="our-team flex justify-around pl-20 pr-20 gap-8 max-lg:flex-col max-lg:px-5">
        <div className="left-out-team w-[30%] flex flex-col gap-4 max-lg:w-full">
          <p className="title">HONG HAO TRAVEL</p>
          <p className="name-team pt-4">OUR TEAM</p>
          <p className="intro">
            We pride ourselves on having a team of dedicated and passionate
            individuals who are committed to providing exceptional service and
            unforgettable experiences to our guests. Our team is comprised of
            knowledgeable professionals with diverse backgrounds and expertise
            in various aspects of the tourism industry.
          </p>
          <div className="flex gap-8">
            <ButtonOrange href="/aboutUs" widthClass="w-[10rem]" >
              Join with us  
            </ButtonOrange>
            <ButtonTransparent>
              Call us  
            </ButtonTransparent>
          </div>
        </div>
        <div className="w-[100%] mx-auto relative max-lg:w-full">
          <Splide
            options={{
              type: "loop",
              perPage: 3.3,
              perMove: 1,
              gap: "1rem",
              pagination: false,
              arrows: true,
              breakpoints: {
                1024: { perPage: 2 },
                640: { perPage: 1.2 },
              },
            }}
          >
            {imagesClient.map((img, index) => (
              <SplideSlide key={index}>
                <div className="relative group w-full h-[25rem] overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:-translate-y-20 z-20">
                    <div className="w-full h-full relative">
                      <Image
                        src={img}
                        alt={`location-${index}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-y-75"
                      />
                    </div>
                    <div className="infor-name absolute bottom-0 w-full bg-white text-black text-center py-2 font-medium text-lg">
                      Mr. ABC
                      <div className="flex justify-center items-center gap-2">
                        <p>Tour leader</p>
                        <p>-</p>
                        <p>3 year EXP</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                    <p
                      className="feedback text-sm max-h-16 overflow-y-auto scroll-custom pr-2 w-[15.75rem] scrollbar-custom group-hover:translate-y-[0rem] translate-y-[2rem] group-hover:h-[4rem]  overflow-y-auto h-0 duration-500 ease-linear text-greyscale-30 text-center text-xs not-italic font-normal leading-[120%] tracking-[0.00375rem]"
                      data-lenis-prevent
                    >
                      “As a tour guide, my greatest joy is witnessing the wonder
                      and awe on travelers&apos; faces as they discover the
                      hidden gems and cultural treasures of our destination”
                    </p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <div
            className="absolute top-0 -right-10 w-[13rem] h-full pointer-events-none z-30 bg-gradient-to-l rounded-xl max-lg:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(19, 40, 25, 0.00) 1.95%, #132819 94.2%)",
            }}
          />
        </div>
      </div>
      <div className="animation-cloud">
        <Image
          src={images.demCloud}
          alt="cloud background"
          className="bg-cloud"
          priority
        />
      </div>
      <div className="clouds-row relative overflow-hidden h-[120px]">
        {[...Array(4)].flatMap((_, i) =>
          cloudImages.map((cloud, idx) => (
            <div key={`${i}-${idx}`} className="cloud-image absolute top-0">
              <div className="w-[40rem] h-[25rem] relative">
                <Image
                  src={cloud}
                  alt={`cloud-${idx}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ClientSayPage;
