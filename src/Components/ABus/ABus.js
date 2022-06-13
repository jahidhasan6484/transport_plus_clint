import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ABus = () => {
    const { id } = useParams();
    const [aBus, setABus] = useState([]);
    const [seat, setSeat] = useState(null);
    const [toSelected, setToSelected] = useState(null)

    useEffect(() => {
        const url = `http://localhost:5000/addBus/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setABus(data))
    }, []);

    const handleTicketSelect = (seatNumber, index) => {
        setSeat(seatNumber);

        const setSelected = () => {
            let bus = { ...aBus }
            if (toSelected != null) {
                console.log("To selected Value :", bus.seats[toSelected])
                bus.seats[toSelected].isAvailable = true;
            }
            bus.seats[index].isAvailable = false;
            setToSelected(index);
            return bus
        }

        setABus(setSelected());
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
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {
                                    if (seat.isAvailable) {
                                        return <div onClick={() => handleTicketSelect(seat.seatName, index)} className={`seat ${index === toSelected ? "selected" : "available"}`}>{seat.seatName}</div>
                                    } else {
                                        return <div className={`seat ${index === toSelected ? "selected" : "unavailable"}`}>{seat.seatName}</div>
                                    }
                                })
                            }
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