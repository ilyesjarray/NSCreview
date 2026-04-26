import React from 'react';
import { motion } from 'framer-motion';

export default function ExploreMore({ themeClass }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      style={{ display: 'flex', justifyContent: 'center', margin: '4rem 0' }}
    >
      <motion.a 
        href="https://n-s-c.vercel.app/Welcome" 
        target="_blank" 
        rel="noopener noreferrer"
        className={`explore-more-btn ${themeClass}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.a>
    </motion.div>
  );
}
