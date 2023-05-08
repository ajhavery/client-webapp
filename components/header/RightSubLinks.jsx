"use client";

import Link from "next/link";
import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const supplierOptions = [
  { text: "Premium membership", link: "/" },
  { text: "International logistics", link: "/" },
  { text: "Most traded items", link: "/" },
  { text: "Foreign trade agreement benefits ", link: "/" },
];

const buyerOptions = [
  {
    head: "Service",
    items: [
      { text: "New User Guide", link: "/" },
      { text: "Audited Suppliers' Reports", link: "/" },
      { text: "Meet Suppliers", link: "/" },
      { text: "Online Trading", link: "/" },
      { text: "Buyer Center", link: "/" },
      { text: "Contact Us", link: "/" },
    ],
  },
  {
    head: "Search",
    items: [
      { text: "Product Directory", link: "/" },
      { text: "Supplier Discover", link: "/" },
      { text: "Post Sourcing Request", link: "/" },
    ],
  },
  {
    head: "Quick Links",
    items: [
      { text: "My Favorites", link: "/" },
      { text: "Browsing History", link: "/" },
    ],
  },
];

const helpOptions = [
  { text: "Why dhamika.com", link: "/" },
  { text: "How do we audit suppliers", link: "/" },
  { text: "How do we secure payment", link: "/" },
  { text: "Submit a Complaint", link: "/" },
  { text: "Contact Us", link: "/" },
  { text: "FAQ", link: "/" },
];

function RightSubLinks() {
  const [supplierVisible, setSupplierVisible] = useState(false);
  const [buyerVisible, setBuyerVisible] = useState(false);
  const [helpVisible, setHelpVisible] = useState(false);
  const [appsVisible, setAppsVisible] = useState(false);

  return (
    <div className="text-sm ml-4 h-10">
      <ul className="flex items-center gap-6 h-10 justify-center">
        {/* supplier options */}

        <li
          className="cursor-pointer h-full"
          onMouseEnter={() => setSupplierVisible(true)}
          onMouseLeave={() => setSupplierVisible(false)}
        >
          <div className="relative h-full z-20">
            <div className="flex items-center gap-2 justify-center h-full hover:text-primary">
              For Suppliers
              <IoChevronDownOutline
                className={`${supplierVisible && "rotate-180"} transition`}
              />
            </div>

            {supplierVisible && (
              <div className="absolute top-10 left-0 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)]">
                <ul className="bg-white p-2">
                  {supplierOptions &&
                    supplierOptions.map((item, index) => (
                      <li
                        key={index}
                        className="whitespace-nowrap px-4 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer"
                      >
                        {item.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </li>

        {/* supplier options end */}
        {/* buyer options */}

        <li
          className="h-full"
          onMouseEnter={() => setBuyerVisible(true)}
          onMouseLeave={() => setBuyerVisible(false)}
        >
          <div className="relative h-full z-20">
            <div className="flex items-center gap-2 justify-center h-full hover:text-primary cursor-pointer">
              For Buyers
              <IoChevronDownOutline
                className={`${buyerVisible && "rotate-180"} transition`}
              />
            </div>

            {buyerVisible && (
              <div
                className="absolute top-10 -right-32 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)] bg-white 
                p-2 flex items-start gap-4"
              >
                <div>
                  <h4 className="whitespace-nowrap font-bold text-sm px-2">
                    {buyerOptions[0].head}
                  </h4>
                  <ul className="text-sm whitespace-nowrap">
                    {buyerOptions[0].items.map((item, index) => (
                      <li
                        key={index}
                        className="px-2 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer"
                      >
                        <Link href={item.link}>{item.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div>
                    <h4 className="whitespace-nowrap font-bold text-sm px-2">
                      {buyerOptions[1].head}
                    </h4>
                    <ul className="text-sm whitespace-nowrap">
                      {buyerOptions[1].items.map((item, index) => (
                        <li
                          key={index}
                          className="px-2 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer"
                        >
                          <Link href={item.link}>{item.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="whitespace-nowrap font-bold text-sm px-2">
                      {buyerOptions[2].head}
                    </h4>
                    <ul className="text-sm whitespace-nowrap">
                      {buyerOptions[2].items.map((item, index) => (
                        <li
                          key={index}
                          className="px-2 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer"
                        >
                          <Link href={item.link}>{item.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>

        {/* buyer options end */}

        {/* help option starts */}

        <li
          className="cursor-pointer h-full"
          onMouseEnter={() => setHelpVisible(true)}
          onMouseLeave={() => setHelpVisible(false)}
        >
          <div className="relative h-full z-20">
            <div className="flex items-center gap-2 justify-center h-full hover:text-primary">
              Help
              <IoChevronDownOutline
                className={`${helpVisible && "rotate-180"} transition`}
              />
            </div>

            {helpVisible && (
              <div className="absolute top-10 -right-10 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)]">
                <ul className="bg-white p-2">
                  {helpOptions &&
                    helpOptions.map((item, index) => (
                      <li
                        key={index}
                        className="whitespace-nowrap px-4 py-1 text-sm hover:bg-purple-100 hover:text-primary rounded cursor-pointer"
                      >
                        {item.text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </li>

        {/* help option ends */}

        <li
          className="flex items-center gap-2 cursor-pointer h-full"
          onMouseEnter={() => setAppsVisible(true)}
          onMouseLeave={() => setAppsVisible(false)}
        >
          <div className="relative h-full z-20">
            <div className="flex items-center gap-2 justify-center h-full hover:text-primary">
              Apps
              <IoChevronDownOutline
                className={`${appsVisible && "rotate-180"} transition`}
              />
            </div>
            {appsVisible && (
              <div className="absolute top-10 -right-4 shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4)]">
                <ul className="bg-white p-2">
                  <li className="whitespace-nowrap px-4 py-1 text-sm hover:bg-purple-100 hover:text-primary">
                    Google Play store
                  </li>
                  <li className="whitespace-nowrap px-4 py-1 text-sm hover:bg-purple-100 hover:text-primary">
                    Apple app store
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default RightSubLinks;
