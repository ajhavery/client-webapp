"use client";

import Link from "next/link";

import { FaSkyatlas } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

function SideMenu({ isOpen, setIsOpen }) {
  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed inset-y-0 left-0 z-50 bg-gray-900 w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0 sm:translate-x-full md:translate-x-full lg:translate-x-full">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-white text-2xl font-bold">Sidebar</h2>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={handleMenuButtonClick}
        >
          &#x2716;
        </button>
      </div>

      <ul className="p-4">
        <li className="hover:bg-gray-600 px-2 py-2">
          <Link href="/open" className="flex items-center gap-4 text-white">
            <FaSkyatlas className="w-6 h-6" />
            <div className="text-sm whitespace-nowrap">Post RFQ</div>
          </Link>
        </li>

        <li className="hover:bg-gray-600 px-2 py-2">
          <Link href="/" className="flex items-center gap-4 text-white">
            <IoPersonOutline className="w-6 h-6" />
            <div className="text-sm whitespace-nowrap">Login/Register</div>
          </Link>
        </li>

        <li className="hover:bg-gray-600 px-2 py-2">
          <Link href="/" className="flex items-center gap-4 text-white">
            <MdOutlineLocalPostOffice className="w-6 h-6" />
            <div className="text-sm whitespace-nowrap">Messages</div>
          </Link>
        </li>

        <li className="hover:bg-gray-600 px-2 py-2">
          <Link href="/" className="flex items-center gap-4 text-white">
            <SlBasket className="w-6 h-6" />
            <div className="text-sm whitespace-nowrap">Inquiry Bag</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
