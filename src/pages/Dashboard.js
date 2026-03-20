import React, { useState } from 'react';
import Modal from '../components/Modal';

const triggerStatuses = [
  { emoji: '🌧️', name: 'Rainfall',     status: 'safe',    label: 'Safe — 12mm' },
  { emoji: '🌊', name: 'Flood Alert',  status: 'safe',    label: 'No Alert' },
  { emoji: '🌡️', name: 'Temperature', status: 'warning', label: '38°C — Warm' },
  { emoji: '😷', name: 'AQI',          status: 'safe',    label: 'AQI 82 — Good' },
  { emoji: '🚫', name: 'Zone Closure', status: 'safe',    label: 'No Restrictions' },
];

const claimHistory = [
  { event: '🌧️ Heavy Rain', date: 'Mar 14, 2026', amount: '₹250' },
  { event: '🌊 Flood Alert',  date: 'Mar 8, 2026',  amount: '₹250' },
  { event: '🌧️ Heavy Rain', date: 'Feb 28, 2026', amount: '₹150' },
];

const statusColor = { safe: 'var(--accent)', warning: 'var(--accent3)', danger: 'var(--danger)' };
const statusBg    = { safe: 'rgba(0,229,160,0.1)', warning: 'rgba(245,158,11,0.15)', danger: 'rgba(239,68,68,0.15)' };

export default function Dashboard({ user }) {
  const [simStep, setSimStep] = useState(0); // 0=idle 1=detecting 2=fraud 3=approved
  const [showPayout, setShowPayout] = useState(false);

  const name        = user?.name?.split(' ')[0] || 'Ravi';
  const city        = user?.city     || 'Hyderabad';
  const platform    = user?.platform || 'Zomato';
  const planLabel   = user?.planLabel   || 'Standard Shield';
  const planCoverage = user?.planCoverage || '₹1,000/week max';

  const simLabels = ['🌧️ Trigger Heavy Rainfall Event — Simulate Payout', '⏳ Detecting disruption...', '🔍 Running AI fraud checks...', '✅ Claim approved — processing payout...'];

  const runSimulation = () => {
    if (simStep !== 0) return;
    setSimStep(1);
    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => setSimStep(3), 2600);
    setTimeout(() => { setSimStep(0); setShowPayout(true); }, 4000);
  };

  return (
    <div className="fade-up" style={{ padding: '40px', maxWidth: 1100, margin: '0 auto' }}>

      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 4 }}>Welcome back</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800 }}>
            Hello, <span style={{ color: 'var(--accent)' }}>{name}</span> 👋
          </div>
          <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: 4 }}>{platform} · {city}</div>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.3)',
          padding: '8px 20px', borderRadius: 50,
          fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent)',
        }}>
          <span style={{ fontSize: '0.5rem', animation: 'pulse 2s infinite' }}>●</span>
          {planLabel} Active
        </div>
      </div>

      {/* STAT CARDS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginBottom: 28 }}>
        {[
          { label: 'Income Protected', value: planCoverage, color: 'var(--accent)',  sub: 'This week coverage' },
          { label: 'Payouts Received', value: '₹650',       color: 'var(--accent2)', sub: 'Last 30 days' },
          { label: 'Claims Filed',     value: '3',           color: 'var(--accent3)', sub: 'All auto-approved' },
          { label: 'Premium Paid',     value: '₹196',        color: 'var(--muted)',   sub: '4 weeks × ₹49' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 24 }}>
            <div style={{ color: 'var(--muted)', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>{c.label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.7rem', fontWeight: 800, color: c.color }}>{c.value}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: 4 }}>{c.sub}</div>
          </div>
        ))}
      </div>

      {/* MAIN GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, marginBottom: 24 }}>

        {/* LIVE TRIGGERS */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
            Live Trigger Status — {city}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {triggerStatuses.map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '11px 16px', background: 'var(--bg2)', borderRadius: 10,
                border: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.2rem' }}>{t.emoji}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 500 }}>{t.name}</span>
                </div>
                <span style={{
                  padding: '3px 12px', borderRadius: 20, fontSize: '0.75rem', fontWeight: 700,
                  background: statusBg[t.status], color: statusColor[t.status],
                }}>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CLAIM HISTORY */}
        <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, background: 'var(--accent)', borderRadius: '50%', display: 'inline-block' }} />
            Recent Claims
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {claimHistory.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '13px 16px', background: 'var(--bg2)', borderRadius: 10,
              }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 500 }}>{c.event}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: 2 }}>{c.date}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent)' }}>{c.amount}</div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', background: 'rgba(0,229,160,0.1)', padding: '2px 8px', borderRadius: 20, marginTop: 3 }}>Paid</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SIMULATE */}
      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 16, padding: 28 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, background: 'var(--danger)', borderRadius: '50%', display: 'inline-block' }} />
          Simulate a Disruption Event
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: 20 }}>
          Click below to simulate a heavy rainfall trigger and see the full automated claim + payout flow in action.
        </p>
        <button onClick={runSimulation} disabled={simStep !== 0} style={{
          width: '100%', padding: 16, borderRadius: 12,
          background: simStep !== 0 ? 'rgba(14,165,233,0.15)' : 'linear-gradient(135deg,rgba(239,68,68,0.2),rgba(245,158,11,0.2))',
          border: simStep !== 0 ? '1px solid rgba(14,165,233,0.4)' : '1px solid rgba(239,68,68,0.3)',
          color: 'var(--text)', fontSize: '0.95rem', fontWeight: 700,
          cursor: simStep !== 0 ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-body)', transition: 'all 0.3s',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          {simLabels[simStep]}
        </button>
      </div>

      {/* PAYOUT MODAL */}
      <Modal open={showPayout}>
        <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>⚡</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', marginBottom: 8 }}>Claim Auto-Approved!</h3>
        <p style={{ color: 'var(--muted)', marginBottom: 20, lineHeight: 1.6 }}>
          Heavy rainfall of <strong style={{ color: 'var(--text)' }}>78mm</strong> detected in {city}.<br />
          Your income loss claim was verified and approved by our AI system.
        </p>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--accent)', marginBottom: 8 }}>₹200</div>
        <div style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 10, padding: '12px 20px', fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 28 }}>
          ✅ Credited to UPI: {user?.name?.toLowerCase().replace(' ', '.') || 'ravi.kumar'}@upi
        </div>
        <button onClick={() => setShowPayout(false)} style={{
          padding: '12px 40px', background: 'var(--accent)', color: '#0a0f1e',
          border: 'none', borderRadius: 10, fontSize: '0.95rem', fontWeight: 700,
          cursor: 'pointer', fontFamily: 'var(--font-body)',
        }}>Done</button>
      </Modal>
    </div>
  );
}
