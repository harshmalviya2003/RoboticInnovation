import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#0d0d2b] relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#00d4ff] font-semibold mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#4361ee] to-[#00d4ff] bg-clip-text text-transparent">
              Advanced Services
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover our comprehensive suite of robotics and AI solutions designed to transform industries and unlock new possibilities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              className="rounded-xl p-6 transition-all duration-300 bg-[rgba(22,22,64,0.7)] backdrop-blur-md border border-[rgba(67,97,238,0.2)] hover:transform hover:-translate-y-2 hover:shadow-[0_20px_25px_-5px_rgba(0,212,255,0.1),0_10px_10px_-5px_rgba(0,212,255,0.2)] hover:border-[rgba(67,97,238,0.6)]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 bg-[#${getColorCode(service.color)}]/20 rounded-lg flex items-center justify-center mb-6`}>
                <ServiceIcon name={service.icon} color={getColorCode(service.color)} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center text-[#00d4ff] hover:text-[#4361ee] transition-colors text-sm font-medium"
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
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.a 
            href="#contact" 
            className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#4361ee] to-[#00d4ff] text-white font-semibold rounded-lg shadow-lg"
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
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
            />
            <span className="relative z-10">Request Custom Solution</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function getColorCode(color: string): string {
  switch (color) {
    case 'electric-blue': return '4361ee';
    case 'neon-purple': return '8338ec';
    case 'vibrant-cyan': return '00d4ff';
    case 'energetic-red': return 'ff0080';
    case 'teal': return '38b2ac';
    default: return '4361ee';
  }
}

function ServiceIcon({ name, color }: { name: string; color: string }) {
  const icons: Record<string, JSX.Element> = {
    robot: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
      </svg>
    ),
    microchip: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="6" r="3"></circle>
        <path d="M10 9v16"></path>
        <circle cx="16" cy="18" r="3"></circle>
        <path d="M14 15v-3a8 8 0 0 0-8-8"></path>
      </svg>
    ),
    cogs: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`#${color}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
