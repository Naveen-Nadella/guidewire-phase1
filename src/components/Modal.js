import React from 'react';

export default function Modal({ open, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'rgba(0,0,0,0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div className="fade-up" style={{
        background: 'var(--card2)',
        border: '1px solid var(--border)',
        borderRadius: 24, padding: '44px 36px',
        maxWidth: 420, width: '100%',
        textAlign: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}
