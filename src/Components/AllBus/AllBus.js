import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllBus.css';

const AllBus = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetch('https://evening-fjord-37023.herokuapp.com/addBus')
            .then(res => res.json())
            .then(data => setBuses(data));
    }, []);

    //DELETE DATA
    const handleDeleteData = id => {
        const proceed = window.confirm("সত্যিই ডিলেট করতে চান?");
        if (proceed) {
            const url = `https://evening-fjord-37023.herokuapp.com/addBus/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('ডাটা অ্যাডেড সাকসেসফুল্লী।');
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

                <div className="row">
                    {
                        buses.map(bus => <>
                            <div className="col-md-12 all_bus_info">
                                <p>{bus.busName}</p>
                                <p>{bus.journeyType}</p>
                                <p>{bus.date}</p>
                                <p>{bus.startTime}</p>
                                <p>{bus.userType}</p>
                                <p onClick={() => handleDeleteData(bus._id)} className="delete btn btn-danger">ডিলিট</p>

                                <p>
                                    <Link to={`/addBus/update/${bus._id}`} className="btn btn-warning">
                                        ইডিট
                                    </Link>
                                </p>
                            </div>
                        </>)
                    }
                </div>
            </div>
        </div>

    );
};

export default AllBus;