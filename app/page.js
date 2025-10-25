import Image from "next/image";

import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import ServicesSection from "./_components/Services";
import StatisticsSection from "./_components/Statics";
import FeaturesHighlight from "./_components/FeatureHighLight";
import FAQSection from "./_components/Faq";

export default function Home() {
  return (
    <div>
   
      <Hero />
      <ServicesSection />
      <StatisticsSection />
      <FeaturesHighlight />
      <FAQSection />
      
   </div>
  );
}
