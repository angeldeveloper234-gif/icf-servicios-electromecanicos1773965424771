import { motion } from "framer-motion";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { Contact } from "@/components/sections/Contact";
import { Shield, Target, Cpu, CheckCircle2 } from "lucide-react";

export function About() {
    const { branding, dynamicContent } = config;

    return (
        <main className="bg-[#0A0A0B] min-h-screen">
            <SEO title="Infraestructura & Visión" />
            
            <section className="relative pt-40 pb-32 overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full h-[800px] bg-gradient-to-b from-blue-600/5 via-transparent to-transparent" />
                    <div className="absolute inset-0 tech-grid opacity-10" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-12 mb-12">
                            <motion.p 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-blue-600 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 font-black"
                            >
                                Perfil Corporativo
                            </motion.p>
                            <motion.h1 
                                 initial={{ opacity: 0, y: 30 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 transition={{ duration: 0.8 }}
                                 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[0.9] tracking-tighter"
                            >
                                INGENIERÍA DE <br />
                                <span className="text-blue-600">PRECISIÓN</span>
                            </motion.h1>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-8 space-y-12"
                        >
                            <p className="text-2xl md:text-4xl text-zinc-400 font-sans leading-relaxed tracking-tight">
                                <span className="text-white font-bold">{branding.name}</span> es un referente en la industria electromecánica mexicana, 
                                con un enfoque inflexible en la excelencia operativa y la innovación técnica.
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="p-10 bg-white/[0.02] industrial-border backdrop-blur-sm group hover:border-blue-600/30 transition-all">
                                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600/10 mb-8 border border-blue-600/20">
                                        <Shield className="text-blue-600" size={20} />
                                    </div>
                                    <h3 className="text-white font-display text-2xl tracking-widest uppercase mb-4">Misión</h3>
                                    <p className="text-zinc-500 font-sans leading-relaxed text-sm">
                                        Garantizar la continuidad operativa de nuestros clientes a través de auditorías técnicas 
                                        y soluciones electromecánicas de grado industrial.
                                    </p>
                                </div>
                                <div className="p-10 bg-white/[0.02] industrial-border backdrop-blur-sm group hover:border-[#E07B2A]/30 transition-all">
                                    <div className="w-12 h-12 flex items-center justify-center bg-[#E07B2A]/10 mb-8 border border-[#E07B2A]/20">
                                        <Target className="text-[#E07B2A]" size={20} />
                                    </div>
                                    <h3 className="text-white font-display text-2xl tracking-widest uppercase mb-4">Visión</h3>
                                    <p className="text-zinc-500 font-sans leading-relaxed text-sm">
                                        Consolidarnos como el partner tecnológico líder en el norte del país para 
                                        sistemas HVAC y automatización crítica.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-4"
                        >
                            <div className="relative industrial-border p-1 bg-[#0D0D0E]">
                                <img 
                                    src="https://images.unsplash.com/photo-1504917595217-d4dc5f63a167?q=80&w=800&auto=format&fit=crop" 
                                    alt="Expert Engineering" 
                                    className="w-full grayscale brightness-[0.7] contrast-125"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
                                
                                <div className="absolute -bottom-1 -right-1 p-6 bg-blue-600 text-white font-mono text-[10px] font-black uppercase tracking-[0.4em]">
                                    VERIFIED EXPERTISE
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-[#0D0D0E] border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <Cpu className="text-blue-600 mb-8" size={32} />
                            <h4 className="text-white font-display text-3xl tracking-widest uppercase italic">Infraestructura</h4>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                Contamos con laboratorios de pruebas y herramientas de diagnóstico de última generación 
                                para intervenciones de alta complejidad.
                            </p>
                            <ul className="space-y-4">
                                {['Diagnóstico Termográfico', 'Análisis de Redes Eléctricas', 'Simulación de Flujo Térmico'].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-[10px] font-mono text-white/40 tracking-widest uppercase">
                                        <CheckCircle2 size={12} className="text-blue-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="md:col-span-2 relative group overflow-hidden industrial-border">
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                                alt="Industrial Systems" 
                                className="w-full h-80 object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center p-12">
                                <p className="text-2xl md:text-3xl font-display text-white text-center leading-tight tracking-widest uppercase">
                                    "{dynamicContent.specialization.ego}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}