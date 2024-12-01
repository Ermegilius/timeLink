import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar border-b-2 border-[#5C48BC] mb-5">
      <div className="navbar-start">
        {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div> */}
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
