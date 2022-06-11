import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ABus = () => {
    const { id } = useParams();
    const [aBus, setABus] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/addBus/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data.A1))
    }, []);


    return (
        <div className='section_design'>
            <div className='container'>
                <h4 className='section_title'>A Bus</h4>

                <p>{id}</p>
               
              
            </div>
        </div>
    );
};

export default ABus;