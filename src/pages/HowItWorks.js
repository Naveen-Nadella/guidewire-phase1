import React from 'react';

const steps = [
  { num: 1, title: 'Register with Mobile OTP', desc: 'Rider signs up with mobile number and receives an OTP. Adds profile — name, platform (Zomato/Swiggy), city, and delivery zone.', tag: 'Mobile-First Web App' },
  { num: 2, title: 'AI Calculates Your Premium', desc: 'Our ML model analyses your city, zone risk, working hours, and historical disruption data to generate a personalised weekly premium. Flood-prone zones pay slightly more.', tag: 'Gradient Boosting ML Model' },
  { num: 3, title: 'Select Plan & Activate', desc: 'Rider chooses Basic (₹29), Standard (₹49), or Pro (₹79) plan and pays via UPI. Coverage activates immediately for the week.', tag: 'Weekly UPI Payment' },
  { num: 4, title: 'Real-Time Disruption Monitoring', desc: 'Our backend continuously polls weather APIs, AQI feeds, and government advisory systems. When a threshold is crossed in the rider\'s zone, the system triggers automatically.', tag: 'OpenWeatherMap + CPCB + IMD APIs' },
  { num: 5, title: 'Fraud Detection Layer', desc: 'Before approving, the system cross-checks: Was the disruption in the rider\'s actual zone? Was the rider active? Is this a duplicate claim? Isolation Forest model flags anomalies.', tag: 'AI Fraud Detection — Isolation Forest' },
  { num: 6, title: 'Auto-Approved → Instant Payout', desc: 'If all checks pass, the claim is auto-approved and the payout is credited to the rider\'s UPI account within minutes. Rider gets an SMS and in-app notification.', tag: 'Razorpay Sandbox / UPI Simulator' },
  { num: 7, title: 'Dashboard — Track Everything', desc: 'Rider sees active policy, claim history, payouts received, and live trigger status. Admin view shows loss ratios, claim trends, and disruption forecasts.', tag: 'React Dashboard' },
];

export default function HowItWorks({ navigate }) {
  return (
    <div className="fade-up" style={{ padding: '60px 40px 100px', maxWidth: 780, margin: '0 auto' }}>
      <div style={{ marginBottom: 60 }}>
        <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Application Workflow</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, marginBottom: 12 }}>How GigShield Works</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6 }}>From signup to payout — fully automated, zero paperwork.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: 24, position: 'relative' }}>
            {i < steps.length - 1 && (
              <div style={{
                position: 'absolute', left: 29, top: 62, width: 2,
                height: 'calc(100% - 20px)',
                background: 'linear-gradient(var(--accent), rgba(0,229,160,0.05))',
              }} />
            )}
            <div style={{
              width: 60, height: 60, borderRadius: '50%',
              border: '2px solid var(--accent)', background: 'rgba(0,229,160,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontWeight: 800,
              color: 'var(--accent)', fontSize: '1.1rem', flexShrink: 0, zIndex: 1,
            }}>{s.num}</div>

            <div style={{ paddingBottom: 48, paddingTop: 14 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 6 }}>{s.title}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{s.desc}</div>
              <span style={{
                display: 'inline-block', marginTop: 10,
                background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)',
                color: 'var(--accent2)', padding: '4px 12px', borderRadius: 20,
                fontSize: '0.75rem', fontWeight: 600,
              }}>{s.tag}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <button onClick={() => navigate('register')} style={{
          padding: '14px 36px', borderRadius: 12, fontSize: '1rem', fontWeight: 700,
          cursor: 'pointer', border: 'none', fontFamily: 'var(--font-body)',
          background: 'linear-gradient(135deg, var(--accent), #00b87a)',
          color: '#0a0f1e', boxShadow: '0 8px 30px rgba(0,229,160,0.3)',
        }}>Start Your Protection →</button>
      </div>
    </div>
  );
}
