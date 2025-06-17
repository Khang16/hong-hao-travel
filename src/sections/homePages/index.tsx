import FirstSection from "@/sections/homePages/First";
import TravelPage from "@/sections/homePages/Travel";
import ClientSayPage from "./Client";
import MomemtPage from "./Moment";
import { TripPage } from "./Trip";
import WeatherDashboard from "./Weather";

export default function HomePage() {
  return (
    <>
      <FirstSection/>
      <TravelPage/>
      <TripPage/>
      <MomemtPage/>
      <ClientSayPage/>
      <WeatherDashboard/>
    </>
  );
}
