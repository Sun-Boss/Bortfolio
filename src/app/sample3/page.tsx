import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import BusinessAreas from "@/components/BusinessAreas";
import Partners from "@/components/Partners";
import NoticeSection from "@/components/NoticeSection";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Sample3Page() {
    return (
        <main className="text-foreground min-h-screen relative">
            <div className="fixed inset-0 -z-50 bg-[url('/img/tech_network3_background.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
            {/* Global Dark Overlay */}
            <div className="fixed inset-0 -z-40 bg-gray-900/60 backdrop-blur-[2px]" />
            {/*}
            <div className="fixed inset-0 -z-50 bg-[#020617]" />
            <div className="fixed inset-0 -z-50 bg-[url('/img/tech_network_background.png')] bg-cover bg-center opacity-40 mix-blend-screen" />
            <div className="fixed top-0 inset-x-0 h-[800px] -z-40 bg-gradient-to-b from-primary-blue/30 to-transparent mix-blend-screen" />
            <div className="fixed bottom-0 inset-x-0 h-[600px] -z-40 bg-gradient-to-t from-primary-light-blue/15 to-transparent mix-blend-screen" />
            <div className="fixed inset-0 -z-40 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
            <div className="fixed inset-0 -z-30 bg-black/50 backdrop-blur-[2px] pointer-events-none" />
*/}
            <Header />
            <Hero />
            <Vision />
            <BusinessAreas />
            <Partners />
            <NoticeSection />
            <ContactLocation />
            <Footer />
        </main>
    );
}
