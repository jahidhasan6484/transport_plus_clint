import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBus = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addBus')
            .then(res => res.json())
            .then(data => setBuses(data));
    }, []);

    //DELETE DATA
    const handleDeleteData = id => {
        const proceed = window.confirm("Want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/addBus/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingBuses = buses.filter(bus => bus._id !== id);
                        setBuses(remainingBuses);
                    }
                })
        }
    }

    return (
        <div className="section_design">
            <div className="container">
                <h4 className="section_title">All Bus</h4>

                {
                    buses.map(bus => <>

                        <p>Name: {bus.route} Start Time: {bus.startTime} <button onClick={() => handleDeleteData(bus._id)}>X</button>
                            <Link to={`/addBus/update/${bus._id}`}>
                                <button>Update</button>
                            </Link>
                        </p>

                    </>)
                }



            </div>
        </div>
    );
};

export default AllBus;