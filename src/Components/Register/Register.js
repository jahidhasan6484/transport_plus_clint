import React, { useState } from "react";
import "./Register.css";
import auth from '../../firebase.init';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import register from '../../images/bg/register.gif';

const Register = () => {
  const navigate = useNavigate();

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
    let studentEmailPattern = /@diu.edu.bd/;
    let facultyEmailPattern = /@daffodilvarsity.edu.bd/;
    if (studentEmailPattern.test(event.target.value) || facultyEmailPattern.test(event.target.value)) {
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

    if (userInfo.email && userInfo.password) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      toast.success(`${userInfo.email} created Successfully`);
      toast.info(`A verified Link has been sent to your ${userInfo.email} address! Please verify this`);
      navigate("/verified");
    }


    // reset value:
    event.target.reset();
  };

  // if (user) {
  //   navigate("/verified");
  // };

  return (
    <div className="section register">
      <div className="container">
        <h4 className="section_title"><span className="highlight">রেজিষ্টার</span> করুন</h4>

        <div className="row form_area">
          <div className="col-md-7">
            <form onSubmit={handleFormSubmit}>
              <div className=" mb-3">
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
                <input type="submit" value="রেজিষ্টার" className='btn btn-dark' />
              </div>

              <p className="page_route">
                Already have an account? <Link to="/login" className="change_page">Please login</Link>
              </p>
            </form>
          </div>
          <div className="col-md-5">
            <img src={register}></img>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;