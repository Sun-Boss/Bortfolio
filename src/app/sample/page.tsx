import Header from "@/components/sample/Header";
import Hero from "@/components/sample/Hero";
import CompanyIntro from "@/components/sample/CompanyIntro";
import Products from "@/components/sample/Products";
import Partners from "@/components/sample/Partners"; // Will be Reviews
import CustomerSupport from "@/components/sample/CustomerSupport"; // Will be Contact
import Footer from "@/components/sample/Footer";

export default function SamplePage() {
    return (
        <main className="text-foreground min-h-screen relative bg-[#fdfbf7]">
            {/* Natural warm background for orchard theme */}
            <div className="fixed inset-0 -z-50 bg-[#fdfbf7]" />
            
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
