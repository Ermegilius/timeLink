import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex w-full justify-center">
        {/* Login */}
        <div className="">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Register */}
        <div className="">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="divider divider-horizontal">OR</div>

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
