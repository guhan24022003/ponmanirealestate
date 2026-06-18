import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, MessageCircle, Facebook } from "lucide-react";
import { site, whatsappLink, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid size-12 place-items-center rounded-sm border-2 border-gold bg-navy text-gold">
              <span className="font-display text-xl font-bold leading-none">P</span>
            </div>
            <div>
              <div className="font-display text-lg font-bold">Ponmani Real Estate</div>
              <div className="text-[11px] font-medium uppercase tracking-widest text-gold">
                Since 2000
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Setting the standard of excellence
            in real estate since 2000.
            Providing verified premium properties
            with complete legal transparency.
            Empowering clients to build wealth
            through secure land investments.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-sm border border-white/20 transition-colors hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="#"
              className="grid size-9 place-items-center rounded-sm border border-white/20 transition-colors hover:border-gold hover:text-gold"
              aria-label="Facebook"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-9 place-items-center rounded-sm border border-white/20 transition-colors hover:border-gold hover:text-gold"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Quick Links</h4>
          <span className="mt-2 block h-0.5 w-10 bg-gold" />
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Properties", "/properties"],
              ["Contact Us", "/contact"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Our Services</h4>
          <span className="mt-2 block h-0.5 w-10 bg-gold" />
          <ul className="mt-4 space-y-2.5 text-sm text-white/75">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold text-white">Get in Touch</h4>
          <span className="mt-2 block h-0.5 w-10 bg-gold" />
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-gold" />
              <a href={`tel:${site.phoneRaw}`} className="hover:text-gold">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Ponmani Real Estate. All rights reserved.</p>
          <p className="italic text-gold/90">Building Trust Through Every Property</p>
        </div>
      </div>
    </footer>
  );
}
