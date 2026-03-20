import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TestimonialItem } from "@/config";

interface ReviewCardProps {
    item: TestimonialItem;
    index: number;
}

export function ReviewCard({ item, index }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card p-10 industrial-border hover:border-[#2563EB]/40 transition-all duration-500 relative flex flex-col items-center text-center"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 glass-card border border-[#2563EB]/40 flex items-center justify-center rotate-45 group-hover:bg-[#2563EB] transition-all duration-500">
                <Quote size={20} className="text-white -rotate-45" />
            </div>

            <div className="flex gap-1 mb-8 pt-4">
                {[...Array(5)].map((_, i) => (
                    <Star 
                        key={i} 
                        size={14} 
                        className={`transition-colors duration-500 ${i < item.rating ? 'fill-[#E07B2A] text-[#E07B2A]' : 'text-white/10'}`} 
                    />
                ))}
            </div>

            <p className="text-slate-400 font-sans italic text-lg leading-relaxed mb-10 flex-1 relative z-10">
                "{item.text}"
            </p>

            <div className="w-full pt-8 border-t border-white/5 space-y-2">
                <p className="text-white font-display text-xl tracking-tight leading-none group-hover:text-glow transition-all">
                    {item.name}
                </p>
                <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
                    <p className="text-[#2563EB] font-mono text-[10px] uppercase font-bold tracking-[0.2em] leading-none">
                        {item.role}
                    </p>
                </div>
            </div>

            {/* Micro-technical-details */}
            <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                <span className="text-[9px] font-mono text-white tracking-widest">CERTIFIED TESTIMONIAL</span>
            </div>
        </motion.div>
    );
}