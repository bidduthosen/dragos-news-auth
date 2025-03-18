import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                toast.success('Logout success.')
            })
            .catch(() => {

            })
    }

    return (
        <div className='flex justify-between items-center gap-2 space-y-9'>
            <div className="navleft">
                {
                    user?.photoURL ?
                        <div className='flex justify-center items-center flex-row gap-3'>
                            <img className='w-9 h-9 object-cover rounded-full' src={user?.photoURL} alt="" />
                            <p className='font-light text-base text-black uppercase'>{user?.displayName}</p>
                        </div>
                        :
                        <FaUserCircle size={35} />
                }
            </div>
            <div className=" link  space-x-3 no-underline">
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/'}>Home</NavLink>
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/'}>News</NavLink>
                <NavLink className='space-x-3 text-gray-600 hover:text-black' to={'/blog'}>Category</NavLink>
            </div>
            <div >
                {
                    user && user?.email ?
                        <div className="flex items-center gap-4">

                            <Link onClick={handleLogout} to={'/auth'}> <button className='btn btn-warning  rounded-none px-7 font-bold text-xl'>LogOut</button></Link>
                        </div>
                        :
                        <div className="flex items-center gap-4">
                            <Link to={'/auth/register'}> <button className='btn btn-neutral rounded-none px-3 text-white font-bold text-xl'>Sign Up</button></Link>
                            <Link to={'/auth'}> <button className='btn btn-neutral rounded-none px-7 text-white font-bold text-xl'>Login</button></Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;