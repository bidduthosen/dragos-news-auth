import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NewsDetailsCart = ({ newsDetails }) => {
    const { category_id, image_url,title, details } = newsDetails || {};
    return (
        <div className="card bg-base-100 border-2 border-gray-200">
            <figure className="px-4 pt-10">
                <img
                    src={image_url}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
                <h3 className='font-bold text-2xl'>{title}</h3>
                <h3 className='text-gray-600 font-light'>{details}</h3>
                <div className="card-actions mt-5">
                    <Link to={`/category/${category_id}`}><button  className="btn bg-[#D72050] text-white"> <BsArrowLeft size={20}/> All News in this Categories</button> </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCart;