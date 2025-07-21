import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import Topbar from './components/Topbar';

import Profile from './pages/Profile';
import Finance from './pages/Finance';
import Team from './pages/Team';
import Settings from './pages/Settings';
import Support from './pages/Support';

import Userinfo from './components/Userinfo';
import HistoryTranz from './components/HistoryTranz';

function App() {
  return (
     <Router>
    <div className="App">
      <SideBar/>
      <div className="container">
        <Topbar />
        <div className="row">
        <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/finance" element={<Finance />} />
              <Route path="/team" element={<Team />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px', marginLeft: '20px'}}>
            <Userinfo/>
            <HistoryTranz />
          </div>

        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;