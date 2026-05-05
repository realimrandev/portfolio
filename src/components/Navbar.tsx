import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'MENU', path: '/menu' },
  { name: 'SERVICES', path: '/services' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'GALLERY', path: '/gallery' },
  { name: 'CONTACT', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
      <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold tracking-widest text-accent hover:opacity-80 transition-opacity relative z-[110]">
        IS
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative text-[10px] tracking-[0.3em] font-black transition-colors hover:text-accent font-display",
                isActive ? "text-accent" : "text-white/60"
              )}
            >
              {item.name}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-accent shadow-[0_0_10px_var(--accent)]"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden relative z-[110] p-2 text-white/60 hover:text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-primary z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-4xl font-black tracking-tighter uppercase font-display",
                      isActive ? "text-accent" : "text-white/40"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
            
            <div className="absolute bottom-12 text-accent text-[8px] tracking-[1em] font-black uppercase">
              Imran Sabir Portfolio
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
