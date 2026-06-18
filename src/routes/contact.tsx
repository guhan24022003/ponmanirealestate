import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Instagram,
  Navigation,
  ArrowUpRight,
} from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import contactHero from "@/assets/contact-hero-new.jpg";

function ContactPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={contactHero}
          alt="Luxury villa at sunset"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy/90 via-navy/80 to-navy/65" />
        <div className="container-page flex min-h-[420px] items-center py-20 lg:min-h-[480px] lg:py-28">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About Your{" "}
              <span className="text-gold">Property Needs</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you're looking to buy land, invest, verify documents, or discuss a property
              opportunity, we're here to help.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-4" /> Call Now
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CONTACT CARDS */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <span className="gold-divider" /> Reach Out
            </span>
            <h2 className="section-title mt-3">Get In Touch</h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ContactCard
              icon={Phone}
              label="Phone"
              value={site.phone}
              href={`tel:${site.phoneRaw}`}
            />
            <ContactCard
              icon={MessageCircle}
              label="WhatsApp"
              value={site.phone}
              href={whatsappLink()}
              accent
            />
            <ContactCard
              icon={Mail}
              label="Email"
              value={site.email}
              href={`mailto:${site.email}`}
            />
            <ContactCard
              icon={MapPin}
              label="Office Address"
              value={site.address}
              href={site.mapEmbed.replace("&output=embed", "")}
            />
          </div>
        </div>
      </section>

      {/* SECTION 3 — QUICK ACTIONS */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container-page text-center">
          <span className="eyebrow">
            <span className="gold-divider" /> Quick Actions
          </span>
          <h2 className="section-title mt-3">Speak To Our Team</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Choose the fastest way to connect. We respond to every call and message personally.
          </p>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
            <ActionButton
              icon={Phone}
              label="Call Now"
              href={`tel:${site.phoneRaw}`}
              variant="primary"
            />
            <ActionButton
              icon={MessageCircle}
              label="WhatsApp Chat"
              href={whatsappLink()}
              variant="whatsapp"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — OFFICE & MAP */}d
      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <span className="gold-divider" /> Visit Us
            </span>
            <h2 className="section-title mt-3">Our Office</h2>
            <p className="mt-4 text-muted-foreground">
              Drop by for a personal consultation. Walk-ins welcome with prior appointment.
            </p>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-sm border border-border bg-white shadow-card lg:grid-cols-5">
            <div className="space-y-8 p-8 lg:col-span-2">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                  <MapPin className="size-4" /> Address
                </div>
                <p className="mt-2 font-medium text-navy">{site.address}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                  <Clock className="size-4" /> Business Hours
                </div>
                <div className="mt-2 text-sm text-navy/85">
                  <p>Monday – Saturday</p>
                  <p className="font-medium">9:00 AM – 7:00 PM</p>
                  <p className="mt-1 text-muted-foreground">Sunday by appointment</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                  <Phone className="size-4" /> Phone
                </div>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-2 inline-flex items-center gap-2 font-medium text-navy hover:text-gold"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                  <MessageCircle className="size-4" /> WhatsApp
                </div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-medium text-navy hover:text-gold"
                >
                  {site.phone}
                </a>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                  <Instagram className="size-4" /> Instagram
                </div>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-medium text-navy hover:text-gold"
                >
                  @ponmanirealestate
                </a>
              </div>
            </div>

            <div className="lg:col-span-3">
              <iframe
                title="Ponmani Real Estate Office Location"
                src={site.mapEmbed}
                className="h-[400px] w-full border-0 sm:h-[480px] lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SIMPLE CTA */}
      <section className="bg-navy py-20 text-navy-foreground lg:py-24">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready To Discuss Your <span className="text-gold">Property?</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy transition-transform hover:-translate-y-0.5"
            >
              <Phone className="size-4" /> Call Now
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <MessageCircle className="size-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */
// Sub-components

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold/30 hover:shadow-md ${accent ? "border-gold/40" : ""
        }`}
    >
      <div className="grid size-14 place-items-center rounded-2xl bg-navy text-gold shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy">
        <Icon className="size-5" />
      </div>
      <div className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 break-words font-display text-lg font-semibold text-navy">
        {value}
      </div>
      <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-all group-hover:gap-3">
        Connect <ArrowUpRight className="size-3.5" />
      </div>
    </a>
  );
}

function ActionButton({
  icon: Icon,
  label,
  href,
  variant,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  variant: "primary" | "whatsapp" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2.5 rounded-sm px-7 py-4 text-sm font-semibold transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-navy text-white"
      : variant === "whatsapp"
        ? "bg-whatsapp text-white"
        : "border border-border bg-white text-navy hover:border-gold";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles}`}
    >
      <Icon className="size-5" />
      {label}
    </a>
  );
}

export default ContactPage;