import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between gap-2 space-y-9'>
            <div className="bg-purple-600 navleft"></div>
            <div className=" link  space-x-3 no-underline">
                <NavLink className={({ isActive }) => `${isActive ? "text-black" : 'text-gray-400'}`} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-black" : 'text-gray-400'}`} to={'/news'}>News</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-black" : 'text-gray-400'}`} to={'/blog'}>Category</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <FaUserCircle size={35} />
                <button className='btn btn-neutral rounded-none px-7 text-white font-bold text-xl'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;