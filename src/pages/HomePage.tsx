import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import StatsGrid from "../Components/StatsGrid";

import sectionSixImg from "../assets/images/homepage/section-6-img.png";
import heroVideo from "../assets/images/homepage/chd-hero-video.mp4";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[720px] h-[100svh] max-h-[1100px] overflow-hidden bg-[#0c232e] text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="absolute inset-0 bg-[#0d1d26]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1d26]/75 via-[#0d1d26]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1d26]/75 via-transparent to-[#0d1d26]/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-10 pt-32 md:px-12 md:pb-14 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="mt-auto pb-20 md:pb-28"
          >
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-5xl">
                <h1
                  style={{ fontFamily: '"Roboto Serif", serif' }}
                  className="max-w-5xl text-[clamp(2.75rem,6.5vw,6.5rem)] font-normal leading-[0.99] tracking-[-0.065em]"
                >
                  Capital that
                  <br />
                  <span className="text-white/70">moves Africa</span>
                  <br />
                  forward.
                </h1>

                <div className="mt-9 flex flex-wrap gap-3">
                  <a
                    href="#what-we-do"
                    className="group inline-flex items-center gap-5 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none bg-[#bb7332] px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#0d1d26]"
                  >
                    What We Do
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>

              <p className="mt-10 max-w-sm text-sm leading-7 text-white md:text-lg lg:mb-2 lg:mt-0">
                Over two decades of delivering results for founders, families,
                businesses and governments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section
        id="what-we-do"
        className="bg-white py-20 text-[#0d1d26] md:py-24"
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-7xl text-center md:mb-20"
          >
            <div className="mx-auto mb-5 h-0.5 w-[40px] bg-[#17252b]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#17252b]">
              WHAT WE DO
            </p>
          </motion.div>

          {/* Introduction */}
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-7"
            >
              <h2
                style={{ fontFamily: '"Roboto Serif", serif' }}
                className="max-w-xl text-5xl font-normal leading-[1.03] tracking-[-0.055em] md:text-6xl"
              >
                Financial expertise for a changing world.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-end md:col-span-5"
            >
              <p className="max-w-md text-sm leading-7 text-[#17252b]/65 md:text-base">
                We offer a diversified platform that supports long-term capital
                formation for development.
              </p>
            </motion.div>
          </div>

          {/* Business Categories */}
          <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 border-l border-t border-[#17252b]/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {[
              {
                title: "Capital Markets",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus.",
                href: "/services/capital-markets",
              },
              {
                title: "Retirement Savings",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.",
                href: "/services/retirement-savings",
              },
              {
                title: "Protection",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque.",
                href: "/services/protection",
              },
              {
                title: "Financial Technology",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.",
                href: "/services/financial-technology",
              },
              {
                title: "International",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum.",
                href: "/services/international",
              },
              {
                title: "Investments",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor.",
                href: "/services/investments",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="group relative min-h-[240px] overflow-hidden border-b border-r border-[#17252b]/15 p-7 sm:p-8 lg:min-h-[270px] lg:p-10"
              >
                {/* Animated Border */}
                <svg
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <motion.rect
                    x="0.5"
                    y="0.5"
                    width="99"
                    height="99"
                    fill="none"
                    stroke="#17252b"
                    strokeWidth="0.45"
                    vectorEffect="non-scaling-stroke"
                    pathLength="1"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1 },
                    }}
                    transition={{
                      duration: 1.15,
                      delay: index * 0.12,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  />
                </svg>

                <div className="relative z-10 flex h-full flex-col">
                  <h3
                    style={{ fontFamily: '"Roboto Serif", serif' }}
                    className="text-2xl font-medium tracking-tight text-[#0d1d26] transition-colors duration-300 group-hover:text-[#17252b]/70 md:text-3xl"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-[#17252b]/65">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-auto inline-flex w-fit items-center border-b border-[#17252b]/30 pb-2 pt-8 text-xs font-semibold uppercase tracking-[0.12em] text-[#17252b] transition-colors duration-300 hover:border-[#0d1d26] hover:text-[#0d1d26]/65"
                  >
                    Learn more
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="overflow-hidden bg-[#0c232e] py-24 text-white md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-7xl text-center md:mb-16"
          >
            <div className="mx-auto mb-5 h-0.5 w-[40px] bg-white" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">
              OUR IMPACT
            </p>
          </motion.div>

          {/* Introduction */}
          <div className="mx-auto mb-16 grid max-w-7xl gap-8 md:grid-cols-12 md:gap-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-7"
            >
              <h2
                style={{ fontFamily: '"Roboto Serif", serif' }}
                className="max-w-xl text-5xl font-normal leading-[1.03] tracking-[-0.055em] text-white md:text-6xl"
              >
                Trust built through experience and results.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex items-end md:col-span-5"
            >
              <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
                Our track record reflects lasting client relationships,
                disciplined investment thinking, and a commitment to delivering
                tailored financial solutions across changing markets.
              </p>
            </motion.div>
          </div>

          {/* Statistics grid */}
          <StatsGrid />
        </div>
      </section>

      {/* InvestNaija */}
      <section className="overflow-hidden bg-[#e9e6de] text-[#17252b]">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20"
          >
            <h2
              style={{ fontFamily: '"Roboto Serif", serif' }}
              className="text-[clamp(2.5rem,5vw,5.2rem)] leading-[1.02] tracking-[-0.065em]"
            >
              InvestNaija
              <br />
              by Chapel Hill Denham.
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-8 text-[#59636a] md:text-base">
              InvestNaija by Chapel Hill Denham is a platform designed to deepen
              financial inclusion and empower individuals to build sustainable
              wealth. Whether you're beginning your financial journey or
              planning for long-term growth, InvestNaija provides accessible
              investment opportunities tailored to your goals.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#59636a] md:text-base">
              Start investing with ease and take your financial future into your
              own hands.
            </p>

            <a
              href="/contact"
              className="group mt-9 inline-flex w-fit items-center gap-5 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none bg-[#bb7332] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#17252b]"
            >
              Open an Account
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-[#d7d3c9] px-6 pt-10 md:min-h-[680px] md:px-10"
          >
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[#17252b]/10" />
            <div className="absolute -right-10 -top-10 h-60 w-60 rounded-full border border-[#17252b]/10" />

            <img
              src={sectionSixImg}
              alt="InvestNaija investment platform"
              className="relative z-10 max-h-[600px] w-full max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
