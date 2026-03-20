import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomTabs from './components/BottomTabs';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [user, setUser] = useState(null);

  const navigate = (s) => {
    setScreen(s);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar navigate={navigate} />

      <main>
        {screen === 'home'      && <Home navigate={navigate} />}
        {screen === 'howItWorks'&& <HowItWorks navigate={navigate} />}
        {screen === 'register'  && <Register navigate={navigate} setUser={setUser} />}
        {screen === 'dashboard' && <Dashboard navigate={navigate} user={user} />}
      </main>

      {screen !== 'home' && (
        <BottomTabs screen={screen} navigate={navigate} />
      )}
    </div>
  );
}
