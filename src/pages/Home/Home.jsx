import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex w-full">
        {/* Login */}
        <div className="card bg-[#f9ff87] rounded-box grid h-20 flex-grow place-items-center shadow-md">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Register */}
        <div className="card bg-[#f9ff87] rounded-box grid h-20 flex-grow place-items-center shadow-md">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Guest */}
        <div className="card bg-[#f9ff87] rounded-box grid h-20 flex-grow place-items-center shadow-md">
          <Link to="/gameplay">
            <button>Play as Guest</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
