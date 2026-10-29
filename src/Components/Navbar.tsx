import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

type ServiceItem = {
  title: string;
  description: string;
  link: string;
};

type MenuItem = {
  label: string;
  href?: string;
  dropdown?: string[] | ServiceItem[];
};

const serviceItems: ServiceItem[] = [
  {
    title: "Capital Markets",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/capital-markets",
  },
  {
    title: "Pensions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/pensions",
  },
  {
    title: "Insurance",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/insurance",
  },
  {
    title: "Financial Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/financial-technology",
  },
  {
    title: "International",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/international",
  },
  {
    title: "Investments",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/services/investments",
  },
];

const menuItems: MenuItem[] = [
  {
    label: "The Firm",
    dropdown: ["Overview", "Our DNA", "Leadership", "Awards"],
  },
  {
    label: "What We Do",
    dropdown: serviceItems,
  },
  {
    label: "Our Impact",
    href: "#impact",
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
    href: "#contact",
  },
];

const simpleLinks: Record<string, string> = {
  Overview: "/about",
  "Our DNA": "/about#our-dna",
  Leadership: "/about#leadership",
  Awards: "/about#awards",
  "Press Releases": "/insights?type=press-releases",
  Insights: "/insights",
  News: "/insights?type=news",
  "Working at Chapel Hill Denham": "/careers",
  "Management Development Programme":
    "/careers/management-development-programme",
  Internships: "/careers/internships",
  "Experienced Hires": "/careers/experienced-hires",
};

const panelVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: 6,
    filter: "blur(2px)",
    transition: { duration: 0.16 },
  },
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openServiceMobile, setOpenServiceMobile] = useState<string | null>(
    null,
  );
  const [country, setCountry] = useState("Nigeria");
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
        setOpenServiceMobile(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setOpenServiceMobile(null);
  };

  const isServiceMenu = (item: MenuItem): boolean =>
    item.label === "What We Do";

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c232e] text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      {/* Main navigation */}
      <div className="mx-auto flex h-[76px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[88px] lg:px-16">
        <a
          href="/"
          aria-label="Chapel Hill Denham homepage"
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src={NavLogo}
            alt="Chapel Hill Denham"
            className="h-10 w-auto object-contain sm:h-11 lg:h-12"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden h-full items-center gap-5 lg:flex xl:gap-7">
          <ul className="flex h-full items-center gap-4 xl:gap-6">
            {menuItems.map((item) => {
              const isOpen = openDropdown === item.label;

              return (
                <li key={item.label} className="flex h-full items-center">
                  {item.dropdown ? (
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      className={`group relative flex h-full items-center gap-2 whitespace-nowrap text-[12px] font-medium transition-colors duration-300 xl:text-[13px] ${
                        isOpen
                          ? "text-[#e9e6de]"
                          : "text-white/75 hover:text-white"
                      }`}
                    >
                      {item.label}

                      <ChevronDown
                        size={13}
                        strokeWidth={1.6}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#bb7332]" : ""
                        }`}
                      />

                      <span
                        className={`absolute inset-x-0 bottom-0 h-[2px] origin-left bg-[#bb7332] transition-transform duration-300 ${
                          isOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setOpenDropdown(null)}
                      className="group relative flex h-full items-center whitespace-nowrap text-[12px] font-medium text-white/75 transition-colors duration-300 hover:text-white xl:text-[13px]"
                    >
                      {item.label}
                      <span className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-[#bb7332] transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Country selector */}
          <div className="relative ml-1">
            <button
              type="button"
              aria-label={`Current region: ${country}. Switch region`}
              onClick={() =>
                setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
              }
              className="flex items-center gap-2.5 border-l border-white/15 py-2 pl-5 text-[12px] text-white/75 transition-colors hover:text-white xl:pl-6"
            >
              <Globe size={15} strokeWidth={1.5} />
              <span>{country}</span>
              <ChevronDown size={12} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() =>
              setCountry(country === "Nigeria" ? "Ghana" : "Nigeria")
            }
            aria-label={`Current region: ${country}. Switch region`}
            className="flex items-center gap-2 text-xs text-white/75 transition-colors hover:text-white"
          >
            <Globe size={16} strokeWidth={1.5} />
            <span>{country}</span>
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setOpenDropdown(null);
              setOpenServiceMobile(null);
            }}
            className="flex h-10 w-10 items-center justify-center border border-white/15 transition-colors hover:border-[#bb7332] hover:bg-white/5"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.16 }}
                className="flex"
              >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Desktop dropdown panels */}
      <div className="hidden lg:block">
        <AnimatePresence>
          {openDropdown && (
            <motion.div
              key={openDropdown}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={panelVariants}
              className="absolute inset-x-0 top-full border-t border-white/10 bg-[#0c232e] shadow-[0_24px_50px_rgba(0,0,0,0.25)]"
            >
              <div className="mx-auto max-w-[1600px] px-16 py-10 xl:py-12">
                {menuItems
                  .filter((item) => item.label === openDropdown)
                  .map((item) => (
                    <div key={item.label} className="grid grid-cols-12 gap-12">
                      {/* Introduction panel */}
                      <div className="col-span-4 flex flex-col items-start border-r border-white/10 pr-12">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#bb7332]">
                          {isServiceMenu(item)
                            ? "Our expertise"
                            : "Chapel Hill Denham"}
                        </p>

                        <h2
                          style={{ fontFamily: '"Roboto Serif", serif' }}
                          className="mt-5 max-w-sm text-4xl font-normal leading-[1.12] tracking-[-0.045em] text-[#e9e6de] xl:text-5xl"
                        >
                          {isServiceMenu(item)
                            ? "Financial expertise for a changing world."
                            : item.label}
                        </h2>

                        <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                          {isServiceMenu(item)
                            ? "Investment solutions and strategic advice shaped around the ambitions of our clients."
                            : item.label === "The Firm"
                              ? "Discover the people, principles and experience behind our firm."
                              : item.label === "News & Insights"
                                ? "Perspectives, announcements and insights into the markets shaping our world."
                                : "Explore opportunities to grow, contribute and build your future with us."}
                        </p>

                        <a
                          href={
                            isServiceMenu(item)
                              ? "/services"
                              : item.label === "The Firm"
                                ? "/about"
                                : item.label === "News & Insights"
                                  ? "/insights"
                                  : "/careers"
                          }
                          onClick={() => setOpenDropdown(null)}
                          className="group mt-8 inline-flex items-center gap-3 border-b border-[#bb7332]/60 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#bb7332]"
                        >
                          {isServiceMenu(item)
                            ? "Explore our services"
                            : item.label === "The Firm"
                              ? "Discover the firm"
                              : item.label === "News & Insights"
                                ? "Explore insights"
                                : "Explore opportunities"}
                        </a>
                      </div>

                      {/* Consistent menu links */}
                      <div className="col-span-8 grid grid-cols-2 gap-x-8">
                        {item.dropdown?.map((sub, index) => {
                          const isService = typeof sub !== "string";
                          const title = isService ? sub.title : sub;
                          const description = isService
                            ? sub.description
                            : item.label === "The Firm"
                              ? ({
                                  Overview:
                                    "An introduction to our firm and what we stand for.",
                                  "Our DNA":
                                    "The principles and values that shape our approach.",
                                  Leadership:
                                    "Meet the people guiding our firm.",
                                  Awards:
                                    "Recognition of our work and expertise.",
                                }[sub] ?? "")
                              : item.label === "News & Insights"
                                ? ({
                                    "Press Releases":
                                      "The latest announcements from our firm.",
                                    Insights:
                                      "Research and perspectives on markets and investment.",
                                    News: "Recent developments and firm updates.",
                                  }[sub] ?? "")
                                : ({
                                    "Working at Chapel Hill Denham":
                                      "Discover our culture and working environment.",
                                    "Management Development Programme":
                                      "Build your capabilities and develop your career.",
                                    Internships:
                                      "Gain practical experience and learn from our teams.",
                                    "Experienced Hires":
                                      "Bring your expertise to a team focused on impact.",
                                  }[sub] ?? "");

                          return (
                            <motion.a
                              key={title}
                              href={
                                isService ? sub.link : (simpleLinks[sub] ?? "#")
                              }
                              onClick={() => setOpenDropdown(null)}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.045,
                              }}
                              className={`group relative flex min-h-[126px] flex-col justify-center border-b border-white/10 py-5 pl-5 transition-colors duration-300 hover:bg-white/[0.035] ${
                                isService && index === 4 ? "col-span-2" : ""
                              }`}
                            >
                              <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-bottom scale-y-0 bg-[#bb7332] transition-transform duration-300 group-hover:scale-y-100" />

                              <span
                                style={{ fontFamily: '"Roboto Serif", serif' }}
                                className="text-xl font-normal tracking-[-0.025em] text-white/90 transition-colors group-hover:text-[#e9e6de]"
                              >
                                {title}
                              </span>

                              <p className="mt-2 max-w-md text-xs leading-6 text-white/50">
                                {description}
                              </p>
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 76px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full flex flex-col overflow-hidden border-t border-white/10 bg-[#0c232e] lg:hidden"
          >
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-8 pt-5 sm:px-8">
              <div className="divide-y divide-white/10">
                {menuItems.map((item, index) => {
                  const isOpen = openDropdown === item.label;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: index * 0.035 }}
                    >
                      {item.dropdown ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            onClick={() => {
                              setOpenDropdown(isOpen ? null : item.label);
                              setOpenServiceMobile(null);
                            }}
                            className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                          >
                            <span
                              style={{ fontFamily: '"Roboto Serif", serif' }}
                              className={`text-[25px] font-normal tracking-[-0.035em] transition-colors ${
                                isOpen
                                  ? "text-[#e9e6de]"
                                  : "text-white/85 group-hover:text-white"
                              }`}
                            >
                              {item.label}
                            </span>

                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                                isOpen
                                  ? "border-[#bb7332] bg-[#bb7332] text-white"
                                  : "border-white/15 text-white/65"
                              }`}
                            >
                              <ChevronDown
                                size={15}
                                className={`transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.28,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden"
                              >
                                {isServiceMenu(item) ? (
                                  <div className="mb-5 border-l border-[#bb7332]/60 pl-4">
                                    {serviceItems.map((service) => {
                                      const serviceOpen =
                                        openServiceMobile === service.title;

                                      return (
                                        <div
                                          key={service.title}
                                          className="border-b border-white/10 last:border-b-0"
                                        >
                                          <button
                                            type="button"
                                            aria-expanded={serviceOpen}
                                            onClick={() =>
                                              setOpenServiceMobile(
                                                serviceOpen
                                                  ? null
                                                  : service.title,
                                              )
                                            }
                                            className="flex w-full items-center justify-between gap-3 py-4 text-left"
                                          >
                                            <span className="text-sm font-medium text-white/85">
                                              {service.title}
                                            </span>

                                            <ChevronDown
                                              size={14}
                                              className={`shrink-0 text-[#bb7332] transition-transform duration-300 ${
                                                serviceOpen ? "rotate-180" : ""
                                              }`}
                                            />
                                          </button>

                                          <AnimatePresence initial={false}>
                                            {serviceOpen && (
                                              <motion.div
                                                initial={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                animate={{
                                                  height: "auto",
                                                  opacity: 1,
                                                }}
                                                exit={{
                                                  height: 0,
                                                  opacity: 0,
                                                }}
                                                transition={{ duration: 0.22 }}
                                                className="overflow-hidden"
                                              >
                                                <p className="pb-3 pr-3 text-xs leading-6 text-white/55">
                                                  {service.description}
                                                </p>

                                                <a
                                                  href={service.link}
                                                  onClick={closeMobileMenu}
                                                  className="mb-4 inline-flex py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#bb7332]"
                                                >
                                                  Explore service
                                                </a>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      );
                                    })}

                                    <a
                                      href="/services"
                                      onClick={closeMobileMenu}
                                      className="mt-4 inline-flex py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e9e6de]"
                                    >
                                      All services
                                    </a>
                                  </div>
                                ) : (
                                  <div className="mb-5 border-l border-[#bb7332]/60 pl-4">
                                    {item.dropdown?.map((sub) => {
                                      if (typeof sub !== "string") return null;

                                      return (
                                        <a
                                          key={sub}
                                          href={simpleLinks[sub] ?? "#"}
                                          onClick={closeMobileMenu}
                                          className="flex min-h-12 items-center border-b border-white/[0.07] py-3 text-sm text-white/60 transition-colors last:border-b-0 hover:text-[#e9e6de]"
                                        >
                                          {sub}
                                        </a>
                                      );
                                    })}
                                  </div>
                                )}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <a
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="group flex items-center justify-between gap-4 py-5"
                        >
                          <span
                            style={{ fontFamily: '"Roboto Serif", serif' }}
                            className="text-[25px] font-normal tracking-[-0.035em] text-white/85 transition-colors group-hover:text-white"
                          >
                            {item.label}
                          </span>
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
