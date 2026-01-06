import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David Wilson",
    role: "CEO, TechStart Inc",
    content: "Working with TechCo has been transformative for our business. Their expertise and dedication to quality are unmatched.",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2"
  },
  {
    name: "Lisa Anderson",
    role: "Founder, InnovateLab",
    content: "The team's technical knowledge and problem-solving abilities exceeded our expectations. Highly recommended!",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
  },
  {
    name: "Robert Chen",
    role: "CTO, GrowthHub",
    content: "TechCo delivered our project on time and within budget. Their attention to detail and communication were excellent.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Client Testimonials
          </motion.h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
