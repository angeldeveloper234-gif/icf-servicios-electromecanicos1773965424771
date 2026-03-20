import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Home } from "@/pages/Home";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { About } from "@/pages/About";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";
import { StickyCallBar } from "@/components/StickyCallBar";
import { CustomCursor } from "@/components/features/CustomCursor";
import { UserProvider } from "@/context/UserContext";

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="min-h-screen bg-[#0A0A0B] selection:bg-blue-600/30 selection:text-white">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                    <Footer />
                    <WhatsAppWidget />
                    <StickyCallBar />
                    <CustomCursor />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;