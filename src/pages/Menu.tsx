import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ShoppingBag, TrendingUp, DollarSign, Keyboard } from 'lucide-react';

const projects = [
  {
    title: 'Task Orchestration System',
    description: 'A premium task management dashboard with high-performance state management.',
    image: 'https://picsum.photos/seed/task/800/600',
    url: 'https://taskapp-two-delta.vercel.app/',
    category: 'SaaS / APP',
    price: 'ENTRÉE',
    icon: ShoppingBag
  },
  {
    title: 'Global Analytics Engine',
    description: 'Real-time data visualization platform for enterprise-scale metrics.',
    image: 'https://picsum.photos/seed/analytics/800/600',
    url: 'https://analytics-beta-rosy.vercel.app/',
    category: 'DATA / VIZ',
    price: 'SPECIALTY',
    icon: TrendingUp
  },
  {
    title: 'Wealth Ledger',
    description: 'A sophisticated expense tracker focused on financial clarity and optimization.',
    image: 'https://picsum.photos/seed/wealth/800/600',
    url: 'https://realimrandev.github.io/expense-tracker/',
    category: 'FINTECH',
    price: 'SIGNATURE',
    icon: DollarSign
  },
  {
    title: 'Velocity Typing',
    description: 'High-performance interactive typing test with real-time feedback loop.',
    image: 'https://picsum.photos/seed/typing/800/600',
    url: 'https://realimrandev.github.io/typing-test/',
    category: 'INTERACTIVE',
    price: 'DESSERT',
    icon: Keyboard
  },
];

export default function Menu() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] mb-4">LE CARTE</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">THE <span className="text-white/20">MENU</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-4">
                  <project.icon className="w-5 h-5 text-[#D4AF37]" />
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight uppercase group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] tracking-[0.3em] text-[#00FFAA] uppercase font-bold">{project.category}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-light text-[#D4AF37] tracking-[0.3em]">{project.price}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <p className="lg:col-span-2 text-white/40 text-sm leading-relaxed tracking-wider font-light italic">
                  "{project.description}"
                </p>
                
                <div className="lg:col-span-3 relative aspect-video overflow-hidden border border-white/5 bg-[#1a1a1a]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent opacity-60" />
                  
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90 group-hover:scale-100"
                  >
                    <div className="px-6 py-3 bg-[#D4AF37] text-[#0D0D0D] font-bold text-xs tracking-[0.2em] flex items-center gap-2">
                      VIEW PROJECT <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-40 text-center">
          <div className="inline-block p-12 border border-white/5 relative bg-[#111]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 bg-[#0D0D0D] text-[10px] tracking-[0.5em] text-[#D4AF37]">CHEF'S NOTE</div>
            <p className="text-white/60 text-lg font-light tracking-widest leading-loose max-w-3xl">
              "Every project in this menu is carefully curated using the finest ingredients: React, Three.js, and high-performance backends. I prioritize scalability and user delight in every dish."
            </p>
            <div className="mt-8 text-[#D4AF37] font-serif italic text-xl tracking-widest">— Imran Sabir</div>
          </div>
        </div>
      </div>
    </div>
  );
}
