import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProductHighlightSection from "@/components/ProductHighlightSection";
import FeaturesSection from "@/components/FeaturesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ReviewSlider from "@/components/ReviewSlider";
import PricingSection from "@/components/PricingSection";
import ProductGallery from "@/components/ProductGallery";
import CheckoutSection from "@/components/CheckoutSection";
import ProductListSection from "@/components/ProductListSection";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  useFacebookPixel();
  const [copyrightText, setCopyrightText] = useState("© ২০২৫ Libsun — সকল স্বত্ব সংরক্ষিত");

  useEffect(() => {
    supabase
      .from("site_settings")
      .select("value")
      .eq("key", "copyright_text")
      .maybeSingle()
      .then(({ data }) => {
        if (data?.value) setCopyrightText(data.value);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductHighlightSection />
      <FeaturesSection />
      <GuaranteeSection />
      <ProductListSection />
      <ReviewSlider />

      <PricingSection />

      {/* Product + Checkout Section */}
      <section id="order" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <ProductGallery />
            <CheckoutSection />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-8 text-center">
        <p className="text-primary-foreground/60 text-sm">
          {copyrightText}
        </p>
      </footer>


    </main>
  );
};

export default Index;
