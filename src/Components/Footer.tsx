import NavLogo from "../assets/images/logo/chapel-hill-denham-logo-retina-white-version.png";

export default function Footer() {
  return (
    <footer
      className="bg-[#0d1d26] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/30"
      style={{
        fontFamily: '"DM Sans", sans-serif',
        letterSpacing: "-0.3px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top area */}
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/30">
          {/* Logo */}
          <div>
            <img src={NavLogo} alt="Logo" className="h-14 w-auto mb-6" />
            <p className="text-sm text-gray-300 max-w-xs leading-relaxed">
              Chapel Hill Denham is registered and regulated by the Securities
              and Exchange Commission, Nigeria.
            </p>
          </div>

          {/* The Firm */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-white/70 uppercase">
              The Firm
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Our DNA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Leadership
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Awards
                </a>
              </li>
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-sm tracking-widest mb-4 text-white/70 uppercase">
              What We Do
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Investment Banking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Investment Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Securities Trading
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Alternative Investments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition">
                  Wealth Management
                </a>
              </li>
            </ul>
          </div>

          {/* News & Careers */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm tracking-widest mb-4 text-white/70 uppercase">
                News & Insights
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Press Releases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm tracking-widest mb-4 text-white/70 uppercase">
                Careers
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Working at Chapel Hill Denham
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Management Development Programme
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Internships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition">
                    Experienced Hires
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 pb-10 border-b border-white/30 text-sm leading-relaxed text-gray-300">
          <div>
            <h4 className="text-white/80 font-medium mb-2">Lagos</h4>
            <p>
              10 Bankole Oki Street
              <br />
              Ikoyi, Lagos NIGERIA
            </p>
            <p className="mt-2">Tel: 0700 CHAPEL HILL (0700 242 735 4455)</p>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-2">Abuja</h4>
            <p>
              Mabon Place,
              <br />
              46, Gana Street,
              <br />
              Maitama, Abuja.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-medium mb-2">Accra</h4>
            <p>
              Suite 2, The Labone Office Park, Sithole Street,
              <br />
              Labone, Accra GHANA.
            </p>
            <p className="mt-2">Tel: +233 30 2 766 865</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Chapel Hill Denham. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
