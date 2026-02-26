import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import BusinessAreas from "@/components/BusinessAreas";
import Partners from "@/components/Partners";
import NoticeSection from "@/components/NoticeSection";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="text-foreground min-h-screen relative">
      {/* Global Fixed Background Image */}
      <div className="fixed inset-0 -z-50 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
      {/* Global Dark Overlay <div className="fixed inset-0 -z-40 bg-gray-800/50 backdrop-blur-[2px]" />*/}
      <div className="fixed inset-0 -z-40 bg-black/50 backdrop-blur-[2px]" />

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