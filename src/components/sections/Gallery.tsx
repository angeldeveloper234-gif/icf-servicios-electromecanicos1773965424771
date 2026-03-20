import { motion } from "framer-motion";
import { config } from "@/config";

export function Gallery() {
    const { gallery } = config;

    return (
        <section className="py-24 bg-[#1F2937]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-display text-white mb-12">
                    PROYECTOS <span className="text-[#2563EB]">REALIZADOS</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {gallery.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video overflow-hidden border border-slate-600"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                                <h3 className="text-white font-display text-xl">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}