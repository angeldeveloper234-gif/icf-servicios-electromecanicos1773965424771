import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "¿El presupuesto tiene algún costo?",
        a: "No, nuestras visitas y presupuestos son totalmente gratuitos y sin compromiso. Nos interesa conocer tu proyecto para darte la mejor solución.",
    },
    {
        q: "¿Ofrecen garantía por los trabajos?",
        a: "Sí, todos nuestros trabajos cuentan con garantía escrita. Dependiendo del tipo de servicio, la cobertura puede variar de 6 meses a 2 años.",
    },
    {
        q: "¿Los materiales están incluidos?",
        a: "Ofrecemos ambas modalidades: podemos proveer nosotros los materiales de primera calidad con los que trabajamos habitualmente, o podemos trabajar con los materiales que tú ya tengas comprados.",
    },
    {
        q: "¿Cuánto tiempo tardan en iniciar un proyecto?",
        a: "Normalmente podemos agendar el inicio de obra dentro de los 3 a 5 días hábiles posteriores a la aprobación del presupuesto.",
    },
    {
        q: "¿Realizan urgencias las 24 horas?",
        a: "Atendemos urgencias coordinadas en horario extendido, aunque te recomendamos agendar con anticipación para asegurar disponibilidad inmediata.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-32 bg-[#0A0A0B] text-white relative border-t border-white/5 overflow-hidden">
            {/* Technical Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="text-center mb-24">
                    <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#2563EB] font-mono text-xs tracking-[0.5em] uppercase font-bold mb-6"
                    >
                        SOPORTE TÉCNICO
                    </motion.p>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-display leading-tight tracking-tighter uppercase"
                    >
                        PREGUNTAS <span className="text-zinc-600 block md:inline">FRECUENTES</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`group border transition-all duration-500 bg-white/5 backdrop-blur-md rounded-lg overflow-hidden ${
                                openIndex === i 
                                ? "border-[#2563EB]/50 bg-white/[0.08] shadow-[0_0_40px_-15px_rgba(37,99,235,0.2)]" 
                                : "border-white/5 hover:border-white/20"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-8 text-left transition-all group"
                            >
                                <span className={`text-lg md:text-xl font-display tracking-tight transition-all duration-300 ${
                                    openIndex === i ? "text-[#2563EB]" : "text-zinc-300 group-hover:text-white"
                                }`}>
                                    {faq.q}
                                </span>
                                <div className={`transition-all duration-500 p-3 rounded-full ${
                                    openIndex === i 
                                    ? "bg-[#2563EB] text-white rotate-180" 
                                    : "bg-white/5 text-zinc-500 rotate-0"
                                }`}>
                                    {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-8 pb-8 text-zinc-400 font-sans font-light leading-relaxed text-lg border-t border-white/5 pt-6">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
