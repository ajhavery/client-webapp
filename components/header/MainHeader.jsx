"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import logo from "public/logo.png";
import RightNav from "./RightNav";
import SearchBar from "./SearchBar";
import SideMenu from "./SideMenu";

function MainHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="h-full z-50 bg-white">
      <div className="w-full md:h-full flex items-center justify-between gap-8 container mx-auto px-4 pt-1 lg:p-0">
        <div className="flex items-center justify-between w-full md:w-fit">
          {/* logo */}
          <Link href="/">
            <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
              <Image
                src={logo}
                alt="logo"
                className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
              />
              <h2 className="mb-0 leading-8 text-primary text-base sm:text-xl lg:text-2xl">
                Dhamika
              </h2>
            </div>
            <div className="text-xs whitespace-nowrap hidden md:block">
              Buy Globally from Indian Suppliers
            </div>
          </Link>
          {/* logo ends */}

          {/* more items */}
          <div className="block md:hidden">
            <button
              className="h-full flex items-center"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <AiOutlineMenu />
            </button>
          </div>
          {/* more items ends */}
        </div>
        {/* sidebar */}
        {isSidebarOpen && (
          <SideMenu isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        )}

        {/* search bar */}
        <div className="w-full hidden md:block">
          <SearchBar />
        </div>
        {/* search bar ends */}

        {/* right nav */}
        <div className="hidden md:block">
          <RightNav />
        </div>

        {/* right nav ends */}
      </div>
      {/* small screen search bar */}
      <div className="w-full md:hidden container mx-auto px-4 py-1">
        <SearchBar />
      </div>
      {/* search bar ends */}
    </header>
  );
}

export default MainHeader;
