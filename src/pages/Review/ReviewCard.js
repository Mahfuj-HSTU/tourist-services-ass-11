import React from 'react';

const ReviewCard = ( { review } ) => {
    const { Name, message, userPhoto } = review;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl">
            <div className="card-body">
                <div className='flex'>
                    <img className=' mr-2 rounded-full' src={ userPhoto || 'user' } alt="" height='50px' width='50px' />
                    <h2 className="card-title">
                        { Name }
                    </h2>
                </div>
                <p className='text-start'>{ message }</p>
            </div>
        </div>
    );
};

export default ReviewCard;
