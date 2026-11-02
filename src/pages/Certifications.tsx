import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '../data/certifications';

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

export default function Certifications() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="text-terminal-green text-xs sm:text-sm">
        <span className="text-terminal-amber">$</span> cat ~/certifications/README.md
      </motion.div>

      <motion.div variants={item} className="text-terminal-cyan text-sm sm:text-base font-semibold">
        Certifications & Qualifications
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(50)}
      </motion.div>

      {certifications.map((cert, i) => (
        <motion.div
          key={i}
          variants={item}
          className="border border-terminal-border rounded-md p-3 sm:p-4 space-y-1 hover:border-terminal-amber/30 transition-colors"
        >
          <div className="flex items-start gap-2">
            <Award size={14} className="text-terminal-amber mt-0.5 shrink-0" />
            <div className="space-y-0.5 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-terminal-amber font-semibold text-xs sm:text-sm">
                  {cert.name}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terminal-muted hover:text-terminal-cyan transition-colors inline-flex items-center gap-1 text-[10px]"
                    tabIndex={-1}
                  >
                    <ExternalLink size={10} />
                    verify
                  </a>
                )}
              </div>
              <div className="text-terminal-text text-xs">
                {cert.issuer}
              </div>
              <div className="text-terminal-muted text-[10px]">
                Obtained: {cert.date}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className="text-terminal-muted text-xs pt-2">
        {certifications.length} certification(s) found.
      </motion.div>
    </motion.div>
  );
}
