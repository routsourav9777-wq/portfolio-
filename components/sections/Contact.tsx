'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setStatus('sending');

  await emailjs.send(
  'service_ad3nwwt',
  'template_dokgctj',
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  'DRA4PPhP_jgoYLYNt'
);

    setStatus('sent');

    setForm({
      name: '',
      email: '',
      message: '',
    });

    setTimeout(() => {
      setStatus('idle');
    }, 3000);

  } catch (error: any) {
  console.log("STATUS:", error?.status);
  console.log("TEXT:", error?.text);
  alert(`Status: ${error?.status}\nText: ${error?.text}`);
  setStatus('idle');
}
};

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-neon-cyan text-sm tracking-widest">07</span>
          <div className="h-px flex-1 max-w-12 bg-neon-cyan/40" />
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            GET IN <span className="gradient-text">TOUCH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-slate-400 leading-relaxed mb-8">
              Whether you have a project in mind, want to collaborate, or just want to say hello —
              my inbox is always open. I typically respond within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, label: 'routsourav9777@gmail.com', color: '#00ff41' },
                { icon: MapPin, label: 'Bhubaneswar, India', color: '#00d4ff' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <span className="font-mono text-sm text-slate-300">{label}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/routsourav9777-wq', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/souravr', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center text-slate-500 hover:text-neon-green transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="font-mono text-xs text-slate-500 mb-2 block tracking-wider">
                    {field.label.toUpperCase()}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    value={form[field.name as 'name' | 'email']}
                    onChange={e => setForm(f => ({ ...f, [field.name]: e.target.value }))}
                    className="w-full glass-panel rounded-lg px-4 py-3 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-neon-green/50 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-xs text-slate-500 mb-2 block tracking-wider">MESSAGE</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full glass-panel rounded-lg px-4 py-3 font-mono text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-neon-green/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full flex items-center justify-center gap-3 font-mono text-sm py-3 rounded-lg transition-all duration-300 disabled:opacity-60"
                style={{
                  background: status === 'sent' ? '#00ff41' : 'linear-gradient(135deg, #00ff41, #00d4ff)',
                  color: '#020408',
                  fontWeight: 700,
                }}
              >
                {status === 'idle' && <><Send size={16} /> Send Message</>}
                {status === 'sending' && <>Sending...</>}
                {status === 'sent' && <>✓ Message Sent!</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
