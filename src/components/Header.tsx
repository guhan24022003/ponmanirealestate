import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/properties", label: "Properties" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact Us" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-base backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <div className="grid size-14 shrink-0 place-items-center rounded-xl border border-gold/40 bg-navy text-gold shadow-[0_8px_20px_rgba(15,23,42,0.15)]">
            <span className="font-display text-xl font-bold leading-none">P</span>
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate font-display text-lg font-bold text-navy sm:text-xl">
              Ponmani Real Estate
            </div>
            <div className="truncate text-[10px] font-medium uppercase tracking-widest text-gold sm:text-[11px]">
              Since 2000 · Thanjavur
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 ${isActive
                  ? "text-navy font-semibold"
                  : "text-foreground/75 hover:text-navy"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-2 rounded-xl bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-[0_10px_25px_rgba(212,160,23,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(212,160,23,0.35)] md:inline-flex"
          >
            <Phone className="size-4" />
            Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-border text-navy lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-border/60 py-3 text-sm font-medium last:border-0 ${isActive
                    ? "text-navy font-semibold"
                    : "text-foreground/80"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={`tel:${site.phoneRaw}`}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-navy md:hidden"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
