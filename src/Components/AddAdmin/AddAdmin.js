import React, { useRef } from 'react';
import api from '../API/API';

const AddAdmin = () => {
    const adminEmailRef = useRef();

    const handleAddAdmin = (e) => {
        const adminEmail = adminEmailRef.current.value;

        let studentEmailPattern = /@diu.edu.bd/;
        let facultyEmailPattern = /@daffodilvarsity.edu.bd/;

        if (studentEmailPattern.test(adminEmail)) {
            const newData = {
                adminEmail
            };

            fetch(`${api}/addAdmin`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("এডমিন অ্যাডেড সাকসেসফুল্লী।");
                        e.target.reset();
                    }
                })
        }
        else if (facultyEmailPattern.test(adminEmail)) {
            const newData = {
                adminEmail
            };

            fetch(`${api}/addAdmin`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        alert("এডমিন অ্যাডেড সাকসেসফুল্লী।");
                        e.target.reset();
                    }
                })
        } else {
            alert("Please add an authentic email");
        }
        e.preventDefault();
    }

    return (
        <div className='section'>
            <div className="container" id='addAdmin'>
                <h4 className="section_title">এড <span className="highlight">এডমিন</span></h4>

                <form onSubmit={handleAddAdmin}>
                    <div>
                        <label>নতুন এডমিন এর ইমেইল দিন</label>
                        <input ref={adminEmailRef} type="email" className='form-control input_box'></input>
                    </div>

                    <p className="text-warning">এডমিন সকল ধরনের ফাংশন একসেস করতে পারবে!</p>

                    <div>
                        <input type="submit" value="সাবমিট" className='btn btn-dark'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;