import { motion } from "framer-motion";
import { config } from "@/config";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Services() {
    const { services } = config;

    return (
        <section className="py-24 bg-[#374151] relative">
            <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-4">
                        ÁREAS DE <span className="text-[#2563EB]">ESPECIALIZACIÓN</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Soluciones técnicas integrales para equipos críticos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1F2937] border border-slate-600 p-8 hover:border-[#2563EB] transition-colors group"
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-display text-white mb-3 tracking-wide">
                                {service.title}
                            </h3>
                            <p className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-4">
                                {service.problem}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                {service.solve}
                            </p>
                            <Link to="/contact">
                                <Button variant="outline" size="sm" className="w-full rounded-none">
                                    COTIZAR SERVICIO
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}