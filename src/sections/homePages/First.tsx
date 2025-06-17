"use client";
import { images } from "@/commons/images";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function FirstSection() {
  const [isMobile, setIsMobile] = useState(false);
  // Phần logic desktop giữ nguyên
  const [showSlider, setShowSlider] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const leftCircleRef = useRef<HTMLDivElement>(null);
  const rightCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (animationComplete) {
      const timer = setTimeout(() => {
        setShowSlider(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  useEffect(() => {
    // Kiểm tra ngay khi component mount
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderImages = [
    images.duGia,
    images.homeStay,
    images.kinhNghiem,
    images.yenMinh,
  ];
  const renderSwiper = () => (
    <div className="relative h-screen w-screen">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        allowTouchMove={false}
        className="h-full w-full"
      >
        {sliderImages.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Slide ${idx}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Book Form - Positioned absolutely at bottom center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 pb-8 z-10 hidden md:block">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">DATE</label>
              <Select defaultValue="5days4night">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5days4night">5 days 4 night</SelectItem>
                  <SelectItem value="3days2night">3 days 2 night</SelectItem>
                  <SelectItem value="7days6night">7 days 6 night</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                TYPE OF TOUR
              </label>
              <Select defaultValue="budget">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Best Budget</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                GUEST DRIVING
              </label>
              <Select defaultValue="5pax">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2pax">2 pax</SelectItem>
                  <SelectItem value="4pax">4 pax</SelectItem>
                  <SelectItem value="5pax">5 pax</SelectItem>
                  <SelectItem value="8pax">8 pax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                PRIVATE DRIVING
              </label>
              <Select defaultValue="5pax">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2pax">2 pax</SelectItem>
                  <SelectItem value="4pax">4 pax</SelectItem>
                  <SelectItem value="5pax">5 pax</SelectItem>
                  <SelectItem value="8pax">8 pax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full rounded-lg py-3 h-max">
                <div className="text-center">
                  <div className="text-lg font-bold">$299</div>
                  <div className="text-xs">BOOK NOW</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Trên điện thoại, luôn hiển thị renderSwiper ngay lập tức
  if (isMobile) {
    return renderSwiper();
  }

  return showSlider ? (
    renderSwiper()
  ) : (
    <div className="hidden md:block min-h-screen relative overflow-hidden">
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4 pb-8 z-10 hidden md:block z-20">
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">DATE</label>
              <Select defaultValue="5days4night">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5days4night">5 days 4 night</SelectItem>
                  <SelectItem value="3days2night">3 days 2 night</SelectItem>
                  <SelectItem value="7days6night">7 days 6 night</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                TYPE OF TOUR
              </label>
              <Select defaultValue="budget">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="budget">Best Budget</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                GUEST DRIVING
              </label>
              <Select defaultValue="5pax">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2pax">2 pax</SelectItem>
                  <SelectItem value="4pax">4 pax</SelectItem>
                  <SelectItem value="5pax">5 pax</SelectItem>
                  <SelectItem value="8pax">8 pax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                PRIVATE DRIVING
              </label>
              <Select defaultValue="5pax">
                <SelectTrigger className="border-0 bg-transparent p-0 h-auto">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2pax">2 pax</SelectItem>
                  <SelectItem value="4pax">4 pax</SelectItem>
                  <SelectItem value="5pax">5 pax</SelectItem>
                  <SelectItem value="8pax">8 pax</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full rounded-lg py-3 h-max">
                <div className="text-center">
                  <div className="text-lg font-bold">$299</div>
                  <div className="text-xs">BOOK NOW</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={images.uiFrame1}
        alt="Background"
        fill
        priority
        sizes="100vw"
        quality={100}
      />

      

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center">
        {/* Hero Text */}
        {/* <div className="text-center mb-8">
          <p className="text-white/80 text-sm mb-4 tracking-wider">GET READY</p>
          <h1 className="text-white text-6xl md:text-8xl font-bold mb-4">DISCOVER</h1>
          <h2 className="text-white/40 text-4xl md:text-6xl font-bold">HALONG LOOP</h2>
        </div> */}

        {/* Hero Image */}
        <div className="relative w-[30.3125rem] h-[32.5625rem] ">
          <div className="absolute inset-0  rounded-lg h-full overflow-hidden">
            <Image
              src={images.location2}
              alt="Ha Long Bay scenic view"
              fill
              className="first-img object-cover"
            />
          </div>
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center">
            <p className="text-white/80 text-sm mb-4 tracking-wider">
              GET READY
            </p>
            <h1 className="text-white text-6xl md:text-8xl font-bold mb-4">
              DISCOVER
            </h1>
            <h2 className="text-white/40 text-4xl md:text-6xl font-bold">
              HA LONG LOOP
            </h2>
          </div>
        </div>

        {/* Booking Form */}
      </main>

      {/* Side Navigation */}
      {/* <div className="fixed left-4 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col gap-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white/50 rounded-full" />
        </div>
      </div> */}

      {/* Social Media Icons */}
      {/* <div className="fixed right-6 bottom-6  z-20">
        <div className="flex flex-col gap-4">
          <Button
            size="icon"
            className="bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12"
          >
            <Phone className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-12 h-12"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </div>
      </div> */}

      {/* Decorative elements */}
      <motion.div
        ref={rightCircleRef}
        className="absolute top-1/2 right-1/4 text-white/20 text-4xl font-bold select-none"
        initial={{ x: 0, rotate: 12 }}
        animate={{
          x: "25vw", // Di chuyển đến sát mép phải màn hình
          rotate: 0,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          rotate: { duration: 0.5 },
        }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        ○
      </motion.div>
      <motion.div
        ref={leftCircleRef}
        className="absolute top-1/2 left-1/4 text-white/20 text-4xl font-bold select-none"
        initial={{ x: 0, rotate: -12 }}
        animate={{
          x: "-25vw", // Di chuyển đến sát mép trái màn hình
          rotate: 0,
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          rotate: { duration: 0.5 },
        }}
      >
        ○
      </motion.div>
    </div>
  );
}
