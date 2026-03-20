import { MessageCircle } from "lucide-react";
import { config } from "@/config";

export function WhatsAppWidget() {
    const { whatsapp } = config.contact_info;
    
    return (
        <a
            href={`https://wa.me/${whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-20 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Contactar por WhatsApp"
        >
            <MessageCircle className="text-white w-8 h-8" />
        </a>
    );
}