// pages/about.js

import Navbar from '../components/Navbar';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div
            className="card"
            style={{
              marginTop: '2rem',
              background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
              border: '1px solid #e0e7ff',
              borderRadius: '14px',
              boxShadow: '0 4px 24px rgba(30,58,138,0.10)',
              padding: '2.5rem 2rem 2rem 2rem',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}
          >
            <h1
              style={{
                fontSize: '2.3rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '1.5rem',
                letterSpacing: '1px'
              }}
            >
              About Me
            </h1>
            <p
              style={{
                color: '#444',
                fontSize: '1.12rem',
                marginBottom: '2rem',
                textAlign: 'justify',
                lineHeight: '1.7'
              }}
            >
              I am a dedicated software engineer with a passion for front-end development and a creative, problem-solving mindset. My journey in tech has been shaped by hands-on experience, continuous learning, and a drive to deliver high-quality solutions. I thrive on building innovative products and enjoy contributing to the community through impactful personal projects.
            </p>

            {/* Technical Skills Section */}
            <div style={{
              background: 'rgba(236,240,253,0.7)',
              borderRadius: '10px',
              padding: '1.2rem 1.5rem',
              margin: '1.5rem 0',
              boxShadow: '0 1px 6px rgba(99,102,241,0.07)',
              textAlign: 'left',
              display: 'inline-block',
              maxWidth: '100%'
            }}>
              <h2 style={{ color: '#2563eb', fontSize: '1.25rem', marginBottom: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>Technical Skills</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem' }}>
                <li>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>Languages:</span>
                  <span style={{ color: '#444' }}> JavaScript, React, Python, PHP, Java, HTML, CSS, EJS, Materialize CSS</span>
                </li>
                <li style={{ marginTop: '0.5em' }}>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>Libraries & Frameworks:</span>
                  <span style={{ color: '#444' }}> Express.js, React.js, Node.js, Mongoose, Django, Pytest, Docker, Bootstrap</span>
                </li>
                <li style={{ marginTop: '0.5em' }}>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>Technologies:</span>
                  <span style={{ color: '#444' }}> Git, MongoDB, PostgreSQL, SQL, AWS, Mobaxterm, Cisco Packet Tracer, Figma, Linux</span>
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div style={{
              background: 'rgba(236,240,253,0.7)',
              borderRadius: '10px',
              padding: '1.2rem 1.5rem',
              margin: '1.5rem 0',
              boxShadow: '0 1px 6px rgba(99,102,241,0.07)',
              textAlign: 'left',
              display: 'inline-block',
              maxWidth: '100%'
            }}>
              <h2 style={{ color: '#2563eb', fontSize: '1.25rem', marginBottom: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>Education</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '1rem' }}>
                <li style={{ marginBottom: '1em' }}>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>New Jersey Institute of Technology</span>
                  <br />
                  <span style={{ color: '#444' }}>Bachelor of Science, Information Technology</span>
                  <br />
                  <span style={{ color: '#888', fontSize: '0.97em' }}>Newark, New Jersey</span>
                </li>
                <li style={{ marginBottom: '1em' }}>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>General Assembly</span>
                  <br />
                  <span style={{ color: '#444' }}>Software Engineering Immersive</span>
                </li>
                <li>
                  <span style={{ fontWeight: 600, color: '#1e3a8a' }}>Middlesex County College</span>
                  <br />
                  <span style={{ color: '#444' }}>Associate Degree, Computer Science</span>
                  <br />
                  <span style={{ color: '#888', fontSize: '0.97em' }}>Edison, New Jersey</span>
                </li>
              </ul>
            </div>

            {/* Values and Mission */}
            <div style={{ marginTop: '1.5rem', textAlign: 'left', display: 'inline-block', maxWidth: '100%' }}>
              <strong style={{ color: '#2563eb' }}>Values:</strong> Creativity, Integrity, Growth, Collaboration
              <br /><br />
              My mission is to leverage technology to solve real-world problems and make a positive impact. I am committed to staying ahead of industry trends and always eager to learn and grow.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
