import { motion } from "framer-motion";
import Services from "@/components/sections/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-gray-600">
              We offer a comprehensive range of digital solutions to help your business thrive in the modern world. Our services are tailored to meet your specific needs and goals.
            </p>
          </motion.div>
        </div>
      </section> */}

      <Services />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                  <p className="text-gray-600 mb-6">
                    Need a specific solution for your business? We specialize in creating custom software tailored to your unique requirements.
                  </p>
                  <Button variant="outline">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Consulting</h3>
                  <p className="text-gray-600 mb-6">
                    Get expert advice on technology strategy, architecture, and implementation to drive your business forward.
                  </p>
                  <Button variant="outline">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
