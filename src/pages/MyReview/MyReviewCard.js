import React from 'react';

const MyReviewCard = ( { reviews } ) => {
    const { Name, message, userPhoto, serviceName } = reviews;
    console.log( userPhoto );
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-2xl p-2">
            <div className="card-body">
                <div className='flex'>
                    <h2 className="card-title">
                        { serviceName }
                    </h2>
                </div>
                <p className='text-start'>{ message }</p>
            </div>
        </div>
    );
};

export default MyReviewCard;
