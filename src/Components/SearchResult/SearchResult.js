import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('https://evening-fjord-37023.herokuapp.com/addBus')
            .then(res => res.json())
            .then(data => {
                const filterResult =
                    data.filter(bus =>
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
                            <div className='row'>
                                <div className='col-md-12 search_bus_content'>
                                    <div className='col search_bus_info'>বাসের নাম</div>
                                    <div className='col search_bus_info'>এভেইলেবল সিট</div>
                                    <div className='col search_bus_info'>অপশন</div>
                                </div>
                                <div className='col-md-12 search_bus_content'>
                                    {
                                        buses.map(bus =>
                                            <>
                                                <div className='col search_bus_info'>{bus.busName}</div>
                                                <div className='col search_bus_info'>{bus.available}</div>
                                                <div className='col search_bus_info'>
                                                    <Link to={`/searchResult/aBus/${bus._id}`} className="btn btn-warning">
                                                        View Seats
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default SearchResult;