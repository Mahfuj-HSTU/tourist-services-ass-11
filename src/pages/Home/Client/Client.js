import React from 'react';
import img from '../../../images/download.jfif';
import img1 from '../../../images/P20210303AS-1901-cropped.webp';

const Client = () => {
	return (
		<div className='mb-10'>
			<h2 className='text-center text-4xl text-blue-600 font-semibold my-4 mb-7'>
				Client Says
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
				<div className='card card-compact bg-base-100 shadow-2xl rounded-2xl'>
					<div className='card-body'>
						<p className='text-start'>
							These benefits are why <i>Safe travel</i> are so popular with
							travelers worldwide, and why you want to consider finding the one
							that works best for you.he main advantage of using an{' '}
							<i>Safe travel</i> is that you can quickly and easily compare the
							prices of accommodation, flights, and more.{' '}
						</p>
						<p>
							Another benefit to booking through an online travel agency is the
							review system, whereby users leave ratings and written reviews for
							future customers. The option to leave a review is usually only
							available after a user has booked a service, so they’re a reliable
							source of feedback.
						</p>
						<div className='card-actions flex mt-5'>
							<figure>
								<img
									className='h-20 w-20 rounded-full mb-5'
									src={img}
									alt='Client'
								/>
							</figure>
							<h5 className='text-lg mt-6'>Vladimir Putin</h5>
						</div>
					</div>
				</div>
				<div className='card card-compact bg-base-100 shadow-2xl rounded-2xl'>
					<div className='card-body'>
						<p className='text-start'>
							These benefits are why <i>Safe travel</i> are so popular with
							travelers worldwide, and why you want to consider finding the one
							that works best for you.he main advantage of using an{' '}
							<i>Safe travel</i> is that you can quickly and easily compare the
							prices of accommodation, flights, and more.{' '}
						</p>
						<p>
							Another benefit to booking through an online travel agency is the
							review system, whereby users leave ratings and written reviews for
							future customers. The option to leave a review is usually only
							available after a user has booked a service, so they’re a reliable
							source of feedback.
						</p>
						<div className='card-actions flex mt-5'>
							<figure>
								<img
									className='h-20 w-20 rounded-full mb-5'
									src={img1}
									alt='Client'
								/>
							</figure>
							<h5 className='text-lg mt-6'>Joe Biden</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Client;
