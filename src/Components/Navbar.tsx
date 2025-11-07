import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

// Menu items
const menuItems = [
  {
    label: "The Firm",
    dropdown: ["Overview", "Our DNA", "Leadership", "Awards"],
  },
  {
    label: "What We Do",
    dropdown: [
      {
        title: "Investment Banking",
        description:
          "Chapel Hill has closed more investment banking transactions than any other firm in Nigeria with over 370 transactions worth over ₦51.2 Trillion.",
        link: "#",
      },
      {
        title: "Investment Management",
        description:
          "Chapel Hill is Nigeria's leading asset manager creating long-term value for our clients through our investment and risk management expertise.",
        link: "#",
      },
      {
        title: "Securities Trading & Research",
        description:
          "Chapel Hill is one of the top broking firms in Nigeria and given the strength of our team, we are the preferred choice for clients.",
        link: "#",
      },
      {
        title: "Alternative Investments",
        description:
          "Our proven history of success underscores our position as a leader in the alternative investment space.",
        link: "#",
      },
      {
        title: "Wealth Management",
        description:
          "We excel in providing comprehensive wealth management solutions tailored to the unique needs of our clients. Our approach is rooted in a deep commitment to understanding our clients’ financial landscape, values, and long-term objectives.",
        link: "#",
      },
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
      "Working at Chapel Hill Denham",
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
  const [openService, setOpenService] = useState<string | null>(null);
  const [openServiceMobile, setOpenServiceMobile] = useState<string | null>(
    null
  );
  const [country, setCountry] = useState("Nigeria");
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOpenService(null);
        setOpenServiceMobile(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 bg-[#0d1d26] border-b border-white/10"
      style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: "-0.5px" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <img src={NavLogo} alt="Logo" className="h-12 w-auto" />

        {/* Desktop menu */}
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
                    className={`transition-transform ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>

              <AnimatePresence>
                {item.dropdown && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className={`absolute left-0 mt-3 shadow-xl border border-white/10 bg-[#0d1d26] ${
                      item.label === "What We Do"
                        ? "w-[420px] p-3"
                        : "py-2 w-52"
                    }`}
                  >
                    {typeof item.dropdown[0] === "string" &&
                      item.dropdown.map((sub: any) => (
                        <a
                          key={sub}
                          href="#"
                          className="block px-4 py-2 hover:bg-white/10 transition-colors"
                        >
                          {sub}
                        </a>
                      ))}

                    {typeof item.dropdown[0] === "object" &&
                      item.dropdown.map((service: any) => (
                        <div
                          key={service.title}
                          className="border-b border-white/10 last:border-none"
                        >
                          <button
                            onClick={() =>
                              setOpenService(
                                openService === service.title
                                  ? null
                                  : service.title
                              )
                            }
                            className="w-full text-left py-3 px-2 flex justify-between items-center"
                          >
                            <span className="text-sm font-medium">
                              {service.title}
                            </span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform ${
                                openService === service.title
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          <AnimatePresence>
                            {openService === service.title && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="px-2 pb-4 text-xs text-gray-300 leading-relaxed overflow-hidden"
                              >
                                <p className="mb-3">{service.description}</p>
                                <a
                                  href={service.link}
                                  className="inline-block border border-white px-4 py-1.5 rounded-full text-xs hover:bg-white hover:text-[#0d1d26] transition cursor-pointer"
                                >
                                  Learn more
                                </a>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}

          {/* Country toggle button */}
          <button
            onClick={() =>
              setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
            }
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm border border-white/30 hover:bg-white hover:text-[#0d1d26] transition cursor-pointer"
          >
            <Globe size={16} /> {country}
          </button>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white"
        >
          <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
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

                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 border-l border-white/20 pl-3 space-y-3 overflow-hidden"
                    >
                      {/* Normal mobile items */}
                      {typeof item.dropdown[0] === "string" &&
                        item.dropdown.map((sub: any) => (
                          <a
                            key={sub}
                            href="#"
                            className="block py-1 hover:text-gray-300"
                          >
                            {sub}
                          </a>
                        ))}

                      {/* Mobile accordion for "WHAT WE DO" */}
                      {typeof item.dropdown[0] === "object" &&
                        item.dropdown.map((service: any) => (
                          <div
                            key={service.title}
                            className="border-b border-white/10 pb-2"
                          >
                            <button
                              onClick={() =>
                                setOpenServiceMobile(
                                  openServiceMobile === service.title
                                    ? null
                                    : service.title
                                )
                              }
                              className="w-full flex justify-between items-center py-2"
                            >
                              <span className="text-sm">{service.title}</span>
                              <ChevronDown
                                size={14}
                                className={`transition-transform ${
                                  openServiceMobile === service.title
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {openServiceMobile === service.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="text-xs text-gray-300 leading-relaxed pb-3 pr-4 overflow-hidden"
                                >
                                  <p className="mb-2">{service.description}</p>
                                  <a
                                    href={service.link}
                                    className="inline-block border border-white px-3 py-1 rounded-full text-xs hover:bg-white hover:text-[#0d1d26] transition cursor-pointer"
                                  >
                                    Learn more
                                  </a>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Country toggle button */}
            <button
              onClick={() =>
                setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
              }
              className="flex items-center justify-center gap-2 px-4 py-2 border border-white/30 rounded-full transition mt-3"
            >
              <Globe size={16} /> {country}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
