import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../../../Review/Review';

const ServiceDetails = () => {
    const service = useLoaderData();
    // console.log( service )
    const { img, price, name, details } = service;
    return (
        <div className='mt-24'>
            {/* service details */ }
            <div className="card card-compact w-full bg-base-100 shadow-2xl px-5 py-9">
                <figure><img className='h-52' src={ img } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        { name }
                    </h2>
                    <p className='text-start'>{ details }</p>
                    <div className="card-actions justify-between mt-5">
                        <h5 className="text-lg">Price : { price }</h5>
                    </div>
                </div>

            </div>
            {/* service review */ }
            <div>
                {
                    <Review service={ service }></Review>
                }
            </div>
        </div>
    );
};

export default ServiceDetails;
