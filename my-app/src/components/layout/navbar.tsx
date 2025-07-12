import Logo from "../../assets/react.svg";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-5xl mx-auto h-16 flex items-center px-5 bg-white dark:bg-black">
      {/* Left side: Logo and App name */}
      <div className="flex items-center flex-shrink-0 text-gray-900 dark:text-white">
        <img src={Logo} alt="Logo" className="h-6 w-6" />
        <span className="font-bold ml-1.5">React</span>App
      </div>

      {/* Center menu */}
      <div className="flex-grow flex justify-center space-x-8">
        <Link
          to="/tour"
          className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          Tour
        </Link>
        <Link
          to="/"
          className="text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        >
          User
        </Link>
      </div>

      {/* Dark Mode Toggle Button */}
      <div>
        <ModeToggle />
      </div>

      {/* Right side: empty space */}
      <div className="flex-shrink-0" />
    </nav>
  );
}
