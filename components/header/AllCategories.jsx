"use client";
import { useState } from "react";

import { TfiMenuAlt } from "react-icons/tfi";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaSteamSymbol } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { BiCut, BiGlobeAlt } from "react-icons/bi";
import { GiBoltCutter, GiJoin } from "react-icons/gi";
import { SiSocketdotio } from "react-icons/si";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { DiRuby } from "react-icons/di";
import { SlChemistry } from "react-icons/sl";
import {
  MdForklift,
  MdOutlineFireHydrantAlt,
  MdOutlineElectricalServices,
  MdOutlineCleaningServices,
  MdOutlineHealthAndSafety,
} from "react-icons/md";

const categories = [
  {
    icon: <FaSteamSymbol />,
    link: "",
    product: "Fasteners",
    description: "screws, bolts, nuts, and washers",
  },
  {
    icon: <BiGlobeAlt />,
    link: "",
    product: "Bearings",
    description: "ball bearings, roller bearings, and bearing accessories",
  },
  {
    icon: <GiBoltCutter />,
    link: "",
    product: "Seals and Gaskets",
    description: "o-rings, gaskets, and mechanical seals",
  },
  {
    icon: <SlChemistry />,
    link: "",
    product: "Lubricants and Chemicals",
    description: "oils, greases, lubricants, adhesives, and sealants",
  },
  {
    icon: <MdOutlineElectricalServices />,
    link: "",
    product: "Power Transmission",
    description: "belts, pulleys, chains, and couplings",
  },
  {
    icon: <MdOutlineFireHydrantAlt />,
    link: "",
    product: "Pneumatics and Hydraulics",
    description: "hoses, fittings, valves, and pumps",
  },
  {
    icon: <SiSocketdotio />,
    link: "",
    product: "Electrical Equipment",
    description: "motors, transformers, switches, fuses, and circuit breakers",
  },
  {
    icon: <MdOutlineHealthAndSafety />,
    link: "",
    product: "Safety Equipment",
    description:
      "safety glasses, hard hats, gloves, earplugs, and safety footwear",
  },
  {
    icon: <BsTools />,
    link: "",
    product: "Hand Tools",
    description: "wrenches, screwdrivers, pliers, and hammers",
  },
  {
    icon: <BiCut />,
    link: "",
    product: "Cutting Tools",
    description: "saws, drills, blades, and bits",
  },
  {
    icon: <DiRuby />,
    link: "",
    product: "Abrasives",
    description: "grinding wheels, sandpaper, and polishing pads",
  },
  {
    icon: <GiJoin />,
    link: "",
    product: "Welding and Soldering",
    description: "welding machines, torches, and soldering irons",
  },
  {
    icon: <MdForklift />,
    link: "",
    product: "Material Handling",
    description: "carts, dollies, hoists, and lift trucks",
  },
  {
    icon: <MdOutlineCleaningServices />,
    link: "",
    product: "Cleaning Supplies",
    description: "cleaning chemicals, mops, brooms, and buckets",
  },
  {
    icon: <CgSmartHomeRefrigerator />,
    link: "",
    product: "HVAC and Refrigeration",
    description:
      "air conditioners, heaters, fans, refrigeration units, and ventilation systems",
  },
];
function AllCategories() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative h-10 z-40"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div
        className={`h-full flex items-center gap-2 mr-2 px-2 hover:bg-white cursor-pointer border-r ${
          isVisible
            ? "bg-white rounded-t border-r-transparent text-primary shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)]"
            : "border-r-[#E5E7EB]"
        }`}
      >
        <TfiMenuAlt />
        <span className="font-roboto text-sm">All Categories</span>
        <IoChevronDownOutline
          className={`${isVisible && "rotate-180"} transition`}
        />
      </div>
      {isVisible && (
        <div className="absolute top-10 left-0 w-[30rem] shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)]">
          <ul className="bg-white px-2 py-4 grid grid-cols-2">
            {categories &&
              categories.map((item, index) => (
                <li
                  key={index}
                  className="whitespace-nowrap px-4 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer flex items-center gap-1.5"
                >
                  {item.icon}
                  {item.product}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AllCategories;
