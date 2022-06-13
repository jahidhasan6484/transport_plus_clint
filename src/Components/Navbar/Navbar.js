import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [user] = useAuthState(auth);

    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
        navigate('/');
    };

    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addAdmin')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link to="/" className="logo">Transport+</Link>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <p className="hambergur_menu">...</p>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <Link to="/" >
                            <li className="nav-item nav_menu">
                                Home
                            </li>
                        </Link>

                        <Link to="/getTicket">
                            <li className="nav-item nav_menu">
                                Get ticket
                            </li>
                        </Link>

                        <Link to="/dashboard">
                            <li className="nav-item nav_menu">
                                Dashboard
                            </li>
                        </Link>

                        {
                            admins.map(admin => <>

                                {
                                    admin?.adminEmail === user?.email
                                    &&
                                    <>
                                        <Link to="/addBus">
                                            <li className="nav-item nav_menu">
                                                Add Bus
                                            </li>
                                        </Link>

                                        <Link to="/allBus">
                                            <li className="nav-item nav_menu">
                                                All Bus
                                            </li>
                                        </Link>

                                        <Link to="/addAdmin">
                                            <li className="nav-item nav_menu">
                                                Add an admin
                                            </li>
                                        </Link></>
                                }

                            </>)
                        }



                    </ul>

                    <div className="d-flex">
                        <li className="nav-item dropdown">

                            {
                                user?.email ?
                                    <>
                                        <li className="nav-item user_email dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user?.email}
                                        </li>

                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                            <li className="dropdown-item signButton" onClick={logout}>
                                                Logout
                                            </li>

                                        </ul>
                                    </>
                                    :
                                    <Link to="/login">
                                        <li className="nav-item nav_menu dropdown-item signButton">
                                            Login
                                        </li>
                                    </Link>
                            }

                        </li>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;