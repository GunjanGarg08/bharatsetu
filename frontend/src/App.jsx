import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PhoneLogin from "./pages/PhoneLogin";

import Dashboard from "./pages/Dashboard";
import AskQuestion from "./pages/AskQuestion";
import DocumentSimplifier from "./pages/DocumentSimplifier";
import GeoHelp from "./pages/GeoHelp";

import Profile from "./pages/Profile";

import DashboardLayout from "./pages/DashboardLayout";

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <>
      <Navbar isAuthenticated={true} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phone-login" element={<PhoneLogin />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
          <Route index element={<Dashboard />} />
          <Route path="ask" element={<AskQuestion />} />
          <Route path="simplify" element={<DocumentSimplifier />} />
          <Route path="geohelp" element={<GeoHelp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
