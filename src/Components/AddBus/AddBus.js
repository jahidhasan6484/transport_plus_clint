import React, { useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import addDays from 'date-fns/addDays';

const AddBus = () => {
    const routeRef = useRef();
    const userTypeRef = useRef();
    const busNameRef = useRef();
    const journeyTypeRef = useRef();
    const startTimeRef = useRef();
    const [date, setDate] = useState(null);

    const handleAddData = (e) => {
        const route = routeRef.current.value;
        const userType = userTypeRef.current.value;
        const busName = busNameRef.current.value;
        const journeyType = journeyTypeRef.current.value;
        const startTime = startTimeRef.current.value;

        const totalSeat = 40;
        const available = 40;
        const unavailable = 0;
        const standingTicket = 10;

        const seats = [
            {
                seatName: 'A1',
                available: true
            },
            {
                seatName: 'A2',
                available: true
            },
            {
                seatName: 'A3',
                available: true
            },
            {
                seatName: 'A4',
                available: true
            },
            {
                seatName: 'A5',
                available: true
            },
            {
                seatName: 'A6',
                available: true
            },
            {
                seatName: 'A7',
                available: true
            },
            {
                seatName: 'A8',
                available: true
            },
            {
                seatName: 'A9',
                available: true
            },
            {
                seatName: 'A10',
                available: true
            },
            {
                seatName: 'B1',
                available: true
            },
            {
                seatName: 'B2',
                available: true
            },
            {
                seatName: 'B3',
                available: true
            },
            {
                seatName: 'B4',
                available: true
            },
            {
                seatName: 'B5',
                available: true
            },
            {
                seatName: 'B6',
                available: true
            },
            {
                seatName: 'B7',
                available: true
            },
            {
                seatName: 'B8',
                available: true
            },
            {
                seatName: 'B9',
                available: true
            },
            {
                seatName: 'B10',
                available: true
            },
            {
                seatName: 'C1',
                available: true
            },
            {
                seatName: 'C2',
                available: true
            },
            {
                seatName: 'C3',
                available: true
            },
            {
                seatName: 'C4',
                available: true
            },
            {
                seatName: 'C5',
                available: true
            },
            {
                seatName: 'C6',
                available: true
            },
            {
                seatName: 'C7',
                available: true
            },
            {
                seatName: 'C8',
                available: true
            },
            {
                seatName: 'C9',
                available: true
            },
            {
                seatName: 'C10',
                available: true
            },
            {
                seatName: 'D1',
                available: true
            },
            {
                seatName: 'D2',
                available: true
            },
            {
                seatName: 'D3',
                available: true
            },
            {
                seatName: 'D4',
                available: true
            },
            {
                seatName: 'D5',
                available: true
            },
            {
                seatName: 'D6',
                available: true
            },
            {
                seatName: 'D7',
                available: true
            },
            {
                seatName: 'D8',
                available: true
            },
            {
                seatName: 'D9',
                available: true
            },
            {
                seatName: 'D10',
                available: true
            }
        ];


        const newData = {
            route, userType, busName, journeyType, startTime, date, seats, totalSeat, available, unavailable, standingTicket
        };

        fetch('http://localhost:5000/addBus', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Data added successfully");
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className='section_design'>
            <div className="container">
                <h4 className='section_title'>Add bus</h4>
                <form onSubmit={handleAddData}>

                    <div>
                        <label className="form-label">ROUTE</label>
                        <select ref={routeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Dhanmondi</option>
                            <option>Uttara</option>
                            <option>Tongi College Gate</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label">BUS NAME</label>
                        <select ref={busNameRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Rajanigandha 06</option>
                            <option>Rajanigandha 08</option>
                            <option>Rajanigandha 11</option>
                            <option>Surjomukhi 09</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label">USER TYPE</label>
                        <select ref={userTypeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Student</option>
                            <option>Faculty</option>
                        </select>
                    </div>

                    <div>
                        <label className="form-label">JOURNEY TYPE</label>
                        <select ref={journeyTypeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Departure</option>
                            <option>Return</option>
                        </select>
                    </div>

                    <label className="form-label">DATE</label>

                    <DatePicker className="form-select"
                        selected={date}
                        onChange={(e) => setDate(e)}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 4)}
                        dateFormat="MMMM d, yyyy"
                        placeholderText="June 11, 2022"
                        required
                    />

                    <div>
                        <label className="form-label">START TIME</label>
                        <select ref={startTimeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>08:30 AM</option>
                            <option>09:00 AM</option>
                            <option>09:30 AM</option>
                            <option>10:00 AM</option>
                            <option>10:30 AM</option>
                            <option>11:00 AM</option>
                            <option>11:30 AM</option>
                            <option>12:00 PM</option>
                            <option>03:00 PM</option>
                            <option>03:50 PM</option>
                            <option>04:00 PM</option>
                            <option>04:30 PM</option>
                            <option>05:00 PM</option>
                            <option>05:30 PM</option>
                        </select>
                    </div>


                    {/* <input type="text" ref={routeRef} className="form-control mb-5" placeholder='Route' />
                    <input type="text" ref={userTypeRef} className="form-control mb-5" placeholder='User Type' />
                    <input type="text" ref={busNameRef} className="form-control mb-5" placeholder='Bus Name' />
                    <input type="text" ref={journeyTypeRef} className="form-control mb-5" placeholder='Journey Type' />
                    <input type="text" ref={startTimeRef} className="form-control mb-5" placeholder='Start Time' />
                    <input type="text" ref={dateRef} className="form-control mb-5" placeholder='Date' /> */}

                    <input type="submit" value="Add Data" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default AddBus;