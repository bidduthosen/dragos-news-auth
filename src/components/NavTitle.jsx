import moment from 'moment';
import React from 'react';
import titleImg from '../assets/logo.png'

const NavTitle = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 mt-2' >
            <div>
                <img src={titleImg} alt="" />
            </div>
            <p className='font-light text-gray-600'>Journalism Without Fear or Favour</p>
            <h4 className='font-normal text-gray-600'>
                {moment().format("dddd, MMMM D, YYYY")}
            </h4>
        </div>
    );
};

export default NavTitle;