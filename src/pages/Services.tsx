import React from 'react';
import { motion } from 'motion/react';
import { Code, Layout, Server, Database, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Development',
    description: 'End-to-end web applications built with React, Node.js, and robust databases.',
    icon: Code,
    color: '#D4AF37'
  },
  {
    title: 'Premium Frontend Design',
    description: 'Immersive, 3D integrated interfaces with smooth animations and cinematic layouts.',
    icon: Layout,
    color: '#00FFAA'
  },
  {
    title: 'Backend Engineering',
    description: 'Scalable server-side logic, API development, and secure data orchestration.',
    icon: Server,
    color: '#D4AF37'
  },
  {
    title: 'Database Architecture',
    description: 'Performance-optimized data schemas using MongoDB, PostgreSQL, and Firebase.',
    icon: Database,
    color: '#8E9299'
  },
  {
    title: 'Mobile-First Solutions',
    description: 'Responsive architectures that look stunning on every device from mobile to ultra-wide.',
    icon: Smartphone,
    color: '#D4AF37'
  },
  {
    title: 'Performance Tuning',
    description: 'Lazy loading, code splitting, and asset optimization for millisecond-fast sites.',
    icon: Zap,
    color: '#00FFAA'
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] mb-4">OUR OFFERINGS</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">PREMIUM <span className="text-white/20">SERVICES</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative p-10 bg-[#111] border border-white/5 group overflow-hidden"
            >
              {/* Background gradient glow */}
              <div 
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-none flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#D4AF37] transition-colors">
                  <service.icon className="w-8 h-8 text-white group-hover:text-[#D4AF37] transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/40 text-sm leading-loose tracking-widest font-light italic">
                  {service.description}
                </p>
                
                <div className="mt-8 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-[#D4AF37]" />
                  <span className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase font-bold">PREMIUM SELECTION</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-xl font-serif italic text-white/40 tracking-[0.2em] mb-8">
              "I offer bespoke web solutions tailored to the needs of modern luxury brands."
            </p>
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
