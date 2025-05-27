import CategoryIcons from "./components/categoryIcons";
import Coupons from "./components/coupons";
import Header from "./components/header";
import HeroBanner from "./components/heroBanner";
import Navbar from "./components/navbar";
import Products from "./components/products";
import ProductsCarousel from "./components/productsCarousel";
import {
  productSections,
  productsImagesCarousal,
  productsImagesCarousal1,
} from "./data";

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar />
      <div className="container mx-auto px-4">
        <Coupons
          imageUrl={
            "https://f.nooncdn.com/mpcms/EN0001/assets/37298fc1-69ca-4033-a437-022ac938a465.gif"
          }
          imageWidth={1000}
          imageHeight={80}
        />
        <HeroBanner />
        <CategoryIcons />
        <div className="flex justify-around flex-wrap">
          {productSections?.map((section) => (
            <Products
              key={section.id}
              heading={section.heading}
              products={section.products}
              deal={section.deal}
              column={section.column}
            />
          ))}
        </div>
        <Coupons
          imageUrl={
            "https://f.nooncdn.com/ads/banner-1440x1440/English 1440 x 200.1747304953.379195.png"
          }
          imageWidth={1000}
          imageHeight={195}
        />
        <ProductsCarousel
          carouselProductsData={productsImagesCarousal}
          heading="Maximize your savings"
          slidesToShow={4}
          imageWidth={350}
          imageHeight={320}
        />
        <ProductsCarousel
          carouselProductsData={productsImagesCarousal1}
          heading="Eid gifting essentials"
          slidesToShow={7}
          imageWidth={190}
          imageHeight={320}
          viewBtn={true}
          variation={true}
        />
      </div>
    </div>
  );
}
