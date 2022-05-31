import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingPage from "../LoadingPage/LoadingPage";



const RequireAuth = ({ children }) => {
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


  // verified email address then login/signup user:
  if (!user?.emailVerified) {
    return (
      <div className="section_design verifi">
        <div className="container">
          <h3 className="text-danger mb-5">OOPS!</h3>
          <p>Please verify your email address</p>
          <p>If you did it, please reload the page!</p>

          <button
            className="button mt-4"
            onClick={async () => {
              await sendEmailVerification();
              toast("Send Email", { id: "verification-email" });
            }}
          >
            Send verification email again
          </button>

          <ToastContainer></ToastContainer>
        </div>
      </div>
    );
  };

  return children;

};

export default RequireAuth;