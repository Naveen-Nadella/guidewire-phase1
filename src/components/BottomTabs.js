import React from 'react';

const tabs = [
  { id: 'home',       icon: '🏠', label: 'Home' },
  { id: 'howItWorks', icon: '⚡', label: 'How It Works' },
  { id: 'register',   icon: '🛡️', label: 'Protect' },
  { id: 'dashboard',  icon: '📊', label: 'Dashboard' },
];

export default function BottomTabs({ screen, navigate }) {
  return (
    <div style={{
      display: 'flex', gap: 4, padding: '12px 20px',
      borderTop: '1px solid var(--border)',
      background: 'rgba(10,15,30,0.97)',
      backdropFilter: 'blur(20px)',
      position: 'sticky', bottom: 0, zIndex: 100,
    }}>
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => navigate(t.id)}
          style={{
            flex: 1, padding: '10px 8px', borderRadius: 10,
            border: 'none', cursor: 'pointer',
            background: screen === t.id ? 'rgba(0,229,160,0.1)' : 'transparent',
            color: screen === t.id ? 'var(--accent)' : 'var(--muted)',
            fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 500,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            transition: 'all 0.2s',
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
          {t.label}
        </button>
      ))}
    </div>
  );
}
