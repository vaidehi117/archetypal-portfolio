import Navbar from '../components/Navbar';
import React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1>Hi, I'm Vaidehi Patel</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              I turn ideas into full-stack solutions. Let’s build something powerful together.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <a href="/projects" className="btn" style={{ fontSize: '1.1rem' }}>
                View My Work
              </a>
            </div>
          </div>

          <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>🏅 Certified In:</h2>
            <p style={{ marginTop: '0.5rem', color: '#555' }}>
             Software Development, Web Development, and Data Science
            </p>
            <p style={{ marginTop: '1.5rem', fontWeight: '500', color: '#c0392b' }}>
              🚨 Accepting 1 new project for June 2025 — Contact me before May 30!
            </p>
          </div>

          <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <h2>🎁 Free Resource</h2>
            <p style={{ marginTop: '0.5rem', color: '#555' }}>
              Download my free Next.js + Tailwind starter template:
            </p>
            <a
              href="#"
              style={{ color: '#0070f3', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block' }}
            >
              Get the free starter template →
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
