import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className='font-bold text-xl py-4'>All Category ({categories.length})</h2>
            <div className='flex flex-col gap-3'>
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} key={category?.category_id} className={({isActive})=> `font-bold  p-3 text-center rounded-md hover:bg-gray-300 hover:text-black ease-in-out delay-75 ${isActive ? 'text-black bg-gray-400': 'text-gray-500 bg-gray-100'}`}> {category?.category_name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftNav;