import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { cn } from '../lib/utils';
import DynamicLogo from './DynamicLogo';

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
];

export default function Layout() {
    const location = useLocation();

    return (
        <div className="bg-void text-zinc-50 font-sans selection:bg-white/20 min-h-screen flex flex-col">

            {/* Navigation */}
            <nav className="fixed top-0 inset-x-0 h-20 bg-void/70 backdrop-blur-2xl border-b border-white/5 z-50 supports-[backdrop-filter]:bg-void/50">
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 cursor-pointer group">
                        <DynamicLogo />
                        <span className="font-mono font-bold text-lg tracking-tight text-white mb-0.5">
                            justautomate<span className="text-zinc-500 font-light transition-colors group-hover:text-white">.work</span>
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={cn(
                                    "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300",
                                    location.pathname === link.path
                                        ? "text-white bg-white/10"
                                        : "text-zinc-500 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>


                    {/* Mobile Menu Button */}
                    <MobileMenu currentPath={location.pathname} />
                </div>
            </nav>

            {/* Page Content */}
            <main className="flex-1 pt-20">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-surface-100 pt-16 pb-8 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Footer Top */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <Link to="/" className="flex items-center gap-3 group mb-4">
                                <DynamicLogo />
                                <span className="font-mono font-bold text-lg tracking-tight text-white/50">justautomate</span>
                            </Link>
                            <p className="text-zinc-500 font-light text-sm leading-relaxed">
                                Turn your manual work into smart AI workflows.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Navigation</h4>
                            <ul className="space-y-2">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link to={link.path} className="text-sm text-zinc-500 hover:text-white transition-colors">{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Services</h4>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li>AI Workflow Design</li>
                                <li>Autonomous Agents</li>
                                <li>Continuous Optimization</li>
                                <li>Training & Docs</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">Contact</h4>
                            <ul className="space-y-2 text-sm text-zinc-500">
                                <li><a href="mailto:hello@justautomate.work" className="hover:text-white transition-colors">hello@justautomate.work</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs font-mono uppercase tracking-widest text-zinc-600">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse"></span>
                            SYSTEM.STATUS: OPERATIONAL
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// Simple mobile menu
function MobileMenu({ currentPath }: { currentPath: string }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {isOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    )}
                </svg>
            </button>

            {isOpen && (
                <div className="fixed inset-x-0 top-20 bg-void/95 backdrop-blur-2xl border-b border-white/5 p-6 z-40">
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "px-4 py-3 rounded-xl text-sm font-mono uppercase tracking-widest transition-all",
                                    currentPath === link.path
                                        ? "text-white bg-white/10"
                                        : "text-zinc-500 hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
}

// Need React for useState in MobileMenu
import React from 'react';
