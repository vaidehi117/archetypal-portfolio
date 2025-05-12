// pages/projects.js

import Navbar from '../components/Navbar';
import React from 'react';

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container">
          <h1
            style={{
              fontSize: '2.3rem',
              fontWeight: 'bold',
              color: '#1e3a8a',
              margin: '2rem 0 2.5rem 0',
              textAlign: 'center',
              letterSpacing: '1px'
            }}
          >
            My Projects
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}
          >
            {/* Project 1 */}
            <div
              className="card"
              style={{
                flex: '1 1 420px',
                maxWidth: '520px',
                minWidth: '320px',
                minHeight: '340px',
                background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
                border: '1px solid #e0e7ff',
                borderRadius: '18px',
                boxShadow: '0 6px 32px rgba(30,58,138,0.12)',
                padding: '2.5rem 2rem',
                marginBottom: '0'
              }}
            >
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Data Visualization Dashboard</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                An interactive dashboard built with React and Chart.js to visualize complex datasets for actionable insights.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                View Project
              </a>
            </div>
            {/* Project 2 */}
            <div
              className="card"
              style={{
                flex: '1 1 420px',
                maxWidth: '520px',
                minWidth: '320px',
                minHeight: '340px',
                background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
                border: '1px solid #e0e7ff',
                borderRadius: '18px',
                boxShadow: '0 6px 32px rgba(30,58,138,0.12)',
                padding: '2.5rem 2rem',
                marginBottom: '0'
              }}
            >
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>AI Chatbot (LLM)</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                A conversational AI chatbot using a large language model, providing instant answers and support for users.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                View Project
              </a>
            </div>
            {/* Project 3 */}
            <div
              className="card"
              style={{
                flex: '1 1 420px',
                maxWidth: '520px',
                minWidth: '320px',
                minHeight: '340px',
                background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
                border: '1px solid #e0e7ff',
                borderRadius: '18px',
                boxShadow: '0 6px 32px rgba(30,58,138,0.12)',
                padding: '2.5rem 2rem',
                marginBottom: '0'
              }}
            >
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Personal Portfolio Website</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                A modern, responsive portfolio site built with Next.js, showcasing my skills, projects, and contact info.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                View Project
              </a>
            </div>
            {/* Project 4 */}
            <div
              className="card"
              style={{
                flex: '1 1 420px',
                maxWidth: '520px',
                minWidth: '320px',
                minHeight: '340px',
                background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
                border: '1px solid #e0e7ff',
                borderRadius: '18px',
                boxShadow: '0 6px 32px rgba(30,58,138,0.12)',
                padding: '2.5rem 2rem',
                marginBottom: '0'
              }}
            >
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Student's Choice Project</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                A unique project of my own design, demonstrating creativity, technical skill, and problem-solving ability.
              </p>
              <a
                href="#"
                className="btn"
                style={{
                  background: 'linear-gradient(90deg, #6366f1 60%, #2563eb 100%)',
                  color: '#fff',
                  textDecoration: 'none'
                }}
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
