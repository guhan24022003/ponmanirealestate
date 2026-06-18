import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2.5">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="grid size-12 place-items-center rounded-full bg-whatsapp text-white shadow-elevated transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href={`tel:${site.phoneRaw}`}
        className="grid size-12 place-items-center rounded-full bg-gold text-navy shadow-elevated transition-transform hover:scale-105 md:hidden"
        aria-label="Call"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
