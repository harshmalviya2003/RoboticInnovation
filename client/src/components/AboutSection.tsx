import { motion } from "framer-motion";

export default function AboutSection() {
  const featureAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="about" className="py-20 bg-[#161640] relative">
      <div className="absolute top-0 left-0 right-0 h-[150px] overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d2b] transform origin-[100%_0] -skew-y-[5deg]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Advanced AI visualization" 
              className="rounded-xl shadow-2xl shadow-[#4361ee]/20 w-full"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#00d4ff] font-semibold mb-3">About NexusAI</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#4361ee] to-[#00d4ff] bg-clip-text text-transparent">
                Bridging the Gap
              </span>{" "}
              Between Humanity and Technology
            </h2>
            <p className="text-gray-300 mb-8">
              Founded in 2020, NexusAI is a pioneering robotics and artificial intelligence company dedicated to creating intelligent machines that enhance human capabilities. Our team of engineers, scientists, and designers work together to develop cutting-edge solutions for industries ranging from healthcare to manufacturing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="flex items-start"
                variants={featureAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-[#00d4ff] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 16a10 10 0 0 0 11.133 9.941"></path><path d="M3 8h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3"></path>
                    <path d="M6 13.303V16"></path><path d="M13.341 11a4 4 0 0 0-1.172-2.829A3.983 3.983 0 0 0 9 7h-2a4 4 0 0 0-4 4v2c0 1.136.479 2.158 1.244 2.876"></path>
                    <path d="M15 5h2.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-.5"></path>
                    <path d="M13 7v2"></path><path d="M13 17v2"></path>
                    <path d="M15 19h2.5a1.5 1.5 0 0 0 1.5-1.5v-1a1.5 1.5 0 0 0-1.5-1.5h-.5"></path>
                    <path d="M17 09a3 3 0 1 0 6 0 3 3 0 0 0-6 0"></path>
                    <path d="M17 09h6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Advanced Technology</h3>
                  <p className="text-gray-400">State-of-the-art robotics and AI systems designed for efficiency and precision.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={featureAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-[#00d4ff] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 2v8a1 1 0 0 0 1 1h8"></path>
                    <path d="M21 8.67v-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.5"></path>
                    <path d="M2 12.5h1.5c1.5 0 2-.5 2-2v-1c0-1.5.5-2 2-2h1"></path>
                    <path d="M20.4 13a8.67 8.67 0 0 0-4.4 19"></path>
                    <path d="M3.6 17a8.67 8.67 0 0 1 4.4-4"></path>
                    <path d="M17 22h1.5a2 2 0 0 0 2-2v-.5"></path>
                    <path d="M3 13v-.5a2 2 0 0 1 2-2h.5"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Continuous Innovation</h3>
                  <p className="text-gray-400">Pushing boundaries through research and cutting-edge solutions.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={featureAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-[#00d4ff] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Expert Team</h3>
                  <p className="text-gray-400">Driven professionals with deep expertise in robotics, AI, and engineering.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start"
                variants={featureAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-[#00d4ff] mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22a9 9 0 0 1-9-9v0a9 9 0 0 1 9-9v0a9 9 0 0 1 9 9v0a9 9 0 0 1-9 9v0z"></path>
                    <path d="M9 11V9h6v2"></path>
                    <path d="M9 15v-2h6v2"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-lg mb-2">Ethical AI</h3>
                  <p className="text-gray-400">Committed to developing responsible AI solutions for a better future.</p>
                </div>
              </motion.div>
            </div>
            
            <motion.a 
              href="#services" 
              className="inline-flex items-center font-medium text-[#00d4ff] hover:text-[#4361ee] transition-colors"
              whileHover={{ x: 5 }}
            >
              Explore Our Services 
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
