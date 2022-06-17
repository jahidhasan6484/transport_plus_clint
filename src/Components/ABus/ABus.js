import React, { useEffect, useState } from "react";
import './ABus.css';
import { useParams } from "react-router-dom";

const ABus = () => {
    const { id } = useParams();
    const [aBus, setABus] = useState([]);
    const [seat, setSeat] = useState(null);
    const [toSelected, setToSelected] = useState(null);

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

        if (seat === null) {
            alert("Please select an available ticket");
        }
        else {
            const url = `http://localhost:5000/updateTicket/${id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(aBus)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert("Seat booked successsfully, please check dashboard for more details");
                        window.location.reload(true);
                    }
                })
        }
    }


    return (
        <div className='section_design'>
            <div className='container'>
            <h4 className="section_title">{aBus.busName}</h4>
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
                    </div>
                </div>

                <div className="row ticket_ui">

                    <div className="seat_status">
                        <p className="avialable_seat"> Avialable</p>
                        <p className="selected_seat"> Selected</p>
                        <p className="unavialable_seat"> Unavailable</p>
                    </div>



                    <div className="col-md-8 aBusAllSeats">
                        <div className="seats">
                            <div>
                                <div className="coloum_name">A

                                    {
                                        aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                            if (index < 10 && seat.isAvailable === true) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button onClick={() => handleTicketSelect(seat.seatName, index)} className={`seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</button>
                                                    </div>

                                                </>
                                            } else if (index < 10 && seat.isAvailable === false) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button className={`seat ${index === toSelected ? "selected" : "unavailable"}`} seatName>{seat.seatName}</button>
                                                    </div>
                                                </>
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="coloum_name">B

                                    {
                                        aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                            if (index >= 10 && index < 20 && seat.isAvailable === true) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button onClick={() => handleTicketSelect(seat.seatName, index)} className={`seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</button>
                                                    </div>

                                                </>
                                            } else if (index >= 10 && index < 20 && seat.isAvailable === false) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button className={`seat ${index === toSelected ? "selected" : "unavailable"}`} seatName>{seat.seatName}</button>
                                                    </div>
                                                </>
                                            }
                                        })
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="coloum_name">CN</div>
                                <div className="seat_number">
                                    <button className="seat">1</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">2</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">3</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">4</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">5</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">6</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">7</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">8</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">9</button>
                                </div>
                                <div className="seat_number">
                                    <button className="seat">10</button>
                                </div>


                            </div>
                            <div>
                                <div className="coloum_name">C

                                    {
                                        aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                            if (index >= 20 && index < 30 && seat.isAvailable === true) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button onClick={() => handleTicketSelect(seat.seatName, index)} className={`seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</button>
                                                    </div>

                                                </>
                                            } else if (index >= 20 && index < 30 && seat.isAvailable === false) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button className={`seat ${index === toSelected ? "selected" : "unavailable"}`} seatName>{seat.seatName}</button>
                                                    </div>
                                                </>
                                            }
                                        })
                                    }
                                </div>
                            </div>

                            <div>
                                <div className="coloum_name">D

                                    {
                                        aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                            if (index >= 30 && index < 40 && seat.isAvailable === true) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button onClick={() => handleTicketSelect(seat.seatName, index)} className={`seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</button>
                                                    </div>

                                                </>
                                            } else if (index >= 30 && index < 40 && seat.isAvailable === false) {
                                                return <>
                                                    <div className="col-md-3 col-sm-3">
                                                        <button className={`seat ${index === toSelected ? "selected" : "unavailable"}`} seatName>{seat.seatName}</button>
                                                    </div>
                                                </>
                                            }
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 pt-5">
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
                        {
                            <button onClick={handleUpdateTicket} className="_button continue_button">CONTINUE</button>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABus;