import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ( { service } ) => {
    console.log( service )
    const { _id, img, price, name, details } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <figure><img className='h-52' src={ img } alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    { name }
                </h2>
                <p className='text-start'>{ details.slice( 0, 100 ) }</p>
                <div className="card-actions justify-between mt-5">
                    <h5 className="text-lg">Price : { price }</h5>
                    <Link to={ `/service/${ service._id }` }><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
