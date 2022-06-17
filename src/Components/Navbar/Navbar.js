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

    console.log("Admin", admins);

    return (
        <nav class="navbar fixed-top">
            <div class="container">

                <Link to="/" className="logo">Transport <p className='plus'>+</p></Link>

                <p className='menu' data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    menu
                </p>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                    <div class="offcanvas-header">
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                            <li class="nav-item">
                                <Link to='/'>Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/getTicket">Get Ticket</Link>
                            </li>

                            <li class="nav-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>

                            {
                                admins.map(admin => <>

                                    {
                                        admin?.adminEmail === user?.email
                                        &&
                                        <>
                                            <li class="nav-item">
                                                <Link to="/addBus">Add Bus</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link to="/allBus">All Bus</Link>
                                            </li>

                                            <li class="nav-item">
                                                <Link to="/addAdmin">Add an admin</Link>
                                            </li>
                                        </>
                                    }

                                </>)
                            }


                            <li class="nav-item dropdown">
                                {
                                    user?.email ?
                                        <li className="dropdown-item" onClick={logout}>
                                            Logout
                                        </li>
                                        :
                                        <Link to="/login">
                                            <li className="nav-item nav_menu dropdown-item">
                                                Login
                                            </li>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;