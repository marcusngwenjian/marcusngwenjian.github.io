'use client';

import type { ReactNode } from 'react';
import { motion } from 'motion/react';

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.4 }}
    >
      {children}
    </motion.div>
    // <>{children}</>
  );
}
