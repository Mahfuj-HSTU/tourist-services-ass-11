import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
	const [services, setServices] = useState({});
	useTitle('AddServices');

	const handleAddServices = (event) => {
		event.preventDefault();
		const url = 'https://tourist-services-server.vercel.app/services';
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(services),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					toast.success('Services added successfully');
					event.target.reset();
				}
				// console.log( data )
			});
	};

	const handleInputBlur = (event) => {
		const value = event.target.value;
		const field = event.target.name;
		const newServices = { ...services };
		newServices[field] = value;
		setServices(newServices);
	};

	return (
		<div className='hero w-full my-24'>
			<div className='card flex-shrink-0 w-full max-w-lg mt-5 shadow-2xl bg-base-100 py-10'>
				<h1 className='text-5xl text-center font-bold'>Add Services </h1>
				<form
					onSubmit={handleAddServices}
					className='card-body'>
					<div className='form-control'>
						<input
							onChange={handleInputBlur}
							type='text'
							name='name'
							placeholder='Enter place name'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control'>
						<input
							onChange={handleInputBlur}
							type='text'
							name='img'
							placeholder='Enter image url'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control'>
						<input
							onChange={handleInputBlur}
							type='text'
							name='details'
							placeholder='Enter details'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control'>
						<input
							onChange={handleInputBlur}
							type='text'
							name='price'
							placeholder='Give Price'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control'>
						<input
							onChange={handleInputBlur}
							type='text'
							name='rating'
							placeholder='Give rating'
							className='input input-bordered'
							required
						/>
					</div>

					<div className='form-control mt-6'>
						<input
							onChange={handleInputBlur}
							className='btn btn-primary'
							type='submit'
							value='Add Services'
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddServices;
