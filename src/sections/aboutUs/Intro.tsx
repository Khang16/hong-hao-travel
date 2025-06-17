import { images } from "@/commons/images";
import { ButtonOrange } from "@/components/ui/ButtonOrange";
import { ButtonOrangeOutline } from "@/components/ui/ButtonOrangeOutline";
import Image from "next/image";

const IntroSection: React.FC = () => {
  return (
    <div className="relative overflow-auto min-h-screen ">
      <div className="absolute inset-0 z-0">
        <Image
          src={images.bgImgIntroAboutUs}
          alt="Ha Giang terraced fields landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#122718]" />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row mt-[3rem]  md:mt-28 gap-8 md:px-5 lg:px-20">
        {/* Background Image */}

        {/* Main Content */}
        <div className=" z-10 flex flex-col px-5 md:px-0">
          {/* Header Section */}

          <div className="">
            <div className="grid grid-cols-1  gap-12 items-start">
              {/* Left Content */}
              <div className=" ">
                {/* Title */}
                <div className="relative w-[20rem] h-[10rem]  md:w-[61rem] md:h-[25rem] ">
                  <Image
                    src={images.titleABoutUs}
                    alt="ảnh title"
                    fill
                    className="object-contain w-full"
                  />
                </div>

                {/* Description */}
                <div>
                  <p className="text-white text-base font-normal leading-[1.5rem] tracking-[0.005rem] font-[Trip Sans] w-[20rem] md:w-[50.5rem]">
                    Ha Giang, nestled in the rugged mountains of northern
                    Vietnam, beckons adventurers with its breathtaking scenery
                    and unique cultural tapestry. From the towering peaks of the
                    Dong Van Karst Plateau to the winding roads of the Ma Pi
                    Leng Pass, Ha Giang offers an unforgettable journey through
                    some of Vietnam&apos;s most awe-inspiring landscapes.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-5 mt-[2rem]  ">
                  <ButtonOrange heightClass="h-[3.5rem] pl-[1.6rem] pr-[1.6rem] pt-[1rem] pb-[1rem] ">
                    BOOK NOW
                  </ButtonOrange>
                  <ButtonOrangeOutline heightClass="h-[3.5rem] pl-[1.7rem] pr-[1.7rem] pt-[1rem] pb-[1rem]">
                    ALL TOUR
                  </ButtonOrangeOutline>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex pt-[12rem] pr-[2rem]">
          <div className="relative w-[60rem] h-[92rem]">
            <Image
              src={images.mapAboutUs}
              alt="ảnh map about us"
              fill
              className="object-cover "
            ></Image>
          </div>
          <div className="absolute top-180  left-225 flex items-center gap-18">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
              <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
            </svg>
            <div>
              <p className="text-[7.5rem] font-bold leading-[100%] uppercase bg-gradient-to-b from-white from-[30.31%] to-white/0 to-[87.67%] bg-clip-text text-transparent ">
                10.000
              </p>
            </div>
          </div>

          <div className="absolute top-290  left-9 flex items-center gap-5">
            <p className="yearAbout text-[7.5rem] font-bold leading-[100%] uppercase bg-gradient-to-b from-white from-[30.31%] to-white/0 to-[87.67%] bg-clip-text text-transparent ">
              13 year
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
              <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
            </svg>
          </div>
        </div>
        <div className="relative block md:hidden w-screen px-">
          <Image
            src={images.vectorVien}
            alt="vien"
            className="w-full h-full"
          ></Image>
          <div className="absolute top-[0%] right-[5%] flex items-center gap-5">
            <div>
              <p className="text-[3.5rem] font-bold leading-[100%] uppercase bg-gradient-to-b from-white from-[30.31%] to-white/0 to-[87.67%] bg-clip-text text-transparent ">
                10.000
              </p>
              <div className="flex flex-col items-center jutify-center  py-1.5 px-3 rounded-3xl bg-white/15 backdrop-blur text-white text-sm  w-fit">
                Visitors experience
              </div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
              <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
            </svg>
          </div>

          <div className="absolute top-[55%] left-[0.5%] flex-col justify-end items-end gap-5">
            <p className="yearAbout mb-[0.5rem] text-[3.5rem] font-bold leading-[100%] uppercase bg-gradient-to-b from-white from-[30.31%] to-white/0 to-[87.67%] bg-clip-text text-transparent ">
              13 year
            </p>
            <div className="flex flex-col items-center jutify-center  py-1.5 px-3 rounded-3xl bg-white/15 backdrop-blur text-white text-sm mb-[2rem] w-fit">
              Experience
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <circle cx="10" cy="10" r="3.5" fill="#E64827" stroke="#E64827" />
              <circle cx="10" cy="10" r="9.5" stroke="#E64827" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
