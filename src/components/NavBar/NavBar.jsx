import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          width: 400,
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 2000,
        });
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
  };

  return (
    <div className="navbar flex bg-[#fefffa]">
      <div className="navbar-start">
        <Link to="/">
          <nav>
            <div className="flex-1 flex items-center gap-8">
              <img className="max-h-20" src={logo} alt="TimeLink Logo" />
              <h1 className="text-[70px] custom-h1 text-[#f7ff66]">TimeLink</h1>
            </div>
          </nav>
        </Link>
      </div>

      {/* Nav End */}
      <div className="navbar-end flex-1 flex items-center gap-6">
        {user ? (
          <>
            <span>{user.displayName || user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
