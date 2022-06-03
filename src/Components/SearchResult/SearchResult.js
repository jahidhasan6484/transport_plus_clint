import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResult = () => {
    const [count, setCount] = useState("A3");



    const [buses, setBuses] = useState([]);

    const [select, setSelect] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/addBus')
            .then(res => res.json())
            .then(data => {
                const desire = data.filter(bus => bus.route === "Dhanmondi" && bus.userType === "Student" && bus.journeyType === "Return");
                setBuses(desire);
            });
    }, []);

    return (
        <div className="section_design search_result">
            <div className="container">
                <h4 className="section_title">Your search result</h4>

                {
                    buses.map(bus => <>

                        <div className="tab-content" id="nav-tabContent">
                            <div className="row">
                                <div className="col ticket_count">
                                    <p>Total</p>
                                    <p>{bus.totalSeat}</p>
                                </div>
                                <div className="col ticket_count">
                                    <p>Avialable</p>
                                    <p>{bus.available}</p>
                                </div>
                                <div className="col ticket_count">
                                    <p>Unavailable</p>
                                    <p>{bus.unavailable}</p>
                                </div>
                                <div className="col ticket_count">
                                    <p>Standing</p>
                                    <p>{bus.standingTicket}</p>
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
                                                bus.seats?.[0]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[0]?.seatName}</div>

                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[0]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[1]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[1]?.seatName}</div>

                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[1]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[2]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[2]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[2]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[3]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[3]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[3]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[4]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[4]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[4]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[5]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[5]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[5]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[6]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[6]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[6]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[7]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[7]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[7]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[8]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[8]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[8]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[9]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[9]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[9]?.seatName}</div>
                                            }
                                        </div>

                                        <div>
                                            <div className="coloum_name">B</div>
                                            {
                                                bus.seats?.[10]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[10]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[10]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[11]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[11]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[11]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[12]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[12]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[12]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[13]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[13]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[13]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[14]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[14]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[14]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[15]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[15]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[15]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[16]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[16]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[16]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[17]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[17]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[17]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[18]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[18]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[18]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[19]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[19]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[19]?.seatName}</div>
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
                                                bus.seats?.[20]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[20]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[20]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[21]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[21]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[21]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[22]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[22]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[22]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[23]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[23]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[23]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[24]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[24]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[24]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[25]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[25]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[25]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[26]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[26]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[26]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[27]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[27]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[27]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[28]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[28]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[28]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[29]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[29]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[29]?.seatName}</div>
                                            }
                                        </div>

                                        <div>
                                            <div className="coloum_name">D</div>
                                            {
                                                bus.seats?.[30]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[30]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[30]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[31]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[31]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[31]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[32]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[32]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[32]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[33]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[33]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[33]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[34]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[34]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[34]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[35]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[35]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[35]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[36]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[36]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[36]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[37]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[37]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[37]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[38]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[38]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[38]?.seatName}</div>
                                            }
                                            {
                                                bus.seats?.[39]?.available === true ?
                                                    <>
                                                        <div key={bus._id} className="seat available">{bus.seats?.[39]?.seatName}</div>
                                                    </>
                                                    :
                                                    <div key={bus._id} className="seat unavailable">{bus.seats?.[39]?.seatName}</div>
                                            }
                                        </div>




                                    </div>
                                    <button className="standing_ticket_button" onClick={() => setCount("Standing")}>Get a standing ticket</button>
                                </div>


                            </div>
                            <div className="col-md-4 pt-5">
                                <div className="ticket_details">
                                    <p>Bus Name: </p>
                                    <p>{bus.busName}</p>
                                </div>
                                <div className="ticket_details">
                                    <p>Departure Time: </p>
                                    <p>{bus.startTime}</p>
                                </div>
                                <div className="ticket_details">
                                    <p>Departure Place: </p>
                                    <p>Dhanmondi</p>
                                </div>
                                <div className="ticket_details">
                                    <p>Your Seat: </p>
                                    <p>{count}</p>
                                </div>
                                <div className="ticket_details">
                                    <p>Price: </p>
                                    <p>35 BDT</p>
                                </div>
                                <Link to="/payment">
                                    <button className="submit_button">CONTINUE</button>
                                </Link>
                            </div>
                        </div>




                    </>)
                }





            </div>
        </div>
    );
};

export default SearchResult;