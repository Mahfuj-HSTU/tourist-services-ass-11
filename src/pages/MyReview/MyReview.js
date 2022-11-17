import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';


const MyReview = () => {
    const [ services, setServices ] = useState( [] )

    useEffect( () => {
        fetch( 'http://localhost:5000/reviews' )
            .then( res => res.json() )
            .then( data => setServices( data ) )
    }, [] )


    return (
        <div className=' mt-5 mb-10 text-center'>
            <h2 className=' text-center text-5xl my-10 text-blue-700 font-semibold'>Services: { services.length }</h2>
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map( service => <ServicesCard key={ service._id } service={ service }></ServicesCard> )
                }
            </div> */}
        </div>
    );
};

export default MyReview;
