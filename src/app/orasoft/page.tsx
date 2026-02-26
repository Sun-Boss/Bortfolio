import Header from "@/components/orasoft/Header";
import Hero from "@/components/orasoft/Hero";
import CompanyIntro from "@/components/orasoft/CompanyIntro";
import Products from "@/components/orasoft/Products";
import Partners from "@/components/orasoft/Partners";
import CustomerSupport from "@/components/orasoft/CustomerSupport";
import Footer from "@/components/orasoft/Footer";

export default function OrasoftPage() {
    return (
        <main className="text-foreground min-h-screen relative bg-white">
            {/* Light modern background for CAD software feel */}
            <div className="fixed inset-0 -z-50 bg-[#fafafa]" />
            <div className="fixed inset-0 -z-40 opacity-20 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <Header />
            <Hero />
            <CompanyIntro />
            <Products />
            <Partners />
            <CustomerSupport />
            <Footer />
        </main>
    );
}
