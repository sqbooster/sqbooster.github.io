import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Developer from './pages/Developer';
import PyPIStats from './pages/PyPIStats';
import GitHubStats from './pages/GitHubStats';
import Persian from './pages/Persian';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/pypi-stats" element={<PyPIStats />} />
          <Route path="/github-stats" element={<GitHubStats />} />
          <Route path="/persian" element={<Persian />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;