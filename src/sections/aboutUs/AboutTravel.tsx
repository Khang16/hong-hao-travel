"use client";

import { images } from "@/commons/images";
import { ButtonOrange } from "@/components/ui/ButtonOrange";
import { ButtonOrangeOutline } from "@/components/ui/ButtonOrangeOutline";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const AboutTravel: React.FC = () => {
  const imagesClient = [
    images.location1,
    images.location2,
    images.location3,
    images.location4,
    images.location1,
    images.location2,
  ];

  return (
    <div className="our-team1 flex justify-around pl-20 pr-20 gap-8 max-lg:flex-col max-lg:px-0 py-[5rem] ">
      {/* Left Section */}
      <div className="left-out-team w-[30%] flex flex-col gap-4 max-lg:w-full max-lg:px-5">
        <p className="title1">HONG HAO TRAVEL</p>
        <p className="name-team1 pt-4">OUR TEAM</p>
        <p className="intro1">
          We pride ourselves on having a team of dedicated and passionate
          individuals who are committed to providing exceptional service and
          unforgettable experiences to our guests. Our team is comprised of
          knowledgeable professionals with diverse backgrounds and expertise in
          various aspects of the tourism industry.
        </p>
        <div className="flex gap-8 justify-center">
          <ButtonOrange widthClass="w-[10rem] h-[3rem]">Join with us</ButtonOrange>
          <ButtonOrangeOutline widthClass="w-[10rem]">
            Call us 
          </ButtonOrangeOutline>
        </div>
      </div>
      {/* Right Section - Slider */}
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
                    <div className="flex justify-center items-center gap-2 text-sm">
                      <p>Tour leader</p>
                      <p>-</p>
                      <p>3 year EXP</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <p
                    className="feedback text-sm max-h-16 overflow-y-auto scroll-custom pr-2 w-[15.75rem] scrollbar-custom text-center text-xs font-normal leading-[120%] tracking-[0.00375rem]"
                    data-lenis-prevent
                  >
                    “As a tour guide, my greatest joy is witnessing the wonder
                    and awe on travelers&apos; faces as they discover the hidden
                    gems and cultural treasures of our destination”
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Gradient overlay */}
        <div
          className="absolute top-0 -right-10 w-[13rem] h-full pointer-events-none z-30 bg-gradient-to-r rounded-xl max-lg:hidden"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 1.95%, rgba(255, 255, 255, 1) 94.2%)",
          }}
        />
      </div>
    </div>
  );
};

export default AboutTravel;
