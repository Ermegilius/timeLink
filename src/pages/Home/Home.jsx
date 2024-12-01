import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to the Time Link - A Browser Based Online Escape Game
      </h1>
      <p>
        You just need to solve the riddle to progress throughout the game. Each
        time you answer correctly, you will be rewarded and progress to the next
        stage. Happy Gaming :)
      </p>

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
