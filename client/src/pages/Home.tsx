import { motion } from "framer-motion";
import { Link } from "wouter";
import { useTheme } from "@/components/ThemeProvider";
import { SERVICES, STATS } from "@/lib/constants";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen ${isDark ? "bg-black" : "bg-white"}`}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div 
            className={`absolute h-full w-full ${
              isDark ? "opacity-30" : "opacity-10"
            }`}
          >
            {Array.from({ length: 50 }).map((_, idx) => (
              <div 
                key={idx}
                className={`absolute rounded-full ${
                  isDark ? "bg-gray-400" : "bg-gray-700"
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  opacity: Math.random() * 0.6 + 0.2
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="w-full md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"} font-semibold mb-3`}>Pioneering the Future</p>
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                <span className="block">Advanced</span>
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  Robotics & AI
                </span>
                <span className="block">Solutions</span>
              </h1>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-xl`}>
                Transforming industries through cutting-edge robotic systems and artificial intelligence. We create intelligent machines that work alongside humans to solve real-world challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/services">
                    <span className={`relative overflow-hidden inline-flex items-center justify-center px-8 py-3 ${
                      isDark ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
                    } font-medium rounded-lg shadow-lg cursor-pointer`}>
                      Our Services
                    </span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    <span className={`border ${
                      isDark 
                        ? "border-gray-700 text-gray-300 hover:bg-gray-800" 
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    } font-medium px-8 py-3 rounded-lg transition-all cursor-pointer`}>
                      Contact Us
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 flex justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div 
                  className={`w-80 h-80 rounded-full ${isDark ? "bg-gray-800" : "bg-gray-200"}`}
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://pixabay.com/get/g171cd41b5fb85fc8629a54e9b8366458460b5888e3d9773b044979cd216c448eb7a59178a7da8049a747b5a3e2559ef0915d80ddd794137773ddfe3ba6e8422f_1280.jpg" 
                    alt="Futuristic robotic technology" 
                    className="rounded-full w-72 h-72 object-cover object-center"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className={`py-16 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-5xl font-bold mb-2 flex justify-center ${isDark ? "text-white" : "text-black"}`}>
                  <span>{stat.value}</span>
                  <span className={isDark ? "text-gray-400" : "text-gray-600"}>{stat.suffix}</span>
                </div>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className={`py-20 ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Our Services
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Discover our comprehensive suite of robotics and AI solutions designed to transform industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div 
                key={service.title}
                className={`rounded-xl p-6 transition-all duration-300 ${
                  isDark 
                    ? "bg-gray-900 border border-gray-800" 
                    : "bg-gray-100 border border-gray-200"
                } hover:transform hover:-translate-y-2 hover:shadow-lg`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>{service.title}</h3>
                <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link href="/services">
              <motion.span 
                className={`inline-flex items-center ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"} transition-colors font-medium cursor-pointer`}
                whileHover={{ x: 5 }}
              >
                View All Services 
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Ready to Transform Your Business?
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto mb-10`}>
              Contact our team of experts to discuss how our robotics and AI solutions can help you overcome challenges and unlock new opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.span
                  className={`relative overflow-hidden inline-flex items-center justify-center px-8 py-3 ${
                    isDark ? "bg-gray-800 text-white" : "bg-gray-300 text-black"
                  } font-medium rounded-lg cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.span>
              </Link>
              
              <Link href="/about">
                <motion.span
                  className={`border ${
                    isDark 
                      ? "border-gray-700 text-gray-300 hover:bg-gray-800" 
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  } font-medium px-8 py-3 rounded-lg transition-all cursor-pointer`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Us
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
