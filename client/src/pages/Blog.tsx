import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight } from "lucide-react";

const posts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd"
  },
  {
    title: "Building Scalable Mobile Applications",
    excerpt: "Best practices for developing mobile apps that can grow with your business.",
    date: "March 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4"
  },
  {
    title: "Cloud Computing Solutions",
    excerpt: "Understanding different cloud platforms and choosing the right solution.",
    date: "March 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1529169436040-836f3d93f0f8"
  },
  {
    title: "AI in Modern Software",
    excerpt: "How artificial intelligence is transforming software development.",
    date: "March 8, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968"
  },
  {
    title: "UX Design Principles",
    excerpt: "Essential principles for creating user-friendly digital experiences.",
    date: "March 5, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1521699492617-3ed82a0501d6"
  }
];

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-16"
    >
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-6">Our Blog</h1>
            <p className="text-lg text-gray-600">
              Insights, updates, and resources from our team of experts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                      <Clock className="h-4 w-4 ml-4 mr-2" />
                      {post.readTime}
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Button variant="outline" size="sm">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
