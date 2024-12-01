import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body rounded-lg bg-[#BBBBFF] border-[#5C48BC] border-2">
            <h1 className="font-bold text-3xl">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-[#5C48BC]">Username</span>
              </label>
              <input
                type="name"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  text-[#5C48BC]">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt  text-[#5C48BC] link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 flex  items-center">
              <button className="">Login</button>
              <Link to="gameplay">
                <button>Play as Guest</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
