import { motion } from "framer-motion";
import { ArrowRight, Hammer, ShieldCheck, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function CTA() {
    const { branding } = config;

    return (
        <section className="py-40 bg-[#0A0A0B] text-white relative overflow-hidden border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#2563EB]/10 blur-[150px] rounded-full opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-3 px-4 py-2 border border-[#2563EB]/30 bg-[#2563EB]/10 rounded-full mb-12"
                    >
                        <Zap size={16} className="text-[#2563EB]" />
                        <span className="text-[#2563EB] font-mono text-xs tracking-widest uppercase font-bold">Respuesta Inmediata</span>
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-display mb-12 leading-[1] tracking-tighter uppercase">
                        ¿LISTO PARA UN TRABAJO<br />
                        <span className="text-zinc-500">BIEN HECHO?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-zinc-400 mb-16 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        Contáctanos hoy y recibe tu presupuesto sin costo. <br className="hidden md:block" />
                        Sin sorpresas, con garantía escrita en cada proyecto.
                    </p>

                    {/* Trust indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
                        {[
                            { icon: <ShieldCheck size={24} />, text: "Garantía Escrita" },
                            { icon: <Clock size={24} />, text: "Entrega Puntual" },
                            { icon: <Hammer size={24} />, text: "Excelencia Técnica" },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center justify-center gap-3 text-zinc-500 hover:text-white transition-colors"
                            >
                                <span className="text-[#2563EB]">{item.icon}</span>
                                <span className="font-mono text-xs tracking-widest uppercase font-bold">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-20 px-12 bg-[#2563EB] text-white hover:bg-blue-600 rounded-none text-sm tracking-[0.3em] uppercase font-black transition-all shadow-[0_20px_60px_-15px_rgba(37,99,235,0.4)] flex items-center gap-6"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Presupuesto <ArrowRight className="w-6 h-6" />
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ color: "#2563EB" }}
                            className="flex items-center gap-4 text-zinc-400 group transition-colors px-8 py-4 border border-transparent hover:border-white/10"
                            onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}`}
                        >
                            <span className="text-sm tracking-[0.3em] uppercase font-black">WhatsApp Directo</span>
                            <div className="w-10 h-[10px] bg-zinc-800 relative overflow-hidden">
                                <motion.div 
                                    className="absolute inset-0 bg-[#2563EB]"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "0%" }}
                                />
                            </div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
