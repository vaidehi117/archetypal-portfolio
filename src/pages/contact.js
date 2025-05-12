// pages/contact.js

import Navbar from '../components/Navbar';
import React from 'react';

export default function ContactPage() {
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
              maxWidth: '600px',
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
              Contact Me
            </h1>
            <p style={{ color: '#444', fontSize: '1.08rem', marginBottom: '2rem' }}>
              Interested in working together or have a question? Fill out the form below or email me directly at <a href="mailto:vaidehi117v@gmail.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>vaidehi117v@gmail.com</a>.
            </p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Your Name"
                required
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '0.8em',
                  borderRadius: '6px',
                  border: '1px solid #c7d2fe',
                  fontSize: '1rem'
                }}
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '0.8em',
                  borderRadius: '6px',
                  border: '1px solid #c7d2fe',
                  fontSize: '1rem'
                }}
              />
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  padding: '0.8em',
                  borderRadius: '6px',
                  border: '1px solid #c7d2fe',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
              <button
                type="submit"
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
                Send Message
              </button>
            </form>
            <p style={{ marginTop: '2rem', color: '#2563eb', fontWeight: 500 }}>
              I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
