import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { useTheme } from "@/components/ThemeProvider";

export default function Services() {
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
            Our Services
          </h1>
          <p className={`max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Discover our comprehensive suite of robotics and AI solutions designed to transform industries and unlock new possibilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              className={`rounded-xl p-6 transition-all duration-300 ${
                isDark 
                  ? "bg-gray-900 border border-gray-800 hover:border-gray-700" 
                  : "bg-gray-100 border border-gray-200 hover:border-gray-300"
              } hover:transform hover:-translate-y-2 hover:shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 ${
                isDark 
                  ? "bg-gray-800" 
                  : "bg-gray-200"
              } rounded-lg flex items-center justify-center mb-6`}>
                <ServiceIcon name={service.icon} color={isDark ? "currentColor" : "currentColor"} />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${isDark ? "text-white" : "text-black"}`}>{service.title}</h3>
              <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {service.description}
              </p>
              <motion.button 
                className={`inline-flex items-center ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"} transition-colors text-sm font-medium`}
                whileHover={{ x: 5 }}
              >
                Learn More 
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
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className={`p-8 rounded-xl ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-black"}`}>
                  Custom Solutions for Your Business
                </h2>
                <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Don't see exactly what you need? Our team of experts can create custom AI and robotics solutions tailored to your specific business challenges and goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={isDark ? "white" : "black"} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>Tailored to your industry requirements</span>
                  </li>
                  <li className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={isDark ? "white" : "black"} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>Flexible integration with existing systems</span>
                  </li>
                  <li className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={isDark ? "white" : "black"} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className={isDark ? "text-gray-300" : "text-gray-700"}>Dedicated support and maintenance</span>
                  </li>
                </ul>
                <motion.button
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium ${
                    isDark 
                      ? "bg-gray-800 text-white hover:bg-gray-700" 
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Request a Consultation
                </motion.button>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Custom robotics solution" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, JSX.Element> = {
    robot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="2" width="8" height="6" rx="2"></rect>
        <path d="M8 8h8"></path>
        <path d="M12 14v4"></path>
        <circle cx="12" cy="9" r="5"></circle>
        <path d="M12 14v4"></path>
        <path d="M9 17h6"></path>
        <path d="M6 18v-5"></path><path d="M18 18v-5"></path>
      </svg>
    ),
    brain: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
      </svg>
    ),
    microchip: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    ),
    "vr-cardboard": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4z"></path>
        <path d="M12 12v.01"></path>
        <path d="M8 12v.01"></path>
        <path d="M16 12v.01"></path>
        <path d="M8 15h0"></path>
        <path d="M16 15h0"></path>
        <path d="M12 15v2"></path>
        <path d="M10 7V5h4v2"></path>
      </svg>
    ),
    "chart-network": (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6" r="3"></circle>
        <path d="M10 9v16"></path>
        <circle cx="16" cy="18" r="3"></circle>
        <path d="M14 15v-3a8 8 0 0 0-8-8"></path>
      </svg>
    ),
    cogs: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12V9"></path>
        <path d="M12 12a2 2 0 0 0-2 2"></path>
        <path d="M12 12a2 2 0 0 1 2 2"></path>
        <path d="M12 12a2 2 0 0 1 2-2"></path>
        <path d="M12 12a2 2 0 0 0-2-2"></path>
        <path d="M14.5 9.5 16 8"></path>
        <path d="m9.5 14.5-1.5 1.5"></path>
        <path d="m16 16-1.5-1.5"></path>
        <path d="M8 8c2.76 0 5 2.24 5 5"></path>
        <path d="M8 8c0 2.76 2.24 5 5 5"></path>
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    ),
  };
  
  return icons[name] || icons['robot'];
}