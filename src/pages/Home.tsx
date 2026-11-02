import { useState } from 'react';
import { motion } from 'framer-motion';
import StartupSequence from '../components/StartupSequence';
import { profile } from '../data/profile';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -8 },
  show: { opacity: 1, x: 0 },
};

const sections = [
  { name: 'projects', desc: 'Software development projects' },
  { name: 'experience', desc: 'Professional experience' },
  { name: 'certifications', desc: 'Certifications & qualifications' },
  { name: 'interests', desc: 'Personal interests & hobbies' },
  { name: 'contact', desc: 'Contact information' },
];

export default function Home() {
  const [booted, setBooted] = useState(false);

  if (!booted) {
    return <StartupSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      {/* ASCII header */}
      <motion.div variants={item} className="text-terminal-cyan text-xs sm:text-sm">
        <pre className="leading-tight">
{`
 ____                                 ___                       
|  _ \\ __ _ _   _ _   _  __ _ _ __  / _ \\ _ __ ___   __ _ _ __ 
| |_) / _\` | | | | | | |/ _\` | '_ \\| | | | '_ \` _ \\ / _\` | '__|
|  _ < (_| | |_| | |_| | (_| | | | | |_| | | | | | | (_| | |   
|_| \\_\\__,_|\\__, |\\__, |\\__,_|_| |_|\\___/|_| |_| |_|\\__,_|_|   
            |___/ |___/                                         
`}
        </pre>
      </motion.div>

      {/* Divider */}
      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(60)}
      </motion.div>

      {/* Introduction */}
      <motion.div variants={item} className="space-y-1">
        <div className="text-terminal-green text-xs sm:text-sm">
          <span className="text-terminal-amber">$</span> cat about.txt
        </div>
        <div className="text-terminal-text text-xs sm:text-sm pl-2 space-y-1">
          <p className="text-terminal-cyan font-semibold">{profile.name} — {profile.title}</p>
          <p className="text-terminal-muted">{profile.summary}</p>
        </div>
      </motion.div>

      {/* Intro lines */}
      <motion.div variants={item} className="space-y-0.5 pl-2">
        {profile.intro.map((line, i) => (
          <div key={i} className="text-terminal-text text-xs sm:text-sm">
            {line || '\u00A0'}
          </div>
        ))}
      </motion.div>

      {/* Section listing */}
      <motion.div variants={item} className="space-y-1">
        <div className="text-terminal-green text-xs sm:text-sm">
          <span className="text-terminal-amber">$</span> ls
        </div>
        <div className="pl-2 space-y-0.5">
          {sections.map(s => (
            <div key={s.name} className="text-xs sm:text-sm flex gap-4">
              <span className="text-terminal-cyan w-36 shrink-0">{s.name}/</span>
              <span className="text-terminal-muted">{s.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hint */}
      <motion.div variants={item} className="text-terminal-muted text-xs pt-2">
        Type a command below or use keyboard shortcuts to navigate.
      </motion.div>
    </motion.div>
  );
}
