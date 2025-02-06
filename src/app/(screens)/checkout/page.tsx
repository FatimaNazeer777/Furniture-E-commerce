import Hero from "@/components/common/Hero";

import CheckoutDetailSection from "@/components/sections/checkout/CheckoutDetailSection";
import ShopBannerSection from "@/components/sections/shop/ShopBannerSection";

export default function CheckoutPage() {
  return (
    <div>
      <Hero title="Checkout" />
      <div className="mx-4 md:mx-[130px] flex justify-center gap-8 flex-col md:flex-row mt-[98px]">
        <CheckoutDetailSection />
      </div>
      <ShopBannerSection />
    </div>
  );
}