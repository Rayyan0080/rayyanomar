import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

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

export default function Experience() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="text-terminal-green text-xs sm:text-sm">
        <span className="text-terminal-amber">$</span> cat ~/experience/README.md
      </motion.div>

      <motion.div variants={item} className="text-terminal-cyan text-sm sm:text-base font-semibold">
        Professional Experience
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(50)}
      </motion.div>

      {experience.map((exp, i) => (
        <motion.div
          key={i}
          variants={item}
          className="border border-terminal-border rounded-md p-3 sm:p-4 space-y-2 hover:border-terminal-purple/30 transition-colors"
        >
          <div className="flex items-start gap-2">
            <Briefcase size={14} className="text-terminal-purple mt-0.5 shrink-0" />
            <div className="space-y-0.5">
              <div className="text-terminal-purple font-semibold text-xs sm:text-sm">
                {exp.position}
              </div>
              <div className="text-terminal-text text-xs">
                {exp.organization}
              </div>
              <div className="text-terminal-muted text-[10px]">
                {exp.startDate} — {exp.endDate}
              </div>
            </div>
          </div>

          <div className="pl-5 space-y-1">
            {exp.responsibilities.map((resp, j) => (
              <div key={j} className="text-terminal-text text-xs sm:text-sm flex gap-2">
                <span className="text-terminal-muted shrink-0">▸</span>
                <span>{resp}</span>
              </div>
            ))}
          </div>

          {exp.achievements && exp.achievements.length > 0 && (
            <div className="pl-5 space-y-1">
              <div className="text-terminal-amber text-[10px] font-semibold uppercase tracking-wider">
                Achievements
              </div>
              {exp.achievements.map((ach, j) => (
                <div key={j} className="text-terminal-green text-xs flex gap-2">
                  <span className="shrink-0">★</span>
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pl-5">
            {exp.skills.map(skill => (
              <span
                key={skill}
                className="text-[10px] px-2 py-0.5 rounded bg-terminal-purple/10 text-terminal-purple border border-terminal-purple/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className="text-terminal-muted text-xs pt-2">
        {experience.length} position(s) listed.
      </motion.div>
    </motion.div>
  );
}
