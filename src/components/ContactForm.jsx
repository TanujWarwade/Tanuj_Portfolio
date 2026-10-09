import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setLoading(true);
    setSuccess(false);

    // Simulate network request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  const contactCards = [
    {
      icon: <Mail size={22} />,
      title: 'Email Address',
      value: 'tanujwarwade17@gmail.com',
      link: 'mailto:tanujwarwade17@gmail.com'
    },
    {
      icon: <PhoneCall size={22} />,
      title: 'Mobile Number',
      value: '+91 7770845056',
      link: 'tel:+917770845056'
    },
    {
      icon: <MapPin size={22} />,
      title: 'Location Base',
      value: 'Bhopal, Madhya Pradesh, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Background ambience orbs */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-16 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Unified Section Header */}
        <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-12 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-3"
          >
            <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Connect &amp; Inquiries
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.55 }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text-1 leading-tight tracking-tight"
          >
            Let's Build Together
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="opacity-75 max-w-[620px] mx-auto text-base leading-relaxed"
          >
            Always open to internships, research collaborations, or interesting AI startup experiments. Drop a message and I'll get back to you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Contact Cards */}
          <div className="space-y-5">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.12, ease: 'easeOut' }}
              >
                <a 
                  href={card.link || '#'} 
                  className={`flex items-center gap-5 p-6 rounded-3xl border transition-all duration-150 group ${card.link ? 'cursor-pointer hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(0,242,254,0.12)]' : 'cursor-default'}`}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                  }}
                  onClick={e => !card.link && e.preventDefault()}
                >
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 border border-cyan-500/25 bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform duration-100">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mb-1">
                      {card.title}
                    </h4>
                    <p className="text-base sm:text-lg font-extrabold transition-colors group-hover:text-cyan-400" style={{ color: 'var(--text-primary)' }}>
                      {card.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Glass Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="p-7 sm:p-9 rounded-3xl border relative overflow-hidden"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
            }}
          >
            {/* Subtle top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: 'linear-gradient(90deg, #00f2fe, #9d4edd)' }}
            />

            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-75 ml-1">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    disabled={loading}
                    required
                    className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-75 ml-1">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    disabled={loading}
                    required
                    className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] border"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-primary)'
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 text-left">
                <label className="text-xs font-bold uppercase tracking-wider opacity-75 ml-1">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project, opportunity, or feedback..."
                  disabled={loading}
                  required
                  className="w-full rounded-2xl px-5 py-3.5 text-sm outline-none transition-all duration-300 focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] border resize-none h-[140px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 font-bold text-sm py-4 rounded-2xl transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-white shadow-lg shadow-cyan-500/20"
                style={{
                  background: 'linear-gradient(135deg, #00f2fe, #9d4edd)'
                }}
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={18} /> Sending message...
                    </motion.div>
                  ) : success ? (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 size={18} /> Message Sent Successfully!
                    </motion.div>
                  ) : (
                    <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <span>Send Message</span>
                      <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
