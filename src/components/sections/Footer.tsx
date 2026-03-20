import { config } from "@/config";

export function Footer() {
    const { branding, contact_info } = config;

    return (
        <footer className="bg-[#0A0A0B] text-zinc-500 py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-display text-white mb-6 tracking-tight uppercase leading-none">
                            {branding.name}
                        </h2>
                        <p className="text-lg font-sans font-light max-w-sm mb-8 italic">
                            {branding.trade}
                        </p>
                        <div className="flex gap-6">
                            {/* Social placeholders or other technical info */}
                            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#2563EB] transition-colors cursor-pointer">
                                <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                            </div>
                            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-[#2563EB] transition-colors cursor-pointer">
                                <div className="w-2 h-2 bg-[#2563EB] rounded-full" />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-white mb-8 mb-6 font-bold">Ubicación</h3>
                        <p className="font-sans font-light leading-relaxed">
                            {contact_info.address}
                        </p>
                    </div>

                    <div className="text-right">
                        <h3 className="text-xs font-mono tracking-[0.3em] uppercase text-white mb-8 mb-6 font-bold">Contacto Interno</h3>
                        <p className="text-2xl font-display text-white tracking-tighter">
                            {contact_info.phone}
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <p className="text-[10px] font-mono tracking-widest uppercase opacity-40">
                            © {new Date().getFullYear()} {branding.name}. ALL SYSTEMS OPERATIONAL.
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 group">
                        <span className="text-[10px] font-mono tracking-widest uppercase opacity-40">Architected by</span>
                        <div className="h-[1px] w-8 bg-zinc-800 group-hover:bg-[#2563EB] transition-colors" />
                        <span className="text-xs font-display text-zinc-300 tracking-widest uppercase group-hover:text-white transition-colors cursor-default">
                            Angel design studio
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}