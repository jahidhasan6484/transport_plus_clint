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

        const newData = {
            route, userType, busName, journeyType, startTime, date: dateFormate, totalSeat, available, unavailable, seats
        };

        fetch('https://transport-plus-server.herokuapp.com/addBus', {
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
                            <label className="form-label">রুট</label>
                            <select ref={routeRef} className="form-select" required>
                                <option selected="" disabled="" value="">সিলেক্ট...</option>
                                <option>Shyamoli Square</option>
                            </select>
                        </div>

                        <div className='col-md-6'>
                            <label className="form-label">বাসের নাম</label>
                            <select ref={busNameRef} className="form-select" required>
                                <option selected="" disabled="" value="">সিলেক্ট...</option>
                                <option>Rajanigandha 12</option>
                            </select>
                        </div>

                        <div className='col-md-6'>
                            <label className="form-label">ইউজার টাইপ</label>
                            <select ref={userTypeRef} className="form-select" required>
                                <option selected="" disabled="" value="">সিলেক্ট...</option>
                                <option>Faculty</option>
                            </select>
                        </div>

                        <div className='col-md-6'>
                            <label className="form-label">জার্নি টাইপ</label>
                            <select ref={journeyTypeRef} className="form-select" required>
                                <option selected="" disabled="" value="">সিলেক্ট...</option>
                                <option>Departure</option>
                                <option>Return</option>
                            </select>
                        </div>

                        <div className='col-md-6'>
                            <label className="form-label">ডেট</label>

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
                            <label className="form-label">স্টার্ট টাইম</label>
                            <select ref={startTimeRef} className="form-select" required>
                                <option selected="" disabled="" value="">সিলেক্ট...</option>
                                <option>07:00 AM</option>
                                <option>04:20 PM</option>
                            </select>
                        </div>

                    </div>
                    <div>
                        <input type="submit" value="এড বাস" className='btn btn-dark' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBus;