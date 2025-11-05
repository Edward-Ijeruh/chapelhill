import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

// Images
import sectionTwoImgOne from "../assets/images/homepage/section-2-img-1.jpg";
import sectionTwoImgTwo from "../assets/images/homepage/section-2-img-2.jpg";
import sectionTwoImgThree from "../assets/images/homepage/section-2-img-3.jpg";
import sectionThreeImgOne from "../assets/images/homepage/section-3-img-1.png";
import sectionThreeImgTwo from "../assets/images/homepage/section-3-img-2.png";
import sectionFourImgOne from "../assets/images/homepage/section-4-img-1.png";
import sectionFourImgTwo from "../assets/images/homepage/section-4-img-2.jpg";
import sectionFourImgThree from "../assets/images/homepage/section-4-img-3.png";
import sectionFiveImgOne from "../assets/images/homepage/section-5-img-1.jpg";
import sectionFiveImgTwo from "../assets/images/homepage/section-5-img-2.jpg";
import sectionFiveImgThree from "../assets/images/homepage/section-5-img-3.jpg";
import sectionSixImg from "../assets/images/homepage/section-6-img.png";

export default function HomePage() {
  return (
    <>
      {/* Herosection */}
      <section className="relative w-full h-screen md:h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://chapelhilldenham.com/wp-content/uploads/2024/07/overview-landing-video.mp4#20336"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-xl"
          >
            <h1
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
              className="text-3xl md:text-5xl uppercase leading-tight tracking-wide"
            >
              Strategic wealth management for forward thinking investors
            </h1>

            <div
              className="mt-6 flex items-center gap-4"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
            >
              <button className="px-6 py-3 bg-[#bb7332] hover:bg-white hover:text-[#0d1d26] transition-all rounded-full text-sm font-medium cursor-pointer">
                Explore
              </button>
              <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-[#0d1d26] transition-all rounded-full text-sm font-medium cursor-pointer">
                Consult
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom right */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden md:block absolute bottom-24 right-6 text-white/90 text-xs md:text-sm leading-relaxed max-w-sm"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              letterSpacing: "-0.5px",
            }}
          >
            We deliver sophisticated investment strategies, tailored to your
            unique financial goals, combining cutting-edge research with
            personal expertise.
          </motion.p>
        </div>

        {/* Mobile scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden cursor-pointer"
          onClick={() => {
            const nextSection = document.getElementById("next-section");
            if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={20} className="text-white opacity-90" />
        </motion.div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#0d1d26] text-white py-20 px-6 md:px-12 lg:px-24">
        {/* Top section */}
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left heading section */}
          <div>
            <p className="text-sm mb-3 font-bold">OUR APPROACH</p>
            <h2
              className="text-3xl md:text-3xl lg:text-4xl leading-tight"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              COMPREHENSIVE <br />
              INVESTMENT SOLUTIONS <br />
              FOR DYNAMIC <br />
              INVESTORS
            </h2>
          </div>

          {/* Right text and buttons */}
          <div
            className="text-sm md:text-md leading-relaxed text-gray-300 max-w-md md:pt-44"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              letterSpacing: "-0.5px",
            }}
          >
            <p>
              We provide integrated financial services designed to maximize your
              investment potential across multiple market sectors. Our holistic
              approach ensures strategic and informed decision-making.
            </p>

            <div className="mt-6 flex gap-3">
              <button className="border border-white px-4 py-2 rounded-full font-body text-sm md:text-md hover:bg-white hover:text-black transition cursor-pointer">
                Learn more
              </button>
              <button className="group inline-flex items-center gap-2 px-5 py-2 font-body text-sm md:text-md text-white rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
                Contact
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Cards section */}
        <div
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-10"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            letterSpacing: "-0.5px",
          }}
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={sectionTwoImgOne}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{ fontFamily: '"Roboto Serif", serif' }}
            >
              FINANCIAL ADVISORY
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              Expert guidance to optimize your investment portfolio and
              strategy.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="md:pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={sectionTwoImgTwo}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{ fontFamily: '"Roboto Serif", serif' }}
            >
              ASSET MANAGEMENT
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              Sophisticated portfolio construction tailored to your goals.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="md:pt-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={sectionTwoImgThree}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{ fontFamily: '"Roboto Serif", serif' }}
            >
              CAPITAL MARKETS
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              Advanced strategic insights and global investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial Advisory */}
      <section className="bg-white text-[#0D1B1E] py-20 px-6 md:px-12 lg:px-24">
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={sectionThreeImgOne}
              alt="Financial Advisory"
              className="w-full h-auto rounded-xl object-cover"
            />
          </motion.div>

          {/* Right content */}
          <motion.div
            className="flex flex-col justify-between h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Top */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left text column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p
                  className="text-xs mb-4 font-bold"
                  style={{ letterSpacing: "0.05em" }}
                >
                  DEEP DIVE
                </p>

                <h2
                  className="text-3xl leading-tight mb-6"
                  style={{ fontFamily: '"Roboto Serif", serif' }}
                >
                  FINANCIAL <br />
                  ADVISORY THAT <br />
                  TRANSFORMS <br />
                  YOUR INVESTMENT <br />
                  STRATEGY
                </h2>
              </motion.div>

              {/* Right image column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={sectionThreeImgTwo}
                  alt="Financial Advisory Session"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </motion.div>
            </div>

            {/* Bottom column */}
            <motion.div
              className="mt-16 text-sm md:text-md leading-relaxed text-black max-w-md"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p>
                Our financial advisory services provide comprehensive analysis
                and personalized recommendations. We leverage advanced analytics
                and deep market understanding to craft innovative investment
                solutions.
              </p>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <button className="border border-black px-4 py-2 rounded-full text-sm md:text-md hover:bg-black hover:text-white transition cursor-pointer">
                  Learn more
                </button>

                <button className="group inline-flex items-center gap-2 px-5 py-2 text-sm md:text-md text-black rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
                  Contact
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Steps */}
      <section className="bg-[#955c28] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col divide-y divide-white/50">
          {/* Step 1 */}
          <motion.div
            className="relative py-16 flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Step label */}
            <div
              className="absolute top-6 left-0 flex items-center gap-2"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
            >
              <span className="text-sm font-bold">01</span>
              <span className="text-sm font-bold">Initial consultation</span>
            </div>

            {/* Left text */}
            <div className="flex-1">
              <p className="text-sm mb-3">DISCOVERY</p>
              <h2
                className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-4"
                style={{
                  fontFamily: '"Roboto Serif", serif',
                  letterSpacing: "-0.5px",
                }}
              >
                UNDERSTANDING YOUR UNIQUE FINANCIAL LANDSCAPE
              </h2>
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  letterSpacing: "-0.5px",
                }}
              >
                We begin by conducting an in-depth analysis of your current
                financial situation, risk tolerance, and long-term objetives.
              </p>

              <div className="mt-6 flex gap-3">
                <button className="border border-white px-4 py-2 rounded-full text-sm md:text-md hover:bg-white hover:text-black transition cursor-pointer">
                  Learn more
                </button>
                <button className="group inline-flex items-center gap-2 px-5 py-2 text-sm md:text-md text-white rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
                  Contact
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Right image */}
            <div className="flex-1 flex justify-end">
              <img
                src={sectionFourImgOne}
                alt="Consultation Step 1"
                className="w-full max-w-lg rounded-xl object-cover"
              />
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="relative py-16 flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-6 left-0 flex items-center gap-2"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
            >
              <span className="text-sm font-bold">02</span>
              <span className="text-sm font-bold">Strategy & Planning</span>
            </div>

            <div className="flex-1">
              <p className="text-sm mb-3">DESIGN</p>
              <h2
                className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-4"
                style={{
                  fontFamily: '"Roboto Serif", serif',
                  letterSpacing: "-0.5px",
                }}
              >
                CRAFTING A PERSONALIZED INVESTMENT ROADMAP
              </h2>
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  letterSpacing: "-0.5px",
                }}
              >
                Our experts develop a customized investment strategy aligned
                with your specific financial goals and risk profile.
              </p>

              <div className="mt-6 flex gap-3">
                <button className="border border-white px-4 py-2 rounded-full text-sm md:text-md hover:bg-white hover:text-black transition cursor-pointer">
                  Learn more
                </button>
                <button className="group inline-flex items-center gap-2 px-5 py-2 text-sm md:text-md text-white rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
                  Contact
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <img
                src={sectionFourImgTwo}
                alt="Consultation Step 2"
                className="w-full max-w-lg rounded-xl object-cover"
              />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="relative py-16 flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div
              className="absolute top-6 left-0 flex items-center gap-2"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
            >
              <span className="text-sm font-bold">03</span>
              <span className="text-sm font-bold">Ongoing Management</span>
            </div>

            <div className="flex-1">
              <p className="text-sm mb-3">EXECUTION</p>
              <h2
                className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-4"
                style={{
                  fontFamily: '"Roboto Serif", serif',
                  letterSpacing: "-0.5px",
                }}
              >
                CONTINUOUS MONITORING AND ADAPTIVE STRATEGIES
              </h2>
              <p
                className="text-sm leading-relaxed max-w-md"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  letterSpacing: "-0.5px",
                }}
              >
                We provide continuous portfolio optimization, regular
                performance reviews, and proactive adjustments to maximize your
                investment potential.
              </p>

              <div className="mt-6 flex gap-3">
                <button className="border border-white px-4 py-2 rounded-full text-sm md:text-md hover:bg-white hover:text-black transition cursor-pointer">
                  Learn more
                </button>
                <button className="group inline-flex items-center gap-2 px-5 py-2 text-sm md:text-md text-white rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
                  Contact
                  <ChevronRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <img
                src={sectionFourImgThree}
                alt="Consultation Step 3"
                className="w-full max-w-lg rounded-xl object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
        {/* Top section */}
        <motion.div
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-sm mb-3 font-bold">WHY CHOOSE US</p>
            <h2
              className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-3"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              TRANSFORMATIVE INVESTMENT <br />
              SOLUTIONS THAT DELIVER <br />
              EXCEPTIONAL VALUE
            </h2>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.5px",
              }}
            >
              Our commitment to innovation and client success sets us apart in
              the competitive investment landscape. We prioritize transparency,
              expertise, and personalized service.
            </p>
          </div>
        </motion.div>

        {/* Cards section */}
        <div
          className="max-w-7xl mx-auto mt-16 grid md:grid-cols-3 gap-10"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            letterSpacing: "-0.5px",
          }}
        >
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={sectionFiveImgOne}
              alt="A person receiving financial advice"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              PROVEN TRACK RECORD
            </h3>
            <p className="text-sm mt-2">
              Consistent performance and strategic investment approaches that
              generate meaningful returns.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="md:pt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={sectionFiveImgTwo}
              alt="A person managing assets"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              CUSTOMIZED STRATEGIES
            </h3>
            <p className="text-sm mt-2">
              Tailored investment solutions designed to meet your unique
              financial objectives and risk profile.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="md:pt-40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={sectionFiveImgThree}
              alt="Two people looking at capital markets"
              className="w-full h-48 object-cover rounded-xl"
            />
            <h3
              className="text-lg mt-4"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              ADVANCED TECHNOLOGY
            </h3>
            <p className="text-sm mt-2">
              Cutting-edge analytical tools and research capabilities to inform
              smarter investment decisions.
            </p>
          </motion.div>
        </div>

        {/* Buttons */}
        <motion.div
          className="max-w-7xl mx-auto mt-10 flex gap-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="border border-black px-4 py-2 rounded-full text-sm md:text-md hover:bg-black hover:text-white transition cursor-pointer">
            Learn more
          </button>

          <button className="group inline-flex items-center gap-2 px-5 py-2 text-sm md:text-md text-black rounded-sm transition-all duration-300 hover:opacity-80 cursor-pointer">
            Contact
            <ChevronRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </section>

      {/* InvestNaija */}
      <section className="bg-[#0d1d26] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p
              className="text-xs mb-4 font-bold"
              style={{ letterSpacing: "0.08em" }}
            >
              PARTNER SPOTLIGHT
            </p>

            <h2
              className="text-3xl md:text-4xl leading-tight mb-6"
              style={{
                fontFamily: '"Roboto Serif", serif',
                letterSpacing: "-0.5px",
              }}
            >
              InvestNaija
            </h2>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.3px",
              }}
            >
              InvestNaija is a platform designed to deepen financial inclusion
              and empower individuals to build sustainable wealth. Whether
              you're beginning your financial journey or planning for long-term
              growth, InvestNaija provides accessible investment opportunities
              tailored to your goals.
            </p>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                letterSpacing: "-0.3px",
              }}
            >
              Start investing with ease and take your financial future into your
              own hands.
            </p>

            <button className="group inline-flex items-center gap-2 border border-white px-6 py-2 rounded-full text-sm font-body hover:bg-white hover:text-[#0d1d26] transition cursor-pointer">
              Open an Account
              <ChevronRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={sectionSixImg}
              alt="InvestNaija App"
              className="w-full max-w-sm md:max-w-lg object-contain drop-shadow-2xl rounded-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
