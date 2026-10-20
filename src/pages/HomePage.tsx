import { motion } from "framer-motion";
import {
  // ChevronRight,
  ArrowDownRight,
  ArrowRight,
  // ChevronDown,
} from "lucide-react";
import StatsGrid from "../Components/StatsGrid";

// Images
// import sectionTwoImgOne from "../assets/images/homepage/section-2-img-1.jpg";
// import sectionTwoImgTwo from "../assets/images/homepage/section-2-img-2.jpg";
// import sectionTwoImgThree from "../assets/images/homepage/section-2-img-3.jpg";
// import sectionFourImgOne from "../assets/images/homepage/section-4-img-1.png";
// import sectionFourImgTwo from "../assets/images/homepage/section-4-img-2.jpg";
// import sectionFourImgThree from "../assets/images/homepage/section-4-img-3.png";
// import sectionFiveImgOne from "../assets/images/homepage/section-5-img-1.jpg";
// import sectionFiveImgTwo from "../assets/images/homepage/section-5-img-2.jpg";
// import sectionFiveImgThree from "../assets/images/homepage/section-5-img-3.jpg";
import sectionSixImg from "../assets/images/homepage/section-6-img.png";
// import sectionSevenImg from "../assets/images/homepage/section-7-img-1.png";
import ceo from "../assets/images/homepage/ceo.jpg";
// import awardOne from "../assets/images/homepage/award-1.jpeg";
// import awardTwo from "../assets/images/homepage/award-2.jpeg";
// import awardThree from "../assets/images/homepage/award-3.jpeg";
// import awardFour from "../assets/images/homepage/award-4.jpeg";
// import awardFive from "../assets/images/homepage/award-5.jpeg";
// import awardSix from "../assets/images/homepage/award-6.jpeg";
// import awardSeven from "../assets/images/homepage/award-7.jpeg";
import heroVideo from "../assets/images/homepage/chd-hero-video.mp4";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[720px] h-[100svh] max-h-[1100px] overflow-hidden bg-[#0d1d26] text-white">
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
                    See what we do
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="/contact"
                    className="group inline-flex items-center gap-4 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none border border-white/60 px-6 py-4 text-sm font-medium text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0d1d26]"
                  >
                    Start a conversation
                    <ArrowDownRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>
                </div>
              </div>

              <p className="mt-10 max-w-sm text-sm leading-7 text-white md:text-lg lg:mb-2 lg:mt-0">
                Strategic wealth management for forward-thinking investors. We
                connect capital, expertise and opportunity to help shape lasting
                economic progress.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder section */}
      <section id="founder" className="overflow-hidden bg-white text-[#17252b]">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-24 lg:px-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-16 max-w-7xl text-center md:mb-20"
          >
            <div className="mx-auto mb-5 h-0.5 w-[40px] bg-[#17252b]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em]">
              PERSPECTIVE FROM THE TOP
            </p>
          </motion.div>

          {/* Content */}
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none">
                <img
                  src={ceo}
                  alt="Bolaji Balogun, Chief Executive Officer of Chapel Hill Denham"
                  className="h-[460px] w-full object-cover object-center md:h-[540px]"
                />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-7"
            >
              <h2
                style={{ fontFamily: '"Roboto Serif", serif' }}
                className="max-w-xl text-5xl font-normal leading-[1.03] tracking-[-0.055em]"
              >
                Beyond Investing: A Deep-Rooted Philosophy
              </h2>

              <p className="mt-10 max-w-2xl text-sm leading-8 text-[#485258] md:text-base">
                Over the next decade, less than 1% of the capital managed by
                global institutional asset managers can change the course of
                Africa’s economic and social history, support the planet’s route
                to zero carbon, and lift more than a billion people out of
                poverty. A prosperous Africa can feed the world, resource the
                world, and reverse the migration. The foundation for delivering
                this outcome is in accelerating the rate of investment into
                low-carbon, resilient infrastructure across Africa.
              </p>

              <div className="mt-10 border-t border-[#17252b]/20 pt-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#687178]">
                  Bolaji Balogun
                </p>
                <p className="mt-1 text-sm font-medium">
                  Chief Executive Officer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section
        id="what-we-do"
        className="bg-[#0d1d26] py-20 text-white md:py-24"
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
            <div className="mx-auto mb-5 h-0.5 w-[40px] bg-white" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
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
                className="max-w-xl text-5xl font-normal leading-[1.03] tracking-[-0.055em]"
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
              <p className="max-w-md text-sm leading-7 text-white/65 md:text-base">
                We bring together investment expertise and market insight to
                help clients navigate complexity and pursue meaningful
                opportunities.
              </p>
            </motion.div>
          </div>

          {/* Services grid */}
          <div className="mx-auto mt-20 grid max-w-7xl border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-6">
            {[
              {
                title: "Investment Banking",
                description:
                  "Strategic advice and capital solutions for businesses and institutions.",
                href: "/services/investment-banking",
                span: "lg:col-span-2",
              },
              {
                title: "Investment Management",
                description:
                  "Disciplined investment strategies focused on long-term value.",
                href: "/services/investment-management",
                span: "lg:col-span-2",
              },
              {
                title: "Alternative Investments",
                description:
                  "Access to differentiated opportunities across private markets.",
                href: "/services/alternative-investments",
                span: "lg:col-span-2",
              },
              {
                title: "Wealth Management",
                description:
                  "Personalised financial strategies shaped around your ambitions.",
                href: "/services/wealth-management",
                span: "lg:col-span-3",
              },
              {
                title: "Securities Trading & Research",
                description:
                  "Market access, informed research and execution expertise.",
                href: "/services/securities-trading-research",
                span: "lg:col-span-3",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`group relative min-h-[270px] overflow-hidden border-b border-r border-white/20 p-7 sm:p-8 lg:min-h-[290px] lg:p-10 ${item.span}`}
              >
                {/* Animated border drawn into view */}
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
                    stroke="rgba(255,255,255,0.8)"
                    strokeWidth="0.45"
                    vectorEffect="non-scaling-stroke"
                    pathLength="1"
                    initial={{ pathLength: 0 }}
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

                <div className="relative z-10 flex h-full flex-col items-start">
                  <h3
                    style={{ fontFamily: '"Roboto Serif", serif' }}
                    className="max-w-sm text-2xl font-normal leading-snug tracking-[-0.035em] md:text-3xl"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-3 border-b border-white/50 pb-2 pt-8 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-[#bb7332] hover:text-[#bb7332]"
                  >
                    Learn more
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="w-full overflow-hidden bg-[#0d1d26] py-16 text-white md:py-24 lg:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 65,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {[0, 1].map((group) => (
                <div
                  key={group}
                  aria-hidden={group === 1 ? "true" : undefined}
                  className="flex shrink-0 items-center"
                >
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex shrink-0 items-center gap-8 px-6 sm:gap-12 sm:px-10 lg:gap-16 lg:px-14"
                    >
                      <span
                        style={{ fontFamily: '"Roboto Serif", serif' }}
                        className="whitespace-nowrap text-[clamp(3rem,9vw,8.5rem)] font-normal leading-none tracking-[-0.075em]"
                      >
                        Invest with Chapel Hill Denham.
                      </span>

                      <span
                        aria-hidden="true"
                        className="h-3 w-3 shrink-0 rounded-full bg-[#bb7332] md:h-4 md:w-4"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Impact */}
      <section className="overflow-hidden bg-white py-24 text-[#17252b] md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-12 max-w-7xl text-center md:mb-16"
          >
            <div className="mx-auto mb-5 h-0.5 w-[40px] bg-[#17252b]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em]">
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
                className="max-w-xl text-5xl font-normal leading-[1.03] tracking-[-0.055em] md:text-6xl"
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
              <p className="max-w-md text-sm leading-7 text-[#17252b]/65 md:text-base">
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
              Meet
              <br />
              InvestNaija.
            </h2>

            <p className="mt-8 max-w-lg text-sm leading-8 text-[#59636a] md:text-base">
              InvestNaija is a platform designed to deepen financial inclusion
              and empower individuals to build sustainable wealth. Whether
              you're beginning your financial journey or planning for long-term
              growth, InvestNaija provides accessible investment opportunities
              tailored to your goals.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-8 text-[#59636a] md:text-base">
              Start investing with ease and take your financial future into your
              own hands.
            </p>

            <a
              href="/contact"
              className="group mt-9 inline-flex w-fit items-center gap-5 rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none bg-[#bb7332] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[#17252b]"
            >
              Open an account
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
