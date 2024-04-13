import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import About from './About/About';
import Job from './Job/Job';
import Admin from './Admin/admin';
import Company from './Company/Company';
import Navbar from './Navbar/Navbar';
import AdminNavbar from './Navbar/adminNavbar';
import AddJobs from './Job/addJobs';
import { useSelector } from 'react-redux';

const App = () => {
  const { loggedIn, user } = useSelector(state => state.login);
  const userType = user ? user.user.type : null;

  return (
    <Router style={{
      backgroundColor:'#B5E4F8',
      height: "690px",
    }}>
      <div>
        <Routes>
          <Route path="/login" element={loggedIn ? <Navigate replace to="/home" /> : <Login />} />
        </Routes>
      </div>
      {userType !== 'admin' &&
        <div>
          {loggedIn && <Navbar />}
          <Routes>
            <Route path="/home" element={loggedIn ? <Home /> : <Navigate replace to="/login" />} />
            <Route path="/about" element={loggedIn ? <About /> : <Navigate replace to="/login" />} />
            <Route path="/jobs" element={loggedIn ? <Job /> : <Navigate replace to="/login" />} />
            <Route path="/showcase" element={loggedIn ? <Company /> : <Navigate replace to="/login" />} />
            <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/login"} />} />
          </Routes>
        </div>
      }
      {userType === 'admin' && 
        <div>
          {loggedIn && <AdminNavbar />}
          <Routes>
            <Route path="/admin" element={loggedIn ? <Admin /> : <Navigate replace to="/login" />} />
            <Route path="*" element={<Navigate to={loggedIn ? "/admin" : "/login"} />} />
            <Route path="/addJobs" element={loggedIn ? <AddJobs /> : <Navigate replace to="/login" />} />
          </Routes>
        </div>  
      }
    </Router>
  );
};

export default App;
