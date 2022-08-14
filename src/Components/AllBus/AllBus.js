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
        const proceed = window.confirm("Do you really want to delete?");
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
        <div className="section" id="allBus">
            <div className="container" >
                <h4 className="section_title">অল <span className="highlight">বাস</span></h4>

                <table class="table">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">Bus Name</th>
                            <th scope="col">Journey Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Start Time</th>
                            <th scope="col">User Type</th>
                            <th scope="col">Action</th>
                            <th scope="col">Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buses.map(bus => <>
                                <tr>
                                    <td>{bus.busName}</td>
                                    <td>{bus.journeyType}</td>
                                    <td>{bus.date}</td>
                                    <td>{bus.startTime}</td>
                                    <td>{bus.userType}</td>
                                    <td onClick={() => handleDeleteData(bus._id)} className="delete">Delete</td>

                                    <td>
                                        <Link to={`/addBus/update/${bus._id}`}>
                                            Edit
                                        </Link>
                                    </td>

                                </tr>
                                {/* <p>Name: {bus.route} Start Time: {bus.startTime} <button onClick={() => handleDeleteData(bus._id)}>X</button>
                                        <Link to={`/addBus/update/${bus._id}`}>
                                            <button>Update</button>
                                        </Link>
                                    </p> */}

                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllBus;