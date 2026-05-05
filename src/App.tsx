/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ThemeSwitcher from './components/ThemeSwitcher';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Menu = lazy(() => import('./pages/Menu'));
const Services = lazy(() => import('./pages/Services'));
const Experience = lazy(() => import('./pages/Experience'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0D0D0D] flex items-center justify-center z-[1000]">
      <div className="w-12 h-12 border-t-2 border-[#D4AF37] rounded-full animate-spin" />
    </div>
  );
}

import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-[#0D0D0D] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-[#0D0D0D]">
          <CustomCursor />
          <Navbar />
          <ThemeSwitcher />
          <WhatsAppButton />
          
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/services" element={<Services />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

          {/* Global Film Grain Effect */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[999]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
        </div>
      </Router>
    </ThemeProvider>
  );
}
