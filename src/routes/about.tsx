import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Quote, ShieldCheck, Award, ArrowRight, Milestone } from "lucide-react";
import founderImg from "@/assets/Dakshinamoorthy-Raghavan.png";
import guhanImg from "@/assets/Guhan-Dakshinamoorthy.png";

const timeline = [
  { year: "1988", title: "Founder Enters Industry", text: "R. Dakshinamoorthy begins his real estate journey and gains practical experience through land transactions, plot development and customer relations." },
  { year: "2000", title: "Ponmani Real Estate Founded", text: "Ponmani Real Estate is officially established in Thanjavur with a vision of trust, transparency and customer-first service." },
  { year: "2010", title: "Growing Client Network", text: "Strong reputation and referrals help expand the customer base across Thanjavur and nearby regions." },
  { year: "2020", title: "Thousands of Successful Transactions", text: "The company reaches major milestones through successful property sales, investments and layout developments." },
  { year: "2025", title: "Second Generation Growth", text: "D. Guhan joins business development and digital strategy, helping modernize the company while preserving its traditional values." },
];

function AboutPage() {
  return (
    <>
      <Story />
      <GuhanSection />
    </>
  );
}

function Story() {
  return (
    <section className="bg-[whitesmoke] py-16 lg:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">

          <img
            src={founderImg}
            alt="Mr. Dakshinamoorthy Raghavan"
            loading="lazy"
            width={896}
            height={1152}
            className="mx-auto aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
          />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title mt-3">Building Wealth Through Land. Building Trust Through Service.</h2>
          <span className="gold-divider mt-4" />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-navy">Mr. Dakshinamoorthy Raghavan</strong> was born in <strong className="text-navy">1969</strong> in Pattukkottai, Tamil Nadu. He began his career in the real estate industry at the age of 20, starting from the ground level and gaining strong practical experience in the field.
            </p>
            <p>
              He established his own real estate business in the year 2000. With over 26+ years of entrepreneurial experience and nearly 36 years of overall exposure in the real estate industry, he has developed deep expertise in real estate sales, brokerage, and property management.
            </p>
            <p>
              Over the years, he has built a strong reputation through his dedication, industry knowledge, and consistent performance in the real estate sector. He continues to play an active role in business development and property-related services.
              — <em className="text-navy">trust above everything</em>.
            </p>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {[
              "Founded in the year 2000",
              "36+ Years of Founder Experience",
              "26+ Years of Business Excellence",
              "Thousands of Trusted Clients",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm">
                <ShieldCheck className="size-4 shrink-0 text-gold" />
                <span className="font-medium text-navy">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  m,
  i,
}: {
  m: { year: string; title: string; text: string };
  i: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);
  const isLeft = i % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Card = (
    <div
      className={`group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-2xl lg:p-8 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      style={{ transitionDelay: `${i * 90}ms` }}
    >
      <span
        aria-hidden
        className="absolute left-0 top-0 h-1 w-16 rounded-tl-2xl rounded-tr-2xl bg-gold transition-all duration-500 group-hover:w-full"
      />
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold">
        <Milestone className="size-3.5" /> Milestone
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-navy">
        {m.title}
      </h3>
      <p className="mt-4 text-[15px] leading-7 text-slate-600">
        {m.text}
      </p>
    </div>
  );

  const YearBadge = (
    <div
      className={`inline-flex items-center justify-center rounded-sm bg-navy px-5 py-2 font-display text-xl font-bold text-gold shadow-card ring-4 ring-muted transition-transform duration-500 ${visible ? "scale-100" : "scale-90"
        }`}
      style={{ transitionDelay: `${i * 90 + 80}ms` }}
    >
      {m.year}
    </div>
  );

  return (
    <li ref={ref} className="relative">
      {/* Mobile / tablet: single-column */}
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-5 lg:hidden">
        <div className="relative flex flex-col items-center">
          <span aria-hidden className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gold/25" />
          <span className="relative z-10 mt-1 size-4 rounded-full border-2 border-gold bg-white shadow-card" />
        </div>
        <div className="pb-10">
          <div className="mb-3">{YearBadge}</div>
          {Card}
        </div>
      </div>

      {/* Desktop: alternating */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8">
        <div className={isLeft ? "" : "invisible"}>{isLeft && Card}</div>
        <div className="relative flex h-full flex-col items-center">
          <span aria-hidden className="absolute inset-y-0 w-0.5 bg-gold/25" />
          <div className="relative z-10">{YearBadge}</div>
          <span
            aria-hidden
            className={`absolute top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-gold/40 lg:block ${isLeft ? "right-full" : "left-full"
              }`}
          />
        </div>
        <div className={isLeft ? "invisible" : ""}>{!isLeft && Card}</div>
      </div>
    </li>
  );
}

function GuhanSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7 lg:order-1 order-2">
          <span className="eyebrow">Next Generation</span>
          <h2 className="section-title mt-3">D. Guhan</h2>
          <div className="mt-2 text-base font-semibold text-gold">
            Business Development &amp; Digital Strategy Lead
          </div>
          <span className="gold-divider mt-4" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            <strong className="text-navy">Mr. Guhan Dakshinamoorthy</strong> was born in  <strong className="text-navy">2003</strong> in Thanjavur, Tamil Nadu. He is the son of Mr. Dakshinamoorthy Raghavan and is actively involved in the family real estate business.
          </p>
<br />
          <p>He holds a Bachelor of Engineering (B.E.) degree in Computer Science and Engineering (CSE). He brings strong skills in marketing, business development, and software/web development, focusing on driving business growth through modern technology and digital strategies.
          </p><br />
          
          <p>He is passionate about learning all aspects of the real estate industry and combining technical knowledge with business experience to support the company’s expansion and long-term success.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Business Development", "Digital Strategy", "Client Relations"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-white px-3 py-1.5 text-xs font-semibold text-navy"
              >
                <Award className="size-3.5 text-gold" /> {t}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 lg:order-2 order-1">
          <img
            src={guhanImg}
            alt="D. Guhan — Business Development & Digital Strategy Lead"
            loading="lazy"
            width={896}
            height={1152}
            className="mx-auto aspect-[4/5] w-full rounded-3xl object-cover object-[center_15%] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;