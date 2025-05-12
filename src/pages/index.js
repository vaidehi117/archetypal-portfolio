import Navbar from '../components/Navbar';
import React from 'react';
import Link from 'next/link'; // Add this import

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <div
            className="card"
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
              boxShadow: '0 4px 24px rgba(30,58,138,0.10)',
              border: '1px solid #e0e7ff',
              padding: '2.5rem 2rem 2rem 2rem',
              borderRadius: '14px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h1
              style={{
                fontSize: '2.7rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '1rem',
                letterSpacing: '1px'
              }}
            >
              Hi, I'm Vaidehi Patel
            </h1>
            <p
              style={{
                marginTop: '1rem',
                fontSize: '1.3rem',
                color: '#222',
                fontWeight: 500,
                marginBottom: '1.5rem'
              }}
            >
              I turn ideas into full-stack solutions.<br />Let’s build something powerful together.
            </p>
            <hr
              style={{
                margin: '1.5rem auto 1.5rem',
                width: '60px',
                border: '2px solid #6366f1',
                borderRadius: '2px'
              }}
            />
            <p
              style={{
                margin: '0 auto',
                color: '#444',
                fontSize: '1.08rem',
                maxWidth: '650px',
                lineHeight: '1.7',
                textAlign: 'justify',
                background: 'rgba(245,248,255,0.7)',
                padding: '1.2rem 1.5rem',
                borderRadius: '8px',
                boxShadow: '0 1px 4px rgba(30,58,138,0.04)'
              }}
            >
              <span style={{ fontWeight: 600, color: '#1e3a8a' }}>A dedicated software engineer</span> deeply passionate about <span style={{ fontWeight: 500 }}>front-end development</span>. With a creative mindset and robust problem-solving abilities, I've cultivated my skills through practical experience, consistently delivering high-quality work.
              <br /><br />
              My unwavering commitment to staying ahead of technological advancements fuels my enthusiasm for continuous learning. I find joy in crafting innovative solutions and contributing positively to the community through impactful personal projects.
               <span style={{ fontWeight: 600, color:' #1e3a8a'}}>
                Eager to leverage my skills, I am driven to make a meaningful impact in the dynamic world of software development.</span>
            </p>
            <div style={{ marginTop: '2.2rem' }}>
              <Link href="/projects" passHref legacyBehavior>
                <a
                  className="btn"
                  style={{
                    fontSize: '1.1rem',
                    padding: '0.9em 2em',
                    background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                    border: 'none',
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(99,102,241,0.10)'
                  }}
                >
                  View My Work
                </a>
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              background: 'linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%)',
              border: '1px solid #c7d2fe',
              boxShadow: '0 2px 12px rgba(99,102,241,0.08)',
              borderRadius: '12px',
              padding: '2rem 1.5rem 2.2rem 1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1e3a8a', 
                marginBottom: '1rem',
                letterSpacing: '0.5px'
              }}
            >
              🏅 Certified In:
            </h2>
            <p
              style={{
                marginTop: '0.5rem',
                color: '#333',
                fontSize: '1.15rem',
                fontWeight: 500,
                marginBottom: '1.2rem'
              }}
            >
              Software Engineering, Full-Stack Development, and UI/UX Design
            </p>
            <a
              href="https://drive.google.com/file/d/1CGY_KMv2E_VLMnZCgwQlcuHFnR0IXB67/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                color: '#fff',
                background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                textDecoration: 'none',
                padding: '0.7em 1.6em',
                borderRadius: '5px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 1px 6px rgba(99,102,241,0.10)',
                display: 'inline-block',
                marginTop: '0.5rem',
                marginBottom: '1.5rem',
                border: 'none',
                transition: 'background 0.2s'
              }}
            >
              View My Certificate
            </a>
            <p
              style={{
                marginTop: '1.5rem',
                fontWeight: '600',
                color: '#c0392b',
                fontSize: '1.08rem',
                background: 'rgba(255,235,238,0.6)',
                borderRadius: '6px',
                padding: '0.7em 1em',
                display: 'inline-block'
              }}
            >
              🚨 Accepting <span style={{ color: '#d32f2f', fontWeight: 700 }}>1 new project</span> for June 2025 — <span style={{ color: '#2563eb' }}>Contact me before May 30!</span>
            </p>
          </div>

          <div
            className="card"
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
              border: '1px solid #e0e7ff',
              borderRadius: '14px',
              boxShadow: '0 4px 24px rgba(30,58,138,0.10)',
              padding: '2rem 1.5rem 2.2rem 1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#1e3a8a',
                marginBottom: '1rem',
                letterSpacing: '0.5px'
              }}
            >
              🎁 Free Resource
            </h2>
            <p
              style={{
                marginTop: '0.5rem',
                color: '#444',
                fontSize: '1.08rem',
                marginBottom: '1.2rem'
              }}
            >
              Download my free Next.js + Tailwind starter template to kickstart your next project with a modern stack and clean design.
            </p>
            <a
              href="#"
              className="btn"
              style={{
                color: '#fff',
                background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                textDecoration: 'none',
                padding: '0.7em 1.6em',
                borderRadius: '5px',
                fontWeight: 600,
                fontSize: '1rem',
                boxShadow: '0 1px 6px rgba(99,102,241,0.10)',
                display: 'inline-block',
                marginTop: '0.5rem',
                marginBottom: '1.5rem',
                border: 'none',
                transition: 'background 0.2s'
              }}
            >
              Get the free starter template →
            </a>
          </div>

          {/* Social Media Cards Row */}
          <div className="social-row">
            {/* LinkedIn Card */}
            <div className="card social-card">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                alt="LinkedIn"
                style={{ width: 40, height: 40, marginBottom: '0.7rem' }}
              />
              <h3 style={{ color: '#0a66c2', fontWeight: 600, marginBottom: '0.5rem' }}>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/vaidehipatel17/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#0a66c2',
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                Connect with me
              </a>
            </div>
            {/* GitHub Card */}
            <div className="card social-card">
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
                alt="GitHub"
                style={{ width: 40, height: 40, marginBottom: '0.7rem', filter: 'invert(0.2)' }}
              />
              <h3 style={{ color: '#222', fontWeight: 600, marginBottom: '0.5rem' }}>GitHub</h3>
              <a
                href="https://github.com/vaidehi117"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#222',
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                View my code
              </a>
            </div>
            {/* Other Social Media Card */}
            <div className="card social-card" style={{
              background: 'linear-gradient(135deg, #e0e7ff 60%, #f8fafc 100%)',
              border: '1px solid #e0e7ff',
              borderRadius: '14px',
              boxShadow: '0 4px 24px rgba(30,58,138,0.10)',
              padding: '1.5rem 1rem',
              minWidth: '260px',
              maxWidth: '350px',
              textAlign: 'center'
            }}>
              <img
                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg"
                alt="Twitter"
                style={{
                  width: 40,
                  height: 40,
                  marginBottom: '0.7rem',
                  borderRadius: '50%',
                  background: '#fff',
                  padding: '6px',
                  boxShadow: '0 1px 6px rgba(29,161,242,0.10)'
                }}
              />
              <h3 style={{
                color: '#1da1f2',
                fontWeight: 600,
                marginBottom: '0.5rem',
                fontSize: '1.2rem',
                letterSpacing: '0.5px'
              }}>
                Twitter
              </h3>
              <p style={{
                color: '#444',
                fontSize: '0.98rem',
                marginBottom: '0.7rem'
              }}>
                Follow me for tech updates, tips, and more!
              </p>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#fff',
                  background: 'linear-gradient(90deg, #1da1f2 60%, #0a8ddb 100%)',
                  textDecoration: 'none',
                  padding: '0.6em 1.4em',
                  borderRadius: '5px',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 1px 6px rgba(29,161,242,0.10)',
                  display: 'inline-block',
                  marginTop: '0.2rem',
                  border: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #0a8ddb 60%, #1da1f2 100%)'}
                onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #1da1f2 60%, #0a8ddb 100%)'}
              >
                Follow me
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
