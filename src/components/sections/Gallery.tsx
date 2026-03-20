import { motion } from "framer-motion";
import { config } from "@/config";

export function Gallery() {
    const { gallery } = config;

    return (
        <section id="gallery" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 tech-grid opacity-10" />
                <div className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full" />
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-blue-600 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 font-black"
                        >
                            Logística de Proyectos
                        </motion.p>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display text-white leading-[0.9] tracking-tighter"
                        >
                            REGISTRO DE <span className="text-blue-600 block md:inline">ALTO RENDIMIENTO</span>
                        </motion.h2>
                    </div>
                    <div className="h-px flex-1 bg-white/5 mx-12 mb-6 hidden md:block"></div>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.4em] max-w-[240px] leading-relaxed text-right"
                    >
                        Auditoría visual de intervenciones técnicas certificadas
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative aspect-square overflow-hidden bg-[#0D0D0E] cursor-crosshair"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100"
                            />
                            
                            {/* Technical Overlay - Hidden initially */}
                            <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between p-8 border border-blue-600/0 group-hover:border-blue-600/30">
                                <div className="flex justify-between items-start translate-y-[-20px] group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-blue-500 font-mono text-[9px] tracking-[0.2em] font-black uppercase">
                                            UNIT ID: #{202400 + i}BF
                                        </span>
                                        <span className="text-zinc-400 font-mono text-[8px] tracking-[0.1em] uppercase">
                                            ISO_STANDARD: 9001:2015
                                        </span>
                                    </div>
                                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center bg-black/40">
                                        <div className="w-4 h-[1px] bg-blue-500 animate-pulse"></div>
                                    </div>
                                </div>

                                <div className="translate-y-[20px] group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-blue-500 font-mono text-[9px] uppercase tracking-[0.5em] mb-4 font-black">
                                        {item.category}
                                    </p>
                                    <h3 className="text-white font-display text-3xl tracking-tight leading-none mb-6">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <div className="h-px flex-1 bg-blue-600/30"></div>
                                        <span className="text-[8px] font-mono text-zinc-500 tracking-[0.3em] uppercase">
                                            VERIFIED FILE
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Default Static Overlay (Minimal) */}
                            <div className="absolute inset-x-8 bottom-8 flex flex-col group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-white font-display text-xl uppercase tracking-widest">{item.title}</h3>
                                <div className="w-8 h-[1px] bg-blue-600 mt-4"></div>
                            </div>
                            
                            {/* Decorative corner scans */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/10"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/10"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}