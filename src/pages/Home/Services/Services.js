import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [ services, setServices ] = useState( [] )
    const [ visible, setVisible ] = useState( 3 )
    const [ btn, setBtn ] = useState( false )
    useTitle( 'Services' )

    useEffect( () => {
        fetch( 'https://tourist-services-server.vercel.app/services' )
            .then( res => res.json() )
            .then( data => setServices( data ) )
    }, [] )

    const showAll = () => {
        const visible = services.length;
        setVisible( visible )
        setBtn( true )
    }

    return (
        <div className=' mt-5 mb-10 text-center'>
            <h2 className=' text-center text-5xl my-10 text-blue-700 font-semibold'>Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.slice( 0, visible ).map( service => <ServicesCard key={ service._id } service={ service }></ServicesCard> )
                }
            </div>
            {/* show all services */ }
            <Link to='/services'><button onClick={ showAll } className=" mt-10 btn btn-primary" disabled={ btn }>Show All</button></Link>
        </div>
    );
};

export default Services;
