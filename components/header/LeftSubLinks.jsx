import Link from "next/link";

function LeftSubLinks() {
  return (
    <div className="text-xs sm:text-sm ml-2 sm:ml-4 h-10">
      <ul className="flex items-center gap-3 sm:gap-6 h-10 whitespace-nowrap">
        <li className="cursor-pointer h-full hidden sm:flex items-center justify-center hover:text-primary">
          <Link href="/">Featured Products</Link>
        </li>
        <li className="cursor-pointer h-full flex items-center justify-center hover:text-primary">
          <Link href="/">Our Services</Link>
        </li>
        <li className="cursor-pointer h-full flex items-center justify-center hover:text-primary">
          <Link href="/">Buying Assist</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSubLinks;
