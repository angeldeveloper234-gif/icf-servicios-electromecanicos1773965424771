import { config } from '@/config';
import { ReviewCard } from '@/components/ReviewCard';

export function Testimonials() {
    const { testimonials } = config;

    return (
        <section className="py-24 bg-[#374151] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-display text-white mb-16 text-center">
                    CLIENTES <span className="text-[#2563EB]">SATISFECHOS</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <ReviewCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}