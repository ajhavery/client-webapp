import Link from "next/link";

const footerColOne = [
  { text: "About Us", link: "/" },
  { text: "Contact Us", link: "/" },
  { text: "Terms of Service", link: "/" },
  { text: "Privacy Policy", link: "/" },
];

const footerColTwo = [
  { text: "Transformers", link: "/" },
  { text: "Taps, Cocks and Valves", link: "/" },
  { text: "Wires and Cables", link: "/" },
  { text: "Fans", link: "/" },
  { text: "Electric motors and Generators", link: "/" },
];

const footerColThree = [
  { text: "FAQ", link: "/" },
  { text: "Support", link: "/" },
  { text: "Documentation", link: "/" },
  { text: "Blog", link: "/" },
];

const footerColFour = [
  { text: "Facebook", link: "/" },
  { text: "LinkedIn", link: "/" },
  { text: "Youtube", link: "/" },
  { text: "Instagram", link: "/" },
];

function Footer() {
  return (
    <footer className="bg-white py-6 border-t shadow-md z-10">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul>
            {footerColOne.map((item, index) => (
              <li
                className="text-gray-500 hover:text-primary py-0.5 cursor-pointer"
                key={index}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <ul>
            {footerColTwo.map((item, index) => (
              <li
                className="text-gray-500 hover:text-primary py-0.5 cursor-pointer"
                key={index}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul>
            {footerColThree.map((item, index) => (
              <li
                className="text-gray-500 hover:text-primary py-0.5 cursor-pointer"
                key={index}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul>
            {footerColFour.map((item, index) => (
              <li
                className="text-gray-500 hover:text-primary py-0.5 cursor-pointer"
                key={index}
              >
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-6 text-center border-t">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
