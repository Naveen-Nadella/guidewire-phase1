import React from 'react';

const styles = {
  nav: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 40px',
    borderBottom: '1px solid var(--border)',
    backdropFilter: 'blur(20px)',
    background: 'rgba(10,15,30,0.85)',
    position: 'sticky', top: 0, zIndex: 100,
  },
  logo: {
    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.35rem',
    display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
  },
  logoIcon: {
    width: 36, height: 36,
    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
    borderRadius: 10, display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: '1.1rem',
  },
  links: { display: 'flex', gap: 8 },
  ghost: {
    padding: '8px 18px', borderRadius: 8, fontSize: '0.85rem', fontWeight: 500,
    cursor: 'pointer', background: 'transparent', color: 'var(--muted)',
    border: '1px solid var(--border)', fontFamily: 'var(--font-body)',
    transition: 'all 0.2s',
  },
  primary: {
    padding: '8px 18px', borderRadius: 8, fontSize: '0.85rem', fontWeight: 700,
    cursor: 'pointer', background: 'var(--accent)', color: '#0a0f1e',
    border: 'none', fontFamily: 'var(--font-body)', transition: 'all 0.2s',
  },
};

export default function Navbar({ navigate }) {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo} onClick={() => navigate('home')}>
        <div style={styles.logoIcon}>🛡️</div>
        Gig<span style={{ color: 'var(--accent)' }}>Shield</span> AI
      </div>
      <div style={styles.links}>
        <button style={styles.ghost} onClick={() => navigate('home')}>Home</button>
        <button style={styles.ghost} onClick={() => navigate('howItWorks')}>How It Works</button>
        <button style={styles.primary} onClick={() => navigate('register')}>Get Protected</button>
      </div>
    </nav>
  );
}
