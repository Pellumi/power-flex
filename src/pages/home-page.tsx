import Budget from "@/components/landing/budget";
import ContactSection from "@/components/landing/contact-section";
import CTASection from "@/components/landing/cta-section";
import FAQSection from "@/components/landing/faq-section";
import Guide from "@/components/landing/guide";
import Home from "@/components/landing/home";
import NewProductPlans from "@/components/landing/new-product-plans";
// import ProductPlans from "@/components/landing/product-plans";
import Solution from "@/components/landing/solution";

const HomePage = () => {
  return (
    <>
      <Home />
      {/* <ProductPlans /> */}
      <NewProductPlans />
      <Solution />
      <Budget />
      <Guide />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
