import React, { useState } from 'react';
import Modal from '../components/Modal';

const inputStyle = {
  width: '100%',
  background: 'var(--bg2)',
  border: '1px solid var(--border)',
  borderRadius: 10,
  padding: '12px 16px',
  color: 'var(--text)',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontSize: '0.78rem', fontWeight: 600,
  color: 'var(--muted)', textTransform: 'uppercase',
  letterSpacing: 1, marginBottom: 8,
};

export default function Register({ navigate, setUser }) {
  const [form, setForm] = useState({ name: '', mobile: '', age: '', platform: '', city: '', zone: '', plan: 'standard' });
  const [errors, setErrors] = useState({});
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const planLabels   = { basic: 'Basic Shield',    standard: 'Standard Shield',    pro: 'Pro Shield' };
  const planCoverage = { basic: '₹600/week max',   standard: '₹1,000/week max',    pro: '₹1,500/week max' };

  const validate = () => {
    const e = {};
    if (!form.name.trim())             e.name     = 'Please enter your full name';
    if (!form.mobile || form.mobile.length < 10) e.mobile = 'Enter a valid 10-digit mobile number';
    if (!form.platform)                e.platform = 'Please select your delivery platform';
    if (!form.city)                    e.city     = 'Please select your city';
    if (!form.zone)                    e.zone     = 'Please select your work zone';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleActivate = () => {
    if (!validate()) return;
    setShowOtp(true);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) { setOtpError('Enter the 6-digit OTP sent to your number'); return; }
    setOtpError('');
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setShowOtp(false);
      setUser({ ...form, planLabel: planLabels[form.plan], planCoverage: planCoverage[form.plan] });
      setShowSuccess(true);
    }, 2000);
  };

  const handleGoToDashboard = () => {
    setShowSuccess(false);
    navigate('dashboard');
  };

  const field = (id, label, props) => (
    <div style={{ marginBottom: 20 }}>
      <label style={labelStyle}>{label}</label>
      <input
        {...props}
        value={form[id]}
        onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })); }}
        style={{ ...inputStyle, borderColor: errors[id] ? 'var(--danger)' : undefined }}
      />
      {errors[id] && <div style={{ color: 'var(--danger)', fontSize: '0.78rem', marginTop: 5 }}>⚠ {errors[id]}</div>}
    </div>
  );

  const selectField = (id, label, options) => (
    <div style={{ marginBottom: 20 }}>
      <label style={labelStyle}>{label}</label>
      <select
        value={form[id]}
        onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })); }}
        style={{ ...inputStyle, borderColor: errors[id] ? 'var(--danger)' : undefined, appearance: 'none', cursor: 'pointer' }}
      >
        <option value="">Select {label.toLowerCase()}...</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
      {errors[id] && <div style={{ color: 'var(--danger)', fontSize: '0.78rem', marginTop: 5 }}>⚠ {errors[id]}</div>}
    </div>
  );

  return (
    <div className="fade-up" style={{ maxWidth: 520, margin: '50px auto', padding: '0 20px 100px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2rem', marginBottom: 8 }}>Get Protected Today</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 36 }}>Set up your GigShield account in 2 minutes. No documents needed.</p>

      <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 36 }}>
        {field('name', 'Full Name', { type: 'text', placeholder: 'Ravi Kumar' })}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {field('mobile', 'Mobile Number', { type: 'tel', placeholder: '9876543210', maxLength: 10 })}
          {field('age',    'Age',           { type: 'number', placeholder: '24' })}
        </div>
        {selectField('platform', 'Delivery Platform', ['Zomato', 'Swiggy', 'Amazon', 'Zepto', 'Blinkit', 'Flipkart'])}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {selectField('city', 'City', ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Delhi', 'Pune', 'Kolkata'])}
          {selectField('zone', 'Work Zone', ['Hitech City', 'Banjara Hills', 'Koramangala', 'Indiranagar', 'Andheri', 'Bandra', 'T Nagar'])}
        </div>

        {/* Plan selector */}
        <div style={{ marginBottom: 28 }}>
          <label style={labelStyle}>Protection Plan</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { val: 'basic',    label: 'Basic Shield',    price: '₹29/week', sub: 'Rain + Heat' },
              { val: 'standard', label: 'Standard Shield', price: '₹49/week', sub: 'Rain + Flood + AQI ★' },
              { val: 'pro',      label: 'Pro Shield',      price: '₹79/week', sub: 'All 5 Triggers' },
            ].map(p => (
              <div
                key={p.val}
                onClick={() => setForm(f => ({ ...f, plan: p.val }))}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '12px 16px', borderRadius: 10, cursor: 'pointer',
                  border: form.plan === p.val ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: form.plan === p.val ? 'rgba(0,229,160,0.08)' : 'var(--bg2)',
                  transition: 'all 0.2s',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: '50%',
                    border: form.plan === p.val ? '5px solid var(--accent)' : '2px solid var(--muted)',
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{p.label}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.78rem' }}>{p.sub}</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', fontSize: '0.95rem' }}>{p.price}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleActivate} style={{
          width: '100%', padding: 14, borderRadius: 12,
          background: 'linear-gradient(135deg, var(--accent), #00b87a)',
          color: '#0a0f1e', fontSize: '1rem', fontWeight: 700,
          cursor: 'pointer', border: 'none', fontFamily: 'var(--font-body)',
          boxShadow: '0 8px 30px rgba(0,229,160,0.3)',
        }}>
          🛡️ Activate My Protection
        </button>
      </div>

      {/* OTP MODAL */}
      <Modal open={showOtp}>
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>📱</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', marginBottom: 8 }}>Verify Your Number</h3>
        <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
          We sent a 6-digit OTP to<br />
          <strong style={{ color: 'var(--accent)' }}>+91 {form.mobile}</strong>
        </p>
        <input
          type="tel" maxLength={6} placeholder="_ _ _ _ _ _"
          value={otp} onChange={e => { setOtp(e.target.value); setOtpError(''); }}
          style={{
            ...inputStyle, textAlign: 'center', fontSize: '1.8rem',
            letterSpacing: 12, fontFamily: 'var(--font-display)', fontWeight: 700,
            marginBottom: 8,
          }}
        />
        {otpError && <div style={{ color: 'var(--danger)', fontSize: '0.8rem', marginBottom: 8 }}>{otpError}</div>}
        <div style={{ background: 'rgba(0,229,160,0.06)', borderRadius: 8, padding: '8px 12px', marginBottom: 20, fontSize: '0.78rem', color: 'var(--muted)' }}>
          💡 Demo: enter any 6 digits e.g. <strong style={{ color: 'var(--accent)' }}>1 2 3 4 5 6</strong>
        </div>
        <button onClick={handleVerifyOtp} disabled={verifying} style={{
          width: '100%', padding: 14, borderRadius: 10, border: 'none',
          background: verifying ? 'rgba(0,229,160,0.5)' : 'var(--accent)',
          color: '#0a0f1e', fontSize: '1rem', fontWeight: 700,
          cursor: verifying ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-body)',
          marginBottom: 12,
        }}>
          {verifying ? '⏳ Verifying...' : '✓ Verify & Activate'}
        </button>
        <button onClick={() => setShowOtp(false)} style={{
          background: 'none', border: 'none', color: 'var(--muted)',
          fontSize: '0.85rem', cursor: 'pointer', fontFamily: 'var(--font-body)',
        }}>← Go Back</button>
      </Modal>

      {/* SUCCESS MODAL */}
      <Modal open={showSuccess}>
        <div style={{ fontSize: '3.5rem', marginBottom: 16 }}>🎉</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', color: 'var(--accent)', marginBottom: 8 }}>
          You're Protected!
        </h3>
        <p style={{ color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>
          Welcome to GigShield, <strong style={{ color: 'var(--text)' }}>{form.name.split(' ')[0]}</strong>!<br />
          Your <strong style={{ color: 'var(--accent)' }}>{planLabels[form.plan]}</strong> is now active.
        </p>
        <div style={{ background: 'rgba(0,229,160,0.08)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 12, padding: 20, marginBottom: 24, textAlign: 'left' }}>
          {[
            ['Coverage starts', 'Today ✓', 'var(--accent)'],
            ['Coverage ends',   'Next Sunday', 'var(--text)'],
            ['Payout method',   'UPI Instant ⚡', 'var(--accent2)'],
            ['Max payout',      planCoverage[form.plan], 'var(--accent3)'],
          ].map(([k, v, c]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
              <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{k}</span>
              <span style={{ fontWeight: 700, fontSize: '0.85rem', color: c }}>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={handleGoToDashboard} style={{
          width: '100%', padding: 14, borderRadius: 10, border: 'none',
          background: 'var(--accent)', color: '#0a0f1e',
          fontSize: '1rem', fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--font-body)',
        }}>
          Go to My Dashboard →
        </button>
      </Modal>
    </div>
  );
}
