import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Ruler,
  Building2,
  ShieldCheck,
  Compass,
  Maximize2,
  X,
  FileCheck,
  BadgeCheck,
  CircleCheck,
  TrendingUp,
  CalendarClock,
  Mail,
  Home,
} from "lucide-react";
import { properties, site, whatsappLink, type Property } from "@/lib/site";
import { PropertyCard } from "@/components/PropertyCard";
import ctaBg from "@/assets/cta-bg.jpg";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    if (!property) throw notFound();
    const related = properties.filter((p) => p.id !== property.id).slice(0, 3);
    return { property, related };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.property;
    if (!p) return { meta: [{ title: "Property — Ponmani Real Estate" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.location} · Ponmani Real Estate` },
        { name: "description", content: p.short },
        { property: "og:title", content: `${p.name} — Ponmani Real Estate` },
        { property: "og:description", content: p.short },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Property not found</h1>
      <Link to="/properties" className="mt-4 inline-block text-gold underline">
        Back to properties
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="container-page py-20 text-center">
      <h1 className="font-display text-2xl font-bold text-navy">Something went wrong.</h1>
      <button onClick={reset} className="mt-4 rounded-sm bg-navy px-4 py-2 text-white">
        Try again
      </button>
    </div>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const data = Route.useLoaderData() as { property: Property; related: Property[] };
  const { property: p, related } = data;


  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const total = p.images.length;
  const hasMany = total > 1;

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setActive((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, next, prev]);

  // Touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? next() : prev());
    setTouchStart(null);
  };

  const quick = [
    { label: "Property Type", value: p.type, Icon: Building2 },
    { label: "Land Area", value: p.size, Icon: Ruler },
    { label: "Road Width", value: p.roadWidth, Icon: Maximize2 },
    { label: "Facing", value: p.facing, Icon: Compass },
    { label: "Approval", value: p.approval, Icon: BadgeCheck },
    { label: "Ownership", value: p.ownership, Icon: FileCheck },
    { label: "Location", value: p.location, Icon: MapPin },
    { label: "Status", value: p.status, Icon: CircleCheck },
  ];

  const enquiryMsg = `Hi, I'm interested in "${p.name}" at ${p.location}. Please share more details.`;

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/40">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-navy">
              <Home className="size-3.5" /> Home
            </Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <Link to="/properties" className="hover:text-navy">Properties</Link>
            <ChevronRight className="size-3.5 opacity-50" />
            <span className="truncate font-medium text-navy">{p.name}</span>
          </nav>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-background pt-6 lg:pt-10">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-navy shadow-elevated"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={p.images[active]}
                  alt={`${p.name} — image ${active + 1}`}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0 size-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/20" />

              <span className="absolute left-5 top-5 inline-flex items-center rounded-full bg-gold px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-navy shadow">
                {p.type}
              </span>

              <button
                type="button"
                onClick={() => setLightbox(true)}
                className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-navy backdrop-blur-sm transition hover:bg-white"
                aria-label="Open fullscreen"
              >
                <Maximize2 className="size-3.5" /> Fullscreen
              </button>

              {hasMany && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-white/90 text-navy shadow-md transition hover:scale-105 hover:bg-white"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 grid size-11 place-items-center rounded-full bg-white/90 text-navy shadow-md transition hover:scale-105 hover:bg-white"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-navy/80 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {active + 1} / {total}
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {hasMany && (
            <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              {p.images.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                    i === active
                      ? "border-gold shadow-card"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img src={src} alt="" loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Header + Body grid */}
      <section className="bg-background py-12 lg:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            {/* Header */}
            <motion.header
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold">
                  {p.type}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
                  <CircleCheck className="size-3" /> {p.status}
                </span>
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                {p.name}
              </h1>
              <div className="mt-3 inline-flex items-center gap-2 text-base text-muted-foreground">
                <MapPin className="size-4 text-gold" /> {p.location}
              </div>
              <div className="mt-6 rounded-xl border border-gold/40 bg-gold/5 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">Pricing & Availability</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Property prices and availability are updated regularly. Contact Ponmani Real Estate directly for the latest pricing,
                  site visit scheduling, plot availability, investment guidance and legal verification information.
                </p>
              </div>
            </motion.header>

            {/* Quick Details */}
            <div>
              <SectionHeading eyebrow="Overview" title="Property Quick Details" />
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {quick.map(({ label, value, Icon }) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35 }}
                    className="group rounded-xl border border-border bg-white p-4 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-card"
                  >
                    <div className="inline-flex size-9 items-center justify-center rounded-lg bg-navy/5 text-gold transition group-hover:bg-navy group-hover:text-gold">
                      <Icon className="size-4" />
                    </div>
                    <div className="mt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="mt-1 text-sm font-semibold leading-snug text-navy">{value}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <SectionHeading eyebrow="About" title="Property Description" />
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                {p.description.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <SectionHeading eyebrow="What's included" title="Property Highlights" />
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4 transition hover:border-gold/60 hover:shadow-card"
                  >
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="text-sm font-semibold text-navy">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Amenities */}
            <div>
              <SectionHeading eyebrow="Infrastructure" title="Amenities" />
              <div className="mt-5 flex flex-wrap gap-2">
                {p.amenities.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-navy transition hover:border-gold hover:bg-gold/10"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Invest */}
            <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-navy to-[#0d1f3c] p-7 text-white sm:p-10">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-gold">
                <TrendingUp className="size-4" /> Investment Potential
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Why Invest In This Property
              </h2>
              <span className="gold-divider mt-3" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {p.investmentBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-gold text-navy">
                      <TrendingUp className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium text-white/90">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Map */}
            <div>
              <SectionHeading eyebrow="Location" title="Location & Nearby Landmarks" />
              <p className="mt-3 inline-flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 text-gold" /> {p.address}
              </p>
              <div className="mt-5 grid gap-5 lg:grid-cols-5">
                <div className="overflow-hidden rounded-2xl border border-border lg:col-span-3">
                  <iframe
                    title={`Map of ${p.location}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(p.address)}&output=embed`}
                    className="h-[360px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="rounded-2xl border border-border bg-white p-6 lg:col-span-2">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">Nearby</div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-navy">Key Landmarks</h3>
                  <ul className="mt-4 divide-y divide-border">
                    {p.nearby.map((n) => (
                      <li key={n.name} className="flex items-center justify-between py-3">
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-navy">
                          <MapPin className="size-3.5 text-gold" /> {n.name}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">{n.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Lead Card */}
          <aside className="lg:col-span-1">
            <div className="space-y-4 lg:sticky lg:top-24">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl border-t-4 border-gold bg-white shadow-elevated"
              >
                <div className="bg-gradient-to-br from-navy to-[#0d1f3c] p-6 text-white">
                  <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                    Interested In This Property?
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug">
                    Speak directly with our founder-led team.
                  </h3>
                  <p className="mt-2 text-sm text-white/75">
                    Get pricing, plot availability and arrange a personal site visit within 24 hours.
                  </p>
                </div>
                <div className="space-y-2.5 p-6">
                  <a
                    href={whatsappLink(enquiryMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <MessageCircle className="size-4" /> WhatsApp Now
                  </a>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy/90"
                  >
                    <Phone className="size-4" /> Call {site.phone}
                  </a>
                </div>
                <div className="border-t border-border bg-muted/40 p-5">
                  <ul className="grid gap-2 text-xs font-medium text-navy">
                    {[
                      "Legally Verified Property",
                      "Transparent Documentation",
                      "Trusted Since 2000",
                      "Founder-Led Guidance",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <ShieldCheck className="size-3.5 text-gold" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              <div className="rounded-2xl border border-border bg-navy p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                  Trusted Since 2000
                </div>
                <div className="mt-2 font-display text-lg font-semibold">
                  36+ Years of Real Estate Experience
                </div>
                <p className="mt-2 text-sm text-white/75">
                  A family-owned firm trusted by generations across Thanjavur.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Properties */}
      {related.length > 0 && (
        <section className="bg-muted/40 py-16 lg:py-20">
          <div className="container-page">
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">
                Explore More
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
                Related Properties
              </h2>
              <span className="gold-divider mx-auto mt-3" />
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <PropertyCard key={rp.id} property={rp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/70" />
        <div className="relative container-page py-20 text-center text-white lg:py-24">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">
            Ready When You Are
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Interested In This Property?
            <br className="hidden sm:block" /> Let's Schedule A Site Visit.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Our founder-led team will personally guide you through every detail — from documentation to final registration.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-navy transition hover:scale-[1.02]"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <a
              href={whatsappLink(enquiryMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-whatsapp px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition hover:scale-[1.02]"
            >
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(false)}
          >
            <button
              type="button"
              onClick={() => setLightbox(false)}
              aria-label="Close"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="size-5" />
            </button>
            <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white">
              {active + 1} / {total}
            </div>

            {hasMany && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev(); }}
                  aria-label="Previous"
                  className="absolute left-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronLeft className="size-6" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next(); }}
                  aria-label="Next"
                  className="absolute right-4 top-1/2 -translate-y-1/2 grid size-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            <motion.img
              key={active}
              src={p.images[active]}
              alt={`${p.name} — ${active + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">{eyebrow}</span>
      <h2 className="mt-2 font-display text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
      <span className="gold-divider mt-3" />
    </div>
  );
}
