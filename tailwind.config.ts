import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#374151", // Slate Gray
                foreground: "#ffffff",
                primary: {
                    DEFAULT: "#2563EB", // Electric Blue
                    foreground: "#ffffff",
                },
                accent: {
                    blue: "#2563EB",
                    slate: "#1F2937", // Darker Slate
                },
                border: "rgba(255,255,255,0.1)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["JetBrains Mono", "monospace"],
            },
        },
    },
    plugins: [],
}

export default config