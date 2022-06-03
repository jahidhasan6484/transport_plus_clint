import React from 'react';
import './Navbar.css';
import userImage from '../../images/user.png';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

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

                        <Link to="/notification">
                            <li className="nav-item nav_menu">
                                Notification
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

                    </ul>

                    <div className="d-flex">
                        <li className="nav-item dropdown">
                            <img src={userImage} className="user_icon nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></img>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    user ?
                                        <>
                                            <li className="dropdown-item signButton">
                                                Profile
                                            </li>
                                            <li className="dropdown-item signButton" onClick={logout}>
                                                Logout
                                            </li>
                                        </>
                                        :
                                        <Link to="/login">
                                            <li className="dropdown-item signButton">
                                                Login
                                            </li>
                                        </Link>
                                }

                            </ul>
                        </li>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;