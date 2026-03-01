import { motion } from 'framer-motion';
import { CheckCircle2, Workflow, Bot, RefreshCw, Layers, Settings, Cpu, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlowingButton from '../components/GlowingButton';

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

const services = [
    {
        icon: Workflow,
        title: "AI Workflow Design & Consulting",
        desc: "We dive deep into your operations to map out what's possible. We audit your processes, identify automation opportunities, and design end-to-end AI-powered workflows tailored to your business.",
        bullets: ["Full process audit & mapping", "Automation opportunity identification", "End-to-end workflow architecture", "Tool compatibility analysis"],
        phase: "01",
        color: "neon-cyan"
    },
    {
        icon: Bot,
        title: "Done-For-You AI Automation",
        desc: "We build, connect, and deploy autonomous AI agents directly into your existing stack. From email triage to CRM updates to content generation — everything runs on autopilot.",
        bullets: ["Cross-tool integration (CRM, Sheets, Slack, etc.)", "Custom AI assistants for specific roles", "Automated reporting & data pipelines", "End-to-end testing & monitoring"],
        phase: "02",
        color: "neon-purple"
    },
    {
        icon: RefreshCw,
        title: "Workflow Optimization & Support",
        desc: "Your business changes, and your automations should adapt with it. We provide ongoing monthly optimization, new integrations, and clear documentation for your team.",
        bullets: ["Monthly check-ins & improvements", "New automation rollouts as needs evolve", "Team training & documentation", "Performance tracking & ROI reporting"],
        phase: "03",
        color: "white"
    }
];

const process = [
    { icon: Layers, title: "Discovery", desc: "We analyze your current workflows, tools, and pain points in a free 30-minute consultation." },
    { icon: Settings, title: "Design", desc: "We architect custom AI workflows mapped to your specific business logic and tool stack." },
    { icon: Cpu, title: "Build & Deploy", desc: "We build, test, and deploy your automations. You approve everything before it goes live." },
    { icon: RefreshCw, title: "Optimize", desc: "Ongoing refinement ensures your automations keep improving as your business scales." },
];

export default function Services() {
    return (
        <div className="bg-void">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">Services</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">What we build<br /><span className="text-zinc-500">for you.</span></h1>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            From initial audit to full deployment — we handle the entire AI automation lifecycle so you can focus on growing your business.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Service Cards */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6 space-y-8">
                    {services.map((service, i) => (
                        <FadeIn delay={i * 0.1} key={i}>
                            <div className="bg-surface-100 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-colors group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-[8rem] font-mono font-bold text-white/[0.02] select-none">{service.phase}</div>
                                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-void border border-white/10 flex items-center justify-center mb-8 text-zinc-300 group-hover:text-neon-cyan transition-colors">
                                            <service.icon size={26} />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                                        <p className="text-zinc-400 font-light leading-relaxed text-lg">{service.desc}</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <ul className="space-y-4">
                                            {service.bullets.map((bullet, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <CheckCircle2 size={18} className="text-neon-cyan shrink-0 mt-0.5" />
                                                    <span className="text-zinc-300 font-light">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="py-32 bg-surface-100/50 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our process</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl">A simple, proven framework from discovery to deployment.</p>
                    </FadeIn>
                    <div className="grid md:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <FadeIn delay={i * 0.1} key={i}>
                                <div className="bg-void border border-white/10 rounded-2xl p-8 hover:bg-surface-100 transition-colors h-full flex flex-col group">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-3 bg-surface-100 rounded-xl border border-white/5 text-zinc-400 group-hover:text-neon-cyan transition-colors">
                                            <step.icon size={22} />
                                        </div>
                                        <span className="font-mono text-xs text-zinc-700">0{i + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-zinc-400 font-light leading-relaxed mt-auto">{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to automate?</h2>
                        <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
                            Your first consultation is 100% free. Let's map out which tasks can run on autopilot.
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
