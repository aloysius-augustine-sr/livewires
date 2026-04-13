import React from 'react';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import MediaSection from './components/MediaSection';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <MediaSection />
      
      {/* Footer */}
      <footer style={{ backgroundColor: '#000', padding: '3rem 0', textAlign: 'center', borderTop: '1px solid #333' }}>
        <div className="container">
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent-color)' }}>LIVEWIRES</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Contemporary live music band established in 2010.</p>
          <div style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
             <p>
               <strong>Booking:</strong>{' '}
               <a href="https://wa.me/60175598061" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Aloysius (WhatsApp)</a>
               {' '} / {' '}
               <a href="https://wa.me/60163965561" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>Shankar (WhatsApp)</a>
             </p>
             <p>
               <strong>Email:</strong>{' '}
               <a href="mailto:livewires.music@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'underline' }}>livewires.music@gmail.com</a>
             </p>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>&copy; {new Date().getFullYear()} Livewires Band. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
