import Link from "next/link";

import { FaSkyatlas } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { SlBasket } from "react-icons/sl";

function RightNav() {
  return (
    <nav>
      <ul className="flex items-center justify-end gap-3">
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <FaSkyatlas className="w-6 h-6" />
            <div className="text-xs whitespace-nowrap">Post RFQ</div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <IoPersonOutline className="w-6 h-6" />
            <div className="text-xs whitespace-nowrap">Login/Register</div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <MdOutlineLocalPostOffice className="w-6 h-6" />
            <div className="text-xs whitespace-nowrap">Messages</div>
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="flex flex-col items-center justify-center gap-1"
          >
            <SlBasket className="w-6 h-6" />
            <div className="text-xs whitespace-nowrap">Inquiry Bag</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default RightNav;
