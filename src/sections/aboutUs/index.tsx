import AboutTravel from "@/sections/aboutUs/AboutTravel";
import EthicalSection from "@/sections/aboutUs/Ethical";
import ExploreSection from "@/sections/aboutUs/Explore";
import IntroSection from "@/sections/aboutUs/Intro";
import "../../styles/aboutUs/_private.scss"

export default function AboutUsSection() {
  return (
    <>
      <IntroSection></IntroSection>
      <ExploreSection></ExploreSection>
      <EthicalSection></EthicalSection>
      <AboutTravel></AboutTravel>
    </>
  );
}
