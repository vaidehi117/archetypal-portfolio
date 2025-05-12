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
              <br /><br />
              <strong style={{ color: '#2563eb' }}>Technical Skills:</strong>
              <br />
              <span style={{ fontWeight: 500 }}>Languages:</span> JavaScript, React, Python, PHP, Java, HTML, CSS, EJS, Materialize CSS
              <br />
              <span style={{ fontWeight: 500 }}>Libraries & Frameworks:</span> Express.js, React.js, Node.js, Mongoose, Django, Pytest, Docker, Bootstrap
              <br />
              <span style={{ fontWeight: 500 }}>Technologies:</span> Git, MongoDB, PostgreSQL, SQL, AWS, Mobaxterm, Cisco Packet Tracer, Figma, Linux
              <br /><br />
              <strong style={{ color: '#2563eb' }}>Education:</strong>
              <br />
              <span style={{ fontWeight: 500 }}>New Jersey Institute of Technology, Newark, New Jersey</span> <br />
              Bachelor of Science, Information Technology
              <br /><br />
              <span style={{ fontWeight: 500 }}>General Assembly</span> <br />
              Software Engineering Immersive
              <br /><br />
              <span style={{ fontWeight: 500 }}>Middlesex County College, Edison, New Jersey</span> <br />
              Associate Degree, Computer Science
              <br /><br />
              <strong style={{ color: '#2563eb' }}>Values:</strong> Creativity, Integrity, Growth, Collaboration
              <br /><br />
              My mission is to leverage technology to solve real-world problems and make a positive impact. I am committed to staying ahead of industry trends and always eager to learn and grow.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
