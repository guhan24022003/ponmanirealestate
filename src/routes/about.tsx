import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Quote, ShieldCheck, Award, ArrowRight, Milestone } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import guhanImg from "@/assets/guhan.jpg";

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
      <Timeline />
      <GuhanSection />
    </>
  );
}

function Story() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">

          <img
            src={founderImg}
            alt="Founder R. Dakshinamoorthy"
            loading="lazy"
            width={896}
            height={1152}
            className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
        <div>
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title mt-3">Building Wealth Through Land. Building Trust Through Service.</h2>
          <span className="gold-divider mt-4" />
          <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Ponmani Real Estate was founded in the year <strong className="text-navy">2000</strong> in Thanjavur, Tamil Nadu, with a single mission — to give families an honest, transparent and reliable partner in their real-estate journey.
            </p>
            <p>
              Our founder, <strong className="text-navy">R. Dakshinamoorthy</strong>, brings over <strong className="text-navy">36 years</strong> of personal industry experience into every transaction. From small first-time plots to multi-acre layout development, our work has always been rooted in legally verified properties, fair pricing and lifelong relationships.
            </p>
            <p>
              Today, after 26+ years of business, thousands of satisfied clients across Thanjavur, Tamil Nadu and the NRI community continue to trust us with one of the most important decisions of their lives. As we welcome the next generation into the business, our promise remains unchanged — <em className="text-navy">trust above everything</em>.
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

function Timeline() {
  return (
    <section className="bg-muted py-16 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Our Journey</span>
          <h2 className="section-title mt-3">Milestones Across Three Decades</h2>
          <span className="gold-divider mt-4" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">
            From a single honest deal in 1988 to thousands of trusted transactions today —
            the story of a family business built on transparency and lifelong relationships.
          </p>
        </div>
        <div className="relative mx-auto mt-16 max-w-5xl">
          <ol className="space-y-0 lg:space-y-12">
            {timeline.map((m, i) => (
              <TimelineItem key={m.year} m={m} i={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// function FounderSection() {
//   return (
//     <section className="bg-background py-16 lg:py-24">
//       <div className="container-page grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
//         <div className="lg:col-span-5">
//           <div className="relative">

//             <img
//               src={founderImg}
//               alt="R. Dakshinamoorthy"
//               loading="lazy"
//               width={896}
//               height={1152}
//               className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
//             />
//           </div>
//         </div>
//         <div className="lg:col-span-7">
//           <span className="eyebrow">Meet the Founder</span>
//           <h2 className="section-title mt-3">R. Dakshinamoorthy</h2>
//           <div className="mt-2 text-base font-semibold text-gold">
//             Founder &amp; Managing Director · 36+ Years Experience
//           </div>
//           <span className="gold-divider mt-4" />
//           <div className="mt-6 rounded-2xl border-gold/20 bg-white p-8 shadow-sm">
//             <Quote className="size-7 text-gold" />
//             <p className="mt-2 font-display text-xl italic leading-relaxed text-navy">
//               Trust is earned through actions, not words.
//             </p>
//             <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
//               — R. Dakshinamoorthy, Founder
//             </div>
//           </div>
//           <p className="mt-6 text-base leading-relaxed text-muted-foreground">
//             Having entered the real-estate industry in the late 1980s, our founder built Ponmani
//             Real Estate from the ground up — one honest deal at a time. His belief that
//             relationships outlast transactions is the cornerstone on which the company stands today.
//           </p>
//           <div className="mt-6 grid gap-3 sm:grid-cols-3">
//             {[
//               { v: "36+", l: "Years Industry Experience" },
//               { v: "1000+", l: "Families Assisted" },
//               { v: "100%", l: "Verified Deals" },
//             ].map((s) => (
//               <div key={s.l} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
//                 <div className="font-display text-2xl font-bold text-navy">{s.v}</div>
//                 <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
            Carrying forward the family legacy, D. Guhan leads business development and digital
            strategy at Ponmani Real Estate. His focus is on bringing modern tools, transparent
            online experiences and a stronger digital presence to a firm that has always
            been about timeless trust.
          </p>
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
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutPage;