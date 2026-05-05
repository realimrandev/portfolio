import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  life: number;
}

export default function CustomCursor() {
  const { theme } = useTheme();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextParticleId = useRef(0);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (isHidden) setIsHidden(false);

      // Spawn smoke particles with correct timestamp-based ID
      const timestamp = Date.now();
      const newParticle: Particle = {
        id: timestamp,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 20 + 10,
        life: 1
      };
      
      setParticles(prev => [...prev.slice(-20), newParticle]);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      );
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isHidden]);

  // Clean up particles based on age
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setParticles(prev => prev.filter(p => now - p.id < 1000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const ThemeCursorContent = useMemo(() => {
    switch(theme) {
      case 'cyber':
        return (
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-accent z-10 flex items-center justify-center overflow-hidden"
            style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
            animate={{ 
              rotate: isPointer ? 180 : 0, 
              scale: isPointer ? 1.5 : 1,
              borderRadius: isPointer ? '0%' : '20%'
            }}
          >
            <div className="w-full h-[1px] bg-accent/30 absolute animate-pulse" />
            <div className="h-full w-[1px] bg-accent/30 absolute animate-pulse" />
            <div className={`w-1 h-1 bg-accent ${isPointer ? 'scale-150' : 'scale-100'}`} />
          </motion.div>
        );
      case 'royal':
        return (
          <motion.div
            className="fixed top-0 left-0 w-12 h-12 z-10 flex items-center justify-center"
            style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
            animate={{ scale: isPointer ? 1.6 : 1 }}
          >
            <motion.div 
              className="absolute inset-0 border border-accent/40 rounded-full"
              animate={{ rotate: 360, borderStyle: isPointer ? 'solid' : 'dashed' }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />
            <div className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_10px_var(--accent)]" />
          </motion.div>
        );
      case 'oceanic':
        return (
          <motion.div
            className="fixed top-0 left-0 w-10 h-10 bg-accent/20 backdrop-blur-sm rounded-full z-10 border border-accent/30"
            style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
            animate={{ 
              scale: isPointer ? 2.5 : 1,
              borderWidth: isPointer ? '2px' : '1px'
            }}
            transition={{ type: 'spring', damping: 12 }}
          />
        );
      default:
        return (
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full z-10 flex items-center justify-center shadow-[0_0_20px_var(--accent)]"
            style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
            animate={{ 
              scale: isPointer ? 2.2 : 1, 
              backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.1)' : 'rgba(0,0,0,0)',
              rotate: isPointer ? 45 : 0
            }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-accent rounded-full" 
              animate={{ scale: isPointer ? 0.5 : 1 }}
            />
          </motion.div>
        );
    }
  }, [theme, smoothX, smoothY, isPointer]);

  if (isHidden) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Ghost Smoke Particles */}
      <AnimatePresence mode="popLayout">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.6, scale: 0.2, x: p.x, y: p.y }}
            animate={{ 
              opacity: 0, 
              scale: theme === 'cyber' ? 1.5 : 3, 
              y: p.y - (Math.random() * 100 + 40),
              x: p.x + (Math.random() - 0.5) * 60,
              rotate: (Math.random() - 0.5) * 180
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`absolute ${theme === 'cyber' ? 'rounded-none' : 'rounded-full'} bg-accent/20 blur-2xl mix-blend-screen`}
            style={{ 
              width: p.size, 
              height: p.size, 
              top: -p.size/2, 
              left: -p.size/2,
              boxShadow: `0 0 40px var(--accent)`
            }}
          />
        ))}
      </AnimatePresence>

      {ThemeCursorContent}

      {/* Precision Secondary Dot (The "Soul") */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-secondary rounded-full z-20"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isPointer ? 1.5 : 1, opacity: isPointer ? 1 : 0.8 }}
      />
    </div>
  );
}
