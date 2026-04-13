import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2>The Journey Since 2010</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Since its inception, Livewires has established a dynamic presence across Malaysia, delivering captivating performances at collegiate events, corporate galas, weddings, and exclusive private functions. Since August 2023, the ensemble has maintained an active residency within premium club and restro-bar venues throughout the Klang Valley, consistently elevating the contemporary nightlife experience with their engaging musical repertoire.
        </p>
        <div style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
          <h3 style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.5rem' }}>Livewires Academy</h3>
          <p style={{ color: 'var(--text-primary)' }}>
            Founded in 2022 by Zac with the vision of inspiring the next generation of musical talent. The Academy offers comprehensive instruction in Guitar, Keyboard, and Ukulele, with a dedicated focus on providing accessible music education to the Indian community. Beyond technical instruction, Livewires Academy is committed to cultivating a foundation of discipline, creative expression, and community engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
