import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 style={{ fontSize: '1.3rem', fontWeight: 'bold', letterSpacing: '1px', color: '#fff' }}>Vaidehi Patel</h1>
      <div>
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}
