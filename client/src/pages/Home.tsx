import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import ExpandableCards from "@/components/sections/ExpandableCards";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DevXSystem - Leading Software Development Company</title>
        <meta name="description" content="DevXSystem builds innovative software solutions that drive business growth and enhance user experience. Specializing in web development, mobile apps, cloud solutions, and more." />
        <meta name="keywords" content="software development, web development, mobile apps, cloud solutions, DevXSystem, digital transformation" />
        <meta property="og:title" content="DevXSystem - Leading Software Development Company" />
        <meta property="og:description" content="Transform your business with our innovative software solutions. Web development, mobile apps, cloud solutions, and more." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Services />
        <ExpandableCards />
        <Portfolio />
        <Team />
        <Testimonials />
        {/* <Contact /> */}
      </motion.div>
    </>
  );
}