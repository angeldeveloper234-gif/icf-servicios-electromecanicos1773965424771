import { motion } from "framer-motion";
import { config } from "@/config";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
    const { services } = config;

    return (
        <section id="services" className="py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 tech-dots opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2563EB]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#E07B2A]"></span>
                            <span className="text-[#E07B2A] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                                Capacidades Técnicas
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-display text-white tracking-tighter leading-none mb-0">
                            ÁREAS DE <span className="text-[#2563EB] text-glow">ESPECIALIZACIÓN</span>
                        </h2>
                    </div>
                    <div className="lg:pl-20">
                        <p className="text-slate-400 font-sans text-lg leading-relaxed border-l-2 border-[#2563EB]/30 pl-8">
                            Nuestra experiencia abarca desde sistemas de climatización industrial hasta el mantenimiento preventivo de motores eléctricos de alta potencia.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card group relative p-10 industrial-border hover:border-[#2563EB]/50 transition-all duration-500 overflow-hidden"
                        >
                            {/* Technical background overlay */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <span className="font-mono text-4xl text-white">0{index + 1}</span>
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-4xl mb-8 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500 rounded-sm">
                                    {service.icon}
                                </div>
                                
                                <h3 className="text-2xl font-display text-white mb-4 tracking-wide group-hover:text-glow transition-all">
                                    {service.title}
                                </h3>
                                
                                <div className="space-y-4 mb-10">
                                    <p className="text-[#E07B2A] text-[10px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#E07B2A] animate-pulse"></span>
                                        {service.problem}
                                    </p>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {service.solve}
                                    </p>
                                </div>

                                <Link to="/contact" className="block">
                                    <Button 
                                        variant="outline" 
                                        className="w-full rounded-none border-white/10 hover:border-[#2563EB] hover:bg-[#2563EB]/10 text-white font-mono text-xs tracking-widest h-12 group/btn"
                                    >
                                        SOLICITAR DIAGNÓSTICO 
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#2563EB]" />
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#2563EB]" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-[#2563EB]" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-[#2563EB]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}