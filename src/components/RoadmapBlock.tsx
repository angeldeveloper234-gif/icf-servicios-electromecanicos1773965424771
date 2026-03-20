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
            className="relative pl-16 border-l-2 border-[#2563EB]/20 pb-16 last:pb-8 group"
        >
            {/* Step Indicator */}
            <div className="absolute -left-[17px] top-0 w-8 h-8 glass-card border border-[#2563EB] flex items-center justify-center rotate-45 group-hover:bg-[#2563EB] transition-all duration-500">
                <span className="text-[10px] font-mono font-bold text-white -rotate-45">{step}</span>
            </div>
            
            {/* Connection Line Glow */}
            <div className="absolute -left-[2px] top-8 bottom-0 w-[2px] bg-gradient-to-b from-[#2563EB] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="glass-card p-8 industrial-border group-hover:border-[#2563EB]/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#E07B2A] font-mono text-[10px] uppercase tracking-widest opacity-60">
                        Fase 0{index + 1}
                    </span>
                    <div className="h-[1px] flex-1 bg-white/5" />
                </div>
                
                <h3 className="text-2xl font-display text-white mb-4 tracking-tight group-hover:text-glow transition-all">
                    {title}
                </h3>
                
                <p className="text-slate-400 font-sans text-sm leading-relaxed border-l-2 border-[#2563EB]/10 pl-6 group-hover:border-[#2563EB]/30 transition-colors">
                    {desc}
                </p>

                {/* Technical Metadata */}
                <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <span className="text-[9px] font-mono uppercase tracking-tighter text-slate-500">
                        Status: COMPLIANT
                    </span>
                    <CheckCircle2 size={12} className="text-[#2563EB]" />
                </div>
            </div>
        </motion.div>
    );
}