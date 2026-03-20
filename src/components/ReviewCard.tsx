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
            className="bg-[#1F2937] border border-slate-600 p-8 hover:border-[#2563EB] transition-all duration-300 relative group"
        >
            <Quote
                size={60}
                className="absolute top-4 right-4 text-slate-700 group-hover:text-[#2563EB]/20 transition-colors"
            />
            <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#2563EB] text-[#2563EB]" />
                ))}
            </div>
            <p className="text-slate-300 font-sans leading-relaxed mb-6 relative z-10">
                "{item.text}"
            </p>
            <div className="border-t border-slate-600 pt-4">
                <p className="text-white font-display font-bold tracking-wider uppercase">
                    {item.name}
                </p>
                <p className="text-[#2563EB] text-xs uppercase tracking-widest font-bold">
                    {item.role}
                </p>
            </div>
        </motion.div>
    );
}