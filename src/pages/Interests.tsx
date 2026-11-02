import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { interests } from '../data/interests';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export default function Interests() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="text-terminal-green text-xs sm:text-sm">
        <span className="text-terminal-amber">$</span> cat ~/interests/README.md
      </motion.div>

      <motion.div variants={item} className="text-terminal-cyan text-sm sm:text-base font-semibold">
        Personal Interests
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(50)}
      </motion.div>

      {interests.map((group, i) => (
        <motion.div
          key={i}
          variants={item}
          className="space-y-1"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={12} className="text-terminal-green" />
            <span className="text-terminal-green font-semibold text-xs sm:text-sm">
              {group.category}
            </span>
          </div>
          <div className="pl-5 space-y-0.5">
            {group.items.map((it, j) => (
              <div key={j} className="text-terminal-text text-xs sm:text-sm flex gap-2">
                <span className="text-terminal-muted shrink-0">▸</span>
                <span>{it}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className="text-terminal-muted text-xs pt-2">
        {interests.length} category(ies) listed.
      </motion.div>
    </motion.div>
  );
}
