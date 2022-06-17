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


        const seats = [
            {
                seatName: 'A1',
                isAvailable: true
            },
            {
                seatName: 'A2',
                isAvailable: true
            },
            {
                seatName: 'A3',
                isAvailable: true
            },
            {
                seatName: 'A4',
                isAvailable: true
            },
            {
                seatName: 'A5',
                isAvailable: true
            },
            {
                seatName: 'A6',
                isAvailable: true
            },
            {
                seatName: 'A7',
                isAvailable: true
            },
            {
                seatName: 'A8',
                isAvailable: true
            },
            {
                seatName: 'A9',
                isAvailable: true
            },
            {
                seatName: 'A10',
                isAvailable: true
            },
            {
                seatName: 'B1',
                isAvailable: true
            },
            {
                seatName: 'B2',
                isAvailable: true
            },
            {
                seatName: 'B3',
                isAvailable: true
            },
            {
                seatName: 'B4',
                isAvailable: true
            },
            {
                seatName: 'B5',
                isAvailable: true
            },
            {
                seatName: 'B6',
                isAvailable: true
            },
            {
                seatName: 'B7',
                isAvailable: true
            },
            {
                seatName: 'B8',
                isAvailable: true
            },
            {
                seatName: 'B9',
                isAvailable: true
            },
            {
                seatName: 'B10',
                isAvailable: true
            },
            {
                seatName: 'C1',
                isAvailable: true
            },
            {
                seatName: 'C2',
                isAvailable: true
            },
            {
                seatName: 'C3',
                isAvailable: true
            },
            {
                seatName: 'C4',
                isAvailable: true
            },
            {
                seatName: 'C5',
                isAvailable: true
            },
            {
                seatName: 'C6',
                isAvailable: true
            },
            {
                seatName: 'C7',
                isAvailable: true
            },
            {
                seatName: 'C8',
                isAvailable: true
            },
            {
                seatName: 'C9',
                isAvailable: true
            },
            {
                seatName: 'C10',
                isAvailable: true
            },
            {
                seatName: 'D1',
                isAvailable: true
            },
            {
                seatName: 'D2',
                isAvailable: true
            },
            {
                seatName: 'D3',
                isAvailable: true
            },
            {
                seatName: 'D4',
                isAvailable: true
            },
            {
                seatName: 'D5',
                isAvailable: true
            },
            {
                seatName: 'D6',
                isAvailable: true
            },
            {
                seatName: 'D7',
                isAvailable: true
            },
            {
                seatName: 'D8',
                isAvailable: true
            },
            {
                seatName: 'D9',
                isAvailable: true
            },
            {
                seatName: 'D10',
                isAvailable: true
            }
        ];

        let dateFormate = '';

        if (date) {
            dateFormate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }

        const newData = {
            route, userType, busName, journeyType, startTime, date: dateFormate, totalSeat, available, unavailable, seats
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
                    setDate(null);
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

                    <div>
                        <input type="submit" value="Add Bus" className='_button' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBus;