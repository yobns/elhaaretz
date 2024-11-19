// src/components/Animation.jsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp } from '@/lib/animations';

export default function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={fadeInUp.initial}
      animate={isInView ? fadeInUp.animate : {}}
      transition={{ ...fadeInUp.transition, delay }}
    >
      {children}
    </motion.div>
  );
}