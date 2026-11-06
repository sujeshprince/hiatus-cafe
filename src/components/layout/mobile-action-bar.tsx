import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/links";

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick contact and reservations"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-ivory/95 px-3 py-2.5 shadow-[0_-12px_40px_rgba(42,27,20,0.08)] backdrop-blur-xl lg:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-[1fr_1fr_auto] gap-2 pb-[env(safe-area-inset-bottom)]">
        <a
          href={telHref()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/15 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-espresso"
        >
          <Phone className="size-3.5" strokeWidth={1.6} />
          Call
        </a>
        <a
          href="#reserve"
          className="inline-flex items-center justify-center rounded-full bg-espresso px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cream"
        >
          Reserve
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noreferrer"
          aria-label={`WhatsApp Hiatus Cafe on ${siteConfig.phoneDisplay}`}
          className="grid size-11 place-items-center rounded-full border border-espresso/15 text-espresso"
        >
          <MessageCircle className="size-4" strokeWidth={1.5} />
        </a>
      </div>
    </nav>
  );
}
