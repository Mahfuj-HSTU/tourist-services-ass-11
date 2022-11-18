import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from './MyReviewCard';
import { toast } from 'react-hot-toast';


const MyReview = () => {
    const { user } = useContext( AuthContext )
    const [ reviews, setReviews ] = useState( [] )
    // const [ orders, setOrders ] = useState( [] )

    useTitle( 'MyReviews' )

    useEffect( () => {
        fetch( `http://localhost:5000/reviews?email=${ user.email }` )
            .then( res => res.json() )
            .then( data => setReviews( data ) )
    }, [ user?.email ] )

    const handleDelete = id => {
        const proceed = window.confirm( 'Are your sure, you want to cancel this order?' )
        if ( proceed ) {
            fetch( `http://localhost:5000/reviews/${ id }`, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    // console.log( data );
                    if ( data.deletedCount > 0 ) {
                        toast.success( 'Deleted successfully' );
                        const remaining = reviews.filter( rev => rev._id !== id );
                        setReviews( remaining )
                    }
                } )
        }
    }


    return (
        <div className=' mt-5 mb-10 text-center'>
            <h2 className=' text-center text-5xl my-10 text-blue-700 font-semibold'>You give: { reviews.length } reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    reviews.map( reviews => <MyReviewCard key={ reviews._id } reviews={ reviews } handleDelete={ handleDelete }></MyReviewCard> )
                }
            </div>

        </div>
    );
};

export default MyReview;
