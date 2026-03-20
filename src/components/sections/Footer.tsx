import { config } from "@/config";

export function Footer() {
    const { branding, contact_info } = config;

    return (
        <footer className="bg-[#111827] text-slate-400 py-12 border-t border-slate-700">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-display text-white mb-2">{branding.name}</h2>
                        <p className="text-sm">{branding.trade}</p>
                    </div>
                    <div className="text-center md:text-right text-sm">
                        <p>{contact_info.address}</p>
                        <p className="mt-2">{contact_info.phone}</p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs uppercase tracking-widest">
                    © {new Date().getFullYear()} {branding.name}. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}