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
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#374151]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
                    alt="Industrial Background"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#374151] via-[#374151]/90 to-transparent" />
                <div className="absolute inset-0 tech-grid opacity-30" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#2563EB]/30 bg-[#2563EB]/10 mb-8">
                        <span className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse" />
                        <span className="text-[#2563EB] text-xs font-display tracking-widest uppercase font-bold">
                            {branding.slogan}
                        </span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-white">
                        <span className="block text-slate-400 text-2xl md:text-4xl mb-2 tracking-wide">
                            {specialization.title} en {displayCity}
                        </span>
                        <TextReveal text={displayHeadline} className="text-white" />
                    </h1>

                    <p className="text-lg text-slate-300 font-sans max-w-2xl mb-10 leading-relaxed border-l-4 border-[#2563EB] pl-6">
                        Mantenimiento y reparación electromecánica en {displayCity}. 
                        Garantía de limpieza y eficiencia para tu hogar o industria.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                            <Button size="lg" className="w-full sm:w-auto rounded-none">
                                Solicitar Diagnóstico <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <a 
                            href={config.contact_info.map_link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 border border-slate-500 text-slate-300 hover:border-white hover:text-white transition-colors font-display tracking-wider uppercase text-sm"
                        >
                            <MapPin size={18} />
                            {localAnchor}
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-slate-400 text-xs font-display tracking-widest uppercase">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={16} className="text-[#2563EB]" />
                            <span>Garantía Certificada</span>
                        </div>
                        <div className="w-px h-4 bg-slate-600" />
                        <div>
                            <span>Atención Inmediata</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}