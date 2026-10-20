import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 95,
    suffix: "%",
    label: "CLIENT RETENTION RATE",
    desc: "Long-term trust built through consistent performance.",
  },
  {
    value: 85,
    suffix: "%",
    label: "PORTFOLIO PERFORMANCE",
    desc: "Strategic investment models outperforming market averages.",
  },
  {
    value: 100,
    suffix: "%",
    label: "PERSONALIZED SERVICE",
    desc: "Tailored advisory support for every client.",
  },
  {
    value: 12,
    suffix: "+",
    label: "YEARS OF COMBINED EXPERTISE",
    desc: "Seasoned financial and portfolio management experience.",
  },
  {
    value: 500,
    prefix: "₦",
    suffix: "M+",
    label: "ASSETS ADVISED / MANAGED",
    desc: "Responsible guidance for capital growth and protection.",
  },
  {
    value: 40,
    suffix: "+",
    label: "CLIENTS SERVED",
    desc: "Trusted by private individuals and corporate teams.",
  },
];

export default function StatsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-7xl grid-cols-1 border-l border-t border-[#17252b]/15 sm:grid-cols-2 lg:grid-cols-3"
    >
      {stats.map((item, index) => (
        <motion.article
          key={item.label}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="group relative min-h-[240px] overflow-hidden border-b border-r border-[#17252b]/15 p-7 sm:p-8 lg:min-h-[270px] lg:p-10"
        >
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
              className="text-4xl font-medium tracking-tight text-[#0d1d26] md:text-5xl"
              style={{ fontFamily: '"Roboto Serif", serif' }}
            >
              <CountUp
                key={inView ? `animate-${index}` : `stop-${index}`}
                start={inView ? 0 : item.value}
                end={inView ? item.value : 0}
                duration={2}
                suffix={item.suffix}
                prefix={item.prefix}
              />
            </h3>

            <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#17252b]">
              {item.label}
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-[#17252b]/65">
              {item.desc}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
