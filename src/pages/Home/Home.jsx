import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner></Banner>
      <div className="flex gap-10 w-full h-full justify-center items-center">
        {/* Login */}
        <div className="">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        {/* Register */}
        <div className="">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        {/* Guest */}
        <div className="">
          <Link to="/gameplay">
            <button>Play as Guest</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
