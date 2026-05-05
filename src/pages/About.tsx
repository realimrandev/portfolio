import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Clock, Target } from 'lucide-react';

const stats = [
  { icon: Clock, label: 'Experience', value: '6 Months intensive' },
  { icon: Award, label: 'Certification', value: 'Corvit Web Development' },
  { icon: BookOpen, label: 'Projects', value: '4+ Major Apps' },
  { icon: Target, label: 'Focus', value: 'Full Stack Development' },
];

const skills = [
  { name: 'React / Next.js', level: 90 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Three.js / 3D Web', level: 75 },
  { name: 'Tailwind CSS / UI Design', level: 95 },
  { name: 'MongoDB / PostgreSQL', level: 80 },
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] mb-4">THE STORY</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">ABOUT <span className="text-white/20">ME</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* 3D Profile Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative w-full max-w-lg mx-auto lg:max-w-md xl:max-w-lg"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-accent/20 bg-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/profile.jpg" 
                alt="Imran Sabir" 
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
            </div>
            
            {/* Decorative Corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-accent transition-all duration-500 group-hover:scale-110" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-accent transition-all duration-500 group-hover:scale-110" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-black mb-6 text-accent tracking-widest uppercase">Mastering The Craft</h3>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-8 font-light tracking-wide lg:max-w-xl">
              I am Imran Sabir, a passionate Full Stack Developer with a vision to blend high-end aesthetics with powerful technological backends. My journey began with an intensive 6-month specialized web development course at <span className="text-white font-bold underline decoration-accent/30 selection:bg-accent/40">Corvit</span>, where I mastered the foundations of modern web engineering.
            </p>
            
            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-12 font-light tracking-wide lg:max-w-xl">
              I curate digital environments that feel as premium and exclusive as a fine dining experience. Every line of code I write is a conscious decision towards performance, scalability, and visual perfection.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center lg:items-start gap-4 p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                  <div className="p-3 bg-accent/10 rounded-none border border-accent/20">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-1 font-bold">{stat.label}</h4>
                    <p className="text-xs font-black text-white tracking-widest uppercase">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Skill Bars */}
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold mb-8">CUISINE SPECIALTIES (SKILLS)</h4>
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-xs tracking-widest text-white/60 mb-2 uppercase">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.6 + i * 0.1 }}
                      className="absolute top-0 left-0 h-[1px] bg-[#D4AF37]"
                    />
                    <motion.div
                      initial={{ left: 0 }}
                      animate={{ left: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: 0.6 + i * 0.1 }}
                      className="absolute top-[-2px] w-1 h-1 bg-[#00FFAA] rounded-full shadow-[0_0_5px_#00FFAA]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
