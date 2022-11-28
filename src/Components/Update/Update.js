import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [bus, setBus] = useState({});

    useEffect(() => {
        const url = `https://transport-plus-server-4ys1.vercel.app/addBus/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBus(data))
    }, []);

    const handleBusNameChange = (e) => {
        const updatedName = e.target.value;
        const updatedBus = {
            ...bus,
            busName: updatedName
        };
        setBus(updatedBus);
    }

    const handleJourneyTypeChange = (e) => {
        const updatedJourneyType = e.target.value;
        const updatedBus = {
            ...bus,
            journeyType: updatedJourneyType
        };
        setBus(updatedBus);
    }

    const handleUpdateBus = (e) => {
        const url = `https://transport-plus-server-4ys1.vercel.app/addBus/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Seat booked successsfully");
                    setBus({});
                }
            })

        e.preventDefault();
    }

    return (
        <div className="section">
            <div className="container">
            <h4 className="section_title"><span className="highlight">আপডেট </span>বাস</h4>

                <form onSubmit={handleUpdateBus}>
                    <div>
                        <label className="form-label">বাসের নাম</label>
                        <input className="form-control" type="text" onChange={handleBusNameChange} value={bus.busName || ""}></input>
                    </div>
                    <div>
                        <label className="form-label">জার্নি টাইপ</label>
                        <input className="form-control" type="text" onChange={handleJourneyTypeChange} value={bus.journeyType || ""}></input>
                    </div>
                    <div>
                        <input type="submit" value="সেভ চেঞ্জেস" className='btn btn-dark' />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Update;