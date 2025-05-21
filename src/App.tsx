import React from 'react';
import logo from './logo.svg';
import SideBar from './components/Sidebar';
import Topbar from './components/Topbar';
import Profile from './pages/Profile';
import Userinfo from './components/Userinfo';
function App() {
  return (
    <div className="App">
      <SideBar/>
      <div className="container">
        <Topbar />
        <div className="row">
        <Profile />
        <Userinfo/>
        </div>
      </div>
    </div>
  );
}

export default App;
