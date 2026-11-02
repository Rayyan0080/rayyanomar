import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { contact } from '../data/contact';

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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="text-terminal-muted hover:text-terminal-cyan transition-colors p-1 rounded"
      title="Copy to clipboard"
      tabIndex={-1}
    >
      {copied ? <Check size={12} className="text-terminal-green" /> : <Copy size={12} />}
    </button>
  );
}

export default function Contact() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-4"
    >
      <motion.div variants={item} className="text-terminal-green text-xs sm:text-sm">
        <span className="text-terminal-amber">$</span> cat ~/contact/README.md
      </motion.div>

      <motion.div variants={item} className="text-terminal-cyan text-sm sm:text-base font-semibold">
        Contact Information
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs">
        {'─'.repeat(50)}
      </motion.div>

      {/* Email */}
      <motion.div variants={item} className="flex items-center gap-3 pl-2">
        <Mail size={14} className="text-terminal-cyan shrink-0" />
        <span className="text-terminal-text text-xs sm:text-sm flex-1">{contact.email}</span>
        <CopyButton text={contact.email} />
      </motion.div>

      {/* Phone */}
      <motion.div variants={item} className="flex items-center gap-3 pl-2">
        <Phone size={14} className="text-terminal-green shrink-0" />
        <span className="text-terminal-text text-xs sm:text-sm flex-1">{contact.phone}</span>
        <CopyButton text={contact.phone} />
      </motion.div>

      {/* LinkedIn */}
      <motion.div variants={item} className="flex items-center gap-3 pl-2">
        <Linkedin size={14} className="text-terminal-blue shrink-0" />
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-text hover:text-terminal-blue transition-colors text-xs sm:text-sm flex-1"
          tabIndex={-1}
        >
          {contact.linkedin}
        </a>
      </motion.div>

      {/* GitHub */}
      <motion.div variants={item} className="flex items-center gap-3 pl-2">
        <Github size={14} className="text-terminal-purple shrink-0" />
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-terminal-text hover:text-terminal-purple transition-colors text-xs sm:text-sm flex-1"
          tabIndex={-1}
        >
          {contact.github}
        </a>
      </motion.div>

      <motion.div variants={item} className="text-terminal-border text-xs pt-2">
        {'─'.repeat(50)}
      </motion.div>

      <motion.div variants={item} className="text-terminal-muted text-xs space-y-0.5 pl-2">
        <div>Click the copy icon or use the terminal:</div>
        <div className="text-terminal-text">
          Links open in a new tab. Use <span className="text-terminal-amber">[ESC]</span> to go back.
        </div>
      </motion.div>
    </motion.div>
  );
}
