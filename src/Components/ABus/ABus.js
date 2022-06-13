import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ABus = () => {
    const { id } = useParams();
    const [aBus, setABus] = useState([]);
    const [seat, setSeat] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/addBus/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setABus(data))
    }, []);

    const handleTicketSelect = (seatNumber) => {
        setSeat(seatNumber);
        setABus.seats?.[0]?.isAvailable(false);
    }

    const handleUpdateTicket = () => {
        const url = `http://localhost:5000/updateTicket/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ABus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Seat booked successsfully");
                }
            })
    }



    return (
        <div className='section_design'>
            <div className='container'>
                <h4 className='section_title'>A Bus</h4>

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
                                        aBus.seats?.[0]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[0]?.seatName)} className="seat available">{aBus.seats?.[0]?.seatName}</div>

                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[0]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[1]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[1]?.seatName)} className="seat available">{aBus.seats?.[1]?.seatName}</div>

                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[1]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[2]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[2]?.seatName)} className="seat available">{aBus.seats?.[2]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[2]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[3]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[3]?.seatName)} className="seat available">{aBus.seats?.[3]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[3]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[4]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[4]?.seatName)} className="seat available">{aBus.seats?.[4]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[4]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[5]?.isAvailable ?
                                            <>
                                                <div onClick={() => handleTicketSelect(aBus.seats?.[5]?.seatName)} className="seat available">{aBus.seats?.[5]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[5]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[6]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[6]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[6]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[7]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[7]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[7]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[8]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[8]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[8]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[9]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[9]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[9]?.seatName}</div>
                                    }
                                </div>

                                <div>
                                    <div className="coloum_name">B</div>
                                    {
                                        aBus.seats?.[10]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[10]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[10]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[11]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[11]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[11]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[12]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[12]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[12]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[13]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[13]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[13]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[14]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[14]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[14]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[15]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[15]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[15]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[16]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[16]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[16]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[17]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[17]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[17]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[18]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[18]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[18]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[19]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[19]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[19]?.seatName}</div>
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
                                        aBus.seats?.[20]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[20]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[20]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[21]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[21]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[21]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[22]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[22]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[22]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[23]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[23]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[23]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[24]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[24]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[24]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[25]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[25]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[25]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[26]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[26]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[26]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[27]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[27]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[27]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[28]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[28]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[28]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[29]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[29]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[29]?.seatName}</div>
                                    }
                                </div>

                                <div>
                                    <div className="coloum_name">D</div>
                                    {
                                        aBus.seats?.[30]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[30]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[30]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[31]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[31]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[31]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[32]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[32]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[32]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[33]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[33]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[33]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[34]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[34]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[34]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[35]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[35]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[35]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[36]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[36]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[36]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[37]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[37]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[37]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[38]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[38]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[38]?.seatName}</div>
                                    }
                                    {
                                        aBus.seats?.[39]?.isAvailable ?
                                            <>
                                                <div className="seat available">{aBus.seats?.[39]?.seatName}</div>
                                            </>
                                            :
                                            <div className="seat unavailable">{aBus.seats?.[39]?.seatName}</div>
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
                            <p>User Type: </p>
                            <p>{aBus.userType}</p>
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
                                        "Not Selected"
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

                        <button onClick={handleUpdateTicket} className="submit_button">CONTINUE</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABus;