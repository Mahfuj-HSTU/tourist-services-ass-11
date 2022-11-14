import React from 'react';
import banner1 from '../../../images/banner.jpg'
import banner2 from '../../../images/banner1.jpg'
import banner3 from '../../../images/banner2.jpg'
import banner4 from '../../../images/banner3.jpg'
import './banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={ banner1 } alt="" className='w-full rounded-xl' />
                </div>
                <div className="absolute transform translate-y-52 translate-x-3/4 top-1/2 text-center text-white">
                    <h1 className='text-4xl'>Your safety is our main goal</h1>
                    <p className='text-xl'>We facilitate hundreds of thousands of transactions every day through our secure platform.</p>

                </div>
                <div className="absolute flex justify-between transform translate-y-full left-5 right-5 top-1/3">
                    <a href="#slide4" className="btn btn-accent mr-5">❮</a>
                    <a href="#slide2" className="btn btn-accent">❯</a>
                </div>
            </div>
            <div id='slide2' className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={ banner2 } alt="" className='w-full rounded-xl' />
                </div>
                <div className="absolute transform translate-y-52 translate-x-3/4 top-1/2 text-center text-white">
                    <h1 className='text-4xl'>Welcome to stay with us</h1>
                    <p className='text-xl'>No matter where you want to go or what you want to do</p>

                </div>
                <div className="absolute flex justify-between transform translate-y-full left-5 right-5 top-1/3">
                    <a href="#slide1" className="btn btn-accent mr-5">❮</a>
                    <a href="#slide3" className="btn btn-accent">❯</a>
                </div>
            </div>
            <div id='slide3' className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={ banner3 } alt="" className='w-full rounded-xl' />
                </div>
                <div className="absolute transform translate-y-52 translate-x-3/4 top-1/2 text-center text-white">
                    <h1 className='text-4xl'>Happy Journey</h1>
                    <p className='text-xl'>No matter where you want to go or what you want to do</p>

                </div>
                <div className="absolute flex justify-between transform translate-y-full left-5 right-5 top-1/3">
                    <a href="#slide2" className="btn btn-accent mr-5">❮</a>
                    <a href="#slide1" className="btn btn-accent">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
