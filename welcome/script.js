document.addEventListener('DOMContentLoaded', () => {
    const clickSound = document.getElementById('click-sound');
    
    // Elements
    const startScreen = document.getElementById('start-screen');
    const startBtn = document.getElementById('start-btn');
    const mainHub = document.getElementById('main-hub');
    const logoContainer = document.getElementById('logo-container');
    const authSoverBtn = document.getElementById('auth-sover');
    const authNeydraBtn = document.getElementById('auth-neydra');
    const soverSection = document.getElementById('sover-section');
    const neydraSection = document.getElementById('neydra-section');
    
    const imageOverlay = document.getElementById('image-overlay');
    const overlayImg = imageOverlay.querySelector('img');

    // Global Click Sound
    document.body.addEventListener('click', () => {
        if(clickSound) {
            const soundClone = clickSound.cloneNode();
            soundClone.volume = 0.5;
            soundClone.play().catch(e => console.log('Audio play blocked:', e));
        }
    });

    // Start Sequence
    if(startBtn) {
        startBtn.addEventListener('click', async () => {
            // Request Fullscreen
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(e => console.log('Fullscreen failed:', e));
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen().catch(e => console.log('Fullscreen failed:', e));
            }

            // Force Landscape
            if (screen.orientation && screen.orientation.lock) {
                screen.orientation.lock('landscape').catch(e => console.log('Orientation lock failed:', e));
            }

            // Transition UI
            startScreen.classList.add('hidden');
            mainHub.classList.remove('hidden');

            // Fade in Logo
            setTimeout(() => {
                logoContainer.classList.add('fade-in');
            }, 500);

            // Fade in Auth Buttons
            setTimeout(() => {
                authNeydraBtn.style.opacity = 0;
                authNeydraBtn.classList.add('fade-in');
                authSoverBtn.style.opacity = 0;
                authSoverBtn.classList.add('fade-in');
            }, 1500);
        });
    }

    // Auth Button Handlers
    if(authSoverBtn) {
        authSoverBtn.addEventListener('click', () => {
            soverSection.classList.remove('hidden');
            neydraSection.classList.add('hidden');
            
            // Trigger Animations
            const blocks = soverSection.querySelectorAll('.info-block');
            blocks.forEach((block, index) => {
                block.style.animationDelay = `${index * 0.2}s`;
                block.classList.remove('slide-up');
                void block.offsetWidth; // Reflow
                block.classList.add('slide-up');
            });
            
            setTimeout(() => {
                soverSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    }

    if(authNeydraBtn) {
        authNeydraBtn.addEventListener('click', () => {
            neydraSection.classList.remove('hidden');
            soverSection.classList.add('hidden');

            // Trigger Animations
            const blocks = neydraSection.querySelectorAll('.info-block');
            blocks.forEach((block, index) => {
                block.style.animationDelay = `${index * 0.2}s`;
                block.classList.remove('slide-up');
                void block.offsetWidth; // Reflow
                block.classList.add('slide-up');
            });

            setTimeout(() => {
                neydraSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        });
    }

    // Fullscreen Image Logic
    const images = document.querySelectorAll('.info-image img');
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation(); 
            overlayImg.src = img.src;
            imageOverlay.classList.add('active');
        });
    });

    if(imageOverlay) {
        imageOverlay.addEventListener('click', () => {
            imageOverlay.classList.remove('active');
            setTimeout(() => {
                overlayImg.src = '';
            }, 300);
        });
    }
});
