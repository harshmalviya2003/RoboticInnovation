import { motion } from "framer-motion";
import { NAVIGATION } from "@/lib/constants";
import { Link } from "wouter";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={isDark ? "bg-black pt-16 pb-8" : "bg-gray-100 pt-16 pb-8"}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className={isDark ? "text-gray-200" : "text-gray-800"}>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ rotate: -5 }}
                  animate={{ rotate: 5 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                  }}
                >
                  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                  <path d="M3 15h1m10-5.5V12a2 2 0 0 1-2 2H9v3.5"></path>
                  <path d="M12 13a7.92 7.92 0 0 0 2.64-9.5"></path>
                </motion.svg>
              </div>
              <span className={isDark ? "text-white font-bold text-xl" : "text-black font-bold text-xl"}>NexusAI</span>
            </div>
            <p className={isDark ? "text-gray-400 mb-6" : "text-gray-600 mb-6"}>
              Pioneering the future of robotics and artificial intelligence with innovative solutions for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className={isDark ? "text-gray-400 hover:text-white transition-colors" : "text-gray-500 hover:text-black transition-colors"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className={isDark ? "text-white font-semibold mb-6" : "text-black font-semibold mb-6"}>Quick Links</h3>
            <ul className="space-y-3">
              {NAVIGATION.map(item => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <span className={isDark 
                      ? "text-gray-400 hover:text-white transition-colors cursor-pointer" 
                      : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className={isDark ? "text-white font-semibold mb-6" : "text-black font-semibold mb-6"}>Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services"><span className={isDark ? "text-gray-400 hover:text-white transition-colors cursor-pointer" : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>Advanced Robotics</span></Link></li>
              <li><Link href="/services"><span className={isDark ? "text-gray-400 hover:text-white transition-colors cursor-pointer" : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>AI Solutions</span></Link></li>
              <li><Link href="/services"><span className={isDark ? "text-gray-400 hover:text-white transition-colors cursor-pointer" : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>Embedded Systems</span></Link></li>
              <li><Link href="/services"><span className={isDark ? "text-gray-400 hover:text-white transition-colors cursor-pointer" : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>Computer Vision</span></Link></li>
              <li><Link href="/services"><span className={isDark ? "text-gray-400 hover:text-white transition-colors cursor-pointer" : "text-gray-600 hover:text-black transition-colors cursor-pointer"}>Data Analytics</span></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className={isDark ? "text-white font-semibold mb-6" : "text-black font-semibold mb-6"}>Newsletter</h3>
            <p className={isDark ? "text-gray-400 mb-4" : "text-gray-600 mb-4"}>
              Stay updated with our latest innovations and industry insights.
            </p>
            <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={isDark 
                    ? "bg-gray-900 border border-gray-700 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:border-white transition-colors w-full" 
                    : "bg-white border border-gray-300 rounded-l-lg px-4 py-2 text-black focus:outline-none focus:border-black transition-colors w-full"
                  }
                />
                <button 
                  type="submit" 
                  className={isDark 
                    ? "bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-r-lg" 
                    : "bg-gray-300 hover:bg-gray-400 transition-colors px-4 py-2 rounded-r-lg"
                  }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                    <path d="M22 2 11 13"></path>
                  </svg>
                </button>
              </div>
            </form>
            <p className={isDark ? "text-gray-500 text-sm" : "text-gray-500 text-sm"}>
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
        
        <div className={isDark ? "border-t border-gray-800 pt-8" : "border-t border-gray-300 pt-8"}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NexusAI Robotics. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className={isDark ? "text-gray-500 hover:text-white transition-colors text-sm" : "text-gray-500 hover:text-black transition-colors text-sm"}>Privacy Policy</a>
              <a href="#" className={isDark ? "text-gray-500 hover:text-white transition-colors text-sm" : "text-gray-500 hover:text-black transition-colors text-sm"}>Terms of Service</a>
              <a href="#" className={isDark ? "text-gray-500 hover:text-white transition-colors text-sm" : "text-gray-500 hover:text-black transition-colors text-sm"}>Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
