import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../../../Review/Review';
import ContactModal from '../Contact/ContactModal';

const ServiceDetails = () => {
	const service = useLoaderData();
	// console.log( service )
	const { img, price, name, details } = service;
	return (
		<div className='mt-24'>
			{/* service details */}
			<div className='card card-compact w-full bg-base-200 shadow-xl px-5 py-7'>
				<figure>
					<img
						className='h-52'
						src={img}
						alt='images'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{name}</h2>
					<p className='text-start'>{details}</p>
					<div className='card-actions justify-between mt-5'>
						<h5 className='text-lg'>Price : {price}</h5>{' '}
						{/* You can open the modal using ID.showModal() method */}
						{/* The button to open modal */}
						<label
							htmlFor='contact-modal'
							className='btn btn-success mt-3 rounded-lg btn-sm'>
							contact us
						</label>
						{/* Put this part before </body> tag */}
					</div>
				</div>
			</div>
			{/* service review */}
			<div className='mt-10'>
				<h2 className='text-4xl font-semibold'>Reviews</h2>
				{<Review service={service}></Review>}
			</div>
			<ContactModal service={service}></ContactModal>
		</div>
	);
};

export default ServiceDetails;
