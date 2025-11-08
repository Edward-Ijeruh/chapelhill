import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Stats
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
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className={`pl-6 border-l ${
            index === 0 ? "border-gray-600" : "border-gray-300"
          }`}
        >
          <h3
            className="text-3xl md:text-4xl font-semibold text-[#0D1B1E]"
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

          <p className="text-xs font-semibold mt-2 tracking-wide">
            {item.label}
          </p>

          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
