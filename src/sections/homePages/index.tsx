import FirstSection from "@/sections/homePages/First";
import TravelPage from "@/sections/homePages/Travel";
import { TripPage } from "./Trip";
import WeatherDashboard from "./Weather";
import ClientSayPage from "./Client";
import MomemtPage from "./Moment";
import AboutTravel from "../aboutUs/AboutTravel";

export default function HomePage() {
  return (
    <>
      <FirstSection/>
      <TravelPage/>
      <TripPage/>
      <MomemtPage/>
      <ClientSayPage/>
      <WeatherDashboard/>
      <AboutTravel/>
    </>
  );
}
