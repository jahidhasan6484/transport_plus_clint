import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Dashboard.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Profile from "../Profile/Profile";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admins, setAdmins] = useState([]);
    const [profileShow, setProfileShow] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/addAdmin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);

    return (
        <div className="section">
            <div className="container">

                <div className="row">
                    <div className="col-md-2 sidebar">
                        <Link class="" to="/dashboard/profile">প্রোফাইল</Link>
                        {
                            admins.map(admin => <>
                                {
                                    admin?.adminEmail === user?.email
                                    &&
                                    <>
                                        <Link class="" to="/dashboard/addBus" onClick={() => setProfileShow(false)}>এড বাস</Link>
                                        <Link class="" to="/dashboard/allBus" onClick={() => setProfileShow(false)}>অল বাস</Link>
                                        <Link class="" to="/dashboard/addAdmin" onClick={() => setProfileShow(false)}>এড এডমিন</Link>
                                    </>
                                }

                            </>)
                        }
                    </div>
                    <div className="col-md-10">
                        {
                            profileShow && <Profile />
                        }

                        {
                            admins.map(admin => <>

                                {
                                    admin?.adminEmail === user?.email
                                    &&
                                    <Outlet></Outlet>
                                }

                            </>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;