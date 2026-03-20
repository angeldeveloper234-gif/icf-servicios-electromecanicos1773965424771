import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Roadmap } from "@/components/sections/Roadmap";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { SEO } from "@/components/ui/SEO";
import { config } from "@/config";

export function Home() {
    const { branding } = config;
    return (
        <main>
            <SEO 
                title="Inicio" 
                description={`Servicios profesionales de ${branding.trade}. ${branding.slogan}.`} 
            />
            <Hero />
            <Services />
            <Roadmap />
            <Gallery />
            <Testimonials />
            <Contact />
        </main>
    );
}