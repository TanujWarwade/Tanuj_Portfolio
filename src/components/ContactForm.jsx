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
    <section id="contact" className="relative px-5 py-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1200px] mx-auto text-left relative z-10">
        
        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
          >
            Connect With Me
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
          >
            Let's Build Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="opacity-80 max-w-[640px] mx-auto mb-14 text-base leading-relaxed"
          >
            Always open to internships, research collaborations, or interesting AI startup experiments. Drop a message and I'll get back to you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Cards */}
          <div className="space-y-6">
            {contactCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <a 
                  href={card.link || '#'} 
                  className={`flex items-center gap-6 p-6 rounded-3xl border transition-colors duration-300 group hover:border-cyan/40 ${card.link ? 'cursor-pointer' : 'cursor-default'}`}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    borderColor: 'var(--border-color)',
                  }}
                  onClick={e => !card.link && e.preventDefault()}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-cyan/20 bg-cyan/5 text-cyan group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold text-text-muted uppercase tracking-wider mb-1">
                      {card.title}
                    </h4>
                    <p className="text-lg font-bold transition-colors group-hover:text-cyan" style={{ color: 'var(--text-primary)' }}>
                      {card.value}
                    </p>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Glass Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="panel-soft p-8 sm:p-10 rounded-3xl border relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 blur-3xl rounded-full" />
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    disabled={loading}
                    required
                    className="w-full bg-transparent border rounded-2xl px-5 py-4 outline-none transition-all duration-300 focus:border-cyan focus:shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  />
                </div>
                
                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Your Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    disabled={loading}
                    required
                    className="w-full bg-transparent border rounded-2xl px-5 py-4 outline-none transition-all duration-300 focus:border-cyan focus:shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                    style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={loading}
                  required
                  className="w-full bg-transparent border rounded-2xl px-5 py-4 outline-none transition-all duration-300 focus:border-cyan focus:shadow-[0_0_15px_rgba(0,242,254,0.15)] resize-none h-[150px]"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0,242,254,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-cyan text-slate-950 font-bold text-base py-4 rounded-2xl transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-[#4ef0a3]"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} /> Sending...
                    </motion.div>
                  ) : success ? (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <CheckCircle2 size={20} /> Message Sent!
                    </motion.div>
                  ) : (
                    <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Send Message <Send size={18} />
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
