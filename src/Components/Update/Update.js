import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 

const Update = () => {
    const { id } = useParams();
    const [bus, setBus] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/addBus/${id}`;
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
        const url = `http://localhost:5000/addBus/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bus)
        })
        .then()

        e.preventDefault();
    }

    return (
        <div className="section_design">
            <div className="container">
                <h4 className="section_title">Update</h4>
                <p>{id}</p>
                <p>{bus.busName}</p>
                <p>{bus.journeyType}</p>

                <form onSubmit={handleUpdateBus}>

                    <input type="text" onChange={handleBusNameChange} value={bus.busName || ""}></input>
                    <input type="text" onChange={handleJourneyTypeChange} value={bus.journeyType || ""}></input>

                    <input type="submit"></input>
                </form>

            </div>
        </div>
    );
};

export default Update;