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
        { href: "/", label: "INICIO" },
        { href: "/services", label: "SERVICIOS" },
        { href: "/about", label: "NOSOTROS" },
        { href: "/contact", label: "CONTACTO" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#374151]/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2563EB] flex items-center justify-center rounded-sm">
                        <Zap size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
                        {branding.logo}
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={`text-xs font-display tracking-widest transition-colors uppercase font-bold ${location.pathname === link.href ? 'text-[#2563EB]' : 'text-slate-300 hover:text-white'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact">
                        <Button variant="default" size="sm" className="rounded-none">
                            SOLICITAR DIAGNÓSTICO
                        </Button>
                    </Link>
                </div>

                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-[#374151] border-b border-white/10"
                >
                    <div className="flex flex-col p-6 gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-sm font-display tracking-widest uppercase font-bold text-slate-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}