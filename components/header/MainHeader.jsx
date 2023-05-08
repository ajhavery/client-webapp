import Image from "next/image";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";
import logo from "public/logo.png";
import RightNav from "./RightNav";
import SearchBar from "./SearchBar";

function MainHeader() {
  return (
    <header className="h-full flex items-center justify-between gap-8 container mx-auto z-50 bg-white">
      {/* logo */}

      <Link href="/">
        <div className="flex items-center gap-3">
          <Image src={logo} alt="logo" className="h-5 w-5" />
          <h2 className="mb-0 leading-8 text-primary">Dhamika</h2>
        </div>
        <div className="text-xs whitespace-nowrap">
          Buy Globally from Indian Suppliers
        </div>
      </Link>

      {/* logo ends */}
      {/* search bar */}

      <SearchBar />

      {/* search bar ends */}
      {/* right nav */}
      <div className="hidden md:block">
        <RightNav />
      </div>

      {/* right nav ends */}
      {/* more items */}
      <div className="block md:hidden">
        <AiOutlineMenu />
      </div>
      {/* more items ends */}
    </header>
  );
}

export default MainHeader;
