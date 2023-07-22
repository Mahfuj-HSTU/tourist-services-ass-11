import React from 'react';

const MyReviewCard = ({ reviews, handleDelete, handleUpdate }) => {
	const { message, serviceName, _id } = reviews;
	// console.log( userPhoto );
	return (
		<div className='card card-compact w-96 bg-base-200 shadow-xl p-2'>
			<div className='card-body'>
				<div className='flex justify-between'>
					<h2 className='card-title text-3xl'>{serviceName}</h2>
					<button
						onClick={() => handleDelete(_id)}
						className='btn btn-circle btn-outline'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>
				</div>
				<p className='text-start text-lg'>{message}</p>
				<label
					htmlFor='my-modal'
					onClick={() => handleUpdate(_id)}
					className='btn btn-active btn-ghost'>
					Update
				</label>
			</div>
		</div>
	);
};

export default MyReviewCard;
