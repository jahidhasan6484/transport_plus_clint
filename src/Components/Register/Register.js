import React, { useState } from "react";
import "./Register.css";
import auth from '../../firebase.init';
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";
import register from '../../images/bg/register.gif';

const Register = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const [createUserWithEmailAndPassword, user, loading, error] =
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
        emailError: "ড্যাফোডিল ইন্টারন্যাশনাল ইউনিভার্সিটি থেকে প্রাপ্ত ইমেইল দিন।"
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
        passwordError: "পাসওয়ার্ড সর্বনিম্ন ৬ অক্ষর যুক্ত হতে হবে।",
      });

      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (userInfo.email && userInfo.password) {
      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
      toast.success(`${userInfo.email} ইউজার ক্রিয়েটেড সাকসেসফুল্লী।`);
      toast.info(`আপনার ${userInfo.email} ইমেইলে একটি ভেরিফিকেশন লিংক পাঠানো হয়েছে।
      দয়া করে ভেরিফাই করুন।`);
      navigate("/verified");
    }
    event.target.reset();
  };

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

              <p className="error">{error?.message}</p>

              <div>
                <input type="submit" value="রেজিষ্টার" className='btn btn-dark' />
              </div>

              <p className="page_route">
              আপনার একাউন্ট আছে? <Link to="/login" className="change_page">লগইন করুন</Link>
              </p>
            </form>
          </div>
          <div className="col-md-5">
            <img src={register} className="img-fluid"></img>
          </div>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;