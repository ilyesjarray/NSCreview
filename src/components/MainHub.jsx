import React from 'react';
import { motion } from 'framer-motion';

export default function MainHub({ appState, onSelect }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
    >
      <motion.div className="logo-container" style={{ margin: '3vh 0' }}>
        <img src="/assets/logo.png" alt="NS Logo" style={{ maxWidth: '200px' }} />
      </motion.div>

      <div className="auth-container">
        <motion.button 
          className="auth-btn"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect('neydra')}
          animate={{ opacity: appState === 'hub' || appState === 'neydra' ? 1 : 0.5 }}
        >
          <img src="/assets/authneydra.gif" alt="Auth Neydra" />
        </motion.button>

        <motion.button 
          className="auth-btn"
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect('sovereign')}
          animate={{ opacity: appState === 'hub' || appState === 'sovereign' ? 1 : 0.5 }}
        >
          <img src="/assets/authsover.gif" alt="Auth Sovereign" />
        </motion.button>
      </div>
    </motion.div>
  );
}
