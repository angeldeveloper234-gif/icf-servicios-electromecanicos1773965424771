import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { TextReveal } from "@/components/features/TextReveal";
import { Link } from "react-router-dom";

interface HeroProps {
    dynamic_city?: string;
    pain_point_headline?: string;
}

export function Hero({ dynamic_city, pain_point_headline }: HeroProps) {
    const { dynamicContent, branding } = config;
    const { specialization, city: configCity, localAnchor } = dynamicContent;

    const displayCity = dynamic_city || configCity;
    const displayHeadline = pain_point_headline || specialization.pain;

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
                    alt="Industrial Background"
                    className="w-full h-full object-cover opacity-10 grayscale brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-transparent to-[#0A0A0B]" />
                <div className="absolute inset-0 tech-grid opacity-20" />
                
                {/* Orbital Glow */}
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#E07B2A]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-8"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-4 px-4 py-2 border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-12 industrial-border group cursor-default">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                </span>
                                <span className="text-blue-500 font-mono text-[9px] tracking-[0.4em] uppercase font-black">
                                    SYSTEM ONLINE
                                </span>
                            </div>
                            <div className="w-[1px] h-3 bg-white/10" />
                            <span className="text-zinc-500 font-mono text-[9px] tracking-[0.2em] uppercase font-bold group-hover:text-white transition-colors">
                                ISO-CERTIFIED FACILITY
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-12 text-white tracking-tighter">
                            <span className="block text-blue-600 text-lg md:text-2xl mb-6 tracking-[0.2em] font-mono font-black opacity-90">
                                {specialization.title}
                            </span>
                            <div className="relative">
                                <TextReveal text={displayHeadline} className="text-white drop-shadow-2xl" />
                                {/* Underline accent */}
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="absolute -bottom-6 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-blue-400 to-transparent" 
                                />
                            </div>
                        </h1>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 mb-20">
                            <p className="text-xl md:text-2xl text-zinc-400 font-sans max-w-xl leading-relaxed">
                                Ingeniería electromecánica de alto impacto en <span className="text-white font-bold underline decoration-blue-600/50 underline-offset-8">{displayCity}</span>. 
                                Estándares de precisión industrial para climatización crítica.
                            </p>
                            <div className="hidden md:block w-32 h-[1px] bg-white/10" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link to="/contact">
                                <Button size="lg" className="h-24 px-12 bg-blue-600 hover:bg-blue-700 text-white rounded-none text-[11px] font-mono tracking-[0.4em] font-black uppercase transition-all shadow-[0_10px_40px_rgba(37,99,235,0.3)] hover:translate-y-[-4px]">
                                    Fase de Diagnóstico <ArrowRight className="ml-6 w-5 h-5" />
                                </Button>
                            </Link>
                            <a 
                                href={config.contact_info.map_link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="group flex items-center justify-center gap-6 px-12 py-6 border border-white/10 text-white hover:bg-white/5 transition-all font-mono tracking-[0.2em] uppercase text-[10px] font-bold backdrop-blur-sm"
                            >
                                <MapPin size={18} className="text-blue-500 group-hover:animate-bounce" />
                                {localAnchor}
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="lg:col-span-4 hidden lg:flex flex-col items-end gap-12"
                    >
                        <div className="p-8 border border-white/5 bg-white/[0.02] industrial-border w-full max-w-[320px] backdrop-blur-xl">
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono text-blue-500 font-black tracking-widest">UNIT_01</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-3 bg-blue-600 animate-pulse"></div>
                                    <div className="w-1 h-2 bg-blue-600/50"></div>
                                    <div className="w-1 h-4 bg-blue-600"></div>
                                </div>
                            </div>
                            <p className="text-4xl font-display text-white mb-2">99.9%</p>
                            <p className="text-[9px] font-mono text-zinc-500 tracking-[0.3em] uppercase">Rendimiento Operativo</p>
                            <div className="mt-6 w-full h-[2px] bg-white/5 relative">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '99.9%' }}
                                    transition={{ duration: 2, delay: 1 }}
                                    className="absolute inset-0 bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
                                />
                            </div>
                        </div>

                        <div className="group p-8 border border-white/5 bg-white/[0.02] industrial-border w-full max-w-[320px] backdrop-blur-xl hover:border-blue-600/30 transition-all">
                            <div className="flex items-center gap-4 mb-4">
                                <ShieldCheck size={20} className="text-[#E07B2A]" />
                                <span className="text-[10px] font-mono text-white tracking-[0.2em] font-bold uppercase">SEGURIDAD NIVEL 4</span>
                            </div>
                            <p className="text-zinc-500 text-[10px] font-sans leading-relaxed">
                                Protocolos de intervención técnica bajo normativa internacional de seguridad industrial.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom scanning bar decorative */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Side Scroll Indicator */}
            <div className="absolute right-10 bottom-10 hidden lg:flex flex-col items-center gap-6">
                <span className="rotate-90 text-[9px] font-mono text-zinc-600 tracking-[1em] uppercase whitespace-nowrap mb-12">EXPLORAR SISTEMA</span>
                <div className="h-24 w-px bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent"></div>
            </div>
        </section>
    );
}