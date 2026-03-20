import { config } from '@/config';
import { RoadmapBlock } from '@/components/RoadmapBlock';

export function Roadmap() {
    const { roadmap } = config.dynamicContent;

    return (
        <section className="py-24 bg-[#374151] border-t border-slate-600">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-display text-white">
                        PROCESO DE <span className="text-[#2563EB]">TRABAJO</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {roadmap.map((item, index) => (
                        <RoadmapBlock
                            key={index}
                            index={index}
                            step={item.step}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}