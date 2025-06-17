"use client"
import { images } from "@/commons/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect } from "react";

const ExploreSection: React.FC = () => {
  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".text-explore",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
          trigger: ".container-explore",
          start: "top center",
          toggleActions: "play none none none",
          once: true
        }
      }
    );
  }, [])
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.patternWhite}
          alt="Ha Giang terraced fields landscape"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="relative container-explore z-10 pt-[2rem] md:py-40">
        <p className="text-explore">
          Explore the rugged beauty of Ha Giang on our thrilling motorcycle
          tours. Feel the wind in your hair as you navigate through twisting
          mountain roads and remote villages, soaking in the breathtaking
          scenery of towering peaks and lush valleys. Our experienced guides
          will lead you on an unforgettable adventure
        </p>
      </div>
    </div>
  );
};
export default ExploreSection;
