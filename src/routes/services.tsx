import { Link } from "react-router-dom";
import {
  Home, TrendingUp, Handshake, LayoutGrid, ShieldCheck, FileText,
  Briefcase, HardHat, LineChart, ArrowRight, CheckCircle2, Phone, MessageCircle,
} from "lucide-react";
import { services, site, whatsappLink } from "@/lib/site";

const iconMap = { Home, TrendingUp, Handshake, LayoutGrid, ShieldCheck, FileText, Briefcase, HardHat, LineChart };

function ServicesPage() {
  return (
    <>

      <section className="bg-background py-6 lg:py-12">
        <div className="container-page space-y-12">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || ShieldCheck;
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.slug}
                id={s.slug}
                className="grid scroll-mt-24 items-center gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-sm lg:grid-cols-2 lg:gap-12 lg:p-12"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="grid size-16 place-items-center rounded-2xl bg-navy text-gold shadow-sm">
                    <Icon className="size-7" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-navy sm:text-3xl">
                    {s.title}
                  </h2>
                  <span className="gold-divider mt-3" />
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {[
                      "Expert Consultation",
                      "Legally Verified",
                      "Transparent Pricing",
                      "End-to-End Support",
                    ].map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="size-4 shrink-0 text-gold" />
                        <span className="font-medium text-navy">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-navy shadow-sm px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <Phone className="size-4" /> Call Now
                    </a>
                    <a
                      href={whatsappLink(`Hi, I'm interested in ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-whatsapp shadow-sm px-5 py-2.5 text-sm font-semibold text-white"
                    >
                      <MessageCircle className="size-4" /> WhatsApp
                    </a>
                  </div>
                </div>
                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-12">
                    <div className="grid size-full place-items-center">
                      <Icon className="size-40 text-gold/30" strokeWidth={1.25} />
                    </div>
                    <div className="absolute left-5 top-5 rounded-xl bg-gold px-3 py-1.5 shadow-sm font-display text-xs font-bold text-navy">
                      0{i + 1}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

     <section className="bg-muted py-14">
  <div className="container-page grid items-center gap-6 rounded-3xl border border-border bg-white p-8 text-center shadow-sm lg:grid-cols-[1fr_auto] lg:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Need Guidance on Property Investment?
            </h2>
            <p className="mt-1.5 text-muted-foreground">
             Speak directly with our experienced team for honest advice, property recommendations, and legally verified opportunities.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 justify-self-center rounded-3xl bg-gold px-6 py-3.5 text-sm font-semibold text-navy lg:justify-self-end"
          >
            Get in Touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;