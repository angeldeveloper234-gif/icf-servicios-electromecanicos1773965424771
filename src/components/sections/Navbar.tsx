import { motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { branding } = config;

    const links = [
        { href: "/", label: "SISTEMA" },
        { href: "/services", label: "SERVICIOS" },
        { href: "/about", label: "INGENIERÍA" },
        { href: "/contact", label: "CONTACTO" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/60 backdrop-blur-md border-b border-white/[0.03] transition-all duration-300">
            {/* Top scanning line decorative */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />
            
            <div className="container mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-5 group">
                    <div className="relative">
                        <div className="w-12 h-12 bg-[#2563EB] flex items-center justify-center rounded-none transition-all group-hover:bg-[#1D4ED8] group-hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                            <Zap size={24} className="text-white fill-white" />
                        </div>
                        {/* Decorative corners for logo */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-[#2563EB]/50" />
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-[#2563EB]/50" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white leading-none group-hover:text-glow transition-all">
                            {branding.logo}
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                            <div className="w-1 h-3 bg-blue-600"></div>
                            <span className="text-[9px] font-mono text-zinc-500 tracking-[0.4em] font-bold uppercase whitespace-nowrap">
                                INDUSTRIAL UNIT
                            </span>
                        </div>
                    </div>
                </Link>

                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-[10px] font-mono tracking-[0.3em] transition-all uppercase font-bold relative group/link ${location.pathname === link.href ? 'text-white' : 'text-zinc-500 hover:text-white'}`}
                            >
                                <span className="relative z-10">{link.label}</span>
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#2563EB] transition-all duration-300 ${location.pathname === link.href ? 'w-full shadow-[0_0_10px_rgba(37,99,235,0.8)]' : 'w-0 group-hover/link:w-full'}`} />
                                {location.pathname === link.href && (
                                    <span className="absolute -top-1 -right-2 w-1 h-1 bg-blue-600 rounded-full animate-pulse" />
                                )}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="h-8 w-[1px] bg-white/10" />
                    
                    <Link to="/contact">
                        <Button 
                            className="bg-white/[0.03] hover:bg-[#2563EB] text-white border border-white/10 hover:border-[#2563EB] rounded-none h-12 px-8 font-mono text-[10px] tracking-[0.3em] font-black uppercase transition-all group/btn flex items-center gap-3"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-white animate-pulse" />
                            DESPLIEGUE RÁPIDO
                        </Button>
                    </Link>
                </div>

                <button 
                    className="md:hidden w-12 h-12 flex items-center justify-center text-white border border-white/10 glass-card" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-[#0A0A0B]/95 backdrop-blur-2xl border-b border-white/5 overflow-hidden"
                >
                    <div className="container mx-auto px-6 py-12 flex flex-col gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={`text-4xl font-display tracking-tighter uppercase font-black transition-all ${location.pathname === link.href ? 'text-[#2563EB]' : 'text-zinc-700 hover:text-white'}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="mt-4" onClick={() => setIsOpen(false)}>
                            <Button className="w-full bg-[#2563EB] h-20 rounded-none font-display tracking-widest text-lg uppercase shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                                INICIAR CONTACTO
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}