"use client";
import { images } from "@/commons/images";
import { videos } from "@/commons/videos";
import { ButtonOrange } from "@/components/ui/ButtonOrange";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(MotionPathPlugin);

const items = [
  "13 YEARS EXPERIENCE",
  "PERSONALIZATION",
  "TOUR GUIDE WITH GOOD ENGLISH",
  "10.000 CUSTOMERS",
  "UNIQUE EXPERIENCES",
  "UNIQUE EXPERIENCES",
];

const contentTick = [
  "Tours accommodate a maximum of 10 guests",
  "Flexible cancellation policy",
  "Book now, pay later",
  "Fluent English-speaking guides",
  "Creating job opportunities for the Vietnamese community",
];

const TravelPage: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
  const [showMount2, setShowMount2] = useState<boolean>(false);
  const tourRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll check logic
    const handleScroll = () => {
      if (!tourRef.current) return;
      const rect = tourRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setShowMount2(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!showMount2) return; // Nếu showMount2 là false, hàm sẽ dừng lại và không làm gì cả.

    const roadPath = document.querySelector("#line_path") as SVGPathElement; // Lấy thẻ <path> của SVG (con đường)
    const motorcycle = document.querySelector("#motorcycle"); // Lấy phần tử HTML của chiếc xe máy (thường là một div chứa ảnh)

    // 3. Kiểm tra sự tồn tại của các phần tử
    if (roadPath && motorcycle) {
      const pathLength = roadPath.getTotalLength();

      // 5. Thiết lập trạng thái ban đầu của con đường (ẩn đi)
      // Khởi tạo stroke để ẩn đường kẻ
      gsap.set(roadPath, {
        strokeDasharray: pathLength, // Đặt độ dài của gạch ngang và khoảng trống của đường viền bằng tổng chiều dài
        strokeDashoffset: pathLength, // Dịch chuyển điểm bắt đầu của đường viền bằng tổng chiều dài, làm cho đường kẻ hoàn toàn ẩn đi
      });

      // 6. Thiết lập vị trí ban đầu của xe máy trên con đường
      gsap.set(motorcycle, {
        // Đặt vị trí ban đầu của xe máy
        xPercent: 0, // Điều chỉnh vị trí X của xe máy theo phần trăm chiều rộng của nó
        yPercent: 0, // Điều chỉnh vị trí Y của xe máy theo phần trăm chiều cao của nó
        motionPath: {
          // Sử dụng MotionPathPlugin để đặt xe máy lên đường
          path: roadPath, // Xe máy sẽ đi theo đường roadPath
          align: roadPath, // Xe máy sẽ được căn chỉnh theo đường roadPath
          alignOrigin: [0.6, 0.6], // Điểm neo của xe máy trên đường (ví dụ: 0.6 là 60% từ trái/trên)
          autoRotate: -90, // Xe máy sẽ tự động xoay để phù hợp với hướng của con đường, và xoay thêm -90 độ (để nó hướng đúng)
        },
      });

      // Timeline: vẽ đường kẻ xong mới chạy xe
      const tl = gsap.timeline();

      // 8. Animation 1: Vẽ con đường
      tl.to(roadPath, {
        // Animation cho con đường
        strokeDashoffset: 0, // Dịch chuyển offset về 0, làm cho đường kẻ dần hiện ra
        duration: 2.5, // Thời gian animation là 2.5 giây
        ease: "power1.inOut", // Kiểu chuyển động (bắt đầu và kết thúc mượt mà)
      });

      // 9. Animation 2: Di chuyển xe máy dọc theo con đường
      // Animation này sẽ bắt đầu NGAY SAU khi animation vẽ đường kết thúc (do là timeline)
      tl.to(motorcycle, {
        // Animation cho xe máy
        duration: 5, // Thời gian animation là 5 giây
        motionPath: {
          path: roadPath,
          align: roadPath,
          alignOrigin: [0.6, 0.6],
          autoRotate: -90,
        },
        ease: "none", // Không có easing, xe máy di chuyển với tốc độ không đổi
      });
    }
  }, [showMount2]); // Dependency array: useEffect này sẽ chạy lại khi showMount2 thay đổi

  const videoRef = useRef<HTMLDivElement>(null);
  const [expandVideo, setExpandVideo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current) return;
      const rect = videoRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 100;
      setExpandVideo(inView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative container-travel w-full z-20">
      <Image
        src={images.travel}
        alt="Travel background"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      <Image
        src={images.mount}
        alt="Mountain image"
        className="position-img-mount z-10"
      />

      {/* INTRO SECTION */}
      <div className="container-intro">
        <Image className="image-H z-0" src={images.H} alt="" />
        <p className="text-container-intro z-0">
          Hong Hao Travel is a travel company in Ha Giang, we specialize in
          organizing unforgettable tours to explore Ha Giang loop but still
          focus on the pristine nature of nature...
        </p>

        {/* Animated Bubbles */}
        <div className=" py-6 px-3 flex justify-center overflow-hidden md:w-[100rem]">
          <div className="animated-bubbles  flex gap-8 items-center justify-center">
            {items.map((text, index) => {
              const isHovered = hoveredIndex === index;
              const isLeaving = leavingIndex === index;

              return (
                <div
                  key={index}
                  className={`relative w-[6.99606rem] h-[6.99606rem] md:w-[10.75rem] md:h-[10.75rem] flex items-center justify-center rounded-full transition-transform duration-500 ${
                    isHovered
                      ? "background-travel-intro scale-110"
                      : "bg-transparent scale-100"
                  }`}
                  onMouseEnter={() => {
                    setHoveredIndex(index);
                    setLeavingIndex(null);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(null);
                    setLeavingIndex(index);
                    setTimeout(() => setLeavingIndex(null), 900);
                  }}
                >
                  <div className=" absolute inset-0 border-1 border-dotted border-white rounded-full animate-spin-slow" />
                  <div className="z-10 h-[3.5rem] overflow-hidden flex items-center justify-center text-center">
                    <p
                      className={`text-five-intro text-white ${
                        isHovered
                          ? "animate__animated animate__slideInDown"
                          : isLeaving
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }`}
                      style={{ animationDuration: "300ms" }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-five-intro z-0 hidden md:block mt-10">
          EXPLORE YOUR JOURNEY WITH US
        </p>
        <Image
          className="z-0 mb-26 md:mb-0 hidden md:block"
          src={images.downTravel}
          alt=""
        />
      </div>

      <div
        ref={tourRef}
        className="flex justify-between gap-10 pl-3  pr-3 container-honghao-tour"
      >
        <div className="left w-[38.8125rem] flex-1 flex flex-col gap-8">
          <p className="title-intro-honghoa">HONG HAO MOTORBIKE TOUR</p>
          <div className="flex flex-col gap-4">
            <p className="text-intro-honghoa">
              Experience the raw beauty of Hà Giang with our immersive travel
              adventures. From rugged mountain landscapes to vibrant ethnic
              cultures, Hà Giang offers a truly unique and authentic experience.
              Explore remote villages.
            </p>
            <div>
              {contentTick.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Image src={images.tick} alt="" />
                  <p className="text-tick">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex">
              <ButtonOrange
                heightClass="h-[3rem]"
                widthClass="w-[10rem]"
                href="/aboutUs"
              >
                About Us
              </ButtonOrange>
            </div>
          </div>
        </div>

        <div className="hidden md:block center flex-none  relative -top-20 z-10">
          <svg width="68" height="714" className="svg-no-bg">
            <path
              d="M12.1582 1.89551C9.56033 24.1217 1.63281 54.4379 1.63281 76.8445C1.63281 94.6201 5.52653 113.236 2.49001 130.848C-1.15298 151.977 12.7991 186.622 24.8723 203.614C41.5076 227.027 56.6881 254.78 62.9698 283.047C67.5053 303.457 66.8678 323.635 63.7318 344.194C62.2826 353.694 63.8138 363.39 62.3031 372.957C60.6279 383.567 58.2166 394.057 56.1123 404.578C52.6306 421.987 46.8569 437.015 36.7778 451.915C29.2215 463.085 23.0426 472.206 22.1102 485.726C20.9194 502.992 12.5121 520.164 9.34756 537.253C6.60436 552.066 10.2048 566.045 10.2048 580.684C10.2048 603.727 8.36815 626.026 14.9669 648.022C21.4484 669.626 13.2051 691.359 15.3479 712.787"
              stroke="#E64827"
              strokeWidth="2"
              strokeLinecap="round"
              id="line_path"
              style={{ strokeDashoffset: "0", strokeDasharray: "none" }}
            ></path>
          </svg>
          <Image
            id="motorcycle"
            src={images.motor}
            alt="Motorcycle"
            className="absolute w-[100px] h-[100px] mb-2"
          />
        </div>

        <div className="right flex-1 ">
          <div
            className={`${
              showMount2
                ? "animate__animated animate__slideInRight"
                : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <Image
              src={images.clouds}
              alt="Cloud Layer"
              className="cloud-floating"
            />
            <Image src={images.mount2} className="w-full" alt="Mountains" />
          </div>
        </div>
      </div>
      <div className="video-intro-honghao relative">
        <div
          ref={videoRef}
          className={`relative ${!isMobile ? "video-wrapper" : ""} ${
            expandVideo ? "expanded" : ""
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="contitle-text-video absolute top-4 left-0 w-full text-center z-10">
            <h2 className="welcom-honghao">WELCOME TO</h2>
            <p className="naturally">HA GIANG NATURALLY...</p>
            <p className="beatiful">BEATIFUL</p>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videos.honghao} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;
