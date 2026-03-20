import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '@/config';

export const StickyCallBar: React.FC = () => {
    const { whatsapp, phone } = config.contact_info;
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[60] sm:hidden grid grid-cols-2 h-16 bg-[#1F2937] border-t border-slate-600 shadow-2xl"
        >
            <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 text-white border-r border-slate-600 active:bg-slate-700 transition-colors"
            >
                <Phone size={18} className="text-[#2563EB]" />
                <span className="text-xs font-display font-bold uppercase tracking-widest">Llamar</span>
            </a>
            <a
                href={`https://wa.me/${whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white active:bg-slate-700 transition-colors"
            >
                <MessageSquare size={18} className="text-[#2563EB]" />
                <span className="text-xs font-display font-bold uppercase tracking-widest">WhatsApp</span>
            </a>
        </motion.div>
    );
};