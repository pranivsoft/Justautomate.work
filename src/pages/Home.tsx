import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Zap,
    ArrowRight,
    CheckCircle2,
    Workflow,
    RefreshCw,
    Cpu,
} from 'lucide-react';
import { useRef } from 'react';
import GlowingButton from '../components/GlowingButton';
import DynamicLogo from '../components/DynamicLogo';

// --- Home Page Sections (preserved exactly from original) ---

function ScrollHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const scale = useTransform(smoothProgress, [0, 0.8], [1, 10]);
    const opacity = useTransform(smoothProgress, [0, 0.5, 0.8], [1, 1, 0]);
    const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="h-[200vh] relative">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center perspective-[1000px]">
                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0, 0.8], [0.5, 0]) }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-neon-cyan/20 via-transparent to-neon-purple/20 rounded-full blur-[100px] animate-[spin_20s_linear_infinite] pointer-events-none"
                />
                <motion.div
                    style={{ scale, opacity, y }}
                    className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center w-full z-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-200/50 border border-white/10 backdrop-blur-md mb-10">
                        <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.8)] animate-pulse"></div>
                        <span className="text-sm font-mono tracking-widest text-zinc-300 uppercase">System Active</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter mb-8 leading-[1]" style={{ transformStyle: 'preserve-3d' }}>
                        Stop doing<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 inline-block drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">busywork.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed font-sans delay-100">
                        Let AI run your workflows.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

function HardwareRevealServices() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const p1 = useTransform(smoothProgress, [0, 0.2, 0.33, 0.4], [0, 1, 1, 0]);
    const p2 = useTransform(smoothProgress, [0.33, 0.5, 0.66, 0.75], [0, 1, 1, 0]);
    const p3 = useTransform(smoothProgress, [0.66, 0.85, 1, 1], [0, 1, 1, 1]);

    const coreRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
    const coreColor = useTransform(smoothProgress, [0, 0.5, 1], ["rgba(255,255,255,0.1)", "rgba(0,240,255,0.3)", "rgba(123,97,255,0.4)"]);
    const coreScale = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [1, 1.2, 1.5, 1]);

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-void">
            <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="w-full md:w-1/2 relative h-[40vh] md:h-full flex items-center mt-20 md:mt-0 z-20">
                    <motion.div style={{ opacity: p1 }} className="absolute inset-y-0 left-0 flex flex-col justify-center pointer-events-none">
                        <div className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">Phase 01</div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">Workflow<br />Architecture.</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                            We dive deep into your operations. We map every manual task, API endpoint, and data silo to design a flawless automated architecture.
                        </p>
                    </motion.div>
                    <motion.div style={{ opacity: p2 }} className="absolute inset-y-0 left-0 flex flex-col justify-center pointer-events-none">
                        <div className="text-neon-purple font-mono text-sm tracking-widest uppercase mb-4">Phase 02</div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">Autonomous<br />Agents.</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                            Done-for-you bot deployment. We connect the custom AI agents directly into your Google Workspace, Slack, and internal CRMs.
                        </p>
                    </motion.div>
                    <motion.div style={{ opacity: p3 }} className="absolute inset-y-0 left-0 flex flex-col justify-center pointer-events-none">
                        <div className="text-white font-mono text-sm tracking-widest uppercase mb-4">Phase 03</div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">Continuous<br />Optimization.</h2>
                        <p className="text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                            As your business scales, your automations adapt. We provide monthly syncing, prompt adjustments, and new tool integrations.
                        </p>
                    </motion.div>
                </div>
                <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col items-center justify-center relative">
                    <motion.div
                        style={{
                            rotate: coreRotate,
                            backgroundColor: coreColor,
                            scale: coreScale,
                            boxShadow: useTransform(smoothProgress, [0, 0.5, 1], [
                                "0 0 40px rgba(255,255,255,0.05)",
                                "0 0 80px rgba(0,240,255,0.2)",
                                "0 0 100px rgba(123,97,255,0.3)"
                            ])
                        }}
                        className="w-48 h-48 md:w-80 md:h-80 border-2 border-white/20 rounded-full flex items-center justify-center relative z-10 backdrop-blur-sm"
                    >
                        <motion.div
                            style={{ rotate: useTransform(smoothProgress, [0, 1], [0, -720]) }}
                            className="w-[80%] h-[80%] border border-dashed border-white/30 rounded-full flex items-center justify-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,1)] flex items-center justify-center text-void font-bold">
                                AI
                            </div>
                        </motion.div>
                        <div className="absolute -top-4 w-8 h-8 bg-surface-200 border border-white/20 rounded-full flex items-center justify-center text-xs"><Workflow size={14} /></div>
                        <div className="absolute -bottom-4 w-8 h-8 bg-surface-200 border border-white/20 rounded-full flex items-center justify-center text-xs"><Cpu size={14} /></div>
                        <div className="absolute -left-4 w-8 h-8 bg-surface-200 border border-white/20 rounded-full flex items-center justify-center text-xs"><Zap size={14} /></div>
                    </motion.div>
                    <motion.div
                        style={{ opacity: useTransform(smoothProgress, [0, 0.4], [0, 1]) }}
                        className="absolute top-1/2 right-[50%] md:right-0 w-[50vw] h-[2px] bg-gradient-to-r from-neon-cyan/50 to-transparent -translate-y-1/2 -z-10 blur-sm"
                    />
                </div>
            </div>
        </section>
    );
}

function HorizontalScrollUseCases() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-66.66%"]);

    const cases = [
        { role: "Founders & Execs", metric: "15h/wk saved", details: "Automate lead capture, generate custom proposals instantly via LLMs, trigger follow-ups, and auto-populate growth reporting daily.", num: "01" },
        { role: "Small Teams", metric: "20h/wk saved", details: "Auto-generate client reports, intelligently route incoming tasks to the best assignee, summarize meetings, and triage tier-1 support.", num: "02" },
        { role: "Operations Admin", metric: "18h/wk saved", details: "Automate tedious data entry between platforms (CRM to Sheets), trigger complex status updates, manage multi-step approvals automatically.", num: "03" }
    ];

    return (
        <section ref={targetRef} className="h-[300vh] relative bg-surface-100">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-24 left-6 md:left-24 z-20 mix-blend-difference">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Who runs on<br />justautomate</h2>
                </div>
                <motion.div style={{ x }} className="flex pl-6 md:pl-24 gap-8 md:gap-24 w-[300vw] items-center pt-20">
                    {cases.map((c, i) => (
                        <div key={i} className="w-[85vw] md:w-[60vw] h-[50vh] md:h-[60vh] shrink-0 bg-void border border-white/10 rounded-3xl p-8 md:p-16 flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-9xl font-mono font-bold text-white/5 select-none transition-colors group-hover:text-neon-cyan/5">{c.num}</div>
                            <div className="relative z-10">
                                <div className="inline-block px-4 py-2 border border-white/10 rounded-full font-mono text-sm text-zinc-400 mb-8 bg-surface-100/50 backdrop-blur">
                                    TIME SAVED: <span className="text-white font-bold">{c.metric}</span>
                                </div>
                                <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-500 transition-all duration-500">{c.role}</h3>
                            </div>
                            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl relative z-10">
                                {c.details}
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-32 relative z-10 bg-void overflow-hidden border-t border-white/10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.05),transparent_70%)] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface-100 border border-white/10 mb-10 shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                    <DynamicLogo />
                </div>
                <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight tracking-tighter">
                    Ready to initialize?
                </h2>
                <p className="text-xl text-zinc-400 font-light mb-12 max-w-2xl mx-auto">
                    Book your free AI consultation. Get a clear architectural plan in 30 minutes. Let's fix your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <GlowingButton className="w-full sm:w-auto text-lg py-5 px-10">
                        Book Free Consultation <ArrowRight size={20} />
                    </GlowingButton>
                </div>
                <div className="mt-16 flex justify-center gap-8 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-neon-cyan" /> No Obligation</span>
                    <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-neon-cyan" /> Full Architecture</span>
                </div>
            </div>
        </section>
    );
}

// --- Home Page ---
export default function Home() {
    return (
        <>
            <ScrollHero />
            <HardwareRevealServices />
            <HorizontalScrollUseCases />
            <CTASection />
        </>
    );
}
