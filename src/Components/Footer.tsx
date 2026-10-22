import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

const firmLinks = [
  { label: "Overview", href: "/about" },
  { label: "Our DNA", href: "/about/our-dna" },
  { label: "Leadership", href: "/leadership" },
  { label: "Awards", href: "/awards" },
];

const serviceLinks = [
  { label: "Capital Markets", href: "/services/capital-markets" },
  { label: "Retirement Savings", href: "/services/retirement-savings" },
  { label: "Protection", href: "/services/protection" },
  { label: "Financial Technology", href: "/services/financial-technology" },
  { label: "International", href: "/services/international" },
  { label: "Investments", href: "/services/investments" },
];

const linkClass =
  "w-fit text-[13px] leading-6 text-white/65 transition-colors duration-200 hover:text-white";

const headingClass =
  "mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#0c232e] px-6 py-16 text-white sm:px-8 md:px-12 md:py-20 lg:px-20"
      style={{ fontFamily: '"DM Sans", sans-serif' }}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.7fr_1fr_1.1fr] lg:gap-10 xl:gap-16">
          {/* Brand */}
          <div className="max-w-xs">
            <a
              href="/"
              aria-label="Chapel Hill Denham home"
              className="inline-flex"
            >
              <img
                src={NavLogo}
                alt="Chapel Hill Denham"
                className="mb-6 h-11 w-auto object-contain object-left"
              />
            </a>

            <p className="max-w-[280px] text-[13px] leading-7 text-white/60">
              Chapel Hill Denham is registered and regulated by the Securities
              and Exchange Commission, Nigeria.
            </p>

            <p className="mt-4 text-[11px] leading-5 tracking-wide text-white/40">
              Building long-term value through financial expertise.
            </p>
          </div>

          {/* The Firm */}
          <div>
            <h4 className={headingClass}>The Firm</h4>
            <ul className="flex flex-col items-start gap-2.5">
              {firmLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className={headingClass}>What We Do</h4>
            <ul className="flex flex-col items-start gap-2.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className={headingClass}>Our Offices</h4>
            <div className="space-y-6">
              <div>
                <h5 className="mb-1.5 text-[13px] font-medium text-white">
                  Lagos
                </h5>
                <p className="text-[12px] leading-6 text-white/60">
                  10 Bankole Oki Street, Ikoyi, Lagos, Nigeria
                </p>
                <p className="mt-1 text-[12px] leading-5 text-white/60">
                  Tel: 0700 CHAPEL HILL
                </p>
              </div>

              <div>
                <h5 className="mb-1.5 text-[13px] font-medium text-white">
                  Abuja
                </h5>
                <p className="text-[12px] leading-6 text-white/60">
                  Mabon Place, 46 Gana Street, Maitama, Abuja.
                </p>
              </div>

              <div>
                <h5 className="mb-1.5 text-[13px] font-medium text-white">
                  Accra
                </h5>
                <p className="text-[12px] leading-6 text-white/60">
                  Suite 2, The Labone Office Park, Sithole Street, Labone,
                  Accra, Ghana.
                </p>
                <p className="mt-1 text-[12px] leading-5 text-white/60">
                  Tel: +233 30 2 766 865
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-white/45">
            © {new Date().getFullYear()} Chapel Hill Denham. All Rights
            Reserved.
          </p>
          <a
            href="/"
            className="w-fit text-[11px] leading-5 text-white/45 transition-colors hover:text-white/80"
          >
            Chapel Hill Denham
          </a>
        </div>
      </div>
    </footer>
  );
}
