import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

const menuItems = [
  {
    label: "The Firm",
    dropdown: ["Overview", "Our DNA", "Leadership", "Awards"],
  },
  {
    label: "What We Do",
    dropdown: [
      "Investment Banking",
      "Investment Management",
      "Securities Trading",
      "Alternative Investments",
      "Wealth Management",
    ],
  },
  {
    label: "Our Impact",
  },
  {
    label: "News & Insights",
    dropdown: ["Press Releases", "Insights", "News"],
  },
  {
    label: "Careers",
    dropdown: [
      "Working at Chepel Hill Denham",
      "Management Development Programme",
      "Internships",
      "Experienced Hires",
    ],
  },
  {
    label: "Contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [country, setCountry] = useState("Nigeria");

  const navRef = useRef<HTMLDivElement | null>(null);

  // Listens to clicks outside dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#0d1d26] border-b border-white/10"
      style={{
        fontFamily: '"DM Sans", sans-serif',
        letterSpacing: "-0.5px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <img src={NavLogo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {menuItems.map((item) => (
            <li key={item.label} className="relative">
              <button
                className="flex items-center gap-1 hover:text-gray-300 transition-colors cursor-pointer"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === item.label ? null : item.label
                  )
                }
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`${
                      openDropdown === item.label ? "rotate-180" : ""
                    } transition-transform`}
                  />
                )}
              </button>

              {/* Desktop Dropdown */}
              <AnimatePresence>
                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute bg-[#0d1d26] border border-white/10 mt-3 py-2 w-52 shadow-lg"
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-4 py-2 hover:bg-white/10 transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}

          {/* Country Toggle */}
          <button
            onClick={() =>
              setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
            }
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/30 transition-all duration-300 hover:bg-white hover:text-[#0d1d26] cursor-pointer"
          >
            <Globe size={16} /> {country}
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 py-4 space-y-2 bg-[#0d1d26] border-t border-white/10 text-sm overflow-hidden"
          >
            {menuItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.label ? null : item.label
                    )
                  }
                  className="flex justify-between w-full py-2 items-center"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 border-l border-white/20 pl-3 space-y-1 overflow-hidden"
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub}
                          href="#"
                          className="block py-1 hover:text-gray-300"
                        >
                          {sub}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Country Toggle */}
            <button
              onClick={() =>
                setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
              }
              className="flex items-center justify-center gap-2 px-4 py-2 border border-white/30 rounded-full transition-all duration-300 mt-3"
            >
              <Globe size={16} /> {country}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
