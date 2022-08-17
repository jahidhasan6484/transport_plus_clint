import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";

const Verified = () => {
  const [sendEmailVerification] = useSendEmailVerification(auth);

  // current user:
  const [user, loading] = useAuthState(auth);

  let location = useLocation();

  if (loading) {
    return <LoadingPage />
  };

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  };
  return (
    <div>
      <div className="section verifi">
        <div className="container">
          <h4 className="section_title"> <span className="highlight">উপস</span></h4>
          <div className="text-center">
            <p className="text-white">দয়া করে আপনার ইমেইল চেক করুন। সেখান থেকে ভেরিফিকেশন লিংকের উপরে ক্লিক করে আপনার ইমেইল ভেরিফাই করুন।</p>
            <p className="text-white">ইতিমধ্যে আপনার ইমেইল ভেরিফাই করে থাকলে পেজটি রিলোড দিন।</p>

            <button
              className="btn btn-dark mt-5"
              onClick={async () => {
                await sendEmailVerification();
                alert("আপনার ইমেইলে একটি নতুন ভেরিফিকেশন লিংক পাঠানো হয়েছে।")
              }}
            >
              আবার ভেরিফিকেশন লিংক পাঠান
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verified;