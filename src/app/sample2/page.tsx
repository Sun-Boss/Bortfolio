import Header from "@/components/sample2/Header";
import Footer from "@/components/sample2/Footer";
import Hero from "@/components/sample2/Hero";
import CompanyIntro from "@/components/sample2/CompanyIntro";
import BusinessAreas from "@/components/sample2/BusinessAreas";
import Partners from "@/components/sample2/Partners";
import CustomerSupport from "@/components/sample2/CustomerSupport";

export default function Sample2Page() {
    return (
        <main className="min-h-screen bg-white text-gray-900 relative">
            <Header />
            <Hero />
            <CompanyIntro />
            <BusinessAreas />
            <Partners />
            <CustomerSupport />
            <Footer />
        </main>
    );
}
