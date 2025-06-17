"use client";
import { images } from "@/commons/images";
import Image from "next/image";
import React, { useEffect } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const EthicalSection: React.FC = () => {
  const contentTick = [
    "Tours accommodate a maximum of 10 guests",
    "Flexible cancellation policy",
    "Book now, pay later",
    "Fluent English-speaking guides",
    "Creating job opportunities for the Vietnamese community",
  ];

  useEffect(() => {
    const roadPath = document.querySelector("#line_path") as SVGPathElement;
    const motorcycle = document.querySelector("#motorcycle") as HTMLElement;

    if (roadPath && motorcycle) {
      gsap.set(motorcycle, {
        xPercent: -30,
        yPercent: -10,
        motionPath: {
          path: roadPath,
          align: roadPath,
          alignOrigin: [1, 0.8],
          autoRotate: true,
        },
      });

      const tl = gsap.timeline({
        repeat: 0,
        yoyo: false,
        delay: 0,
        scrollTrigger: {
          trigger: ".container-ethical",
          start: "top center",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(motorcycle, {
        duration: 10,
        motionPath: {
          path: roadPath,
          align: roadPath,
          alignOrigin: [0.8, 0.8],
          autoRotate: true,
          end: 0.31,
        },
        ease: "none",
      });
    }

    gsap.from(".tick-item", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".tick-list-container",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    gsap.from(".ethical-description", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".ethical-description",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container-ethical relative  h-full w-screen  md:pr-[5rem]">
      <div className="absolute inset-0 z-0 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 794"
          fill="none"
          className="absolute w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            id="line_path"
            d="M4.44393 6.32847C4.38697 6.32647 4.3301 6.32444 4.27333 6.3224C4.45999 6.3224 4.63916 6.32232 4.811 6.32218C9.74626 6.31815 8.62587 6.25929 4.811 6.32218C4.69126 6.32416 4.56887 6.32625 4.44393 6.32847C19.8048 6.86902 41.8048 5.95188 56.6013 7.68951C66.7895 8.88596 77.7971 9.65078 88.3718 10.1608C107.046 11.0615 126.861 14.3912 144.749 16.3128C183.71 20.4982 249.58 27.2 287.249 20.0461C313.864 14.9915 333.482 7.81607 365.897 7.26886C383.188 6.97696 399.481 5.6608 416.356 5.37594C423.649 5.25282 447.091 0.237699 447.815 0.433311C465.295 5.15461 484.665 11.2898 507.462 13.0002C543.842 15.7297 580.617 14.0821 616.79 18.1532C619.791 18.4908 663.859 40.3255 667 39C673.84 36.1134 683.588 34.4603 693.631 32.9532C705.006 31.2463 711.445 41.4187 724.82 41.4187C732.498 41.4187 733.669 40.6985 740.082 39.7361C744.932 39.0083 751.049 40.1687 755.5 39C763.296 36.9529 761.812 53.1826 772.373 53.1826C777.563 53.1826 780.549 54.1291 784.987 54.1291C791.48 54.1291 796.038 52.3636 803.209 52.2362C819.323 51.9498 819.408 50.9758 827.815 56.9685C831.916 59.8909 837.614 60.961 844.635 62.8575C852.923 65.0962 860.344 66.9972 871.111 68.1156C888.454 69.9173 912.673 68.9306 927.176 72.8479C935.537 75.1062 952.088 75.1691 960.816 77.5802C974.254 81.2922 997.532 82.6052 1013.46 85.1518C1021.01 86.3598 1071.54 94.2134 1077.93 91.5141C1090.05 86.3976 1115.04 81.5574 1132.6 78.2638C1145.23 75.8943 1155.85 75.8956 1170.44 75.8975L1171.69 75.8976C1178.67 75.8976 1178.89 77.6297 1185.08 77.7905C1193.13 77.9997 1199.75 78.737 1208.28 78.737C1241.12 78.737 1272.7 78.3503 1304.69 81.0505C1317.87 82.1636 1333.32 84.4157 1347.05 84.4157H1389.1C1393.2 84.4157 1403.3 85.0468 1405.92 83.9425C1409.18 82.564 1418.89 85.1911 1422.74 85.5725C1436.27 86.9169 1450.48 91.7033 1464.78 91.9874C1470.37 92.0983 1473.76 92.9143 1478.8 93.6699C1487.57 94.986 1499.05 92.9676 1508.08 94.3535C1520.54 96.2657 1543.77 94.2199 1554.33 97.1929C1559.34 98.6025 1592.27 98.093 1598.33 98.6775C1618.48 100.622 1619.51 107.899 1619.51 113.611C1637.37 139.196 1626.11 914.92 1625.14 1004.43C1626.15 1005.58 1627.94 1006.37 1630.99 1006.44C1633.7 1006.51 1630.54 1006.49 1625.11 1006.45C1625.08 1009.26 1625.07 1011.17 1625.07 1012.12V1006.45C1615.82 1006.38 1600.02 1006.23 1595.4 1006.23H1593.9C1583.02 1006.23 1570.87 1006.23 1559.42 1006.44C1522.08 1007.13 1485.99 1006.98 1449.01 1006.18C1391.67 1004.93 1332.74 1000.55 1275.67 1000.55C1218.39 1000.55 1162.37 999.606 1105.45 999.606H998.767C964.152 999.606 930.353 1001.24 895.824 1001.45C817.482 1001.9 739.013 1001.5 660.66 1001.5H157.938H55.7739C44.2989 1001.5 30.4251 1002.2 19.1755 1001.5C-20.9459 1001.5 -25.6756 972.625 -17.8887 972.625C-25.8183 958.436 -23.7595 85.6463 -23.7595 71.2075V22.4122V10.1082C-23.7595 7.18925 -3.92971 6.47722 4.44393 6.32847Z"
            fill="#13341C"
          />
        </svg>
      </div>
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src={images.bgMobileEthical}
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-30 pt-[10rem] md:py-[5rem] ">
        <div className="flex flex-col md:flex-row items-center justify-around h-full">
          <div className="pl-[1rem] md:p-0">
            <span className="text-1125 xmd:text-0875 font-extrabold text-white ">
              HONG HA TRAVEL
            </span>
            <h2 className="ethical-commitments text-35 xmd:text-25 xmd:leading-[130%] font-black text-white xmd:w-[16.04469rem] mb-[2rem]">
              ETHICAL COMMITMENTS
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="900"
              className="ethical-description w-[20.9375rem] md:w-[38.8125rem] text-1 font-normal text-white "
            >
              At our Ha Giang tourism company, we adhere to a set of ethical
              guidelines that guide our operations and define our commitment to
              responsible tourism. Our foremost principle is to respect and
              preserve the natural environment and cultural heritage of Ha
              Giang. We prioritize sustainable practices to minimize our
              ecological footprint and actively engage in conservation efforts.
              Furthermore, we deeply value the communities we operate in and
              strive to foster positive relationships with local residents. We
              prioritize their well-being and economic empowerment through fair
              employment practices and community development initiatives.
              Additionally, we prioritize the safety and satisfaction of our
              guests, ensuring that every experience with us is both enjoyable
              and enriching
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {contentTick.map((item, index) => (
                <div key={index} className="flex items-center gap-4 tick-list-container">
                  <Image src={images.tick} alt="Tick" width={20} height={20} />
                  <p className="text-white font-bold tick-item">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-[2rem] md:mt-0 w-[100vw] h-[15rem] md:w-[41.9375rem] md:h-[26.375rem] relative  rounded-lg">
            <Image
              src={images.people}
              alt="ảnh người"
              fill
              className="object-container rounded-[1rem] "
            />
          </div>
        </div>

        <div
          id="motorcycle"
          className="hidden md:block absolute w-20 h-24 z-20"
        >
          <Image
            src={images.objectMotor}
            alt="Motorcycle"
            fill
            className="absolute object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default EthicalSection;
