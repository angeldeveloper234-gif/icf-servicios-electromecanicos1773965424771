import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };
        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [mouseX, mouseY, isVisible]);

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 bg-[#2563EB] rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
        />
    );
}