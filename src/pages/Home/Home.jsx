import { motion } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";
import ContactSection from "./ContactSection";
const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />

    </div>
  );
};

export default Home;
