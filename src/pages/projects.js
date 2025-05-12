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
                This React application visualizes the economic impact of COVID-19 on the U.S. job market and broader economy. Using D3.js, it presents interactive charts to help users understand changes in employment patterns, remote work adoption, and inflation trends during the pandemic.<br /><br />
                <span style={{ color: '#2563eb', fontWeight: 500 }}>Technologies:</span> React.js, D3.js, CSS/SCSS, Create React App, Git
              </p>
              <a
                href="https://github.com/vaidehi117/data-visualization"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
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
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Novel Nest (E-Book Subscription)</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                Users can sign up to browse a large selection of e-books, organized by genre. By submitting their credit card info, users can subscribe and receive 5 random e-books from that genre.<br /><br />
                <span style={{ color: '#2563eb', fontWeight: 500 }}>Technologies:</span> Python, Django, JavaScript, HTML/CSS, PostgreSQL, Materialize CSS
              </p>
              <a
                href="https://github.com/vaidehi117/project-4-novel-nest"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
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
            <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Fakebook Social Platform</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                A full-stack social media platform inspired by Facebook, enabling users to create accounts, post updates, and interact with others in real time.<br /><br />
                <span style={{ color: '#2563eb', fontWeight: 500 }}>Technologies:</span> Express, Node.js, React, JavaScript, AWS, MongoDB, Mongoose
              </p>
              <a
                href="https://github.com/vaidehi117/fakebook-project"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
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
              <h2 style={{ color: '#2563eb', fontWeight: 700, marginBottom: '1rem' }}>Next.js AI Chatbot</h2>
              <p style={{ color: '#444', marginBottom: '1.2rem' }}>
                An advanced AI chatbot template built with Next.js, featuring seamless navigation, server-side rendering, and dynamic chat interfaces. Supports multiple LLM providers, secure authentication, persistent chat history, and file storage. Easily switch between OpenAI, Anthropic, Cohere, and more.<br /><br />
                <span style={{ color: '#2563eb', fontWeight: 500 }}>Technologies:</span> Next.js App Router, React Server Components, AI SDK, shadcn/ui, Tailwind CSS, Radix UI, Vercel Postgres, Vercel Blob, NextAuth.js, OpenAI API
              </p>
              <a
                href="https://github.com/vaidehi117/nextjs-ai-chatbot"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
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
