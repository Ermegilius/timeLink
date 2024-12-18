import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const auth = getAuth(app);

const Login = () => {
  const { logIn } = useContext(AuthContext);

  // Google login provider
  const googleProvider = new GoogleAuthProvider();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirecting user to their previous location
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(userName, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          width: 400,
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        setSuccess("Login Successful!");
        setError("");
        navigate("/gameplay", { replace: true });
      })
      .catch((error) => {
        setError("Email or Password is invalid!", error);
      });
  };

  // google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        Swal.fire({
          position: "top-end",
          icon: "success",
          width: 400,
          title: "Login Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        setSuccess("Login Successful!");
        setError("");
        navigate("/gameplay", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="h-screen max-h-[640px] bg-[#d4f9cf]">
      <div className="hero-content p-[2rem] flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[350px] max-h-[400px] shrink-0 shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body bg-[#BBBBFF] border-2 border-[#8168fe] rounded-md shadow-[0_4px_4px_rgba(0,0,0,0.25),0_3px_6px_rgba(0,0,0,0.22)]"
          >
            <h1 className="font-bold text-3xl self-center mb-4">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#5C48BC]">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border-2 border-[#8168fe] rounded-md shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-[#5C48BC]">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-2 border-[#8168fe] rounded-md  shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt text-[#5C48BC] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 flex  items-center">
              <button className="w-48">Login</button>
              <button className="w-48" onClick={handleGoogleLogin}>
                Sign in with Google
              </button>
              <Link to="/gameplay">
                <button className="w-48">Play as Guest</button>
              </Link>
              <p className="text-red-700">{error}</p>
              <p className="text-[#5C48BC]">{success}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
