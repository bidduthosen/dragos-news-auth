import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-2 space-y-9'>
            <div className="bg-purple-600 navleft"></div>
            <div className=" link  space-x-3 no-underline">
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/'}>Home</NavLink>
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/'}>News</NavLink>
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/blog'}>Category</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <FaUserCircle size={35} />
                <Link to={'/auth'}> <button className='btn btn-neutral rounded-none px-7 text-white font-bold text-xl'>Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;