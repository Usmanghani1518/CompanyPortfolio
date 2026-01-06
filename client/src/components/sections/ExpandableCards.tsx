import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaRobot, FaCode } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";

const cardData = [
  { 
    number: "01",
    title: "Web Solutions",
    subtitle: "Development",
    description: "High-performance responsive websites and web applications built with modern frameworks and optimized for speed and user experience.",
    icon: <FaLaptopCode className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "02",
    title: "Mobile Apps",
    subtitle: "Native & Hybrid",
    description: "Seamless mobile applications for iOS and Android platforms with intuitive interfaces and powerful functionality.",
    icon: <FaMobileAlt className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "03",
    title: "Cloud Services",
    subtitle: "Infrastructure",
    description: "Scalable cloud infrastructure solutions leveraging AWS, Azure, or Google Cloud with optimized performance and security.",
    icon: <FaCloud className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "04",
    title: "AI Agents",
    subtitle: "Automation",
    description: "AI-powered automation and intelligent systems that streamline processes and enhance decision-making capabilities.",
    icon: <FaRobot className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "05",
    title: "Custom Software",
    subtitle: "Solutions",
    description: "Tailored software solutions designed to address specific business challenges and optimize operational efficiency.",
    icon: <FaCode className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "06",
    title: "AI Agents",
    subtitle: "Automation",
    description: "AI-powered automation and intelligent systems that streamline processes and enhance decision-making capabilities.",
    icon: <FaRobot className="text-4xl text-orange-500" />,
    color: "orange"
  },
  { 
    number: "07",
    title: "Custom Software",
    subtitle: "Solutions",
    description: "Tailored software solutions designed to address specific business challenges and optimize operational efficiency.",
    icon: <FaCode className="text-4xl text-orange-500" />,
    color: "orange"
  }
];

export default function EnhancedExpandableCards() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-12 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Technical <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Delivering cutting-edge digital solutions to transform your business with the latest technologies and innovative approaches.
          </p>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {cardData.map((card, index) => (
            <div
              key={card.title}
              className={`flex-shrink-0 transition-all duration-500 cursor-pointer relative rounded overflow-hidden mx-1
                ${activeIndex === index ? "w-96 bg-gray-800 border-l-4 border-orange-500" : "w-32 bg-gray-900 hover:bg-gray-800"}`}
              onClick={() => setActiveIndex(index)}
            >
              {activeIndex === index ? (
                <div className=" h-96 rounded-3xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-orange-500 bg-orange-500/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                      {card.number}
                    </span>
                    <ChevronRight className="text-orange-500" size={24} />
                  </div>
                  
                  <div className="mb-4">
                    {card.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-1 text-white">
                    {card.title}
                    <span className="text-orange-500"> {card.subtitle}</span>
                  </h3>
                  
                  <div className="h-1 w-16 bg-orange-500 mb-4"></div>
                  
                  <p className="text-gray-300 text-sm">
                    {card.description}
                  </p>
                  
                  <button className="mt-6 bg-orange-500/10 text-orange-500 text-sm px-4 py-2 rounded-full flex items-center gap-2 hover:bg-orange-500/20 transition-colors">
                    Learn more
                    <IoIosArrowForward />
                  </button>
                </div>
              ) : (
                <div className="h-80 flex flex-col relative">
                  <div className="absolute top-4 left-0 right-0 text-center">
                    <span className="text-white text-xl font-bold">{card.number}</span>
                  </div>
                  
                  <div className="h-full flex items-center justify-center">
                    <div className="transform rotate-90 whitespace-nowrap text-gray-400 text-xs uppercase tracking-widest font-medium">
                      {card.title} {card.subtitle && `& ${card.subtitle}`}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <IoIosArrowUp className="text-gray-600" size={16} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {cardData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${activeIndex === index ? "bg-orange-500 w-8" : "bg-gray-700 hover:bg-gray-600"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}