import { motion } from "framer-motion";
import { config } from "@/config";
import { Contact as SimpleContact, FAQ } from "@/components/sections";
import { SEO } from "@/components/ui/SEO";

export function Contact() {
    const { branding } = config;

    return (
        <main className="pt-24 min-h-screen bg-[#0a0a0b]">
            <SEO 
                title="Contacto" 
                description={`Contacta con ${branding.name} para un presupuesto gratuito de reparación de ${branding.trade}.`}
                keywords={`${branding.name}, contacto, presupuesto, reparación`}
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
                        Estamos en Contacto
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-wider"
                    >
                        Presupuesto Gratis
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 font-sans leading-relaxed text-balance"
                    >
                        Solicita tu presupuesto sin compromiso. Uno de nuestros técnicos especializados se pondrá en contacto contigo en breve para evaluar tu caso.
                    </motion.p>
                </div>
            </section>

            <SimpleContact />
            <FAQ />
        </main>
    );
}
