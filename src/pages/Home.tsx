import React from 'react';
import { motion } from 'motion/react';
import ThreeScene from '../components/ui/ThreeScene';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  const getThemeTextClass = () => {
    switch(theme) {
      case 'cyber': return 'glitch-text text-accent uppercase font-mono';
      case 'royal': return 'italic font-serif text-accent';
      case 'oceanic': return 'tracking-[0.2em] font-display text-accent';
      default: return 'text-accent uppercase font-display';
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ThreeScene />
      
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-accent text-xs md:text-sm tracking-[0.5em] font-medium uppercase">
              Exclusive Portfolio Experience
            </span>
          </motion.div>
          
          <h1 className="flex flex-col mb-8 select-none">
            <motion.span 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring', damping: 25, stiffness: 120 }}
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter text-white"
            >
              IMRAN
            </motion.span>
            <motion.span 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, type: 'spring', damping: 25, stiffness: 120 }}
              className={`text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-black leading-none tracking-tighter ${getThemeTextClass()}`}
            >
              SABIR
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-white/40 text-sm md:text-xl tracking-[0.3em] uppercase font-light mb-16 max-w-2xl px-4"
          >
            Full Stack Developer <span className="mx-2 text-accent">|</span> Digital Architect <span className="mx-2 text-accent">|</span> 3D Experience Designer
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto"
          >
            <Link to="/menu" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 bg-accent text-primary font-black tracking-[0.2em] text-xs rounded-none border border-accent hover:bg-transparent hover:text-accent transition-all flex items-center justify-center gap-3 group"
              >
                OPEN THE MENU <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: 'var(--accent)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-12 py-5 border border-white/10 text-white font-black tracking-[0.2em] text-xs rounded-none hover:text-accent transition-all uppercase"
              >
                Book Consultation
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Background Elements */}
      <div className="absolute bottom-12 left-12 hidden md:block">
        <motion.div 
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex items-center gap-4"
        >
          <div className="w-12 h-[1px] bg-accent/30" />
          <span className="text-[10px] tracking-[0.5em] text-white/20 uppercase font-black">Design v.4.0</span>
        </motion.div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="flex flex-col items-end gap-2">
          <span className="text-[8px] tracking-[0.8em] text-accent font-black uppercase">Scroll Sequence</span>
          <motion.div 
            animate={{ height: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[1px] bg-gradient-to-b from-accent to-transparent" 
          />
        </div>
      </div>
    </div>
  );
}
