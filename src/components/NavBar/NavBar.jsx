import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar border-b-2 border-[#5C48BC] mb-5">
      <div className="navbar-start">
        <Link to="/">
          <nav className="bg-[#D4F9CF]">
            <div className="flex items-center gap-2 p-3">
              <img className="max-w-7" src={logo} alt="TimeLink Logo" />
              <h1 className="text-5xl">TimeLink</h1>
            </div>
          </nav>
        </Link>
      </div>
      <div className="navbar-end flex gap-3">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
