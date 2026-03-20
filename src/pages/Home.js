import React from 'react';

const triggers = [
  { emoji: '🌧️', name: 'Heavy Rainfall',      source: 'OpenWeatherMap / IMD', threshold: '> 64.5 mm/day', payout: '₹200/day' },
  { emoji: '🌊', name: 'Flood / Waterlogging', source: 'Local Zone Advisory',  threshold: 'Flood alert issued', payout: '₹250/day' },
  { emoji: '🌡️', name: 'Extreme Heat',         source: 'OpenWeatherMap API',   threshold: '> 45°C heat wave', payout: '₹150/day' },
  { emoji: '😷', name: 'Severe Pollution',      source: 'CPCB AQI Feed',        threshold: 'AQI > 400', payout: '₹150/day' },
  { emoji: '🚫', name: 'Curfew / Zone Closure', source: 'Govt Advisory API',    threshold: 'Sec 144 / Strike', payout: '₹300/day' },
];

const features = [
  { icon: '🤖', color: 'rgba(0,229,160,0.1)',   title: 'AI Risk Engine',       desc: 'Dynamic weekly premiums personalised to your city, zone, and historical disruption data.' },
  { icon: '⚡', color: 'rgba(14,165,233,0.1)',  title: 'Zero-Touch Claims',    desc: 'When a trigger fires — heavy rain, flood, curfew — your claim is automatically initiated.' },
  { icon: '🔍', color: 'rgba(245,158,11,0.1)',  title: 'Smart Fraud Detection',desc: 'GPS zone validation, duplicate checks, and anomaly detection on every claim.' },
  { icon: '📡', color: 'rgba(139,92,246,0.1)',  title: 'Real-Time Monitoring', desc: 'We watch IMD, OpenWeatherMap, and AQI feeds 24/7 so you never have to check.' },
  { icon: '💸', color: 'rgba(239,68,68,0.1)',   title: 'Instant UPI Payout',   desc: 'Verified claims are paid directly to your UPI within minutes — not days.' },
  { icon: '📅', color: 'rgba(0,229,160,0.08)',  title: 'Weekly Pricing',       desc: 'Subscribe every Monday for ₹29–₹79. Cancel or pause anytime.' },
];

const plans = [
  {
    name: 'Basic Shield', price: '₹29', coverage: 'Max payout ₹600/week',
    features: ['Rain coverage (₹200/day)', 'Extreme heat (₹150/day)', 'Auto claim initiation', 'UPI payout'],
    featured: false,
  },
  {
    name: 'Standard Shield', price: '₹49', coverage: 'Max payout ₹1,000/week',
    features: ['Rain + Flood coverage', 'Heat + Pollution (AQI)', 'AI dynamic pricing', 'Instant UPI payout', 'Dashboard access'],
    featured: true,
  },
  {
    name: 'Pro Shield', price: '₹79', coverage: 'Max payout ₹1,500/week',
    features: ['All 5 trigger types', 'Curfew / zone closure', 'Priority claim processing', 'Advanced fraud shield', 'Predictive risk alerts'],
    featured: false,
  },
];

export default function Home({ navigate }) {
  return (
    <div className="fade-up">
      {/* HERO */}
      <div style={{ padding: '90px 40px 80px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,229,160,0.1)', border: '1px solid rgba(0,229,160,0.25)',
          color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700,
          letterSpacing: 1, padding: '6px 16px', borderRadius: 50, textTransform: 'uppercase',
          marginBottom: 32,
        }}>
          <span style={{ fontSize: '0.5rem', animation: 'pulse 2s infinite' }}>●</span>
          Guidewire DEVTrails 2026
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.4rem,6vw,4.2rem)', lineHeight: 1.05, marginBottom: 24,
        }}>
          Income Protection for<br />
          <span style={{ color: 'var(--accent)' }}>India's Gig Workers</span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', maxWidth: 580, margin: '0 auto 44px', lineHeight: 1.7 }}>
          When rain stops your rides, GigShield pays. AI-powered parametric insurance for
          Zomato & Swiggy delivery partners — automatic claims, instant UPI payouts.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('register')} style={{
            padding: '14px 32px', borderRadius: 12, fontSize: '1rem', fontWeight: 700,
            cursor: 'pointer', border: 'none', fontFamily: 'var(--font-body)',
            background: 'linear-gradient(135deg, var(--accent), #00b87a)',
            color: '#0a0f1e', boxShadow: '0 8px 30px rgba(0,229,160,0.3)',
            transition: 'all 0.2s',
          }}>🛡️ Get Protected — ₹49/week</button>

          <button onClick={() => navigate('howItWorks')} style={{
            padding: '14px 32px', borderRadius: 12, fontSize: '1rem', fontWeight: 600,
            cursor: 'pointer', background: 'transparent', color: 'var(--text)',
            border: '1px solid var(--border)', fontFamily: 'var(--font-body)',
            transition: 'all 0.2s',
          }}>See How It Works →</button>
        </div>
      </div>

      {/* STATS */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        marginBottom: 80,
      }}>
        {[
          { num: '₹49', label: 'Weekly Premium (Standard)' },
          { num: '< 2 min', label: 'Claim to Payout Time' },
          { num: '5', label: 'Automated Trigger Types' },
        ].map((s, i) => (
          <div key={i} style={{
            background: 'var(--bg2)', padding: '40px 20px', textAlign: 'center',
            borderRight: i < 2 ? '1px solid var(--border)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{s.num}</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* FEATURES */}
      <div style={{ padding: '0 40px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Why GigShield</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, marginBottom: 12 }}>Built for delivery riders.<br />Not for paperwork.</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: 52, lineHeight: 1.6 }}>No forms. No calls. No waiting. Our AI detects the disruption and pays you automatically.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 16, padding: 28, transition: 'all 0.3s',
            }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: 18 }}>{f.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', marginBottom: 8 }}>{f.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* TRIGGERS */}
      <div style={{ padding: '0 40px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Parametric Triggers</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, marginBottom: 12 }}>What we protect you from</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: 40, lineHeight: 1.6 }}>These 5 events are monitored 24/7. When a threshold is crossed in your zone, your claim fires automatically.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {triggers.map((t, i) => (
            <div key={i} style={{
              background: 'var(--card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '18px 24px',
              display: 'grid', gridTemplateColumns: '48px 1fr auto auto',
              alignItems: 'center', gap: 16,
            }}>
              <span style={{ fontSize: '1.6rem', textAlign: 'center' }}>{t.emoji}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{t.name}</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 2 }}>{t.source}</div>
              </div>
              <span style={{
                background: 'rgba(245,158,11,0.1)', color: 'var(--accent3)',
                border: '1px solid rgba(245,158,11,0.2)',
                padding: '4px 12px', borderRadius: 20, fontSize: '0.78rem', fontWeight: 600, whiteSpace: 'nowrap',
              }}>{t.threshold}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', fontSize: '1rem', whiteSpace: 'nowrap' }}>{t.payout}</span>
            </div>
          ))}
        </div>
      </div>

      {/* PLANS */}
      <div style={{ padding: '0 40px 100px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ color: 'var(--accent)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Protection Plans</div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 800, marginBottom: 12 }}>Pick your shield</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: 48, lineHeight: 1.6 }}>Weekly pricing aligned to your earnings cycle. Change or cancel every Monday.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {plans.map((p, i) => (
            <div key={i} style={{
              background: p.featured ? 'linear-gradient(135deg,rgba(0,229,160,0.08),var(--card))' : 'var(--card)',
              border: p.featured ? '1px solid var(--accent)' : '1px solid var(--border)',
              borderRadius: 20, padding: '36px 28px', position: 'relative',
              boxShadow: p.featured ? 'var(--glow)' : 'none',
            }}>
              {p.featured && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--accent)', color: '#0a0f1e',
                  fontSize: '0.7rem', fontWeight: 800, letterSpacing: 1,
                  padding: '4px 16px', borderRadius: 20, textTransform: 'uppercase', whiteSpace: 'nowrap',
                }}>Most Popular</div>
              )}
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', marginBottom: 8 }}>{p.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: 800, color: 'var(--accent)' }}>{p.price}</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>/week</span>
              </div>
              <div style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: 24 }}>{p.coverage}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ fontSize: '0.88rem', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('register')} style={{
                width: '100%', padding: 12, borderRadius: 10, fontSize: '0.9rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'var(--font-body)',
                background: p.featured ? 'var(--accent)' : 'transparent',
                color: p.featured ? '#0a0f1e' : 'var(--text)',
                border: p.featured ? 'none' : '1px solid var(--border)',
              }}>
                Choose {p.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
