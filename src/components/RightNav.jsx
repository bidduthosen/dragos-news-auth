import React from 'react';
import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiFacebook } from 'react-icons/fi';
import swimingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playground from '../assets/playground.png'
import bgImg from '../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='font-bold text-xl py-4'>Login With</h2>
            <div className='flex flex-col w-full gap-4'>
                <button className='btn btn-success btn-outline'> <FaGoogle></FaGoogle> Login with Google</button>
                <button className='btn btn-neutral btn-outline'> <FaGithub></FaGithub> Login with Github</button>
            </div>
            <h2 className='font-semibold text-xl py-4 mt-7'>Find Us On</h2>
            <div className="join join-vertical w-full  ">
                <button className='btn join-item w-full justify-start bg-white py-9 text-gray-600'> <FiFacebook size={40} className='text-blue-400 border border-gray-300 p-2 rounded-full  bg-gray-200'></FiFacebook> FaceBook</button>
                <button className="btn join-item w-full justify-start bg-white py-9 text-gray-600"><FaTwitter size={40} className='text-blue-400 border border-gray-300 p-2 rounded-full  bg-gray-200' /> Twiteer </button>
                <button className="btn join-item w-full justify-start bg-white py-9 text-gray-600"><FaInstagram size={40} className='text-blue-400 border border-gray-300 p-2 rounded-full  bg-gray-200' /> Twiteer </button>

            </div>
            <div className='bg-gray-200 p-3 mt-10'>
                <h2 className='font-semibold text-xl py-2 mb-7'>Q-Zone</h2>
                <div className='flex gap-5 flex-col'>
                    <img src={swimingImg} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
            <div  className='mt-8 w-full'>
                <img className='w-full object-contain' src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;