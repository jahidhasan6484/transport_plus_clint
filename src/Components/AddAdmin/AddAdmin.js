import React, { useRef } from 'react';

const AddAdmin = () => {
    const adminEmailRef = useRef();

    const handleAddAdmin = (e) => {
        const adminEmail = adminEmailRef.current.value;



        const newData = {
            adminEmail
        };

        fetch('http://localhost:5000/addAdmin', {
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
        <div className="section_design">
            <div className="container">
                <h4 className="section_title">Add an Admin</h4>

                <form onSubmit={handleAddAdmin}>
                    <label>Add new admin email</label>
                    <input ref={adminEmailRef} type="email" className='form-control'></input>

                    <input type="submit" className='btn btn-primary mt-5'></input>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;