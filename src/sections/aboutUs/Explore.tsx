import { images } from "@/commons/images";
import Image from "next/image";

const ExploreSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden md:w-[100rem]">
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
        <p>
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
