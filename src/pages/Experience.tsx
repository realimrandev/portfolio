import React from 'react';
import { motion } from 'motion/react';
import { Calendar, GraduationCap, Code, Globe, Trophy } from 'lucide-react';

const events = [
  {
    title: 'Corvit Certification',
    company: 'Corvit Systems',
    period: '2023 - 2024',
    description: 'Completed an intensive 6-month specialized web development course focusing on modern JavaScript ecosystems, React, and Full Stack Architecture.',
    icon: GraduationCap,
    tags: ['MERN Stack', 'Architecture', 'UI/UX']
  },
  {
    title: 'The Task Orchestrator',
    company: 'Self-Directed / Portfolio',
    period: 'Early 2024',
    description: 'Developed a high-performance Task Management system with complex state handling and real-time responsiveness.',
    icon: Code,
    tags: ['React', 'Framer Motion', 'Optimization']
  },
  {
    title: 'Financial Analytics Suite',
    company: 'Fintech Explorations',
    period: 'Mid 2024',
    description: 'Built a multi-user expense tracking and analytics engine with focus on data security and visualization.',
    icon: Trophy,
    tags: ['Node.js', 'DataViz', 'Security']
  },
  {
    title: 'Global Branding Deployment',
    company: 'Freelance / Projects',
    period: 'Present',
    description: 'Architecting high-end 3D integrated websites for international clients seeking premium digital presence.',
    icon: Globe,
    tags: ['Three.js', 'Next.js', 'Premium UI']
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-32"
        >
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] mb-4">THE JOURNEY</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">CAREER <span className="text-white/20">TIMELINE</span></h1>
        </motion.div>

        <div className="relative space-y-24">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden lg:block" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col lg:flex-row items-center gap-12 ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Timeline Center Dot */}
              <div className="absolute left-0 lg:left-1/2 top-8 w-4 h-4 bg-[#D4AF37] rounded-full -translate-x-1/2 z-10 hidden lg:block shadow-[0_0_15px_#D4AF37]" />
              
              <div className="w-full lg:w-1/2 p-10 bg-[#111] border border-white/5 relative group hover:border-[#D4AF37]/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                      <event.icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">{event.period}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">{event.title}</h3>
                <h4 className="text-sm text-white/40 mb-6 font-medium italic tracking-widest">{event.company}</h4>
                
                <p className="text-white/60 text-sm leading-loose tracking-widest font-light mb-8 italic">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {event.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] tracking-[0.2em] uppercase font-bold text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Decorative index indicator */}
                <div className="absolute -top-4 right-8 px-4 py-1 bg-[#0D0D0D] border border-white/5 text-[9px] tracking-[0.4em] text-white/20 font-bold">
                  PAGE {i + 1}
                </div>
              </div>
              
              <div className="hidden lg:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
