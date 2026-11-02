import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

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

export default function Projects() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="text-terminal-green text-xs sm:text-sm">
        <span className="text-terminal-amber">$</span> cat ~/projects/README.md
      </motion.div>

      <motion.div variants={item} className="text-terminal-cyan text-sm sm:text-base font-semibold">
        Projects
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(50)}
      </motion.div>

      {projects.map((project, i) => (
        <motion.div
          key={i}
          variants={item}
          className="border border-terminal-border rounded-md p-3 sm:p-4 space-y-2 hover:border-terminal-cyan/30 transition-colors"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-terminal-cyan font-semibold text-xs sm:text-sm">
              {project.name}
            </span>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-muted hover:text-terminal-cyan transition-colors inline-flex items-center gap-1 text-[10px]"
                tabIndex={-1}
              >
                <ExternalLink size={10} />
                github
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-terminal-muted hover:text-terminal-green transition-colors inline-flex items-center gap-1 text-[10px]"
                tabIndex={-1}
              >
                <ExternalLink size={10} />
                live
              </a>
            )}
          </div>

          <div className="text-terminal-text text-xs sm:text-sm pl-2">
            {project.description}
          </div>

          <div className="flex flex-wrap gap-2 pl-2">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded bg-terminal-cyan/10 text-terminal-cyan border border-terminal-cyan/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div variants={item} className="text-terminal-muted text-xs pt-2">
        {projects.length} project(s) found.
      </motion.div>
    </motion.div>
  );
}
