import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactModal = ({ service }) => {
	const { name } = service;
	const form = useRef();
	const handleSubmit = (event) => {
		event.preventDefault();

		emailjs
			.sendForm(
				'service_wxzb91d',
				'template_2j2snn3',
				form.current,
				'4JNcEXk01r10gc8rS'
			)
			.then(
				(result) => console.log(result),
				(error) => console.log(error)
			);
		event.target.reset();
	};

	return (
		<div>
			<input
				type='checkbox'
				id='contact-modal'
				className='modal-toggle'
			/>
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='contact-modal'
						className='btn btn-outline btn-info btn-sm btn-circle absolute right-2 top-2'>
						✕
					</label>
					<form
						className='text-center'
						ref={form}
						onSubmit={handleSubmit}>
						<h2 className='text-lg lg:text-xl font-semibold uppercase mb-2'>
							Give message to book{' '}
							<i className='text-red-600 font-bold'>
								<u> {name}</u>
							</i>
						</h2>
						{/* register your input into the hook by invoking the "register" function */}
						<input
							type='text'
							name='name'
							placeholder='Your name'
							className='input input-bordered w-full rounded-lg my-2'
							required
						/>
						<input
							type='email'
							name='email'
							placeholder='example@gmail.com'
							className='input input-bordered w-full rounded-lg my-2'
							required
						/>
						<textarea
							className=' textarea textarea-bordered rounded-lg w-full my-2'
							name='message'
							placeholder='Your message'
							required
						/>
						<br />
						<input
							className='btn btn-outline btn-info btn-sm text-neutral-content cursor-pointer mt-3 sm:w-2/3 md:w-2/5'
							type='submit'
							value='Submit'
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
