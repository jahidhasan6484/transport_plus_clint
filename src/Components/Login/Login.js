import React, { useEffect, useState } from "react";
import "./Login.css";
import auth from '../../firebase.init';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import login from '../../images/bg/login.gif';

const Login = () => {

    const [user] = useAuthState(auth);

    // for term agree and not agree:
    const [agree, setAgree] = useState(false);

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
    });

    const [
        signInWithEmailAndPassword,
        loading
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        <LoadingPage />
    }


    const handleEmailChange = (event) => {
        let studentEmailPattern = /@diu.edu.bd/;
        let facultyEmailPattern = /@daffodilvarsity.edu.bd/;

        if (studentEmailPattern.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" });
            localStorage.setItem('userType', "Faculty");
        }
        else if (facultyEmailPattern.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" });
            localStorage.setItem('userType', "Faculty");
        }
        else {
            setErrors({ ...errors, emailError: "Please enter DIU email address" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    const handlePasswordChange = (event) => {
        if (/.{6,}/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, passwordError: "" });
        } else {
            setErrors({
                ...errors,
                passwordError: "Password must be at least 6 characters",
            });
            setUserInfo({ ...userInfo, password: "" });
        }
    };


    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (
            userInfo.password &&
            userInfo.email

        ) {
            signInWithEmailAndPassword(userInfo.email, userInfo.password);
        }
    };

    // redirecting after login:
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }

    }, [user, navigate, from]);


    return (
        <div className="section login">
            <div className="container">
                <h4 className="section_title">লগ <span className="highlight">ইন</span></h4>

                <div className="row form_area">
                    <div className="col-md-7">
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label className="form_label" for="floatingInput">ইমেইল এড্রেস</label>
                                <input onChange={handleEmailChange} type="email" className="form-control input_box" id="floatingInput" placeholder="name@example.com" required />

                                {errors?.emailError && (
                                    <p className="error_message">
                                        {errors?.emailError}
                                    </p>
                                )}
                            </div>

                            <div className="mb-3">
                                <label className="form_label" for="floatingPassword">পাসওয়ার্ড</label>
                                <input onChange={handlePasswordChange} type="password" className="form-control input_box" id="floatingPassword" placeholder="Password" required />

                                {errors?.passwordError && (
                                    <p className="error_message">
                                        {errors?.passwordError}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input type="submit" value="লগ ইন" className='btn btn-dark' />
                            </div>

                            <p className="page_route">
                                Don't have an account?
                                <Link to="/register" className="change_page">Register yourself</Link>
                            </p>

                        </form>
                    </div>
                    <div className="col-md-5">
                        <img src={login}></img>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;