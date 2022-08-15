import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchResult from './Components/SearchResult/SearchResult';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Login from './Components/Login/Login';
import SearchTicket from './Components/SearchTicket/SearchTicket';
import AddBus from './Components/AddBus/AddBus';
import AllBus from './Components/AllBus/AllBus';
import Update from './Components/Update/Update';
import AddAdmin from './Components/AddAdmin/AddAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import ABus from './Components/ABus/ABus';
import Verified from './Components/Verified/Verified';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';


function App() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addAdmin')
      .then(res => res.json())
      .then(data => setAdmins(data));
  }, []);

  const [user] = useAuthState(auth);


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/bookTicket" element={<SearchTicket />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addBus/update/:id" element={<Update />} />

        <Route path="/searchResult" element={
          <RequireAuth>
            <SearchResult />
          </RequireAuth>
        }>
        </Route>

        <Route path="/searchResult/aBus/:id" element={
          <RequireAuth>
            <ABus />
          </RequireAuth>
        }>
        </Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path="profile" element={<Profile />}>
          </Route>
          {/* <Route path="addBus" element={
            <AddBus />
          }>
          </Route>
          <Route path="allbus" element={<AllBus />}>
          </Route>
          <Route path="addAdmin" element={<AddAdmin />}>
          </Route> */}
          {
            admins.map(admin => <>
              {
                admin?.adminEmail === user?.email
                && <>
                  <Route path="addBus" element={
                    <AddBus />
                  }>
                  </Route>
                  <Route path="allbus" element={<AllBus />}>
                  </Route>
                  <Route path="addAdmin" element={<AddAdmin />}>
                  </Route>
                </>
              }
            </>)
          }

        </Route>
      </Routes>
    </>

  );
}

export default App;