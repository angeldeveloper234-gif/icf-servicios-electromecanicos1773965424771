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
        <section id="contact" className="py-24 bg-[#1F2937] border-t border-slate-600">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-display text-white mb-8">
                            CONTACTO <span className="text-[#2563EB]">DIRECTO</span>
                        </h2>
                        <p className="text-slate-400 mb-12 leading-relaxed">
                            Completa el formulario para recibir un diagnóstico preliminar o contáctanos directamente por WhatsApp para urgencias.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Phone className="text-[#2563EB] mt-1" />
                                <div>
                                    <p className="text-white font-display tracking-widest">TELÉFONO / WHATSAPP</p>
                                    <p className="text-slate-400">{contact_info.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="text-[#2563EB] mt-1" />
                                <div>
                                    <p className="text-white font-display tracking-widest">UBICACIÓN</p>
                                    <p className="text-slate-400">{contact_info.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#374151] p-8 border border-slate-600">
                        <div>
                            <label className="block text-xs font-display uppercase tracking-widest text-slate-400 mb-2">Nombre Completo</label>
                            <input {...register("name")} className="w-full bg-[#1F2937] border border-slate-600 p-3 text-white focus:border-[#2563EB] outline-none transition-colors" />
                            {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                        </div>
                        <div>
                            <label className="block text-xs font-display uppercase tracking-widest text-slate-400 mb-2">Teléfono</label>
                            <input {...register("phone")} className="w-full bg-[#1F2937] border border-slate-600 p-3 text-white focus:border-[#2563EB] outline-none transition-colors" />
                            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                        </div>
                        <div>
                            <label className="block text-xs font-display uppercase tracking-widest text-slate-400 mb-2">Tipo de Servicio</label>
                            <select {...register("serviceType")} className="w-full bg-[#1F2937] border border-slate-600 p-3 text-white focus:border-[#2563EB] outline-none transition-colors">
                                <option value="">Seleccionar...</option>
                                {services.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                                <option value="Otro">Otro</option>
                            </select>
                            {errors.serviceType && <span className="text-red-500 text-xs">{errors.serviceType.message}</span>}
                        </div>
                        <div>
                            <label className="block text-xs font-display uppercase tracking-widest text-slate-400 mb-2">Mensaje</label>
                            <textarea {...register("message")} rows={4} className="w-full bg-[#1F2937] border border-slate-600 p-3 text-white focus:border-[#2563EB] outline-none transition-colors" />
                            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full rounded-none">
                            {isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}