import CategoryIcons from "./components/categoryIcons";
import Coupons from "./components/coupons";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar />
      <div className="container mx-auto px-4">
        <Coupons />
        <HeroBanner />
        <CategoryIcons />
      </div>

      {/* <HeroBanner />
      <CategorySlider />
      <FlashDeals />
      <ProductCarousel title="Recommended for You" products={[]} />
      <Footer /> */}
    </div>
  );
}
