import { motion } from "framer-motion";
import { TEAM_MEMBERS } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

export default function Team() {
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
            Our Team
          </h1>
          <p className={`max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Meet the innovative minds behind NexusAI, a diverse team of experts dedicated to pushing the boundaries of AI and robotics.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div 
              key={member.name}
              className={`${
                isDark 
                  ? "bg-gray-900 border border-gray-800" 
                  : "bg-white border border-gray-200"
              } rounded-xl overflow-hidden transition-all duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-full h-64 object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDark 
                    ? "from-gray-900" 
                    : "from-white"
                } to-transparent`}></div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-black"}`}>{member.name}</h3>
                <p className={`mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{member.role}</p>
                <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {member.description}
                </p>
                <motion.div 
                  className="flex space-x-4 social-icons"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <a href={member.social.linkedin} className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href={member.social.github} className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className={`p-8 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"} mt-12`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${isDark ? "text-white" : "text-black"}`}>
                Join Our Growing Team
              </h2>
              <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                We're always looking for talented individuals who are passionate about AI, robotics, and creating technologies that make a difference. Join our team and be part of the future of innovation.
              </p>
              <div className="space-y-4 mb-6">
                <div className={`p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-white"}`}>
                  <h3 className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>AI Research Scientist</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Full-time · Remote</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-white"}`}>
                  <h3 className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>Robotics Engineer</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Full-time · San Francisco</p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? "bg-gray-800" : "bg-white"}`}>
                  <h3 className={`font-semibold ${isDark ? "text-white" : "text-black"}`}>Machine Learning Developer</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Full-time · New York</p>
                </div>
              </div>
              <motion.button
                className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
                  isDark 
                    ? "bg-gray-800 text-white hover:bg-gray-700" 
                    : "bg-gray-200 text-black hover:bg-gray-300"
                } transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Openings
              </motion.button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}