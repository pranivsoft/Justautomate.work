import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle2, Clock, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const FadeIn = ({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className="font-semibold text-lg text-zinc-200 group-hover:text-white transition-colors pr-4">{question}</span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/30 transition-colors">
                    <ChevronDown className={`text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="pb-6 text-zinc-400 font-light leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

const faqs = [
    { q: "What happens in the free consultation?", a: "We sit down for 30 minutes to discuss your current workflows. You tell us what you spend too much time doing, and we tell you instantly if and how AI can automate it. You leave with a clear plan, whether you hire us or not." },
    { q: "Do I need to know anything about AI?", a: "Not at all. We are a no-code/low-code focused agency. You don't need to be technical. You just need to know your business; we handle the bots, APIs, and prompt engineering." },
    { q: "Which tools can you connect and automate?", a: "Almost anything with an API. We work extensively with Google Workspace, Microsoft 365, Slack, Notion, Airtable, HubSpot, Salesforce, specialized CRMs, and hundreds of other modern SaaS tools." },
    { q: "How long does it take to build a workflow?", a: "Most simple to medium complexity workflows can be designed, built, and tested within 1 to 2 weeks. Very complex multi-step agents may take longer, but we focus on quick wins first." },
    { q: "What if I'm not sure what to automate?", a: "That's exactly what the free consultation is for! Usually, we start by looking at whatever task you hate doing the most, or whatever manual data entry takes up your Mondays." },
    { q: "Is my data private and secure?", a: "Yes. We design workflows passing data directly between your own secure accounts via secure API keys. We rely on enterprise-grade platforms ensuring privacy and compliance." },
];

export default function Contact() {
    return (
        <div className="bg-void">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">Contact</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Let's talk<br /><span className="text-zinc-500">automation.</span></h1>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            Book your free consultation and get a simple, actionable plan in under 30 minutes.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Form */}
                        <FadeIn className="lg:col-span-3">
                            <div className="bg-surface-100 border border-white/10 rounded-3xl p-8 md:p-12">
                                <h2 className="text-2xl font-bold text-white mb-2">Book your free consultation</h2>
                                <p className="text-zinc-400 font-light mb-8">Fill out the form and we'll get back to you within 24 hours.</p>

                                <form className="space-y-5 font-mono" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Name</label>
                                            <input type="text" className="w-full bg-void border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors" placeholder="Jane Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                                            <input type="email" className="w-full bg-void border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors" placeholder="jane@company.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Role / Business Type</label>
                                        <input type="text" className="w-full bg-void border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors" placeholder="Founder, E-commerce" />
                                    </div>
                                    <div>
                                        <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">What do you spend too much time on?</label>
                                        <textarea rows={4} className="w-full bg-void border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-white/40 transition-colors resize-none" placeholder="Copy-pasting leads from emails to my CRM, manually creating weekly reports..."></textarea>
                                    </div>
                                    <button className="w-full bg-white text-void hover:bg-zinc-200 font-bold py-4 rounded-xl transition-colors mt-2 text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </FadeIn>

                        {/* Contact Info */}
                        <FadeIn delay={0.1} className="lg:col-span-2 space-y-6">
                            <div className="bg-surface-100 border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-void border border-white/10 flex items-center justify-center shrink-0">
                                        <Clock size={18} className="text-neon-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Free 30-min consultation</h3>
                                        <p className="text-sm text-zinc-400 font-light">No obligation. No payment required. Just a clear plan for your workflow.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-100 border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-void border border-white/10 flex items-center justify-center shrink-0">
                                        <Mail size={18} className="text-zinc-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Email us</h3>
                                        <a href="mailto:hello@justautomate.work" className="text-sm text-zinc-400 hover:text-neon-cyan transition-colors">hello@justautomate.work</a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-surface-100 border border-white/10 rounded-2xl p-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-void border border-white/10 flex items-center justify-center shrink-0">
                                        <MapPin size={18} className="text-zinc-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Worldwide</h3>
                                        <p className="text-sm text-zinc-400 font-light">We work with clients globally. All consultations are remote.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-void border border-white/10 rounded-2xl p-8">
                                <h3 className="font-bold text-white mb-4">What to expect:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "30-minute video call",
                                        "Workflow analysis & audit",
                                        "Actionable automation plan",
                                        "No strings attached"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-light">
                                            <CheckCircle2 size={16} className="text-neon-cyan shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-surface-100/50 border-t border-white/5">
                <div className="max-w-3xl mx-auto px-6">
                    <FadeIn className="mb-12">
                        <h2 className="text-4xl font-bold tracking-tight">Frequently asked questions</h2>
                    </FadeIn>
                    <div className="border-t border-white/10">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
