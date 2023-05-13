import FeaturedBanner from "./FeaturedBanner";
import KeyCategories from "./KeyCategories";
import PostQueryBar from "./PostQueryBar";

// Category icons import
import light_icon from "public/cat-icons/light.png";
import pump_icon from "public/cat-icons/pump.png";
import fastener_icon from "public/cat-icons/fastener.png";
import purifier_icon from "public/cat-icons/purifier.png";
import valve_icon from "public/cat-icons/valve.png";
import generator_icon from "public/cat-icons/generator.png";
import wire_icon from "public/cat-icons/wire.png";
import distribution_icon from "public/cat-icons/distribution.png";
import broadcast_icon from "public/cat-icons/broadcast.png";
import plug_icon from "public/cat-icons/plug.png";
import refrigeration_icon from "public/cat-icons/refrigeration.png";
import fan_icon from "public/cat-icons/fan.png";

// Banner image imports
import fans from "public/banner-images/fans.jpeg";
import transformer from "public/banner-images/transformer.jpeg";
import valves from "public/banner-images/valves.jpeg";
import gears from "public/banner-images/gears.jpeg";
import generators from "public/banner-images/generators.jpeg";

const keyCategories = [
  { icon: fan_icon, text: "Fan and Air conditioner" },
  { icon: distribution_icon, text: "Power supply and distribution" },
  { icon: light_icon, text: "Lights and Lightings" },
  { icon: pump_icon, text: "Pumps and Motors" },
  { icon: fastener_icon, text: "Fastener and Fittings" },
  { icon: purifier_icon, text: "Purifier and Filter" },
  { icon: valve_icon, text: "Valves & Other equipment" },
  { icon: generator_icon, text: "Power and Generator" },
  { icon: wire_icon, text: "Wires, Cables & Optical fiber" },
  { icon: broadcast_icon, text: "Telecom and broadcasting" },
  { icon: plug_icon, text: "Plug, Socket and components" },
  { icon: refrigeration_icon, text: "HVAC and Refrigeration" },
];

const slides = [
  {
    id: 1,
    imageUrl: fans,
    title: "World's leading supplier of stylish and high power efficient fans",
  },
  {
    id: 2,
    imageUrl: transformer,
    title:
      "Supply capability to produce 1 KVA to 100 KVA transformers at scale",
  },
  {
    id: 3,
    imageUrl: valves,
    title: "India's leading supplier of Taps, Cocks and Valves",
  },
  {
    id: 4,
    imageUrl: gears,
    title:
      "All variations of Gears, Transmission Shafts, Bearing, Pulleys available for supply",
  },
  {
    id: 5,
    imageUrl: generators,
    title:
      "Electric motor and generator from small scale to industrial scale available to ship",
  },
];

function TopBanner() {
  return (
    <div className="w-full mt-4">
      <div className="container mx-auto bg-white p-4">
        {/* large screen layout */}
        <div className="hidden md:grid grid-cols-5 gap-2 h-full">
          <div className="col-span-1 h-full">
            <KeyCategories keyCategories={keyCategories} />
          </div>
          <div className="col-span-3 h-full">
            <FeaturedBanner slides={slides} />
          </div>
          <div className="col-span-1 h-full">
            <PostQueryBar />
          </div>
        </div>
        {/* small screen layout */}
        <div className="block md:hidden">
          <div className="mb-8">
            <FeaturedBanner slides={slides} />
          </div>
          <div className="grid grid-cols-2">
            <div className="hidden sm:block">
              <KeyCategories keyCategories={keyCategories} />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <PostQueryBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
