import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchResult from './Components/SearchResult/SearchResult';
import Tickets from './Components/Tickets/Tickets';
import Payment from './Components/Payment/Payment';
import Sponsors from './Components/Sponsors/Sponsors';
import Facilities from './Components/Facilities/Facilities';
import Navbar from './Components/Navbar/Navbar';
import Notification from './Components/Notification/Notification';
import Dashboard from './Components/Dashboard/Dashboard';
import Slider from './Components/Slider/Slider';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Login from './Components/Login/Login';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/getTicket" element={<Tickets />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/searchResult" element={
          <RequireAuth>
            <SearchResult />
          </RequireAuth>
        }>
        </Route>

        <Route path="/payment" element={
          <RequireAuth>
            <Payment />
          </RequireAuth>
        }>

        </Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
        </Route>

      </Routes>

      <Sponsors />
    </>
  );
}

export default App;
