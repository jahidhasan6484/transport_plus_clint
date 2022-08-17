import React, { useState } from "react";
import './ForgetPassword.css';
import auth from '../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import LoadingPage from "../Components/LoadingPage/LoadingPage";

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (sending) {
        return <>
            <LoadingPage />
        </>;
    }

    return (
        <div className="section">
            <div className="container">
                <h4 className="section_title">Forget <span className="highlight">Password</span></h4>
                <div className="row">
                    <div className="col-md-8">
                        <input className="form-control input_box"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn btn-dark mt-3"
                            onClick={async () => {
                                await sendPasswordResetEmail(email);
                                alert('A password reset email has been sent to your email address');
                            }}
                        >
                            Reset password
                        </button>
                    </div>

                    <div className="col-md-8"></div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword;