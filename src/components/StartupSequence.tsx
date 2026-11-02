import { motion } from 'framer-motion';
import { useState } from 'react';

interface StartupSequenceProps {
  onComplete: () => void;
}

const bootLines = [
  { text: '[OK] Loading modules...', delay: 0 },
  { text: '[OK] Initializing terminal...', delay: 0.4 },
  { text: '[OK] Loading portfolio data...', delay: 0.8 },
  { text: '[OK] Configuring display...', delay: 1.2 },
  { text: '[OK] System ready.', delay: 1.6 },
];

export default function StartupSequence({ onComplete }: StartupSequenceProps) {
  const [phase, setPhase] = useState<'exe' | 'boot' | 'done'>('exe');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {phase === 'exe' && (
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onAnimationComplete={() => {
            setTimeout(() => setPhase('boot'), 1200);
          }}
        >
          <motion.div
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-terminal-cyan tracking-wider"
            animate={{
              textShadow: [
                '0 0 10px rgba(34,211,238,0.5)',
                '0 0 20px rgba(34,211,238,0.8)',
                '0 0 10px rgba(34,211,238,0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            RayyanOmar.exe
          </motion.div>
          <motion.div
            className="text-terminal-muted text-xs sm:text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Initializing...
          </motion.div>
        </motion.div>
      )}

      {phase === 'boot' && (
        <motion.div
          className="w-full max-w-md space-y-2 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {bootLines.map((line, i) => (
            <motion.div
              key={i}
              className="text-xs sm:text-sm text-terminal-green"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.3 }}
              onAnimationComplete={() => {
                if (i === bootLines.length - 1) {
                  setTimeout(() => {
                    setPhase('done');
                    onComplete();
                  }, 600);
                }
              }}
            >
              {line.text}
            </motion.div>
          ))}

          {/* Progress bar */}
          <motion.div className="mt-4 h-1 bg-terminal-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-terminal-cyan rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
