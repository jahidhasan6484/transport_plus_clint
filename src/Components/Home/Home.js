import React from "react";
import './Home.css';
import { Link } from 'react-router-dom';
import diu from '../../images/bg/diu.png';
import bus from '../../images/bg/bus3.gif';

const Home = () => {
    return (
        <div className="home section" id="home">
            <div className="container">
                <div className="background"></div>

                <div className="row home_row">
                    <div className="col-md-6">
                        <img src={diu} className="home_logo img-fluid"></img>

                        <p className="wish">ওয়েলকাম টু</p>
                        <h1 className="home_title">ট্রান্সপোর্ট <span className="highlight">প্লাস</span></h1>
                        <p className="sub_title">ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটির অনলাইন টিকিট বুকিং সিস্টেম।</p>
                        <div className="home_buttons">
                            <Link to="/contact">
                                <button type="button" class="btn btn-light">কন্টাক্ট</button>
                            </Link>
                            <Link to="/bookTicket">
                                <button type="button" class="btn btn-dark">বুক টিকিট</button>
                            </Link>


                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={bus} className="bus_gif img-fluid"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;