import React from 'react';
import { initial } from 'lodash'; 

const StatsBar = () => {
  const stats = [
    { value: '16+', label: 'Years Experience' },
    { value: '200+', label: 'Stages Performed' },
    { value: '7', label: 'Talented Members' },
    { value: 'Est. 2010', label: 'Founded' }
  ];

  return (
    <section id="stats" style={{ backgroundColor: 'var(--accent-color)', color: '#000', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '2rem', 
          textAlign: 'center' 
        }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ padding: '1rem' }}>
              <h2 style={{ fontSize: '3rem', margin: 0, fontWeight: 800, color: '#000' }}>{stat.value}</h2>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
