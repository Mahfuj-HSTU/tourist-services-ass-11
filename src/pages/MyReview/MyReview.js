import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';


const MyReview = () => {
    const { user } = useContext( AuthContext )
    const [ reviews, setReviews ] = useState( [] )
    useTitle( 'MyReviews' )

    useEffect( () => {
        fetch( `https://tourist-services-server.vercel.app/reviews?email=${ user.email }` )
            .then( res => res.json() )
            .then( data => setReviews( data ) )
    }, [ user?.email ] )


    return (
        <div className=' mt-5 mb-10 text-center'>
            <h2 className=' text-center text-5xl my-10 text-blue-700 font-semibold'>You give: { reviews.length } reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    reviews.map( reviews => <MyReviewCard key={ reviews._id } reviews={ reviews }></MyReviewCard> )
                }
            </div>

        </div>
    );
};

export default MyReview;
