import React, { useState } from "react";
import "./Register.css";
import auth from '../../firebase.init';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";

const Register = () => {
  const navigate = useNavigate();

  // for term agree and not agree:
  const [agree, setAgree] = useState(false);
  const [user] = useAuthState(auth);


  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [createUserWithEmailAndPassword, loading, hooksError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (loading) {
    <LoadingPage />
  }

  const handleEmailChange = (event) => {
    let emailPattern = /@diu.edu.bd/;
    if (emailPattern.test(event.target.value)) {
      setUserInfo({
        ...userInfo,
        email: event.target.value
      });

      setErrors({
        ...errors,
        emailError: ""
      });

    } else {

      setErrors({
        ...errors,
        emailError: "Please enter DIU email address"
      });

      setUserInfo({
        ...userInfo,
        email: ""
      });
    }
  };

  const handlePasswordChange = (event) => {
    if (/.{6,}/.test(event.target.value)) {

      setUserInfo({
        ...userInfo,
        password: event.target.value
      });

      setErrors({
        ...errors,
        passwordError: ""
      });

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

    if (userInfo.email && userInfo.password && agree) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      toast.success(`${userInfo.email} created Successfully`);
      toast.info(`A verified Link has been sent to your ${userInfo.email} address! Please verify this`);
    }

    // reset value:
    event.target.reset();
  };

  if (user) {
    navigate("/");
  };

  return (
    <div className="section_design register">
      <div className="container">
        <h4 className="section_title">Register</h4>

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

          <button className="register_button" type="submit" disabled={!agree}>
            Register
          </button>
          <p className="page_route">
            Already have an account? <Link to="/login" className="change_page">Please login</Link>
          </p>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;