import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import auth from '../../firebase.init';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import { BusContext } from "../../App";

const Login = () => {
    // const [isStudent, setIsStudent, isFaculty, setIsFaculty] = useContext(BusContext);

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
            sessionStorage.setItem('userType', "Student");
        }
        else if (facultyEmailPattern.test(event.target.value)) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" });
            sessionStorage.setItem('userType', "Faculty");
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
        <div className="section_design login">
            <div className="container">
                <h4 className="section_title">Login</h4>
                <form onSubmit={handleFormSubmit}>

                    <div className="form-floating mb-3">
                        <input onChange={handleEmailChange} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                        <label for="floatingInput">Email address</label>
                        {errors?.emailError && (
                            <p className="error_message">
                                {errors?.emailError}
                            </p>
                        )}
                    </div>

                    <div className="form-floating">
                        <input onChange={handlePasswordChange} type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                        <label for="floatingPassword">Password</label>
                        {errors?.passwordError && (
                            <p className="error_message">
                                {errors?.passwordError}
                            </p>
                        )}
                    </div>


                    <div className="form-check my-3">
                        <input onClick={() => setAgree(!agree)} className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required="" />

                        {
                            agree ?
                                <label className="form-check-label text-success">
                                    Accept terms	&amp; condition
                                </label> :
                                <label className="form-check-label text-danger">
                                    Accept terms	&amp; condition
                                </label>
                        }
                    </div>

                    <button className="login_button" type="submit" disabled={!agree}>
                        Login
                    </button>
                    <p className="page_route">
                        Don't have an account?
                        <Link to="/register" className="change_page">Register yourself</Link>
                    </p>

                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;