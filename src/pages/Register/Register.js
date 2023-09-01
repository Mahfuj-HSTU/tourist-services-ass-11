import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, verifyEmail } = useContext(AuthContext);
  useTitle("Registration");
  const navigate = useNavigate();

  // handle user create
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // const photoUrl = form.photoUrl.value;
    const password = form.password.value;

    // const user = { name, email, password, photoUrl }

    // registered user create
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        verifyEmail();
        toast.success("Registration successful. Now verify your email!!");
        navigate("/login");
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div className="hero w-full mt-28 mb-24">
      <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-200 py-10">
        <h1 className="text-5xl text-center font-bold">Register </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
            <p className="text-red-600 font-semibold">{error.slice(22, 42)}</p>
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
              required
            />
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
        {/* if you are old user and you have an account */}
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
