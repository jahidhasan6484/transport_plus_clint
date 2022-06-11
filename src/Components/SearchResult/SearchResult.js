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
                        bus.details.route === sessionStorage.getItem("route")
                        && bus.details.journeyType === sessionStorage.getItem("journeyType")
                        && bus.details.date === sessionStorage.getItem("date")
                        && bus.details.startTime === sessionStorage.getItem("time")
                        && bus.details.userType === sessionStorage.getItem("userType")
                    );

                setBuses(filterResult);

            });
    }, []);

    return (
        <div className="section_design search_result">
            <div className="container">
                <h4 className="section_title">Your search result</h4>

                <div className='desire_buses'>
                    {
                        buses.map(bus =>
                            <div class="row bus">
                                <div class="col bus_data">
                                    {bus.details.busName}
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
                                                    <div className="container">
                                                        <div className="seats">
                                                            <div>
                                                                <div className="coloum_name">A</div>
                                                                {
                                                                    aBus.seats?.[0]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} onClick={() => updateTicket(aBus.seats?.[0]?.seatName, aBus.seats?.[0]?.available)} className="seat available">{aBus.seats?.[0]?.seatName}</div>

                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[0]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[1]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} onClick={() => updateTicket(aBus.seats?.[1]?.seatName, aBus.seats?.[1]?.available)} className="seat available">{aBus.seats?.[1]?.seatName}</div>

                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[1]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[2]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} onClick={() => updateTicket(aBus.seats?.[2]?.seatName)} className="seat available">{aBus.seats?.[2]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[2]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[3]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} onClick={() => updateTicket(aBus.seats?.[3]?.seatName)} className="seat available">{aBus.seats?.[3]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[3]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[4]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} onClick={() => updateTicket(aBus.seats?.[4]?.seatName)} className="seat available">{aBus.seats?.[4]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[4]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[5]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[5]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[5]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[6]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[6]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[6]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[7]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[7]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[7]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[8]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[8]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[8]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[9]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[9]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[9]?.seatName}</div>
                                                                }
                                                            </div>

                                                            <div>
                                                                <div className="coloum_name">B</div>
                                                                {
                                                                    aBus.seats?.[10]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[10]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[10]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[11]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[11]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[11]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[12]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[12]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[12]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[13]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[13]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[13]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[14]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[14]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[14]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[15]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[15]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[15]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[16]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[16]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[16]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[17]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[17]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[17]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[18]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[18]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[18]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[19]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[19]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[19]?.seatName}</div>
                                                                }
                                                            </div>

                                                            <div>
                                                                <div className="coloum_name">CN</div>
                                                                <div className="seat_number">1</div>
                                                                <div className="seat_number">2</div>
                                                                <div className="seat_number">3</div>
                                                                <div className="seat_number">4</div>
                                                                <div className="seat_number">5</div>
                                                                <div className="seat_number">6</div>
                                                                <div className="seat_number">7</div>
                                                                <div className="seat_number">8</div>
                                                                <div className="seat_number">9</div>
                                                                <div className="seat_number">10</div>
                                                            </div>

                                                            <div>
                                                                <div className="coloum_name">C</div>
                                                                {
                                                                    aBus.seats?.[20]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[20]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[20]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[21]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[21]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[21]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[22]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[22]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[22]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[23]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[23]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[23]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[24]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[24]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[24]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[25]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[25]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[25]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[26]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[26]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[26]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[27]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[27]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[27]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[28]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[28]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[28]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[29]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[29]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[29]?.seatName}</div>
                                                                }
                                                            </div>

                                                            <div>
                                                                <div className="coloum_name">D</div>
                                                                {
                                                                    aBus.seats?.[30]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[30]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[30]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[31]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[31]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[31]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[32]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[32]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[32]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[33]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[33]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[33]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[34]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[34]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[34]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[35]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[35]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[35]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[36]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[36]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[36]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[37]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[37]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[37]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[38]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[38]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[38]?.seatName}</div>
                                                                }
                                                                {
                                                                    aBus.seats?.[39]?.available === true ?
                                                                        <>
                                                                            <div key={aBus._id} className="seat available">{aBus.seats?.[39]?.seatName}</div>
                                                                        </>
                                                                        :
                                                                        <div key={aBus._id} className="seat unavailable">{aBus.seats?.[39]?.seatName}</div>
                                                                }
                                                            </div>

                                                        </div>
                                                        <button className="standing_ticket_button" onClick={() => setSeat("Standing")}>Get a standing ticket</button>
                                                    </div>


                                                </div>
                                                <div className="col-md-4 pt-5">
                                                    <div className="ticket_details">
                                                        <p>Bus ID: </p>
                                                        <p>{aBus._id}</p>
                                                    </div>
                                                    <div className="ticket_details">
                                                        <p>Bus Name: </p>
                                                        <p>{aBus.busName}</p>
                                                    </div>
                                                    <div className="ticket_details">
                                                        <p>Departure Time: </p>
                                                        <p>{aBus.startTime}</p>
                                                    </div>
                                                    <div className="ticket_details">
                                                        <p>Departure Place: </p>
                                                        <p>{aBus.route}</p>
                                                    </div>
                                                    <div className="ticket_details">
                                                        <p>Your Seat: </p>
                                                        <p>
                                                            {
                                                                seat ?
                                                                    `${seat}`
                                                                    :
                                                                    "N/S"
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="ticket_details">
                                                        <p>Price: </p>
                                                        <p>
                                                            {
                                                                sessionStorage.getItem("userType") === "Faculty"
                                                                    ?
                                                                    "40 BDT"
                                                                    :
                                                                    "25 BDT"
                                                            }
                                                        </p>
                                                    </div>
                                                     <Link to="/payment"> 
                                                        <button onClick={handleUpdateTicket} className="submit_button">CONTINUE</button>
                                                     </Link> 
                                                </div>
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