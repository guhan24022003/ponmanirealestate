import { Link } from "react-router-dom";
import {
  Award, Trophy, Users, ShieldCheck, FileCheck, BadgeIndianRupee,
  Briefcase, Network, HeartHandshake, Handshake, ArrowRight,
} from "lucide-react";
import { whyChoose } from "@/lib/site";

const iconMap = { Award, Trophy, Users, ShieldCheck, FileCheck, BadgeIndianRupee, Briefcase, Network, HeartHandshake, Handshake };

function WhyChooseUsPage() {
  return (
    <>
      <section className="bg-navy py-16 text-navy-foreground lg:py-20">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-px w-8 bg-gold" /> Why Choose Us <span className="h-px w-8 bg-gold" />
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Trusted by Generations of Thanjavur Families
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">
            Ten reasons clients return to Ponmani Real Estate — and refer their friends and family.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => {
             const Icon = iconMap[w.icon as keyof typeof iconMap] || ShieldCheck;
              return (
                <div
                  key={w.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md"
                >
                  <div className="absolute right-6 top-5 font-display text-4xl font-bold text-gold/5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="grid size-14 place-items-center rounded-2xl bg-navy text-gold shadow-sm">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{w.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted-foreground">
                    A defining promise of our work, backed by decades of consistent practice.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted py-14">
        <div className="container-page grid items-center gap-6 rounded-3xl border border-border bg-white p-8 text-center shadow-sm lg:grid-cols-[1fr_auto] lg:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Experience the Ponmani difference.
            </h2>
            <p className="mt-1.5 text-muted-foreground">
              Schedule a no-obligation consultation with our founder-led team.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 justify-self-center rounded-3xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy lg:justify-self-end"
          >
            Talk to Us <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUsPage;