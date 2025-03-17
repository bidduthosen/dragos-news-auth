import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoMdShare } from 'react-icons/io';

const Category = ({ category }) => {
    console.log(category);
    const { author, title ,image_url, thumbnail_url} = category || {};
    return (
        <div className='mb-8 border-2 border-gray-200 rounded-md'>
            <div >
                <div className='flex justify-between bg-gray-200 p-4'>
                    <div className='flex gap-5  items-center '>
                        <img className='w-16 rounded-full' src={author?.img} alt="" />
                        <div>
                            <h3 className='font-semibold text-lg uppercase'>{author?.name}</h3>
                            <h3 className='text-base font-medium text-gray-500'>{author?.published_date}</h3>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <CiBookmark size={26} />
                        <IoMdShare  size={26}/>
                    </div>
                </div>
                <div className='space-y-7 p-6'>
                    <h3 className='font-bold text-2xl'>{title}</h3>
                    <img src={image_url} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Category;