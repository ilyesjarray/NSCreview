import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import StartScreen from './components/StartScreen';
import MainHub from './components/MainHub';
import NeydraSection from './components/NeydraSection';
import SovereignSection from './components/SovereignSection';
import ImageModal from './components/ImageModal';
import Footer from './components/Footer';

export default function App() {
  const [appState, setAppState] = useState('start'); // 'start', 'hub', 'neydra', 'sovereign'
  const [fullscreenImage, setFullscreenImage] = useState(null);
  
  // Audio handling
  const playClickSound = () => {
    const sound = new Audio('/assets/click-sound.mp3');
    sound.volume = 0.5;
    sound.play().catch(e => console.log('Audio block:', e));
  };

  useEffect(() => {
    const handleGlobalClick = () => playClickSound();
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const handleStart = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
      if (window.screen.orientation && window.screen.orientation.lock) {
        await window.screen.orientation.lock('landscape').catch(() => {});
      }
    } catch (err) {
      console.log('Fullscreen/Orientation failed:', err);
    }
    setAppState('hub');
  };

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {appState === 'start' && (
          <StartScreen key="start" onStart={handleStart} />
        )}

        {appState !== 'start' && (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="main-content"
          >
            <MainHub 
              appState={appState} 
              onSelect={setAppState} 
            />

            <AnimatePresence mode="wait">
              {appState === 'neydra' && (
                <NeydraSection key="neydra" onImageClick={setFullscreenImage} />
              )}
              {appState === 'sovereign' && (
                <SovereignSection key="sover" onImageClick={setFullscreenImage} />
              )}
            </AnimatePresence>

            {(appState === 'neydra' || appState === 'sovereign') && (
              <Footer appState={appState} />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <ImageModal 
        src={fullscreenImage} 
        onClose={() => setFullscreenImage(null)} 
      />
    </div>
  );
}
