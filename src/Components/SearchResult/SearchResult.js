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
                        bus.route === sessionStorage.getItem("route")
                        && bus.journeyType === sessionStorage.getItem("journeyType")
                        && bus.date === sessionStorage.getItem("date")
                        && bus.startTime === sessionStorage.getItem("time")
                        && bus.userType === localStorage.getItem("userType")
                    );

                setBuses(filterResult);
            });
    }, []);

    return (
        <div className="section_design search_result">
            <div className="container">
                <h4 className="section_title">Your search result</h4>

                {
                    buses.length == 0 ?
                        <p className='search_message'>There is no bus available from {sessionStorage.getItem('from')} to {sessionStorage.getItem('to')} at {sessionStorage.getItem('time')}</p>
                        :
                        <div className='desire_buses'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Bus Name</th>
                                        <th scope="col">Available Seats</th>
                                        <th scope="col">Options</th>
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