import React from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../../../Review/Review";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ContactModal from "../Contact/ContactModal";
import { FaStar } from "react-icons/fa";
import useTitle from "../../../../Hooks/useTitle";

const ServiceDetails = () => {
  const service = useLoaderData();
  // console.log( service )
  const { img, price, name, details, rating } = service;
  useTitle(name);

  return (
    <div className="mt-24">
      {/* service details */}
      <div className="card card-compact w-full bg-base-200 shadow-xl px-5 py-7">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure>
              <img className="h-52" src={img} alt="images" />
            </figure>
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-start">{details}</p>
          <div className="card-actions justify-between mt-5">
            <div>
              <h5 className="text-lg">Price : {"\u09F3" + price + "/-"}</h5>{" "}
              <p className="text-start font-semibold flex ">
                <span className="mr-2">Rating: </span>
                <span className="text-warning flex mt-1 mr-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                {rating}
              </p>
            </div>
            {/* You can open the modal using ID.showModal() method */}
            {/* The button to open modal */}
            <label
              htmlFor="contact-modal"
              className="btn btn-success mt-3 rounded-lg btn-sm">
              contact us
            </label>
            {/* Put this part before </body> tag */}
          </div>
        </div>
      </div>
      {/* service review */}
      <div className="mt-10">
        <h2 className="text-4xl font-semibold">Reviews</h2>
        {<Review service={service}></Review>}
      </div>
      <ContactModal service={service}></ContactModal>
    </div>
  );
};

export default ServiceDetails;
