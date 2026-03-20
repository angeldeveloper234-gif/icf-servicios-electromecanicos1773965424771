import { config } from '@/config';
import { ReviewCard } from '@/components/ReviewCard';

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section id="testimonials" className="py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2563EB]/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-[1px] bg-[#E07B2A]"></span>
                        <span className="text-[#E07B2A] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                            Validación de Calidad
                        </span>
                        <span className="w-8 h-[1px] bg-[#E07B2A]"></span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display text-white tracking-tighter leading-none mb-6">
                        RESULTADOS QUE <span className="text-[#2563EB] text-glow line-through decoration-[#E07B2A]/30">HABLAN</span> <br/>
                        <span className="text-[#2563EB] text-glow italic">POR SÍ MISMOS</span>
                    </h2>
                    <p className="text-slate-400 font-sans text-lg">
                        Lo que dicen las empresas que confían en nuestra precisión técnica y compromiso operativo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 pt-6">
                    {testimonials.map((item, index) => (
                        <ReviewCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}