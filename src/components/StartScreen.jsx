import React from 'react';
import { motion } from 'framer-motion';

export default function StartScreen({ onStart }) {
  return (
    <motion.div 
      className="start-screen"
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
        backgroundColor: '#000'
      }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <motion.button 
        onClick={onStart}
        className="start-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/assets/start.gif" alt="Start" style={{ maxWidth: '600px', width: '100%' }} />
      </motion.button>
    </motion.div>
  );
}
