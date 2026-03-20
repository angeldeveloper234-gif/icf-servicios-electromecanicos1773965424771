import { motion } from "framer-motion";
import { config } from "@/config";
import { Features, FAQ, CTA } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Services() {
    const { branding, services } = config;

    return (
        <main className="pt-24 min-h-screen bg-[#0a0a0b]">
            <SEO 
                title="Servicios" 
                description={`Descubre todos los servicios de ${branding.name}. Especialistas en reparación de ${branding.trade}.`}
                keywords={`${branding.name}, servicios, reparación, mantenimiento`}
            />

            {/* Hero Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white/40 text-xs tracking-[0.3em] uppercase block mb-6 px-4 py-1 border border-white/10 w-fit mx-auto"
                    >
                        Nuestra Experiencia
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-wider"
                    >
                        Servicios Profesionales
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-sans leading-relaxed text-balance"
                    >
                        Atención técnica especializada para tu hogar y negocio. Garantizamos un diagnóstico preciso y una reparación duradera.
                    </motion.p>
                </div>
            </section>

            {/* List Section */}
            <section className="py-20 px-6 border-t border-white/5">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-10 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E07B2A]/10 -mr-12 -mt-12 blur-2xl group-hover:bg-[#E07B2A]/20 transition-all" />
                                <div className="text-4xl mb-6">{service.icon}</div>
                                <h2 className="text-xl font-display font-bold text-white mb-4 tracking-widest uppercase">
                                    {service.title}
                                </h2>
                                <p className="text-zinc-500 text-xs font-sans mb-6 tracking-widest uppercase leading-loose border-b border-white/10 pb-6 italic">
                                    {service.problem}
                                </p>
                                <p className="text-zinc-400 text-sm font-sans leading-relaxed">
                                    {service.solve}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Features />
            <FAQ />
            <CTA />
        </main>
    );
}
