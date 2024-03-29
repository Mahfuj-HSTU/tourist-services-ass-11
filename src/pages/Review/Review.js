import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import ReviewCard from "./ReviewCard";

const Review = ({ service }) => {
  const [control, setControl] = useState(false); //this line defines a state variable named control and a corresponding setter function setControl
  const [reviews, setReview] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useTitle(Review);
  const { _id, name } = service;
  // console.log( user )

  const handleReview = (event) => {
    if (!user) {
      toast.error("To give review please login first.");
      return navigate("/login");
    }
    event.preventDefault();
    const form = event.target;
    const Name = user?.displayName || form.name.value;
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: name,
      Name,
      email: user?.email,
      message,
      userPhoto: user?.photoURL || <FaUser />,
      date: new Date().toLocaleString(),
    };
    // console.log( review )

    const url = "http://localhost:5000/reviews";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setControl(!control);
          toast.success("Thanks for your review");
          form.reset();
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/getreviews/${_id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log( result );
        setReview(result);
      })
      .catch((error) => console.error(error));
  }, [control, _id]);

  return (
    <div>
      {/* user show all review */}
      <h2 className="md:text-5xl sm:text-3xl text-2xl text-blue-900 my-12 pl-5">
        All Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 mt-10">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>

      {/* user get the review */}

      <div className="hero w-full my-20">
        <div className="card flex-shrink-0 w-full  max-w-2xl shadow-2xl bg-base-100 py-10">
          <h1 className="text-5xl text-center font-bold">Give Your Review </h1>
          <form onSubmit={handleReview} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <textarea
                className="textarea textarea-bordered"
                name="message"
                placeholder="Write Something..."
                cols="30"
                rows="5"
                required></textarea>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Review" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
