import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "url('data:image/svg+xml,...')", // Add a subtle pattern SVG
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 mb-6"
              variants={itemVariants}
            >
              Transforming Ideas Into Digital Excellence
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              DevXSystem builds innovative software solutions that drive business growth and enhance user experience.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              variants={itemVariants}
            >
              <Button 
                size="lg"
                className="group transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
              alt="Modern digital workspace"
              className="rounded-lg shadow-2xl"
              loading="lazy"
            />
            <motion.div
              className="absolute inset-0 bg-primary/10 rounded-lg"
              animate={{
                opacity: [0, 0.1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}