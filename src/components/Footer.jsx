import React from 'react';

export default function Footer({ appState }) {
  const isNeydra = appState === 'neydra';
  return (
    <div className="professional-footer">
      <div className="footer-content">
        <img src={isNeydra ? "/assets/neydralogo.png" : "/assets/soverlogo.png"} alt="Footer Logo" className="footer-logo" />
        <div className="copyright-text">
          © 2026 NS-COMPANY. ALL RIGHTS RESERVED.<br/>
          <span>{isNeydra ? "ILYES JARRAY" : "RAYEN LACHIHEB"}</span>
        </div>
      </div>
    </div>
  );
}
