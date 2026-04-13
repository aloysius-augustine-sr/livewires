import React from 'react';
import { Play } from 'lucide-react';

const MediaSection = () => {
  return (
    <section id="media" className="section-padding">
      <div className="container">
        <h2>Live Performances</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {/* Reel 1 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #333',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <iframe 
              src="https://www.instagram.com/reel/DWssFdtx15R/embed" 
              width="400" 
              height="480" 
              style={{ border: 'none', maxWidth: '100%' }} 
              scrolling="no" 
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
          
          {/* Reel 2 */}
          <div style={{ 
            backgroundColor: '#111', 
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #333',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <iframe 
              src="https://www.instagram.com/reel/DWss7kWxHFT/embed" 
              width="400" 
              height="480" 
              style={{ border: 'none', maxWidth: '100%' }} 
              scrolling="no" 
              allowtransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
