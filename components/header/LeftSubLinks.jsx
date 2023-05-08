import Link from "next/link";

function LeftSubLinks() {
  return (
    <div className="text-sm ml-4 h-10">
      <ul className="flex items-center gap-6 h-10">
        <li className="cursor-pointer h-full flex items-center justify-center hover:text-primary">
          <Link href="/">Featured Products</Link>
        </li>
        <li className="cursor-pointer h-full flex items-center justify-center hover:text-primary">
          <Link href="/">Key Categories</Link>
        </li>
        <li className="cursor-pointer h-full flex items-center justify-center hover:text-primary">
          <Link href="/">Assisted Buying</Link>
        </li>
      </ul>
    </div>
  );
}

export default LeftSubLinks;
