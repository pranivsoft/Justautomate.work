import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GlowingButton from '../components/GlowingButton';

export default function NotFound() {
    return (
        <div className="bg-void min-h-[80vh] flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <div className="text-[10rem] font-bold text-white/5 leading-none select-none mb-[-2rem]">404</div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Route not found.</h1>
                <p className="text-xl text-zinc-400 font-light mb-12">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <GlowingButton>
                        Return to Base <ArrowRight size={18} />
                    </GlowingButton>
                </Link>
            </div>
        </div>
    );
}
