import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import { Phone, MapPin } from "lucide-react";

const schema = z.object({
    name: z.string().min(2, "Requerido"),
    phone: z.string().min(10, "Mínimo 10 dígitos"),
    serviceType: z.string().min(1, "Selecciona un servicio"),
    message: z.string().min(5, "Mensaje requerido"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
    const { contact_info, services } = config;
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        console.log("Form Data:", data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert("Solicitud enviada. Nos pondremos en contacto pronto.");
        reset();
    };

    return (
        <section id="contact" className="py-32 bg-[#0A0A0B] relative overflow-hidden border-t border-white/5">
            {/* Background elements */}
            <div className="absolute inset-0 tech-dots opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#E07B2A]/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-[#E07B2A]"></span>
                            <span className="text-[#E07B2A] font-mono text-xs tracking-[0.4em] uppercase font-bold">
                                Central de Operaciones
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-7xl font-display text-white tracking-tighter leading-none mb-10">
                            CONTACTO <span className="text-[#2563EB] text-glow italic">DIRECTO</span>
                        </h2>
                        <p className="text-slate-400 font-sans text-lg leading-relaxed mb-16 max-w-lg">
                            Optimice sus sistemas electromecánicos hoy mismo. Nuestro equipo técnico está listo para procesar su solicitud de diagnóstico.
                        </p>

                        <div className="space-y-12">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 glass-card border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500">
                                    <Phone size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase">Línea de Asistencia</p>
                                    <p className="text-white text-2xl font-display tracking-wide">{contact_info.phone}</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 glass-card border border-[#2563EB]/40 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-500">
                                    <MapPin size={24} />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-white/40 font-mono text-[10px] tracking-[0.3em] uppercase">Base Operativa</p>
                                    <p className="text-white text-2xl font-display tracking-wide">{contact_info.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Professional badges */}
                        <div className="mt-20 flex gap-6 opacity-40">
                            <div className="p-4 border border-white/10 rounded-sm">
                                <span className="text-[10px] font-mono text-white tracking-widest uppercase">ISO 9001:2015</span>
                            </div>
                            <div className="p-4 border border-white/10 rounded-sm">
                                <span className="text-[10px] font-mono text-white tracking-widest uppercase">Certified Tech</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-[#2563EB]/10 blur-3xl rounded-full pointer-events-none" />
                        <form onSubmit={handleSubmit(onSubmit)} className="relative glass-card bg-[#0A0A0B]/60 p-12 industrial-border space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-[#E07B2A] uppercase tracking-[0.3em] font-bold">Identificación</label>
                                    <input 
                                        {...register("name")} 
                                        placeholder="NOMBRE O EMPRESA"
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#2563EB] outline-none transition-all font-sans placeholder:opacity-20 text-sm" 
                                    />
                                    {errors.name && <span className="text-red-500 text-[10px] font-mono">{errors.name.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-[#E07B2A] uppercase tracking-[0.3em] font-bold">Teléfono Conector</label>
                                    <input 
                                        {...register("phone")} 
                                        placeholder="+00 000 000 000"
                                        className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#2563EB] outline-none transition-all font-sans placeholder:opacity-20 text-sm" 
                                    />
                                    {errors.phone && <span className="text-red-500 text-[10px] font-mono">{errors.phone.message}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-[#E07B2A] uppercase tracking-[0.3em] font-bold">Módulo de Interés</label>
                                <select 
                                    {...register("serviceType")} 
                                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#2563EB] outline-none transition-all font-sans text-sm appearance-none cursor-pointer"
                                >
                                    <option value="" className="bg-[#0A0A0B]">SELECCIONAR SERVICIO TÉCNICO</option>
                                    {services.map(s => <option key={s.id} value={s.title} className="bg-[#0A0A0B]">{s.title.toUpperCase()}</option>)}
                                    <option value="Otro" className="bg-[#0A0A0B]">OTRO REQUERIMIENTO</option>
                                </select>
                                {errors.serviceType && <span className="text-red-500 text-[10px] font-mono">{errors.serviceType.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-mono text-[#E07B2A] uppercase tracking-[0.3em] font-bold">Descripción del Defecto/Plan</label>
                                <textarea 
                                    {...register("message")} 
                                    rows={4} 
                                    placeholder="DETALLES TÉCNICOS..."
                                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:border-[#2563EB] outline-none transition-all font-sans placeholder:opacity-20 text-sm resize-none" 
                                />
                                {errors.message && <span className="text-red-500 text-[10px] font-mono">{errors.message.message}</span>}
                            </div>

                            <Button 
                                type="submit" 
                                disabled={isSubmitting} 
                                className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-none h-16 font-mono text-xs tracking-[0.5em] font-black uppercase transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)] group/submit"
                            >
                                {isSubmitting ? "TRANSMITIENDO..." : "INICIAR PROTOCOLO DE CONTACTO"}
                            </Button>

                            {/* Corner accents for the form */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#2563EB]/30 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#2563EB]/30 pointer-events-none" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}