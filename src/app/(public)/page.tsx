import CareGuides from "@/components/home/CareGuides";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProduct";
import Hero from "@/components/home/Hero";
import NewsletterCTA from "@/components/home/NewsletterCTA";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
   <div>
    <Hero/>
    <CategoryGrid/>
    <FeaturedProducts/>
    <WhyChooseUs/>
    <CareGuides/>
    <NewsletterCTA/>
   </div>
  );
}
