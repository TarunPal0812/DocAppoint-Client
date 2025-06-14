import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Footer = () => {
    return (
        <footer className='w-full bg-white py-10 mt-auto'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex flex-col md:flex-row justify-between gap-14 text-sm'>
                    {/* Left Section */}
                    <div className='flex-1'>
                        <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                        <p className='text-gray-600 leading-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis recusandae animi corporis odit, temporibus earum provident culpa expedita ab explicabo rerum dolorum, suscipit ipsam veniam, iure molestias! Culpa, commodi laboriosam?
                        </p>
                    </div>
                    {/* Mid Section */}
                    <div className='flex-1'>
                        <p className='text-xl font-medium mb-5'>COMPANY</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    {/* Right Section */}
                    <div className='flex-1'>
                        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>+91-8158988834</li>
                            <li>tarunpal0812@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/* Copyright Text */}
                <div className='mt-10'>
                    <hr className='my-4' />
                    <p className='text-sm text-center'>Copyright 2024 @ Tarun Pal - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
