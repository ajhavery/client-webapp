function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-white text-lg font-semibold mb-2">Company</h3>
          <ul>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">About Us</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Contact Us</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Terms of Service</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-white text-lg font-semibold mb-2">Products</h3>
          <ul>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Product 1</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Product 2</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Product 3</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Product 4</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-white text-lg font-semibold mb-2">Resources</h3>
          <ul>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">FAQ</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Support</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Documentation</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-4">
          <h3 className="text-white text-lg font-semibold mb-2">Connect</h3>
          <ul>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Facebook</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Twitter</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">Instagram</a>
            </li>
            <li className="text-gray-400 hover:text-white mb-1">
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
