import { motion } from 'framer-motion';
import { CheckCircle2, Users, Rocket, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowingButton from '../components/GlowingButton';
import DynamicLogo from '../components/DynamicLogo';

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

const values = [
    { title: "Implementation-focused", desc: "We don't just consult — we build, deploy, and maintain your automations end to end." },
    { title: "No-code friendly", desc: "You don't need to be technical. We handle all the bots, APIs, and prompt engineering." },
    { title: "Clear communication", desc: "Every workflow comes with documentation and training so your team stays in control." },
    { title: "Privacy-first", desc: "We build using enterprise-grade platforms with end-to-end encryption and secure API access." },
];

export default function About() {
    return (
        <div className="bg-void">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">About Us</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Making AI<br /><span className="text-zinc-500">actually useful.</span></h1>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            Our mission is making practical, implementation-focused AI accessible for everyday work — not just big tech.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Story */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <FadeIn>
                            <div className="bg-surface-100 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-void border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                        <DynamicLogo />
                                    </div>
                                    <div className="text-6xl font-bold text-white mb-4">justautomate</div>
                                    <div className="text-zinc-500 font-mono text-sm tracking-widest">.work</div>
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-300 font-light leading-relaxed">
                                    We believe that every business, regardless of size, deserves access to the same intelligent automation that powers the world's most efficient companies.
                                </p>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                    At justautomate.work, we bridge the gap between powerful AI technology and practical business operations. We don't build theoretical demos — we create real, working automations that save your team hours every single week.
                                </p>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                                    Whether you're a solo founder drowning in admin work or a growing team that needs to scale operations without scaling headcount, we design workflows that fit your real-world needs.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 bg-surface-100/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How we work</h2>
                    </FadeIn>
                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, i) => (
                            <FadeIn delay={i * 0.1} key={i}>
                                <div className="bg-void border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle2 size={22} className="text-neon-cyan shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                                            <p className="text-zinc-400 font-light leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Rocket, title: "Results-driven", desc: "Every workflow we build is measured by real ROI — time saved, errors reduced, and revenue unlocked." },
                            { icon: Users, title: "Friendly partner", desc: "We're not a buzzword-driven agency. We're a hands-on partner who speaks your language." },
                            { icon: Shield, title: "Enterprise security", desc: "Your data flows through secure, encrypted channels. We never store or access your data unnecessarily." },
                        ].map((item, i) => (
                            <FadeIn delay={i * 0.1} key={i}>
                                <div className="text-center px-4">
                                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-surface-100 border border-white/10 flex items-center justify-center text-zinc-400">
                                        <item.icon size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-surface-100/30 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Let's build together.</h2>
                        <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
                            Start with a free consultation. We'll map out exactly what can be automated in your workflow.
                        </p>
                        <Link to="/contact">
                            <GlowingButton className="text-lg py-5 px-10">
                                Get Free Consultation <ArrowRight size={20} />
                            </GlowingButton>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
}
