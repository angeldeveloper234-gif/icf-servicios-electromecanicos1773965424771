import { motion } from 'framer-motion';
import { config } from '@/config';

export function Stats() {
    const { stats } = config.dynamicContent;

    const data = [
        { label: "Métricas de Éxito", value: `${stats.projectsDone}`, suffix: "+", sub: "Proyectos Instalados" },
        { label: "Experiencia de Campo", value: `${stats.experienceYears}`, suffix: "", sub: "Años de Trayectoria" },
        { label: "Índice de Confianza", value: `${stats.happyClients}`, suffix: "+", sub: "Clientes Operativos" },
    ];

    return (
        <section className="py-32 bg-[#0A0A0B] border-y border-white/5 relative overflow-hidden">
            {/* Background Data Patterns */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none font-mono text-[8px] flex flex-wrap gap-4 overflow-hidden leading-none">
                {Array.from({ length: 100 }).map((_, i) => (
                    <span key={i}>ID_{Math.random().toString(36).substr(2, 9).toUpperCase()} STATUS_OK 200_EXEC</span>
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="group"
                        >
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-8 bg-[#2563EB]/40 group-hover:bg-[#2563EB] transition-all duration-500" />
                                    <span className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase font-black">
                                        {item.label}
                                    </span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white tabular-nums group-hover:text-blue-500/10 transition-colors duration-700">
                                        {item.value}
                                    </span>
                                    <span className="text-3xl md:text-4xl font-display font-black text-[#2563EB]">
                                        {item.suffix}
                                    </span>
                                </div>
                                <p className="text-zinc-400 font-sans text-xl font-light italic tracking-tight">
                                    {item.sub}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
