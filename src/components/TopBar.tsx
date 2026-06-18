import { MapPin, Phone, MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-navy text-navy-foreground text-xs sm:text-sm">
      <div className="container-page flex h-10 items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <span className="flex min-w-0 items-center gap-1.5">
            <MapPin className="size-3.5 shrink-0 text-gold" />
            <span className="truncate">{site.location}</span>
          </span>
          <a
            href={`tel:${site.phoneRaw}`}
            className="hidden items-center gap-1.5 hover:text-gold sm:flex"
          >
            <Phone className="size-3.5 shrink-0 text-gold" />
            <span>{site.phone}</span>
          </a>
        </div>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-sm bg-whatsapp px-3 py-1 font-medium text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-3.5" />
          <span className="hidden sm:inline">WhatsApp</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>
    </div>
  );
}
