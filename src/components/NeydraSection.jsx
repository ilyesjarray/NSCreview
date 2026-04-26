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

export default function NeydraSection({ onImageClick }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="data-section theme-neydra neydra"
    >
      <DataBlock 
        title="The Neydra Ecosystem" 
        text="Neydra is a sprawling, high-end ecosystem seamlessly merging advanced AI companionship, real-time global news aggregation, and a robust digital marketplace."
        imgSrc="/assets/neydralogo.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="The Cybernetic Lobby" 
        text="The central nervous system of the platform, bringing all modules together in a cohesive, unified dashboard that feels akin to operating a spaceship."
        imgSrc="/assets/neydralobby.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Core AI Integration" 
        text="Experience intelligence reimagined with our core AI module, designed to seamlessly handle complex queries with zero latency."
        imgSrc="/assets/neydraai.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Persona Selection" 
        text="Neydra offers highly specialized AI personas, each with distinct characteristics and utilities. Choose the entity that fits your workflow."
        imgSrc="/assets/neydraassistants.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Luna & Astra" 
        text="Personas like 'Luna' aren't mere chatbots; they are fully realized digital entities wrapped in anime-inspired, high-tech visuals."
        imgSrc="/assets/neydraassistantreview.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Service Protocol 1" 
        text="High-end data retrieval and personalized context processing for power users."
        imgSrc="/assets/neydraservice1.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Service Protocol 2" 
        text="Real-time analytical breakdowns of current market structures and intelligence feeds."
        imgSrc="/assets/neydraservices2.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Service Protocol 3" 
        text="Integrated tools for seamless interaction between user modules and core processing elements."
        imgSrc="/assets/neydraservices3.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Subscription Architecture" 
        text="Secure and flexible plans providing unrestricted access to the core capabilities of the Neydra ecosystem."
        imgSrc="/assets/neydrabuyplanreview.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Global News Engine" 
        text="A state-of-the-art news aggregation engine delivering high-impact updates on AI, Crypto, and Markets."
        imgSrc="/assets/globalneydranews.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Interactive Feed" 
        text="Filter the noise of the internet with a sleek, glowing blue interface designed for rapid intelligence absorption."
        imgSrc="/assets/neydraglobalnews2.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="The Exchange" 
        text="Trade cryptocurrencies via the platform's native exchange, complete with real-time candlestick charts and order books."
        imgSrc="/assets/neydraexchange.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Digital Marketplace" 
        text="Purchase premium digital assets directly from the Shop, extending the functionality of your cybernetic environment."
        imgSrc="/assets/neydrashop.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Founder Insight" 
        text="Behind the architecture. The vision and leadership driving the relentless innovation at NS-COMPANY."
        imgSrc="/assets/neydraaboutme.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Encrypted Communications" 
        text="Secure channels for support and direct contact, shielded by our robust security infrastructure."
        imgSrc="/assets/neydracontact.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Premium Architecture V1" 
        text="Masterclass in frontend performance and backend obfuscation."
        imgSrc="/assets/product1.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Core Server Unit" 
        text="High-performance computational assets designed to handle complex NLP and predictive routing tasks."
        imgSrc="/assets/product2.png" 
        onImageClick={onImageClick} 
      />
      <DataBlock 
        title="Automation Systems" 
        text="Advanced robotic control visualization, representing the physical manifestation of our AI architecture."
        imgSrc="/assets/product3.png" 
        onImageClick={onImageClick} 
      />

      <ExploreMore themeClass="theme-neydra" />
    </motion.div>
  );
}
