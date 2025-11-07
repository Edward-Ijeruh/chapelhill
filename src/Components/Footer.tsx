import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

export default function Footer() {
  return (
    <footer
      className="bg-[#0d1d26] text-white py-14 px-6 md:px-12 lg:px-24 border-t border-white/20"
      style={{ fontFamily: '"DM Sans", sans-serif', letterSpacing: "-0.3px" }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row justify-between gap-14">
          {/* Left side*/}
          <div className="max-w-sm">
            <img src={NavLogo} alt="Logo" className="h-14 w-auto mb-4" />
            <p className="text-sm text-gray-300 leading-relaxed">
              Chapel Hill Denham is registered and regulated by the Securities
              and Exchange Commission, Nigeria.
            </p>
          </div>

          {/* Middle */}
          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <h4 className="text-white/70 uppercase text-xs mb-3 tracking-widest">
                The Firm
              </h4>
              <ul className="space-y-2">
                {["Overview", "Our DNA", "Leadership", "Awards"].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white/70 uppercase text-xs mb-3 tracking-widest">
                What We Do
              </h4>
              <ul className="space-y-2">
                {[
                  "Investment Banking",
                  "Investment Management",
                  "Securities Trading",
                  "Alternative Investments",
                  "Wealth Management",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right side */}
          <div className="text-[12px] text-gray-300 leading-relaxed space-y-5 max-w-xs">
            <div>
              <h4 className="text-white/80 font-medium mb-1">Lagos</h4>
              <p>
                10 Bankole Oki Street, Ikoyi, Lagos, NIGERIA <br />
                Tel: 0700 CHAPEL HILL
              </p>
            </div>

            <div>
              <h4 className="text-white/80 font-medium mb-1">Abuja</h4>
              <p>Mabon Place, 46 Gana Street, Maitama, Abuja.</p>
            </div>

            <div>
              <h4 className="text-white/80 font-medium mb-1">Accra</h4>
              <p>
                Suite 2, The Labone Office Park, Sithole Street, Labone, Accra
                GHANA. <br />
                Tel: +233 30 2 766 865
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Chapel Hill Denham. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
