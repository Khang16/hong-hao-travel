"use client";

import React, { useRef, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { images } from "@/commons/images";
import { useMediaQuery } from "react-responsive";

const MomemtPage: React.FC = () => {
  const circularText = "HONG HAO TRAVEL. HONG HAO TRAVEL.";
  const characters = circularText.split("");

  const travelImages: (StaticImageData | string)[] = [
    images.location3,
    images.kinhNghiem,
    images.homeStay,
    images.cus1,
    images.cus2,
    images.cus3,
    "",
  ];

  const travelImages1: (StaticImageData | string)[] = [
    images.homeStay,
    images.cus1,
    images.cus2,
    images.cus3,
    images.location1,
    images.location3,
    images.kinhNghiem,
  ];

  const splideRef1 = useRef<HTMLDivElement>(null);
  const splideRef2 = useRef<HTMLDivElement>(null);
  const splideInstance1 = useRef<Splide | null>(null);
  const splideInstance2 = useRef<Splide | null>(null);
  const mobileSlider1Ref = useRef<HTMLDivElement>(null);
  const mobileSlider2Ref = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);
  const directionRef = useRef<'left' | 'right'>('left');
  const positionRef = useRef<number>(0);

  const [, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Mobile slider animation
  const animateSlider = (sliderRef: React.RefObject<HTMLDivElement>, speed: number) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const content = slider.firstChild as HTMLElement;
    if (!content) return;

    const sliderWidth = slider.offsetWidth;
    const contentWidth = content.scrollWidth;

    // Reverse direction when reaching edges
    if (positionRef.current <= -(contentWidth - sliderWidth)) {
      directionRef.current = 'right';
    } else if (positionRef.current >= 0) {
      directionRef.current = 'left';
    }

    // Update position
    positionRef.current += directionRef.current === 'left' ? -speed : speed;

    // Apply transform
    content.style.transform = `translateX(${positionRef.current}px)`;

    animationFrameRef.current = requestAnimationFrame(() => animateSlider(sliderRef, speed));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Initialize desktop sliders or mobile animation
  useEffect(() => {
    if (!isMobile) {
      // Desktop - Initialize Splide
      if (splideRef1.current && splideRef2.current) {
        const splide1 = new Splide(splideRef1.current, {
          type: "slide",
          drag: false,
          focus: "center",
          perPage: 3,
          autoScroll: { speed: 1 },
          gap: "1rem",
          arrows: false,
          pagination: false,
          extensions: { AutoScroll },
        });

        const splide2 = new Splide(splideRef2.current, {
          type: "slide",
          drag: false,
          focus: "center",
          perPage: 3,
          autoScroll: { speed: 1 },
          gap: "1rem",
          arrows: false,
          pagination: false,
          extensions: { AutoScroll },
        });

        splideInstance1.current = splide1;
        splideInstance2.current = splide2;

        splide1.mount({ AutoScroll });
        splide2.mount({ AutoScroll });

        const pauseAll = () => {
          splideInstance1.current?.Components?.AutoScroll?.pause();
          splideInstance2.current?.Components?.AutoScroll?.pause();
        };

        const playAll = () => {
          splideInstance1.current?.Components?.AutoScroll?.play?.();
          splideInstance2.current?.Components?.AutoScroll?.play?.();
        };

        [splideRef1.current, splideRef2.current].forEach((ref) => {
          ref.addEventListener("mouseenter", pauseAll);
          ref.addEventListener("mouseleave", playAll);
        });

        return () => {
          [splideRef1.current, splideRef2.current].forEach((ref) => {
            if (ref) {
              ref.removeEventListener("mouseenter", pauseAll);
              ref.removeEventListener("mouseleave", playAll);
            }
          });

          splideInstance1.current?.destroy();
          splideInstance2.current?.destroy();
          splideInstance1.current = null;
          splideInstance2.current = null;
        };
      }
    } else {
      // Mobile - Start custom animation
      positionRef.current = 0;
      directionRef.current = 'left';
      if (mobileSlider1Ref.current) animateSlider(mobileSlider1Ref as React.RefObject<HTMLDivElement>, 0.3);
      if (mobileSlider2Ref.current) animateSlider(mobileSlider2Ref as React.RefObject<HTMLDivElement>, 0.3);

      return () => {
        cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [isMobile]);

  return (
    <div className="container-moment overflow-hidden" ref={containerRef}>
      <div className="top-moment flex items-center justify-end animate-left-right md:animate-none">
        <div className="left-moment whitespace-nowrap mr-4">
          <p>THE GLADDEST MOMENT</p>
        </div>

        <div className="center-moment relative mr-4">
          <Image
            src={images.mapOrange}
            alt="Map"
            className="circular-text-image w-ful"
          />
          <div
            className="circular-text-container"
            style={{ "--total": characters.length } as React.CSSProperties}
          >
            {characters.map((char, index) => (
              <span
                key={index}
                style={{ "--index": index } as React.CSSProperties}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <div className="right-moment bg-white md:bg-gradient-to-br md:from-white md:to-green-100 hidden md:block">
          <div className="left-moment whitespace-nowrap mr-4 block md:hidden">
            <p>THE GLADDEST MOMENT</p>
          </div>

          <p className="text-[0.875rem] font-normal leading-[1.2] tracking-[0.00875rem] text-[#262626] ml-[2.13rem] hidden md:block">
            Don&apos;t hesitate to pick up your backpack and go. When you reach
            your destination and <br /> see all the beautiful things in sight,
            you will know that your efforts were worth it...
          </p>
        </div>
      </div>

      <div className="images1 mt-6">
        {isMobile ? (
          <>
            {/* Mobile slider 1 - First row */}
            <div 
              ref={mobileSlider1Ref}
              className="mobile-slider overflow-hidden w-full"
            >
              <div className="flex w-max gap-4 pl-[10rem]"> {/* Added padding to create stagger */}
                {travelImages.map((imgSrc, index) => (
                  <div key={index} className="w-[300px] h-[200px] flex-shrink-0">
                    {imgSrc ? (
                      <Image
                        src={imgSrc}
                        alt={`Travel slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                        placeholder="blur"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="position-img1 hidden md:block">
              <Image src={images.ourGallery} alt="Our Gallery" />
            </div>

            {/* Mobile slider 2 - Second row (staggered) */}
            <div 
              ref={mobileSlider2Ref}
              className="mobile-slider overflow-hidden w-full mt-4"
            >
              <div className="flex w-max gap-4 pr-[50px]"> {/* Added padding to create stagger */}
                {travelImages1.map((imgSrc, index) => (
                  <div key={index} className="w-[300px] h-[200px] flex-shrink-0">
                    {imgSrc ? (
                      <Image
                        src={imgSrc}
                        alt={`Travel slide ${index + 1}`}
                        className="w-full h-full object-cover rounded-xl"
                        width={400}
                        height={300}
                        placeholder="blur"
                      />
                    ) : (
                      <div className="w-full h-full rounded-xl bg-transparent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Desktop Splide sliders */}
            <div className="splide offset-slide" ref={splideRef1}>
              <div className="splide__track">
                <ul className="splide__list w-[84rem] md:w-full">
                  {travelImages.map((imgSrc, index) => (
                    <li className="splide__slide" key={index}>
                      {imgSrc ? (
                        <Image
                          src={imgSrc}
                          alt={`Travel slide ${index + 1}`}
                          className="w-full h-[300px] object-cover rounded-xl"
                          placeholder="blur"
                        />
                      ) : (
                        <div className="w-full h-[300px] rounded-xl bg-transparent" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="position-img1 hidden md:block">
                <Image src={images.ourGallery} alt="Our Gallery" />
              </div>
            </div>

            <div className="splide mt-5" ref={splideRef2}>
              <div className="splide__track">
                <ul className="splide__list w-[84rem] md:w-full">
                  {travelImages1.map((imgSrc, index) => (
                    <li className="splide__slide" key={index}>
                      {imgSrc ? (
                        <Image
                          src={imgSrc}
                          alt={`Travel slide ${index + 1}`}
                          className="w-full h-[300px] object-cover rounded-xl"
                          width={400}
                          height={300}
                          placeholder="blur"
                        />
                      ) : (
                        <div className="w-full h-[300px] rounded-xl bg-transparent" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MomemtPage;