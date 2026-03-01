import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const blogPosts = [
    {
        slug: "5-workflows-every-founder-should-automate",
        title: "5 Workflows Every Founder Should Automate in 2026",
        excerpt: "Running a startup means wearing multiple hats. Here are five high-impact workflows that AI can handle while you focus on strategy and growth.",
        date: "Mar 1, 2026",
        readTime: "5 min read",
        tag: "Automation"
    },
    {
        slug: "ai-agents-vs-traditional-automation",
        title: "AI Agents vs Traditional Automation: What's the Real Difference?",
        excerpt: "Zapier-style automation and AI agents serve different purposes. Learn when to use which — and how to combine them for maximum impact.",
        date: "Feb 23, 2026",
        readTime: "7 min read",
        tag: "AI Strategy"
    },
    {
        slug: "how-we-saved-a-team-20-hours-per-week",
        title: "Case Study: How We Saved a 5-Person Agency 20 Hours Per Week",
        excerpt: "A deep dive into the exact automations we built for a digital marketing agency, including meeting summarization, report generation, and client onboarding.",
        date: "Feb 15, 2026",
        readTime: "8 min read",
        tag: "Case Study"
    },
    {
        slug: "no-code-ai-tools-2026",
        title: "The Best No-Code AI Tools for Small Businesses in 2026",
        excerpt: "A curated list of the most practical AI tools that don't require a single line of code. From content drafting to invoice processing.",
        date: "Feb 8, 2026",
        readTime: "6 min read",
        tag: "Tools"
    },
    {
        slug: "building-ai-workflows-with-privacy",
        title: "Building AI Workflows Without Compromising Data Privacy",
        excerpt: "Privacy-first automation is not just possible — it's the standard. Here's how we architect secure workflows that keep your data under your control.",
        date: "Jan 30, 2026",
        readTime: "5 min read",
        tag: "Security"
    },
    {
        slug: "future-of-work-autonomous-operations",
        title: "The Future of Work: Autonomous Operations for SMBs",
        excerpt: "Autonomous operations aren't just for Fortune 500s anymore. We explore how small and medium businesses are quietly building the future of work.",
        date: "Jan 22, 2026",
        readTime: "6 min read",
        tag: "Trends"
    },
];

export default function Blog() {
    return (
        <div className="bg-void">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-4">Blog</div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Insights &<br /><span className="text-zinc-500">intelligence.</span></h1>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                            Practical guides, case studies, and thought pieces on AI automation, workflows, and the future of work.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Featured Post */}
            <section className="pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <FadeIn>
                        <div className="bg-surface-100 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-colors group relative overflow-hidden cursor-pointer">
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-neon-cyan/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-neon-cyan text-xs font-mono uppercase tracking-wider">Featured</span>
                                    <span className="text-zinc-500 text-sm font-mono">{blogPosts[0].date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300 max-w-3xl">
                                    {blogPosts[0].title}
                                </h2>
                                <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-2xl mb-8">
                                    {blogPosts[0].excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm">
                                    <span className="flex items-center gap-2 text-zinc-500"><Clock size={14} /> {blogPosts[0].readTime}</span>
                                    <span className="text-neon-cyan font-mono flex items-center gap-2">Read Article <ArrowRight size={14} /></span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Post Grid */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.slice(1).map((post, i) => (
                            <FadeIn delay={i * 0.08} key={i}>
                                <article className="bg-surface-100 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all group cursor-pointer h-full flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-zinc-400 uppercase tracking-wider">{post.tag}</span>
                                        <span className="text-zinc-600 text-xs font-mono">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-300 transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-zinc-400 font-light leading-relaxed text-sm flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                                        <span className="flex items-center gap-2 text-zinc-600 text-xs"><Clock size={12} /> {post.readTime}</span>
                                        <span className="text-zinc-500 group-hover:text-neon-cyan transition-colors text-xs font-mono flex items-center gap-1">Read <ArrowRight size={12} /></span>
                                    </div>
                                </article>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
