
import { properties } from "@/lib/site";
import { PropertyCard } from "@/components/PropertyCard";

function PropertiesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-navy-foreground lg:py-20">
        <div className="container-page text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-px w-8 bg-gold" /> Properties <span className="h-px w-8 bg-gold" />
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Property Categories
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75">
            Every listing is legally verified, clear-titled and personally vetted by our team.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertiesPage;