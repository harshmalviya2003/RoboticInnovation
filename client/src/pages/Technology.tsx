import { motion } from "framer-motion";
import { TECH_FEATURES } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

export default function Technology() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className={`py-24 ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
            Our Technology
          </h1>
          <p className={`max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Explore the cutting-edge technologies powering our robotics and AI solutions.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced humanoid robot" 
                className={`rounded-xl ${isDark ? "shadow-gray-800" : "shadow-gray-200"} shadow-xl w-full`}
              />
              <motion.div 
                className={`absolute -bottom-5 -right-5 ${isDark ? "bg-gray-900" : "bg-white"} p-4 rounded-lg ${
                  isDark ? "border border-gray-800" : "border border-gray-300"
                } shadow-lg`}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className={`w-3 h-3 rounded-full ${isDark ? "bg-gray-200" : "bg-gray-800"}`}
                    animate={{ 
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <span className={isDark ? "text-white font-medium text-sm" : "text-black font-medium text-sm"}>AI Processing Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>NeuroBot X-1</h3>
            <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Our flagship autonomous robot powered by our proprietary neural processing unit. The NeuroBot X-1 combines advanced mobility, computer vision, and machine learning to perform complex tasks in dynamic environments.
            </p>
            
            <div className="space-y-6 mb-8">
              {TECH_FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  className={`${isDark ? "bg-gray-900 border border-gray-800" : "bg-gray-100 border border-gray-200"} rounded-lg p-4`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-black"}`}>{feature.name}</h4>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                  <div className="mt-3 w-full bg-gray-800 rounded-full h-2">
                    <motion.div 
                      className={`${isDark ? "bg-gray-200" : "bg-gray-600"} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: `${feature.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
              Our Core Technologies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className={`p-6 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
                  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>Neural Processing</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Our proprietary neural processing architecture enables robots to process sensory data and make decisions with near-human speed and accuracy. These systems can learn from experience and adapt to new environments.
              </p>
            </motion.div>
            
            <motion.div
              className={`p-6 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"></path>
                  <path d="M12 12v.01"></path>
                  <path d="M8 12v.01"></path>
                  <path d="M16 12v.01"></path>
                  <path d="M8 15h0"></path>
                  <path d="M16 15h0"></path>
                  <path d="M12 15v2"></path>
                  <path d="M10 7V5h4v2"></path>
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>Computer Vision</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Advanced multi-spectrum camera arrays with depth sensing provide our robots with 360° environmental awareness. Our vision systems can recognize objects, navigate complex environments, and interpret human gestures.
              </p>
            </motion.div>
            
            <motion.div
              className={`p-6 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 ${isDark ? "bg-gray-800" : "bg-white"}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                  <path d="M9 9h6v6H9z"></path>
                  <path d="M9 2v2"></path>
                  <path d="M15 2v2"></path>
                  <path d="M9 20v2"></path>
                  <path d="M15 20v2"></path>
                  <path d="M20 9h2"></path>
                  <path d="M20 14h2"></path>
                  <path d="M2 9h2"></path>
                  <path d="M2 14h2"></path>
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>Adaptive Learning</h3>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Our robots use reinforcement learning algorithms that improve their performance with each task. This allows them to optimize their actions in real-time and adapt to unexpected situations without human intervention.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className={`mt-20 p-8 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="text-center mb-8">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
              Future Development Roadmap
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              We're constantly innovating and evolving our technology. Here's a look at what's coming next.
            </p>
          </div>
          
          <div className="relative">
            <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-px ${isDark ? "bg-gray-800" : "bg-gray-300"}`}></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="md:text-right relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`absolute right-0 md:right-0 top-0 w-4 h-4 rounded-full transform md:translate-x-8 ${isDark ? "bg-gray-200" : "bg-gray-800"}`}></div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>Q3 2025</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  NeuroBot X-2 with enhanced mobility and fine motor skills for complex manufacturing tasks.
                </p>
              </motion.div>
              
              <div className="md:pl-10"></div>
              
              <div className="md:pr-10"></div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={`absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full transform md:-translate-x-8 ${isDark ? "bg-gray-200" : "bg-gray-800"}`}></div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>Q1 2026</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Advanced emotion recognition and natural language understanding for human-robot interaction.
                </p>
              </motion.div>
              
              <motion.div 
                className="md:text-right relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className={`absolute right-0 md:right-0 top-0 w-4 h-4 rounded-full transform md:translate-x-8 ${isDark ? "bg-gray-200" : "bg-gray-800"}`}></div>
                <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-black"}`}>Q4 2026</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Introduction of our swarm robotics platform for coordinated multi-robot operations.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}