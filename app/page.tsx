import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import PropertyCategories from '@/components/PropertyCategories';
import ExploreLocations from '@/components/ExploreLocations';
import PropertySpotlight from '@/components/PropertySpotlight';
import BuyRentSell from '@/components/BuyRentSell';
import WhyKalycor from '@/components/WhyKalycor';
import Stats from '@/components/Stats';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProperties />
        <PropertyCategories />
        <ExploreLocations />
        <PropertySpotlight />
        <BuyRentSell />
        <WhyKalycor />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
