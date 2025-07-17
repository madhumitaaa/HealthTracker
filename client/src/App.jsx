import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EntriesPage from './pages/EntriesPage';
import Dashboardpage from './pages/Dashboardpage';
const App = () => {
    return (
    <Router>
     <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/entries" element={<EntriesPage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
      </Routes>
    </Router>
  );
}

export default App;
