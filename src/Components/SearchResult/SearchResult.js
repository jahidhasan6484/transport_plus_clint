import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addBus')
            .then(res => res.json())
            .then(data => {
                const filterResult =
                    data.filter(bus =>
                        // bus.route === sessionStorage.getItem("route")
                        // && bus.journeyType === sessionStorage.getItem("journeyType")
                        // && bus.date === sessionStorage.getItem("date")
                        // && bus.startTime === sessionStorage.getItem("time")
                        // && 
                        bus.userType === localStorage.getItem("userType") &&
                        bus.journeyType === sessionStorage.getItem("journeyType") &&
                        bus.date === sessionStorage.getItem("date") && 
                        bus.startTime === sessionStorage.getItem("time") &&
                        bus.route === sessionStorage.getItem("route")
                    );

                 setBuses(filterResult);
            });
    }, []);

    return (
        <div className="section">
            <div className="container">
            <h4 className="section_title">সার্চ <span className="highlight">রেজাল্ট</span></h4>

                {
                    buses.length == 0 ?
                        <p className='search_message'>{sessionStorage.getItem('from')} থেকে {sessionStorage.getItem('to')} পর্যন্ত {sessionStorage.getItem('time')} টায় কোনো বাস এভেইলেবল নেই।</p>
                        :
                        <div className='desire_buses'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">বাসের নাম</th>
                                        <th scope="col">এভেইলেবল সিট</th>
                                        <th scope="col">অপশন</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        buses.map(bus =>
                                            <tr>
                                                <th>{bus.busName}</th>
                                                <td>{bus.available}</td>
                                                <td>
                                                    <Link to={`/searchResult/aBus/${bus._id}`}>
                                                        View Seats
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
};

export default SearchResult;