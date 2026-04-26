import React from 'react';
import { motion } from 'framer-motion';
import ExploreMore from './ExploreMore';

const DataBlock = ({ title, text, imgSrc, onImageClick }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="info-block"
  >
    <div className="info-content">
      <h2 className="info-title">{title}</h2>
      <p className="info-text">{text}</p>
    </div>
    <div className="info-image">
      <img src={imgSrc} alt={title} onClick={() => onImageClick(imgSrc)} />
    </div>
  </motion.div>
);

export default function SovereignSection({ onImageClick }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="data-section theme-sover sover"
    >
      <DataBlock 
        title="The Sovereign Terminal" 
        text="An elite, high-performance financial intelligence operating system designed for institutional-grade market tracking and autonomous economic arbitration."
        imgSrc="/assets/soverlogo.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="The Oracle" 
        text="A sophisticated intelligence dashboard that maps complex data nodes and predictive models. Utilizing vivid cyan elements to visualize market trends before they happen."
        imgSrc="/assets/oracle.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Wealth Forge" 
        text="The command center for cryptocurrency markets. Tracks live metrics for BTC, ETH, SOL, providing dominance bars, efficiency metrics, and algorithmic trading signals."
        imgSrc="/assets/wealthforge.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="TND To Crypto Engine" 
        text="A specialized financial bridge for converting Tunisian Dinars directly into decentralized assets. Bypassing traditional economic friction for rapid global onboarding."
        imgSrc="/assets/tnd2crypto.png" 
        onImageClick={onImageClick} 
      />

      <ExploreMore themeClass="theme-sover" />
    </motion.div>
  );
}
