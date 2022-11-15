import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [ services, setServices ] = useState( [] )
    useEffect( () => {
        fetch( 'http://localhost:5000/services' )
            .then( res => res.json() )
            .then( data => setServices( data ) )
    }, [] )

    return (
        <div className=' mt-5 mb-10 text-center'>
            <h2 className=' text-center text-5xl my-10 text-blue-700 font-semibold'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map( service => <ServicesCard key={ service._id } service={ service }></ServicesCard> )
                }
            </div>
            <button className=" mt-10 btn btn-primary">Show All</button>
        </div>
    );
};

export default Services;
