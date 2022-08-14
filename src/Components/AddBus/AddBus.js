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

        const totalSeat = 33;
        const available = 33;
        const unavailable = 0;


        // const seats = [
        //     {
        //         seatName: 'A1',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A2',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A3',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A4',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A5',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A6',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A7',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A8',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A9',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'A10',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B1',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B2',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B3',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B4',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B5',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B6',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B7',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B8',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B9',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'B10',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C1',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C2',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C3',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C4',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C5',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C6',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C7',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C8',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C9',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'C10',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D1',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D2',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D3',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D4',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D5',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D6',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D7',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D8',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D9',
        //         isAvailable: true
        //     },
        //     {
        //         seatName: 'D10',
        //         isAvailable: true
        //     }
        // ];

        const seats = [
            {
                seatName: 'F1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'F2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S0',
            },
            
            {
                seatName: 'S0',
            },
            {
                seatName: 'S0',
            },
            {
                seatName: 'Driver',
            },


            {
                seatName: 'Entry',
            },
            {
                seatName: 'S1'
            },
            {
                seatName: 'B1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '1',
            },
            {
                seatName: 'C1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },


            {
                seatName: 'A1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S2'
            },
            {
                seatName: 'B2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '2',
            },
            {
                seatName: 'C2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },



            {
                seatName: 'A2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S3'
            },
            {
                seatName: 'B3',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '3',
            },
            {
                seatName: 'C3',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D3',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },


            {
                seatName: 'A3',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S4'
            },
            {
                seatName: 'B4',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '4',
            },
            {
                seatName: 'C4',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D4',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },


            {
                seatName: 'A4',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S5'
            },
            {
                seatName: 'B5',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '5',
            },
            {
                seatName: 'C5',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D5',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },


            {
                seatName: 'A5',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S6'
            },
            {
                seatName: 'B6',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '6',
            },
            {
                seatName: 'C6',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D6',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },



            {
                seatName: 'A6',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'S7'
            },
            {
                seatName: 'B7',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: '7',
            },
            {
                seatName: 'C7',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'D7',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },

            
            {
                seatName: 'E1',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'E2',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'E3',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            },
            {
                seatName: 'E4',
                isAvailable: true,
                owner: "",
                from: "",
                to: ""
            }
        ]
        let dateFormate = '';

        if (date) {
            dateFormate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        }

        //IMPORTANT(HAS USER TYPE)
        // const newData = {
        //     route, userType, busName, journeyType, startTime, date: dateFormate, totalSeat, available, unavailable, seats
        // };

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
        <div className='section'>
            <div className="container" id='addBus'>
            <h4 className="section_title">এড <span className="highlight">বাস</span></h4>
            <form onSubmit={handleAddData}>

                <div className='row'>
                    <div className='col-md-6'>
                        <label className="form-label">ROUTE</label>
                        <select ref={routeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Shyamoli Square</option>
                            {/* <option>Uttara</option>
                                <option>Tongi College Gate</option> */}
                        </select>
                    </div>

                    <div className='col-md-6'>
                        <label className="form-label">BUS NAME</label>
                        <select ref={busNameRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            {/* <option>Rajanigandha 06</option>
                                <option>Rajanigandha 08</option> */}
                            <option>Rajanigandha 12</option>
                            {/* <option>Surjomukhi 09</option> */}
                        </select>
                    </div>

                    <div className='col-md-6'>
                        <label className="form-label">USER TYPE</label>
                        <select ref={userTypeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            {/* <option>Student</option> */}
                            <option>Faculty</option>
                        </select>
                    </div>

                    <div className='col-md-6'>
                        <label className="form-label">JOURNEY TYPE</label>
                        <select ref={journeyTypeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>
                            <option>Departure</option>
                            <option>Return</option>
                        </select>
                    </div>

                    <div className='col-md-6'>
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
                    </div>

                    <div className='col-md-6'>
                        <label className="form-label">START TIME</label>
                        <select ref={startTimeRef} className="form-select" required>
                            <option selected="" disabled="" value="">Select...</option>

                            <option>07:00 AM</option>
                            <option>40:20 PM</option>

                            {/* <option>08:30 AM</option>
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
                                <option>05:30 PM</option> */}
                        </select>
                    </div>
                </div>

                <div>
                    <input type="submit" value="Add Bus" className='btn btn-dark' />
                </div>
            </form>
        </div>

        </div>
    );
};

export default AddBus;