import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";

export default function StatsSection() {
  const [isCounting, setIsCounting] = useState(false);
  const [counters, setCounters] = useState(STATS.map(() => 0));
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isCounting) {
          setIsCounting(true);
        }
      },
      { threshold: 0.5 }
    );
    
    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [isCounting]);
  
  useEffect(() => {
    if (!isCounting) return;
    
    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = [...prev];
        let allDone = true;
        
        for (let i = 0; i < STATS.length; i++) {
          if (newCounters[i] < STATS[i].value) {
            const increment = Math.ceil(STATS[i].value / 50);
            newCounters[i] = Math.min(newCounters[i] + increment, STATS[i].value);
            if (newCounters[i] < STATS[i].value) allDone = false;
          }
        }
        
        if (allDone) clearInterval(interval);
        return newCounters;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [isCounting]);
  
  return (
    <section id="stats-section" className="py-16 bg-[#0d0d2b]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl font-bold text-white mb-2 flex justify-center">
                <span>{counters[index]}</span>
                <span className="text-[#00d4ff]">{stat.suffix}</span>
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
