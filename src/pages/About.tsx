import { motion } from "framer-motion";
import { config } from "@/config";
import { SEO } from "@/components/ui/SEO";
import { Contact } from "@/components/sections/Contact";

export function About() {
    const { branding, dynamicContent } = config;

    return (
        <main className="pt-24">
            <SEO title="Nosotros" />
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-display text-white mb-8"
                    >
                        {branding.name}
                    </motion.h1>
                    <p className="text-xl text-slate-300 leading-relaxed">
                        Somos especialistas en {branding.trade}. {dynamicContent.specialization.ego} comprometidos con la calidad y la eficiencia en cada proyecto.
                    </p>
                </div>
            </section>
            <Contact />
        </main>
    );
}