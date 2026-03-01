import { cn } from '../lib/utils';

interface GlowingButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    className?: string;
    onClick?: () => void;
}

const GlowingButton = ({ children, primary = true, className, onClick }: GlowingButtonProps) => (
    <button
        onClick={onClick}
        className={cn(
            "relative group overflow-hidden rounded-full font-mono font-medium tracking-wide transition-all duration-300",
            primary
                ? "bg-white text-void hover:bg-zinc-200 px-8 py-4 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                : "bg-surface-200 text-white border border-white/10 hover:border-white/30 px-8 py-4",
            className
        )}
    >
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
        {primary && (
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-multiply"></div>
        )}
    </button>
);

export default GlowingButton;
