import React from 'react';
import {
    FaDribbble,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-white py-11 w-full'>
            <div className='w-[1200px] text-lg mx-auto '>
                <p>&copy; 2022 Anurag Kasudhan All Rights Reserved. <span className='border-b-1 border-black text-blue-900'><a href="">Cookie Policy</a></span> | &nbsp;
                <span className='border-b-1 border-black text-blue-900'><a href="">Privacy Policy </a></span>| &nbsp;
                <span className='border-b-1 border-black text-blue-900'><a href="">Terms of Service</a></span>
                </p>
                <p className='flex mt-4'>
                    <span className='px-2'><FaGithub className='mt-2' size={25} /></span>
                    <span className='px-2'><FaInstagram className='mt-2' size={25} /></span>
                    <span className='px-2'><FaTwitter className='mt-2' size={25} /></span>
                </p>
            </div>
        </div>
    )
}

export default Footer