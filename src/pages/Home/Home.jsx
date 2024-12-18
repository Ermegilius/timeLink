import { Link } from "react-router-dom";
import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";

const Home = () => {
  return (
    <div className="welcomePage max-h-[541px]">
      <WelcomeBanner/>
      <div className="flex w-full h-full justify-center">
        {/* Login */}
        <div className="absolute top-[557px] left-[150px] z-30">
          <Link to="/login">
            <button className="h-14 w-56 p-1.5 text-[26px]">Login</button>
          </Link>
        </div>

        {/* Register */}
        <div className="absolute top-[557px] left-[420px] z-30">
          <Link to="/register">
            <button className="h-14 w-56 p-1.5 text-[26px]">Register</button>
          </Link>
        </div>

        {/* Guest */}
        <div className="absolute top-[557px] left-[690px] z-30">
          <Link to="/gameplay">
            <button className="h-14 w-56 p-1.5 text-[26px]">Play as Guest</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
