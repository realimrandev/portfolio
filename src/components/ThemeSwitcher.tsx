import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const themes = [
  { id: 'default', color: '#D4AF37', label: 'NOIR' } as const,
  { id: 'cyber', color: '#00FFAA', label: 'CYBER' } as const,
  { id: 'royal', color: '#FF3E55', label: 'ROYAL' } as const,
  { id: 'oceanic', color: '#3E94FF', label: 'OCEANIC' } as const,
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed top-24 right-6 z-[100] flex flex-col items-end">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
      >
        <Palette className="w-5 h-5" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="mt-4 flex flex-col gap-3"
          >
            {themes.map((t) => (
              <motion.button
                key={t.id}
                whileHover={{ x: -10 }}
                onClick={() => setTheme(t.id)}
                className={`flex items-center gap-3 px-4 py-2 bg-black/40 border ${
                  theme === t.id ? 'border-accent select-none' : 'border-white/5'
                } backdrop-blur-xl group relative overflow-hidden`}
              >
                {theme === t.id && (
                  <motion.div 
                    layoutId="active-theme-glow"
                    className="absolute inset-0 bg-accent/5" 
                  />
                )}
                <span className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-colors ${
                  theme === t.id ? 'text-accent' : 'text-white/40 group-hover:text-white'
                }`}>
                  {t.label}
                </span>
                <div 
                  className="w-3 h-3 rounded-full relative z-10" 
                  style={{ backgroundColor: t.color, boxShadow: `0 0 15px ${t.color}` }} 
                />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
