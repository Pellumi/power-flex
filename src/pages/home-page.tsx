import Budget from "@/components/landing/budget";
import ContactSection from "@/components/landing/contact-section";
import CTASection from "@/components/landing/cta-section";
import FAQSection from "@/components/landing/faq-section";
import Footer from "@/components/landing/footer";
import Guide from "@/components/landing/guide";
import Home from "@/components/landing/home";
import ProductPlans from "@/components/landing/product-plans";
import Solution from "@/components/landing/solution";
import TopNavbar from "@/components/top-navbar";

const HomePage = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <TopNavbar />
      <Home />
      <ProductPlans />
      <Solution />
      <Budget />
      <Guide />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
