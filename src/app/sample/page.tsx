import Header from "@/components/sample/Header";
import Hero from "@/components/sample/Hero";
import CompanyIntro from "@/components/sample/CompanyIntro";
import Products from "@/components/sample/Products";
import Partners from "@/components/sample/Partners";
import CustomerSupport from "@/components/sample/CustomerSupport";
import Footer from "@/components/sample/Footer";

export default function SamplePage() {
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
