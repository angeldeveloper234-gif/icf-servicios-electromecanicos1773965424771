import { motion } from "framer-motion";
import { config } from "@/config";
import { CheckCircle2 } from "lucide-react";

export function Features() {
    const { services, dynamicContent } = config;
    const { pricing } = dynamicContent;

    // Resolve price strings from config
    const priceMap: Record<string, string> = {
        "pricing.basic": pricing.basic,
        "pricing.comprehensive": pricing.comprehensive,
        "pricing.retainer": pricing.retainer,
    };

    return (
        <section id="services-features" className="py-40 bg-[#0A0A0B] relative overflow-hidden">
            {/* Technical Background */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-2xl">
                        <motion.p 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[#2563EB] font-mono text-xs tracking-[0.5em] uppercase mb-6 font-bold"
                        >
                            INGENIERÍA Y MANTENIMIENTO
                        </motion.p>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-display text-white leading-[0.9] tracking-tighter uppercase"
                        >
                            SOLUCIONES <span className="text-zinc-600 block md:inline">TÉCNICAS</span>
                        </motion.h2>
                    </div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-zinc-500 font-sans font-light text-xl max-w-sm leading-relaxed"
                    >
                        Ejecución de precisión con materiales certificados y protocolos de seguridad industrial.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 bg-white/5 backdrop-blur-sm border border-white/5 hover:border-[#2563EB]/40 transition-all duration-700 overflow-hidden"
                        >
                            {/* Inner technical details */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-zinc-700 tracking-widest uppercase pointer-events-none">
                                REF-ID: {service.id} // BUILD: 2024
                            </div>
                            
                            <div className="relative z-10">
                                <div className="text-5xl mb-12 transform group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                    {service.icon}
                                </div>

                                <h3 className="text-3xl font-display text-white mb-8 group-hover:text-[#2563EB] transition-colors tracking-tight uppercase leading-none">
                                    {service.title}
                                </h3>

                                <div className="space-y-6 mb-12">
                                    <p className="text-[#2563EB] font-mono text-[10px] tracking-widest font-black uppercase flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                                        Diagnóstico Crítico
                                    </p>
                                    <p className="text-zinc-500 font-sans font-light text-lg leading-relaxed italic">
                                        "{service.problem}"
                                    </p>
                                    <div className="pt-4 border-t border-white/5">
                                        <p className="text-zinc-300 font-sans font-medium text-base flex items-start gap-4 leading-snug">
                                            <CheckCircle2 size={18} className="text-[#2563EB] shrink-0 mt-1" />
                                            {service.solve}
                                        </p>
                                    </div>
                                </div>

                                {/* Price / Spec Data */}
                                <div className="p-6 bg-black/40 border border-white/5 group-hover:border-[#2563EB]/20 transition-all duration-700">
                                    <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black mb-3 italic">Investment Protocol</p>
                                    <p className="text-xl text-white font-display tracking-tight group-hover:text-[#2563EB] transition-colors">
                                        {priceMap[service.price] || service.price}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-br from-transparent to-[#2563EB]/10 transition-opacity opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
