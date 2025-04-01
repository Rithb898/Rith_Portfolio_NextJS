'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

// Navbar component
function Navbar() {
  // Get the current pathname using Next.js hook
  const pathname = usePathname();

  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState(pathname);

  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update activeLink state when pathname changes
  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  // Define navigation links with their respective icons, text, and paths
  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-gray-900/95 backgrop-blur-md md:bg-transparent md:backdrop-blur-none'>
      <div className='md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto'>
        <div className='p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x'>
          <nav className='bg-gray-900/90 backdrop-blur-md md:rounded-full px-4 md:px-6 py-2.5'>
            {/* Mobile Menu Button */}
            <div className='flex justify-between items-center md:hidden px-2'>
              <Link href='/' className='text-xl font-bold text-white'>
                Rith
              </Link>
              <button
                className='text-white focus:outline-none'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FaBars size={24} />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
              <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-1 lg:gap-2 py-4 md:py-0'>
                {navLinks.map(({ id, icon: Icon, text, path }) => (
                  <Link
                    key={id}
                    href={path}
                    onClick={() => {
                      setActiveLink(id);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 md:py-1.5 rounded-lg md:rounded-full text-sm font-medium
                        transition-all duration-300 flex items-center gap-2
                        hover:bg-white/10
                        ${
                          activeLink === path
                            ? "bg-white/15 text-white"
                            : "text-gray-300 hover:text-white"
                        }
                      `}
                  >
                    <Icon
                      className={`text-base ${
                        activeLink === path ? "scale-110" : ""
                      }`}
                    />
                    <span className='inline'>{text}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
