import React, { useEffect, useState } from "react";
import './ABus.css';
import { useParams } from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiSteeringWheel } from 'react-icons/gi';


const ABus = () => {
    const [user] = useAuthState(auth);

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

    const [userTicket, setUserTicket] = useState({
        user: "",
        seatName: "",
        busName: "",
        date: "",
        journeyType: ""
    })

    const handleTicketSelect = (seatNumber, index, user) => {
        setSeat(seatNumber);

        const setSelected = () => {
            let bus = { ...aBus }
            let userNewTicket = { ...userTicket }
            if (toSelected != null) {
                console.log("To selected Value :", bus.seats[toSelected])
                bus.seats[toSelected].isAvailable = true;
            }
            bus.seats[index].isAvailable = false;
            bus.seats[index].owner = `${user.email}`;
            bus.seats[index].from = `${sessionStorage.getItem("from")}`;
            bus.seats[index].to = `${sessionStorage.getItem("to")}`;

            userNewTicket.user = `${user.email}`;
            userNewTicket.seatName = bus.seats[index].seatName;
            userNewTicket.busName = bus.busName;
            userNewTicket.date = bus.date;
            userNewTicket.journeyType = `${sessionStorage.getItem("journeyType")}`;

            setUserTicket(userNewTicket);
            setToSelected(index);
            return bus;
        }
        setABus(setSelected());
    }

    //From Database
    const [canBookTicket, setCanBookTicket] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/updateUserTicketCollection')
            .then(res => res.json())
            .then(data => {
                const filterResult =
                    data.filter(ticket =>
                        ticket.user === `${user.email}` &&
                        ticket.date == sessionStorage.getItem("date") &&
                        ticket.journeyType == sessionStorage.getItem("journeyType")
                    );
                setCanBookTicket(filterResult);
            });
    }, []);

    console.log("canBookTicket:", canBookTicket.length)


    const handleUpdateTicket = () => {

        if (seat === null) {
            alert("Please select an available ticket");
        } else if (canBookTicket.length < 1) {
            const url = `http://localhost:5000/updateTicket/${id}`;
            const url2 = "http://localhost:5000/updateUserTicketCollection";

            fetch(url2, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userTicket)
            })

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
        } else {
            alert("You can not buy more than one ticket for a journey!");
        }
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );

    return (
        <div className='section'>
            <div className='container'>
                <h4 className="section_title"><span className="highlight">{aBus.busName}</span></h4>

                <div className="tab-content" id="nav-tabContent">
                    <div className="row">
                        <div className="col ticket_count">
                            <p>টোটাল</p>
                            <p>{aBus.totalSeat}</p>
                        </div>
                        <div className="col ticket_count">
                            <p>এভেইলেবল</p>
                            <p>{aBus.available}</p>
                        </div>
                        <div className="col ticket_count">
                            <p>আনএভেইলেবল</p>
                            <p>{aBus.unavailable}</p>
                        </div>
                    </div>
                </div>

                <div className="row ticket_ui">
                    <div className="row">
                        <div className="col-md-8 seat_status">
                            <div className="col status_color avialable_seat">এভেইলেবল</div>
                            <div className="col status_color selected_seat">সিলেক্টেড</div>
                            <div className="col status_color shyamoli_seat">শ্যামলী</div>
                            <div className="col status_color kallyanpur_seat">কল্যাণপুর</div>
                        </div>
                    </div>

                    <div className="col-md-8 ticket_interface">

                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 0 && index <= 5 && seat.seatName == 'S0') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 0 && index <= 5 && seat.seatName == 'Driver') {
                                        return (
                                            <div className="col">
                                                <GiSteeringWheel className="wheel" />
                                            </div>
                                        )
                                    } else if (index >= 0 && index <= 5 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 0 && index <= 5 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 0 && index <= 5 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>

                        <div className="row mt-5">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 6 && index <= 11 && seat.seatName == 'S1') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 6 && index <= 11 && seat.seatName == '1') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 6 && index <= 11 && seat.seatName == 'Entry') {
                                        return (
                                            <div className="col ticket_point">গেট</div>
                                        )
                                    } else if (index >= 6 && index <= 11 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 6 && index <= 11 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 6 && index <= 11 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 12 && index <= 17 && seat.seatName == 'S2') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 12 && index <= 17 && seat.seatName == '2') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 12 && index <= 17 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 12 && index <= 17 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 12 && index <= 17 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 18 && index <= 23 && seat.seatName == 'S3') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 18 && index <= 23 && seat.seatName == '3') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 18 && index <= 23 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 18 && index <= 23 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 18 && index <= 23 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 24 && index <= 29 && seat.seatName == 'S4') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 24 && index <= 29 && seat.seatName == '4') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 24 && index <= 29 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 24 && index <= 29 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 24 && index <= 29 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 30 && index <= 35 && seat.seatName == 'S5') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 30 && index <= 35 && seat.seatName == '5') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 30 && index <= 35 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 30 && index <= 35 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 30 && index <= 35 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 36 && index <= 41 && seat.seatName == 'S6') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 36 && index <= 41 && seat.seatName == '6') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 36 && index <= 41 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 36 && index <= 41 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 36 && index <= 41 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 42 && index <= 47 && seat.seatName == 'S7') {
                                        return (
                                            <div className="col"></div>
                                        )
                                    } else if (index >= 42 && index <= 47 && seat.seatName == '7') {
                                        return (
                                            <div className="col ticket_point">{seat.seatName}</div>
                                        )
                                    } else if (index >= 42 && index <= 47 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 42 && index <= 47 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 42 && index <= 47 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className="row">
                            {
                                aBus && Array.isArray(aBus.seats) && aBus.seats.map((seat, index) => {

                                    if (index >= 48 && index <= 51 && seat.isAvailable == true) {
                                        return (
                                            <div onClick={() => handleTicketSelect(seat.seatName, index, user)} className={`col a_seat ${index === toSelected ? "selected" : "available"}`} seatName>{seat.seatName}</div>
                                        )
                                    } else if (index >= 48 && index <= 51 && seat.isAvailable == false && (seat.from === "Kallyanpur" || seat.to === "Kallyanpur")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "kallyanpur"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    } else if (index >= 48 && index <= 51 && seat.isAvailable == false && (seat.from === "Shyamoli Square" || seat.to === "Shyamoli Square")) {
                                        return (
                                            <OverlayTrigger
                                                placement="right"
                                                delay={{ show: 250, hide: 400 }}
                                                overlay={renderTooltip(seat.owner)}
                                            >
                                                <div className={`col a_seat ${index === toSelected ? "selected" : "shyamoli"}`} seatName>{seat.seatName}</div>
                                            </OverlayTrigger>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>

                    <div className="col-md-4 pt-5">
                        <div className="ticket_details">
                            <p>বাসের নাম: </p>
                            <p>{aBus.busName}</p>
                        </div>
                        <div className="ticket_details">
                            <p>ইউজার টাইপ: </p>
                            <p>{aBus.userType}</p>
                        </div>
                        <div className="ticket_details">
                            <p>ডিপার্চার টাইম: </p>
                            <p>{aBus.startTime}</p>
                        </div>
                        <div className="ticket_details">
                            <p>ডিপার্চার প্লেস: </p>
                            <p>{aBus.route}</p>
                        </div>
                        <div className="ticket_details">
                            <p>আপনার সিট: </p>
                            <p>
                                {
                                    seat ?
                                        `${seat}`
                                        :
                                        "Not Selected"
                                }
                            </p>
                        </div>
                        {/* <div className="ticket_details">
                            <p>Price: </p>
                            <p>
                                {
                                    sessionStorage.getItem("userType") ==== "Faculty"
                                        ?
                                        "40 BDT"
                                        :
                                        "25 BDT"
                                }
                            </p>
                        </div> */}
                        {
                            <button onClick={handleUpdateTicket} className="btn btn-dark">Continue</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ABus;