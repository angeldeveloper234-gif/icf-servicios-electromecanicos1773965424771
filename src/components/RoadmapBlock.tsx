import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface RoadmapBlockProps {
    step: string;
    title: string;
    desc: string;
    index: number;
}

export function RoadmapBlock({ step, title, desc, index }: RoadmapBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-12 border-l border-slate-600 pb-12 last:pb-0"
        >
            <div className="absolute -left-[17px] top-0 w-8 h-8 bg-[#374151] border-2 border-[#2563EB] rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">{step}</span>
            </div>
            <h3 className="text-xl font-display text-white mb-2 tracking-wide">
                {title}
            </h3>
            <p className="text-slate-400 font-sans text-sm leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
}