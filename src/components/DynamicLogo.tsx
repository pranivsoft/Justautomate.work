import { motion } from 'framer-motion';

const DynamicLogo = () => (
    <svg width="28" height="28" viewBox="0 0 100 100" className="group-hover:animate-pulse">
        <motion.path
            d="M 30,50 C 30,20 70,20 70,50 C 70,80 30,80 30,50"
            fill="none"
            stroke="white"
            strokeWidth="4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <circle cx="30" cy="50" r="10" fill="white" className="group-hover:fill-neon-cyan transition-colors" />
        <circle cx="70" cy="50" r="10" fill="#0A0A0A" stroke="white" strokeWidth="4" />
    </svg>
);

export default DynamicLogo;
