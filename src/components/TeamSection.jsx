import React from 'react';

// Import individual team member images
import imgKartig from '../assets/Kartig Don-K.jpeg';
import imgShankar from '../assets/Shankar.jpeg';
import imgTillak from '../assets/Tillak.jpeg';
import imgSkull from '../assets/Skull.jpeg';
import imgAloysius from '../assets/Aloysius.jpeg';
import imgZac from '../assets/Zac.jpeg';
import imgLohgain from '../assets/Lohgain.jpeg';

const TeamSection = () => {
  const members = [
    { name: 'Kartig @ Don-K', image: imgKartig, role: 'Founder, Emcee & Vocalist', desc: 'Classically trained in Carnatic vocal music from a young age. Distinguished winner of the Ilayaraaja "Raaja One Man" KL competition in 2017.' },
    { name: 'Shankar Kumar', image: imgShankar, role: 'Founder & Vocalist', desc: 'A versatile contemporary vocalist with extensive expertise in playback and stage performances. Creator of the original single "Say Malaysia".' },
    { name: 'Tillak', image: imgTillak, role: 'Vocalist', desc: 'An established performer active since 2012. Acclaimed finalist in renowned composer AR Rahman\'s #99SongsCoverStar Competition.' },
    { name: 'Skull Raj', image: imgSkull, role: 'Guitarist', desc: 'A dedicated guitarist specializing in British rock influences. Accomplished composer for local tele-movies and indie video games.' },
    { name: 'Aloysius J', image: imgAloysius, role: 'Drummer', desc: 'Known musically as Ajthedrummerboy. A highly skilled percussionist with profound knowledge in musical arrangements and drumline cadences.' },
    { name: 'Zac', image: imgZac, role: 'Keyboardist & Percussionist', desc: 'Accomplished multi-instrumentalist and visionary founder of the Livewires Academy. Brings 15 years of dedicated experience as a church musician.' },
    { name: 'Lohgain', image: imgLohgain, role: 'Keyboardist & Pro Deejay', desc: 'A certified music producer and professional DJ, renowned for expertly blending diverse and dynamic soundscapes.' },
  ];

  return (
    <section id="team" className="section-padding">
      <div className="container">
        <h2>Meet The Band</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {members.map((member, idx) => (
            <div key={idx} style={{
              backgroundColor: 'var(--bg-secondary)',
              padding: '2rem',
              borderRadius: '8px',
              borderTop: '4px solid var(--accent-color)',
              transition: 'transform 0.3s ease',
              textAlign: 'center'
            }}>
              {member.image && (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    borderRadius: '50%', 
                    objectFit: 'cover', 
                    marginBottom: '1.5rem',
                    border: '3px solid var(--accent-color)'
                  }} 
                />
              )}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem' }}>{member.role}</p>
              <p style={{ color: 'var(--text-secondary)' }}>{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
