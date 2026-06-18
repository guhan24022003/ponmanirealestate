import { Link } from "react-router-dom";
import {} from "lucide-react";
import type { Property } from "@/lib/site";

export function PropertyCard({ property: p }: { property: Property }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-elevated">
      <div className="relative block aspect-video overflow-hidden">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          width={1200}
          height={675}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div>
          <h3 className="font-display text-lg font-semibold leading-snug text-navy transition-colors group-hover:text-gold">
            {p.name}
          </h3>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {p.short}
        </p>
      <div className="mt-6">
        <Link
          to="/contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
        >
          Contact Us
        </Link>
      </div>
      </div>
    </div>
  );
}
