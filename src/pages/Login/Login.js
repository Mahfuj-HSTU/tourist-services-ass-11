import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
import ForgatePassword from "./ForgatePassword";

const Login = () => {
  const { providerLogin, login } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();
  useTitle("login");

  const from = location.state?.from?.pathname || "/";

  // handle created user login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // const user = { email, password }
    // console.log( user )

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        if (user.emailVerified) {
          toast.success("Successfully logged in!");
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified, please verify your email first."
          );
        }
      })
      .catch((error) => {
        console.error("error ", error);
        toast.error("Register first to login");
        form.reset();
      });
  };

  // handle google login
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error("error ", error));
  };

  return (
    <div className="hero w-full my-24">
      <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 py-10">
        <h1 className="text-5xl text-center font-bold">Login </h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
            <label
              htmlFor="reset-modal"
              className="label-text-alt link link-hover">
              Forgot password?
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <p className="text-center">
          New to Safe Travel{" "}
          <Link className="text-orange-600 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
        {/* login btn of google login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-info mx-9 mt-5">
          <FaGoogle /> <span className="ml-2">Google</span>
        </button>
      </div>
      <ForgatePassword />
    </div>
  );
};

export default Login;
