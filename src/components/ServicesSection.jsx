import React from 'react';
import { Music, Mic, Users, Check, Star } from 'lucide-react';

const ServicesSection = () => {
  const packages = [
    {
      title: 'The Essential Trio',
      icon: <Mic size={40} color="var(--accent-color)" />,
      price: 'RM 2,500',
      desc: 'Perfect for intimate tea ceremonies, cocktail hours, or cozy dinner receptions.',
      features: [
        'Lead Vocalist',
        'Guitarist or Keyboardist',
        'Percussionist',
        'Sophisticated, acoustic-driven vibe',
        'Ideal for intimate venues'
      ]
    },
    {
      title: 'The Signature Quartet',
      icon: <Music size={40} color="var(--accent-color)" />,
      price: 'RM 3,200',
      desc: 'Our most popular choice for a balanced, rhythmic dinner performance.',
      features: [
        'Lead Vocalist',
        'Guitarist or Keyboardist',
        'Bassist & Percussionist',
        'Fuller, groovier sound with rich bass',
        'Perfect for weddings & corporate events'
      ]
    },
    {
      title: 'The Elite Quintet',
      icon: <Users size={40} color="var(--accent-color)" />,
      price: 'RM 3,800',
      desc: 'Dynamic and engaging with rich harmonies and a versatile massive repertoire.',
      features: [
        'Two Lead Vocalists (Duo Options)',
        'Guitarist & Keyboardist',
        'Percussionist',
        'Tailored for lively receptions & Sangeet nights'
      ]
    },
    {
      title: 'The Grand Showcase',
      icon: <Star size={40} color="var(--accent-color)" />,
      price: 'RM 4,600',
      desc: 'The ultimate "Concert Experience" for your biggest milestones and grand finales.',
      features: [
        'Two Lead Vocalists',
        'Guitarist & Keyboardist',
        'Bassist & Percussionist',
        'Powerful, high-fidelity wall of sound',
        'Designed for large ballrooms & grand finales'
      ]
    }
  ];

  return (
    <section id="packages" className="section-padding" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        <h2>Performance Packages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {packages.map((pkg, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--bg-secondary)', 
              borderRadius: '12px', 
              padding: '3rem 2rem', 
              textAlign: 'center',
              border: idx === 1 ? '2px solid var(--accent-color)' : '1px solid #222',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {idx === 1 && <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'var(--accent-color)', color: '#000', padding: '0.5rem 2rem', fontSize: '0.8rem', fontWeight: 800, transform: 'rotate(45deg) translate(25%, -50%)', width: '150px' }}>POPULAR</div>}
              
              <div style={{ marginBottom: '1.5rem' }}>{pkg.icon}</div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '1rem' }}>{pkg.price}</div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '60px' }}>{pkg.desc}</p>
              
              <ul style={{ textAlign: 'left', marginBottom: '2rem', color: '#ccc' }}>
                {pkg.features.map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                    <Check size={16} color="var(--accent-color)" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
