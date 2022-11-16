import React from 'react';
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';


const Support = () => {
    return (
        <div className='text-center mb-10'>
            <h2 className='text-4xl text-blue-600 font-semibold my-4 '>Deals and Discount</h2>
            <p className='text-xl text-blue-500'>Follow to get discount</p>
            <div className='flex justify-center text-2xl '>
                <FaFacebook className='mx-3 mt-4 cursor-pointer'></FaFacebook>
                <FaWhatsapp className='mx-3 mt-4 cursor-pointer'></FaWhatsapp>
                <FaLinkedin className='mx-3 mt-4 cursor-pointer'></FaLinkedin>
            </div>
        </div>
    );
};

export default Support;
