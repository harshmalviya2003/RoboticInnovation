import { motion } from "framer-motion";
import ParticlesContainer from "./ParticlesContainer";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-20">
      <ParticlesContainer />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#00d4ff] font-semibold mb-3">Pioneering the Future</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Advanced</span>
              <span className="bg-gradient-to-r from-[#4361ee] to-[#00d4ff] bg-clip-text text-transparent">
                Robotics & AI
              </span>
              <span className="block">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Transforming industries through cutting-edge robotic systems and artificial intelligence. We create intelligent machines that work alongside humans to solve real-world challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                className="relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-[#4361ee] text-white font-medium rounded-lg shadow-lg hover:shadow-[#4361ee]/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#4361ee] to-[#00d4ff] to-[#8338ec] bg-[length:400%] opacity-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    backgroundPosition: ["0%", "100%"] 
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <span className="relative z-10">Our Services</span>
              </motion.a>
              
              <motion.a
                href="#contact"
                className="border border-[#00d4ff] text-[#00d4ff] font-medium px-8 py-3 rounded-lg hover:bg-[#00d4ff]/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
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
                className="w-80 h-80 rounded-full bg-[#00d4ff]/10"
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
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
          }}
        >
          <a href="#about" className="text-white text-center block">
            <span className="block mb-2">Discover More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
