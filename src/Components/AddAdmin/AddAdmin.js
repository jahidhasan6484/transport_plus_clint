import React, { useRef } from 'react';

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
                        alert("You added a student as an admin");
                        e.target.reset();
                    }
                })
        }
        else if (facultyEmailPattern.test(adminEmail)) {
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
                        alert("You added a faculty as an admin");
                        e.target.reset();
                    }
                })
        }
        else {
            alert("Please add an authentic email");
        }
        e.preventDefault();
    }

    return (
        <div className="section_design">
            <div className="container">
                <h4 className="section_title">Add an Admin</h4>


                <form onSubmit={handleAddAdmin}>
                    <div>
                        <label>Add new admin email</label>
                        <input ref={adminEmailRef} type="email" className='form-control'></input>
                    </div>

                    <p className="warning2 pt-2">an admin can access all of the function!</p>

                    <div>
                        <input type="submit" className='_button'></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;