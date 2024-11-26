const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to the Time Link - A Browser Based Online Escape Game
      </h1>
      <p>
        You just need to solve the riddle to progress throughout the game. Each
        time you answer correctly, you will be rewarded and progress to the next
        stage.
      </p>

      <div className="flex w-full">
        {/* Login */}
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
          {/* Need to add the button functionality */}
          <button>Login</button>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Register */}
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
          {/* Need to add the button functionality */}
          <button>Register</button>
        </div>

        <div className="divider divider-horizontal">OR</div>

        {/* Guest */}
        <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
          {/* Need to add the button functionality */}
          <button>Play as Guest</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
