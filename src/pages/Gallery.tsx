import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1000', title: 'Task Orchestration' },
  { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', title: 'Data Analytics' },
  { url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000', title: 'Finance Ledger' },
  { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000', title: 'Velocity Typing' },
  { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000', title: 'Portfolio Architecture' },
  { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000', title: 'Creative Engineering' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-accent text-sm tracking-[0.5em] mb-4 uppercase">Visual Archive</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">The <span className="text-white/10 italic">Gallery</span></h1>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImg(item.url)}
              className="relative group cursor-none overflow-hidden theme-card border border-white/5"
            >
              <img 
                src={item.url} 
                alt={item.title} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                <Maximize2 className="w-8 h-8 text-accent mb-4 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <h3 className="text-white font-black tracking-widest text-xs uppercase mb-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.title}</h3>
                <span className="text-accent text-[10px] tracking-[0.4em] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity delay-150">Open Frame</span>
              </div>
              
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white"
              whileHover={{ rotate: 90, scale: 1.2 }}
            >
              <X className="w-10 h-10" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10"
              alt="Full view"
            />
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] text-white/20 font-bold uppercase">
              Click anywhere to dismiss
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
