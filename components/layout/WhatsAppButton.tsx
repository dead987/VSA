import { MessageCircleMore } from "lucide-react";

import { company } from "@/data/company";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${company.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-brass/40 bg-brass text-obsidian shadow-glow transition-transform duration-300 ease-premium hover:-translate-y-1"
    >
      <MessageCircleMore className="h-6 w-6" />
    </a>
  );
}
