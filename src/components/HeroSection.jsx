import React from 'react';
import { ChevronDown } from 'lucide-react';

import fullBandBg from '../assets/full_band.jpeg';
import logoWhite from '../assets/logo_white.png';

const HeroSection = () => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}
    >
      {/* Background Image */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(10,10,10,1)), url(${fullBandBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.6,
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ color: 'var(--accent-color)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
          Contemporary Live Music
        </h3>
        
        <img 
          src={logoWhite} 
          alt="Livewires Logo" 
          style={{ width: '100%', maxWidth: '600px', maxHeight: '35vh', objectFit: 'contain', marginBottom: '2rem' }} 
        />

        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
          Elevating events across Malaysia since 2010 with unforgettable live performances.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#packages" className="btn btn-primary">Our Packages</a>
          <a href="#about" className="btn btn-outline">Discover More</a>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', zIndex: 1, animation: 'bounce 2s infinite' }}>
        <a href="#stats" style={{ color: 'var(--text-primary)' }}>
          <ChevronDown size={32} />
        </a>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
