import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#D4AF37] text-sm tracking-[0.5em] mb-4">GET IN TOUCH</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">RESERVE A <span className="text-white/20">MEETING</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 tracking-tight uppercase text-[#D4AF37]">CONTACT INFORMATION</h3>
            <p className="text-white/40 text-lg leading-relaxed mb-12 font-light italic tracking-widest">
              Whether you're looking to build a high-performance web application or a premium digital brand environment, I am available for new opportunities.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.4em] text-white/40 uppercase mb-1 font-bold">direct line</span>
                  <p className="text-xl font-bold tracking-widest text-white group-hover:text-[#D4AF37] transition-colors uppercase">03294963776</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.4em] text-white/40 uppercase mb-1 font-bold">postal email</span>
                  <p className="text-xl font-bold tracking-widest text-white group-hover:text-[#D4AF37] transition-colors">imransabir2005@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-[#111] border border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] transition-all duration-300">
                  <MapPin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <span className="block text-[10px] tracking-[0.4em] text-white/40 uppercase mb-1 font-bold">current base</span>
                  <p className="text-xl font-bold tracking-widest text-white group-hover:text-[#D4AF37] transition-colors uppercase">Pakistan</p>
                </div>
              </div>
            </div>

              <div className="mt-20">
              <h4 className="text-xs tracking-[0.5em] text-accent uppercase font-bold mb-8">Social Connections</h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  whileHover={{ y: -5, borderColor: '#E4405F', color: '#E4405F' }}
                  href="https://www.instagram.com/cybernaticdream?igsh=aTE2ZWtsbDhsNmxx"
                  target="_blank"
                  className="text-white/40 flex items-center justify-center gap-3 uppercase text-[9px] tracking-[0.3em] font-bold border border-white/10 px-4 py-3"
                >
                  Instagram
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, borderColor: '#0A66C2', color: '#0A66C2' }}
                  href="https://www.linkedin.com/in/imran-sabir-developer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  className="text-white/40 flex items-center justify-center gap-3 uppercase text-[9px] tracking-[0.3em] font-bold border border-white/10 px-4 py-3"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, borderColor: '#000000', color: '#FFFFFF', backgroundColor: '#000000' }}
                  href="https://www.tiktok.com/@cybernetic_dream?_r=1&_t=ZS-95MHRW2EZy4"
                  target="_blank"
                  className="text-white/40 flex items-center justify-center gap-3 uppercase text-[9px] tracking-[0.3em] font-bold border border-white/10 px-4 py-3"
                >
                  TikTok
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, borderColor: '#25D366', color: '#25D366' }}
                  href="https://wa.me/923294963776"
                  target="_blank"
                  className="text-white/40 flex items-center justify-center gap-3 uppercase text-[9px] tracking-[0.3em] font-bold border border-white/10 px-4 py-3"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-10 bg-[#111] border border-white/5 relative"
          >
            <h3 className="text-xl font-bold mb-8 tracking-[0.2em] uppercase border-b border-white/10 pb-4">SEND AN INQUIRY</h3>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="block text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold mb-3 group-focus-within:text-[#D4AF37] transition-colors">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-white placeholder-white/5 font-light tracking-widest"
                  placeholder="EX. ALEXANDER ROSS"
                />
              </div>

              <div className="relative group">
                <label className="block text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold mb-3 group-focus-within:text-[#D4AF37] transition-colors">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-white placeholder-white/5 font-light tracking-widest"
                  placeholder="EX. CLIENT@VISTAMAIL.COM"
                />
              </div>

              <div className="relative group">
                <label className="block text-[10px] tracking-[0.5em] text-white/20 uppercase font-bold mb-3 group-focus-within:text-[#D4AF37] transition-colors">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#D4AF37] transition-all text-white placeholder-white/5 font-light tracking-widest resize-none"
                  placeholder="DESCRIBE YOUR VISION..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-[#D4AF37] text-[#0D0D0D] font-bold tracking-[0.5em] text-xs uppercase hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition-all flex items-center justify-center gap-4 group"
              >
                SUBMIT RESERVATION <Send className="w-4 h-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </motion.button>
            </form>
            
            <div className="absolute -top-4 right-8 px-4 py-1 bg-[#0D0D0D] border border-white/5 text-[9px] tracking-[0.4em] text-white/20 font-bold">
              FORM V.1.0
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
