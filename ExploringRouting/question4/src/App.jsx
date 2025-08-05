import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '10px', borderBottom: '1px solid gray' }}>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
