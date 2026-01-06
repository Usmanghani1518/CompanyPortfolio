import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Github } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Michael Brown",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Emily Davis",
    role: "Design Director",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#"
    }
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Meet Our Team
          </motion.h2>
          <p className="text-xl text-gray-600">
            Talented professionals driving innovation and excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    {[
                      { icon: Twitter, href: member.social.twitter },
                      { icon: Linkedin, href: member.social.linkedin },
                      { icon: Github, href: member.social.github }
                    ].map(({ icon: Icon, href }, i) => (
                      <a
                        key={i}
                        href={href}
                        className="text-gray-400 hover:text-primary transition-colors"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
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
