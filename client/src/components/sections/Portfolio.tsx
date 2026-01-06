import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with real-time inventory.",
    fullDescription: "An advanced e-commerce solution featuring real-time inventory management, secure payment processing, and a responsive design optimized for all devices. Built with React, Node.js, and MongoDB, this platform handles thousands of transactions daily.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Healthcare App",
    description: "Mobile application for patient management and telemedicine.",
    fullDescription: "A comprehensive healthcare management system enabling remote consultations, appointment scheduling, and secure medical record access. Developed using React Native and integrated with HIPAA-compliant cloud services.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    tags: ["React Native", "Firebase", "AWS"]
  },
  {
    title: "Financial Dashboard",
    description: "Real-time analytics dashboard for financial data visualization.",
    fullDescription: "A real-time financial analytics dashboard providing interactive visualizations of key financial metrics.  Built with Vue.js, D3.js, and Python, this dashboard offers customizable views and data export capabilities.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
    tags: ["Vue.js", "D3.js", "Python"]
  },
  {
    title: "Social Network",
    description: "Community platform with real-time messaging and content sharing.",
    fullDescription: "A social networking platform designed for seamless communication and content sharing.  Built using Next.js, GraphQL, and PostgreSQL, this platform provides robust features like real-time messaging and user profiles.",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "GraphQL", "PostgreSQL"]
  },
  {
    title: "IoT Platform",
    description: "Connected device management and monitoring system.",
    fullDescription: "A comprehensive IoT platform for managing and monitoring connected devices.  Built with Angular, Node.js, and MQTT, this system provides real-time data visualization and remote device control.",
    image: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?w=800&auto=format&fit=crop&q=80",
    tags: ["Angular", "Node.js", "MQTT"]
  },
  {
    title: "Learning Management",
    description: "Online education platform with interactive content delivery.",
    fullDescription: "An online learning platform offering interactive course delivery, progress tracking, and community features.  Built with React, Django, and Redis, this platform offers a personalized learning experience.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Django", "Redis"]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Portfolio
          </motion.h2>
          <p className="text-xl text-gray-600">
            Showcasing our best work and successful projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <DialogDescription className="text-base text-gray-700">
              {selectedProject?.fullDescription}
            </DialogDescription>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject?.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}