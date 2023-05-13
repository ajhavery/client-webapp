"use client";

import { useState, useRef, useEffect } from "react";
import { IoChevronDownOutline, IoSearchOutline } from "react-icons/io5";

function SearchBar() {
  const [activeSearch, setActiveSearch] = useState("products");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close the menu if the user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleMenuItemClick = (tab) => {
    setActiveSearch(tab);
    setIsOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="rounded-full border-2 border-primary flex items-center gap-2 h-8 md:h-10 w-full relative">
      <button
        className="pl-4 pr-2 py-1.5 border-r border-[##DADADA] flex items-center gap-2 h-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xs sm:text-sm md:text-base">
          {activeSearch == "products" ? "Products" : "Suppliers"}
        </span>
        <IoChevronDownOutline
          className={`text-sm text-gray-500 transition ${
            isOpen && "rotate-180"
          }`}
        />
      </button>
      {isOpen && (
        <ul
          ref={menuRef}
          className="absolute top-8 sm:top-10 left-0 whitespace-nowrap bg-white border shadow"
        >
          <li
            onClick={() => handleMenuItemClick("products")}
            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-xs md:text-sm"
          >
            Products
          </li>
          <li
            onClick={() => handleMenuItemClick("suppliers")}
            className="px-4 py-1 hover:bg-gray-100 cursor-pointer text-xs md:text-sm"
          >
            Suppliers
          </li>
        </ul>
      )}

      <form className="h-full w-full flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What are you looking for..."
          className="h-6 w-full px-2 outline-none text-xs sm:text-sm"
        />
        <button
          type="submit"
          className="bg-primary rounded-r-full h-full w-10 md:w-16 px-2 py-1.5 flex items-center justify-center"
        >
          <IoSearchOutline className="text-white text-base sm:text-xl md:text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
