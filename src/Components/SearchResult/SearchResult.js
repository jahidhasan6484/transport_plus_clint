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
                         && bus.userType === sessionStorage.getItem("userType")
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
                            {
                                buses.map(bus =>
                                    <div class="row bus">
                                        <div class="col bus_data">
                                            {bus.busName}
                                        </div>
                                        <div class="col bus_data">
                                            <Link to={`/searchResult/aBus/${bus._id}`}>
                                                <button>View Seat</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                }

                {/* {
                    showABus &&
                    <div>
                        {
                            aBus.length == 0 ?
                                <p>No bus available from {sessionStorage.getItem("from")} to {sessionStorage.getItem("to")} at {sessionStorage.getItem("time")}</p>
                                :
                                <>
                                    {
                                        aBus.map(aBus => <>

                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="row">
                                                    <div className="col ticket_count">
                                                        <p>Total</p>
                                                        <p>{aBus.totalSeat}</p>
                                                    </div>
                                                    <div className="col ticket_count">
                                                        <p>Avialable</p>
                                                        <p>{aBus.available}</p>
                                                    </div>
                                                    <div className="col ticket_count">
                                                        <p>Unavailable</p>
                                                        <p>{aBus.unavailable}</p>
                                                    </div>
                                                    <div className="col ticket_count">
                                                        <p>Standing</p>
                                                        <p>{aBus.standingTicket}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row ticket_ui">
                                                <div className="col-md-8">
                                                    <div className="seat_status">
                                                        <p className="avialable_seat"> Avialable</p>
                                                        <p className="selected_seat"> Selected</p>
                                                        <p className="unavialable_seat"> Unavailable</p>
                                                    </div>
                                                    




                                        </>)
                                    }
                                </>
                        }
                    </div>
                } */}










            </div>
        </div>
    );
};

export default SearchResult;