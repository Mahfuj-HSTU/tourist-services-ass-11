import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


const ServicesCard = ( { service } ) => {
    // console.log( service )
    const { _id, img, price, name, details, rating } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img className='h-52' src={ img } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    { name }
                </h2>
                <p className='text-start'>{ details.slice( 0, 100 ) }</p>
                <p className='text-start font-semibold flex '>
                    <span className='mr-2'>Rating: </span>
                    <span className='text-warning flex mt-1 mr-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                    { rating }
                </p>
                <div className="card-actions justify-between mt-5">
                    <h5 className="text-lg">Price : { price }</h5>
                    {/* show service details */ }
                    <Link to={ `/services/${ service._id }` }><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
