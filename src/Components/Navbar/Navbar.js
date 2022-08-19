import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import Home from '../Home/Home';
import SearchTicket from '../SearchTicket/SearchTicket';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/');
    };

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('https://transport-plus-server.herokuapp.com/addAdmin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);


    return (
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
                <Link class="logo pt-2" to="/">ট্রান্সপোর্ট প্লাস</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <Link class="nav_menu" to="/">হোম</Link>
                        <Link class="nav_menu" to="/bookTicket">বুক টিকিট</Link>
                        <Link class="nav_menu" to="/dashboard">ড্যাশবোর্ড</Link>
                    </ul>
                    <div class="buttons">
                        {
                            user?.email ?
                                <Link to="/login">
                                    <button type="button" class="btn btn-light" onClick={logout}>লগআউট</button>
                                </Link>
                                :

                                <Link to="/login">
                                    <button type="button" class="btn btn-light">লগইন</button>
                                </Link>
                        }
                        <Link to="/register">
                            <button type="button" class="btn btn-dark">রেজিষ্টার</button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;