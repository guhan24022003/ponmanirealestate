import { Link } from "react-router-dom";
import {
  Phone,
  MessageCircle,
  Award,
  Trophy,
  Users,
  Calendar,
  ShieldCheck,
  Home,
  TrendingUp,
  Handshake,
  LayoutGrid,
  FileText,
  Briefcase,
  HardHat,
  LineChart,
  FileCheck,
  BadgeIndianRupee,
  Network,
  HeartHandshake,
  Quote,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import { site, whatsappLink, services, properties, whyChoose } from "@/lib/site";
import { PropertyCard } from "@/components/PropertyCard";

const iconMap = {
  Home, TrendingUp, Handshake, LayoutGrid, ShieldCheck, FileText, Briefcase,
  HardHat, LineChart, Award, Trophy, Users, FileCheck, BadgeIndianRupee,
  Network, HeartHandshake,
};

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <Services />
      <FeaturedProperties />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}

function Hero() {
  const trustPoints = [
    "36+ Years of Real Estate Experience",
    "Legally Verified & Clear-Title Properties",
    "Transparent Pricing & Documentation",
    "Family-Owned · Trusted Since 2000",
  ];
  return (
    <section className="relative overflow-hidden bg-muted">
      <div className="container-page relative grid items-center gap-10 py-14 lg:grid-cols-12 lg:gap-14 lg:py-20">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <Star className="size-3.5 fill-gold" />
            Since 2000 · Thanjavur
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-navy sm:text-5xl lg:text-[3.5rem]">
            Premium Properties.{" "}
            <span className="text-gold">Trusted</span> Since Generations.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover legally verified residential plots, layouts and premium homes
            across Thanjavur — backed by 36+ years of trusted real estate experience
            and transparent dealings.
          </p>
          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm font-medium text-navy">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" />
              Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="size-4" />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <img
                src={heroVilla}
                alt="Premium residential property — Ponmani Real Estate"
                width={1280}
                height={1280}
                className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105 sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { icon: Award, v: "36+", l: "Years Experience" },
    { icon: Trophy, v: "26+", l: "Years Business Excellence" },
    { icon: Users, v: "1000+", l: "Families Served" },
    { icon: Calendar, v: "Since 2000", l: "Trusted Partner" },
  ];
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 px-4 py-10 text-center ring-1 ring-white/5"
          >
            <it.icon className=" size-8 text-gold" />
            <div className="font-display text-xl font-bold text-white sm:text-2xl">
              {it.v}

            </div>
            <div className="text-xs font-medium uppercase tracking-widest text-white/70">
              {it.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div />
          <div />
          <img
            src={heroBg}
            alt="Ponmani Real Estate — premium properties in Thanjavur"
            loading="lazy"
            width={1280}
            height={960}
            className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
        <div>
          <span className="eyebrow">About Ponmani Real Estate</span>
          <h2 className="section-title mt-3">A Legacy Built on Trust</h2>
          <span className="gold-divider mt-4" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Founded in the year <strong className="text-navy">2000</strong>, Ponmani Real Estate is one of Thanjavur’s most trusted real estate firms. With over 36+ years of combined industry expertise, we have guided thousands of families and investors in making confident and secure property decisions.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We operate with a strong commitment to transparency, trust, and long-term value creation in every transaction. Our focus is to ensure clients receive legally verified properties, clear documentation, and reliable guidance throughout their real estate journey.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            From first-time buyers to experienced investors, we provide end-to-end support in land acquisition, property sales, and investment planning across Thanjavur and surrounding regions.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "36+ Years of Real Estate Expertise",
              "Legally Verified & Clear-Title Properties",
              "Transparent Pricing & Documentation",
              "Founder-Led Professional Approach",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-navy">
                <ShieldCheck className="size-4 shrink-0 text-gold" />
                <span className="font-medium">{t}</span>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Read More <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-muted py-16 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Our Services</span>
          <h2 className="section-title mt-3">What We Offer</h2>
          <span className="gold-divider mt-4" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            We provide residential plots, layouts, and premium land options across Thanjavur.
We specialize in legally verified and clear-title property transactions.
We assist clients in buying, selling, and real estate investment guidance.
We ensure transparent pricing with complete documentation support.
We deliver trusted and professional real estate services with reliable support.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <div
                key={s.slug}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/40 hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)]"
              >
                <span className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-gold to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="grid size-16 place-items-center rounded-xl bg-navy text-gold shadow-[0_10px_25px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-navy bg-transparent px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            View All Services <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProperties() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow">Featured Listings</span>
          <h2 className="section-title mt-3">Featured Properties</h2>
          <span className="gold-divider mt-4" />
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Hand-picked, legally verified properties across Thanjavur and surrounding districts.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
          >
            View All Properties <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-navy py-16 text-navy-foreground lg:py-24"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-page relative">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-px w-8 bg-gold" /> Why Choose Us <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Why Choose Ponmani Real Estate
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            A trusted name in Thanjavur real estate — backed by decades of experience,
            transparent dealings and lasting client relationships.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((w) => {
            const Icon = iconMap[w.icon as keyof typeof iconMap] ?? ShieldCheck;
            return (
              <div
                key={w.title}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/40 hover:bg-white/[0.08] hover:shadow-[0_15px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="grid size-14 place-items-center rounded-2xl bg-gold/10 text-gold shadow-[0_8px_20px_rgba(212,160,23,0.15)] transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-navy">
                  <Icon className="size-5" />
                </div>
                <div className="text-base font-semibold leading-snug text-white">{w.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-[whitesmoke]  py-20 text-navy-foreground lg:py-28">
      <div className="container-page relative text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
          <span className="h-px w-8 bg-gold" /> Get in Touch <span className="h-px w-8 bg-gold" />
        </span>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
          Ready to Find Your Ideal Property?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Speak with our team today for trusted real estate guidance, legally verified properties
          and confident investment opportunities across Thanjavur.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-bold text-navy shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            <Phone className="size-4" /> Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-7 py-4 text-sm font-bold text-white shadow-elevated transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" /> WhatsApp Us
          </a>
        </div>
        <p className="mt-7 text-xs font-medium uppercase tracking-widest text-gold/80">
          {site.phone} · Trusted Since 2000
        </p>
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = data.get("name") || "";
        const msg = data.get("message") || "";
        window.open(whatsappLink(`Hi, I'm ${name}. ${msg}`), "_blank");
      }}
      className="rounded-sm border border-border bg-white p-7 shadow-sm"
    >
      <h3 className="font-display text-xl font-semibold text-navy">Send Us an Enquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Fill in your details — we'll reach back within 24 hours.
      </p>
      <div className="mt-5 grid gap-4">
        <Field label="Your Name" name="name" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone Number" name="phone" type="tel" required />
          <Field label="Email" name="email" type="email" />
        </div>
        <Field label="Interested In" name="interest" placeholder="e.g. Residential Plot" />
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-navy">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            className="mt-1.5 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-gold focus:ring-2"
            placeholder="Tell us what you're looking for…"
          />
        </div>
        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Send Enquiry <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-navy">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none ring-gold focus:ring-2"
      />
    </div>
  );
}

export default HomePage;