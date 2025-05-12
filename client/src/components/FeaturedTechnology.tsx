import { motion } from "framer-motion";
import { TECH_FEATURES } from "@/lib/constants";

export default function FeaturedTechnology() {
  return (
    <section className="py-20 bg-[#161640]">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00d4ff] font-semibold mb-3">Featured Technology</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#4361ee] to-[#00d4ff] bg-clip-text text-transparent">
              Latest Innovations
            </span>
          </h2>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1580913428023-02c695666d61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Advanced humanoid robot" 
                className="rounded-xl shadow-2xl shadow-[#4361ee]/20 w-full"
              />
              <motion.div 
                className="absolute -bottom-5 -right-5 bg-[#0d0d2b] p-4 rounded-lg border border-[#4361ee]/30 shadow-lg"
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
                    className="w-3 h-3 bg-[#00d4ff] rounded-full"
                    animate={{ 
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <span className="text-white font-medium text-sm">AI Processing Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">NeuroBot X-1</h3>
            <p className="text-gray-300 mb-6">
              Our flagship autonomous robot powered by our proprietary neural processing unit. The NeuroBot X-1 combines advanced mobility, computer vision, and machine learning to perform complex tasks in dynamic environments.
            </p>
            
            <div className="space-y-6 mb-8">
              {TECH_FEATURES.map((feature, index) => (
                <motion.div 
                  key={feature.name}
                  className="bg-[#161640] border border-[#4361ee]/20 rounded-lg p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <h4 className="text-white font-semibold mb-2">{feature.name}</h4>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                  <div className="mt-3 w-full bg-[#0d0d2b] rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-[#4361ee] to-[#00d4ff] h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${feature.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 * index }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.a 
              href="#contact" 
              className="inline-flex items-center font-medium text-[#00d4ff] hover:text-[#4361ee] transition-colors"
              whileHover={{ x: 5 }}
            >
              Request a Demo 
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
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
