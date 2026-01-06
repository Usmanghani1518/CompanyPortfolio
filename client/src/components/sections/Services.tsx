import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Palette, Megaphone, Database } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with cutting-edge technologies, optimized for performance and scalability."
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment solutions that grow with your business needs."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that delivers exceptional experiences."
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to enhance your online presence and reach."
  },
  {
    icon: Database,
    title: "DevOps",
    description: "Streamlined development operations and continuous integration for faster delivery."
  }
];

export default function ServicesWithHoverEffect() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Comprehensive solutions for your digital transformation journey
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="fancy-card relative block max-w-full bg-gradient-to-b from-orange-50 to-orange-100 rounded-xl p-8 overflow-hidden group">
                {/* Corner decoration */}
                <div className="go-corner absolute top-0 right-0 w-8 h-8 flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 rounded-bl-3xl z-10">
                  <div className="go-arrow text-white font-mono text-lg -mt-1 -mr-1">→</div>
                </div>
                
                {/* Background color reveal effect */}
                <div className="absolute z-0 top-0 right-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 transform scale-100 origin-top-right transition-transform duration-500 ease-out group-hover:scale-[30]"></div>
                
                {/* Icon */}
                <div className="relative z-10 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/20">
                  <service.icon className="h-6 w-6 text-orange-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                
                {/* Title */}
                <h3 className="card-title text-xl font-bold text-gray-800 mb-3 relative z-10 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="small-desc text-gray-700 relative z-10 transition-colors duration-500 group-hover:font-semibold">
                  {service.description}
                </p>
                
                {/* Action indicator (optional) */}
                <div className="mt-6 relative z-10 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-white/90 text-sm font-medium flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}