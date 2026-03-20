import { config } from '@/config';
import { RoadmapBlock } from '@/components/RoadmapBlock';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section id="process" className="py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-white/5">
            {/* Tech backgrounds */}
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#2563EB]/10 blur-[100px] pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Sticky Sidebar Title */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#E07B2A]"></span>
                            <span className="text-[#E07B2A] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                                Soporte Operativo
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-display text-white tracking-tighter leading-[0.9] mb-12">
                            MÉTODO DE <span className="text-[#2563EB] text-glow">EJECUCIÓN</span>
                        </h2>
                        
                        <div className="p-10 glass-card bg-[#2563EB]/5 border-l-4 border-[#2563EB]">
                            <p className="text-slate-400 font-sans text-lg italic leading-relaxed">
                                "La precisión no es una opción, es nuestro estándar operativo. Cada paso del proceso está monitoreado para garantizar el máximo rendimiento de sus equipos."
                            </p>
                            <div className="mt-8 flex gap-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-2 h-2 rounded-full bg-[#2563EB]/40 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline Content */}
                    <div className="lg:col-span-8 lg:pl-12">
                        <div className="max-w-3xl">
                            {roadmap.map((item, index) => (
                                <RoadmapBlock
                                    key={index}
                                    index={index}
                                    step={item.step}
                                    title={item.title}
                                    desc={item.desc}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}