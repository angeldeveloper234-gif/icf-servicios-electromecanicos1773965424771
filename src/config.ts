export interface GalleryItem {
    title: string;
    category: string;
    image: string;
}

export interface ServiceItem {
    id: string;
    icon: string;
    title: string;
    problem: string;
    solve: string;
}

export interface TestimonialItem {
    name: string;
    role: string;
    text: string;
    rating: number;
}

export interface Config {
    branding: {
        name: string;
        slogan: string;
        logo: string;
        trade: string;
    };
    contact_info: {
        phone: string;
        whatsapp: string;
        address: string;
        map_link: string;
    };
    dynamicContent: {
        city: string;
        localAnchor: string;
        stats: {
            projectsDone: number;
            experienceYears: number;
            happyClients: number;
        };
        specialization: {
            title: string;
            pain: string;
            ego: string;
            hook: string;
        };
        roadmap: Array<{
            step: string;
            title: string;
            desc: string;
        }>;
    };
    services: ServiceItem[];
    testimonials: TestimonialItem[];
    gallery: GalleryItem[];
    features: {
        showGallery: boolean;
        showTestimonials: boolean;
        showStats: boolean;
    };
}

export const config: Config = {
    branding: {
        name: "ICF SERVICIOS ELECTROMECANICOS",
        slogan: "Eficiencia, Limpieza y Garantía Técnica",
        logo: "ICF",
        trade: "Climatización y Refrigeración",
    },
    contact_info: {
        phone: "+52 81 2601 4586",
        whatsapp: "+528126014586",
        address: "San Román 320, Santa Monica Sect 13, 67286 Monterrey, N.L.",
        map_link: "https://www.google.com/maps/search/?api=1&query=San+Román+320+Santa+Monica+Sect+13+Monterrey+67286"
    },
    dynamicContent: {
        city: "Monterrey, N.L.",
        localAnchor: "Zona Metropolitana",
        stats: {
            projectsDone: 850,
            experienceYears: 12,
            happyClients: 800
        },
        specialization: {
            title: "Climatización",
            pain: "Fallas de Refrigeración",
            ego: "Expertos Electromecánicos",
            hook: "Servicio Limpio y Garantizado"
        },
        roadmap: [
            {
                step: "01",
                title: "Diagnóstico Técnico",
                desc: "Evaluación precisa en sitio con herramientas de medición industrial para identificar la raíz de la falla."
            },
            {
                step: "02",
                title: "Estrategia de Reparación",
                desc: "Propuesta clara con refacciones originales, tiempos definidos y presupuesto transparente."
            },
            {
                step: "03",
                title: "Resolución y Garantía",
                desc: "Ejecución limpia del servicio, pruebas de rendimiento y entrega de garantía por escrito."
            }
        ]
    },
    services: [
        {
            id: "01",
            icon: "❄️",
            title: "HVAC Industrial",
            problem: "Ineficiencia térmica en plantas",
            solve: "Mantenimiento preventivo y correctivo a chillers y unidades paquete."
        },
        {
            id: "02",
            icon: "🏭",
            title: "Refrigeración Comercial",
            problem: "Pérdida de cadena de frío",
            solve: "Reparación urgente de cámaras frías y vitrinas comerciales."
        },
        {
            id: "03",
            icon: "⚡",
            title: "Mantenimiento Electromecánico",
            problem: "Paros no programados",
            solve: "Servicio integral a motores, bombas y tableros de control."
        }
    ],
    testimonials: [
        {
            name: "Ing. Roberto Méndez",
            role: "Gerente de Planta",
            text: "ICF resolvió un problema de climatización que tres proveedores anteriores no pudieron. Su diagnóstico fue exacto.",
            rating: 5
        },
        {
            name: "Carlos Villarreal",
            role: "Dueño de Restaurante",
            text: "La rapidez en la atención a nuestras cámaras frías salvó el inventario de la semana. Altamente recomendados.",
            rating: 5
        },
        {
            name: "Arq. Sofia Duran",
            role: "Constructora Norte",
            text: "Profesionalismo total en la instalación de los sistemas HVAC para nuestras oficinas nuevas.",
            rating: 5
        }
    ],
    gallery: [
        {
            title: "Mantenimiento Chiller",
            category: "Industrial",
            image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Instalación VRF",
            category: "Comercial",
            image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: "Tableros de Control",
            category: "Electromecánica",
            image: "https://images.unsplash.com/photo-1555664424-778a69022365?q=80&w=800&auto=format&fit=crop"
        }
    ],
    features: {
        showGallery: true,
        showTestimonials: true,
        showStats: true
    }
};