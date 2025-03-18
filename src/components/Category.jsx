import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { author, title, image_url, details, rating, total_view, _id } = category || {};
    return (
        <div className='mb-12 border-2 border-gray-200 rounded-md'>
            <div className='flex justify-between bg-gray-200 p-4'>
                <div className='flex gap-5  items-center '>
                    <img className='w-10 rounded-full' src={author?.img} alt="" />
                    <div>
                        <h3 className='font-semibold text-lg uppercase'>{author?.name ? author?.name : 'UnKnown'}</h3>
                        <h3 className='text-base font-medium text-gray-500'>{author?.published_date}</h3>
                    </div>
                </div>
                <div className='flex gap-3 items-center'>
                    <CiBookmark className='text-gray-500' size={26} />
                    <IoMdShare className='text-gray-500' size={26} />
                </div>
            </div>
            <div className='space-y-7 p-6 pb-0'>
                <h3 className='font-bold text-2xl'>{title}</h3>
                <img className='rounded-lg' src={image_url} alt="" />
                <div>{details.length > 200 ?
                    <div>
                        <h3 className='text-gray-600 font-light'>{details.slice(0, 200)}...</h3>
                        <Link to={`/news/${_id}`} className='text-red-500 underline'>Read More</Link>
                    </div>
                    :
                    <div>
                        <h3 className='text-gray-600 font-light'>{details}</h3>
                        <Link to={`/news/${_id}`} className='text-red-500 underline'>Read More</Link>
                    </div>
                }</div>
                <hr />
                <div className='flex justify-between  p-2'>
                <div className="flex items-center">
                        {[...Array(7)].map((_, i)=> <FaStar size={20} key={i} className={`text-yellow-500 ${ i < Math.round(rating.number) ? "" : "opacity-30"}`}/>)}
                        <p className='font-semibold text-gray-600 ml-3'>{rating?.number}</p>

                    </div>
                    <div className='flex gap-3 items-center'>
                        <IoEyeSharp size={20} />
                        <p className='font-semibold text-gray-600'>{total_view}</p>
                    </div>
                </div>

                <div className="flex gap-3  items-center">
                    
                </div>
            </div>
        </div>
    );
};

export default Category;