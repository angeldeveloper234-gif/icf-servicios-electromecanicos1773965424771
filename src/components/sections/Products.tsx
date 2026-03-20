import { motion } from "framer-motion";
import { ShoppingCart, ArrowRight, Layers, Cpu, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Products() {
    const { products } = config;

    return (
        <section id="products" className="py-32 bg-[#0A0A0B] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-noise opacity-[0.03]" />
                <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-[#E07B2A]/5 blur-[100px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-12 h-px bg-[#E07B2A]"></div>
                            <span className="text-[#E07B2A] font-mono text-[10px] tracking-[0.6em] uppercase font-black">
                                SUMINISTRO TÉCNICO
                            </span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-display text-white leading-[0.9] tracking-tighter"
                        >
                            COMPONENTES <span className="text-[#E07B2A] block md:inline italic">INDUSTRIALES</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button variant="outline" className="border-white/5 bg-white/[0.02] text-white rounded-none tracking-[0.3em] text-[9px] h-16 px-10 hover:bg-[#E07B2A] hover:text-black transition-all font-mono font-black uppercase">
                            Catálogo Completo <ArrowRight className="ml-4 w-4 h-4" />
                        </Button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group relative flex flex-col bg-[#0D0D0E] industrial-border hover:border-[#E07B2A]/40 transition-all duration-500 overflow-hidden"
                        >
                            {/* Product Header Info */}
                            <div className="absolute top-6 left-6 z-20 flex flex-col gap-1 pointer-events-none">
                                <span className="text-[8px] font-mono text-white/40 tracking-widest uppercase bg-black/40 backdrop-blur-md px-2 py-1">
                                    SKU: {product.id}
                                </span>
                            </div>

                            {/* Image Section */}
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 brightness-[0.7] group-hover:brightness-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0E] via-transparent to-transparent" />
                                
                                {/* Price Tag */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="bg-[#E07B2A] text-white font-display text-2xl px-6 py-2 tracking-tighter shadow-xl transform skew-x-[-12deg]">
                                        <span className="block skew-x-[12deg]">{product.price}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 flex flex-col flex-1 relative">
                                {/* Technical decorative elements */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4 opacity-10">
                                    <Cpu size={16} />
                                    <Layers size={16} />
                                    <Shield size={16} />
                                </div>

                                <motion.h4 className="text-white font-display text-3xl tracking-tight leading-none mb-6 group-hover:text-[#E07B2A] transition-colors">
                                    {product.name}
                                </motion.h4>
                                
                                <p className="text-zinc-500 font-sans text-sm leading-relaxed mb-10 flex-1">
                                    {product.desc}
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 tracking-widest uppercase border-b border-white/5 pb-4">
                                        <span>Disponibilidad</span>
                                        <span className="text-[#E07B2A] font-black">IN STOCK</span>
                                    </div>
                                    
                                    <Button 
                                        className="w-full bg-white/[0.03] hover:bg-white/10 text-white rounded-none h-16 tracking-[0.4em] font-mono font-black text-[9px] uppercase border border-white/5 group-hover:border-[#E07B2A]/30 transition-all"
                                        onClick={() => window.location.href = `https://wa.me/${config.demoUser.whatsapp.replace('+', '')}?text=Hola, me interesa el producto: ${product.name}`}
                                    >
                                        CONSULTAR STOCK <ShoppingCart className="ml-4 w-4 h-4 text-[#E07B2A]" />
                                    </Button>
                                </div>
                            </div>
                            
                            {/* Scanning line decorative */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#E07B2A]/50 translate-y-[-100%] group-hover:translate-y-[1000%] transition-transform duration-[3s] ease-linear overflow-hidden opacity-0 group-hover:opacity-100 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

