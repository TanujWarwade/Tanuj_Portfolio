import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send, Loader2 } from 'lucide-react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMsg = message.trim();

    // Validations
    if (!cleanName || !cleanEmail || !cleanMsg) {
      setSuccess(false);
      setLogs(['Error: Payload constraints violated. Fields cannot be null.']);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setSuccess(false);
      setLogs(['Error: Invalid JSON datatype formatting on "sender_email".']);
      return;
    }

    // Trigger high-tech loading trace
    setLoading(true);
    setSuccess(null);
    setLogs([]);

    const traceSteps = [
      `Establishing socket tunnel to api.tanuj.dev... Done.`,
      `Encrypting headers & performing TLS v1.3 handshake... Done.`,
      `Routing payload: { sender_name: "${cleanName.substring(0, 10)}...", sender_email: "${cleanEmail}" }`,
      `Pushing schema block to MongoDB cluster node... Done.`,
      `Response Received: STATUS 201 CREATED.`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < traceSteps.length) {
        setLogs((prev) => [...prev, `[SYS-TRACE] ${traceSteps[currentStep]}`]);
        currentStep++;
      } else {
        clearInterval(interval);
        setLoading(false);
        setSuccess(true);
        setLogs((prev) => [
          ...prev,
          `SUCCESS: Message payload transmitted! Status Code: 201 Created. I will revert back shortly, ${cleanName}!`
        ]);
        // Reset fields
        setName('');
        setEmail('');
        setMessage('');
      }
    }, 600);
  };

  return (
    <section id="contact" className="reveal active px-5 py-24 max-w-[1200px] mx-auto text-left">
      <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
        Connect Engine
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
        Get In Touch
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 mt-12">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-text-secondary text-base leading-relaxed mb-4">
              I am always open to exploring full-stack engineering internships, research collaborations, or interesting AI startup experiments.
            </p>
            <p className="text-text-secondary text-base leading-relaxed mb-8">
              Reach out through the channels below, or fire an HTTP POST request using the console editor.
            </p>
          </div>

          <div className="space-y-6 mt-8">
            {/* Card: Email */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-cyan group-hover:bg-cyan/5 group-hover:border-cyan group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300">
                <Mail size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Direct Email</span>
                <a href="mailto:tanujwarwade17@gmail.com" className="text-base font-bold text-white group-hover:text-cyan transition-colors">
                  tanujwarwade17@gmail.com
                </a>
              </div>
            </div>

            {/* Card: Phone */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-cyan group-hover:bg-cyan/5 group-hover:border-cyan group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300">
                <PhoneCall size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Mobile Hotline</span>
                <a href="tel:+917770845056" className="text-base font-bold text-white group-hover:text-cyan transition-colors">
                  +91 7770845056
                </a>
              </div>
            </div>

            {/* Card: Address */}
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-cyan group-hover:bg-cyan/5 group-hover:border-cyan group-hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">Location Base</span>
                <span className="text-base font-bold text-white group-hover:text-cyan transition-colors">
                  Bhopal, Madhya Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Mock-API JSON POST Editor */}
        <div className="glass-card p-8 border-cyan/25 font-mono select-text">
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-white/5 select-none">
            <span className="bg-[#4ef0a3] text-neutral-950 px-2 py-0.5 rounded text-[10px] font-extrabold">POST</span>
            <span className="text-text-secondary text-xs">https://api.tanuj.dev/v1/contact</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-text-muted text-sm select-none">&#123;</div>
            
            <div className="pl-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-purple text-sm select-none">"sender_name"</span>:
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-grow bg-white/2 border border-white/5 hover:border-white/10 focus:border-cyan focus:bg-cyan/2 outline-none rounded-md px-3.5 py-2 font-sans text-sm text-white transition-colors caret-cyan"
                placeholder="Your Name"
                disabled={loading}
                required
              />
            </div>
            
            <div className="pl-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-purple text-sm select-none">"sender_email"</span>:
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-white/2 border border-white/5 hover:border-white/10 focus:border-cyan focus:bg-cyan/2 outline-none rounded-md px-3.5 py-2 font-sans text-sm text-white transition-colors caret-cyan"
                placeholder="you@example.com"
                disabled={loading}
                required
              />
            </div>

            <div className="pl-5 flex flex-col gap-1">
              <span className="text-purple text-sm select-none">"payload"</span>:
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-white/2 border border-white/5 hover:border-white/10 focus:border-cyan focus:bg-cyan/2 outline-none rounded-md px-3.5 py-2 font-sans text-sm text-white resize-none h-[110px] transition-colors caret-cyan"
                placeholder="Type your message payload..."
                disabled={loading}
                required
              />
            </div>

            <div className="text-text-muted text-sm select-none">&#125;</div>

            <button 
              type="submit" 
              className="w-full bg-cyan/5 border border-cyan/25 hover:bg-cyan hover:text-neutral-950 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] text-cyan font-bold py-3 px-5 rounded-md cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-300 select-none disabled:opacity-50 disabled:cursor-not-allowed mt-6"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" size={16} /> Executing POST Request...
                </>
              ) : (
                <>
                  <Send size={16} /> Execute Request
                </>
              )}
            </button>
          </form>

          {/* High-tech execution logs console */}
          {logs.length > 0 && (
            <div className={`mt-5 p-3 rounded-md text-xs font-semibold leading-relaxed border ${
              success === true 
                ? 'bg-[#4ef0a3]/10 text-[#4ef0a3] border-[#4ef0a3]/20' 
                : success === false 
                  ? 'bg-pink/10 text-pink border-pink/20' 
                  : 'bg-white/2 text-cyan border-cyan/15 animate-pulse'
            }`}>
              {logs.map((log, idx) => (
                <div key={idx} className="mb-1 last:mb-0 whitespace-pre-wrap">
                  {log}
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
