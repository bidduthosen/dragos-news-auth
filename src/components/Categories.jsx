import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Category from './Category';

const Categories = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const data = useLoaderData()
    useEffect(() => {
        setCategoriesData(data.data)
    }, [data]);

    return (
        <div>
            <h2 className='font-bold text-xl py-4'>Dragon News Home ({categoriesData.length})</h2>
            <div>
                {
                    categoriesData.length ?
                        <div>
                            {
                                categoriesData.map((category, idx) => <Category key={idx} category={category}></Category>)
                            }
                        </div>
                        :
                        <div>
                            <h2 className='text-red-600 font-bold text-3xl'>Not data Fount</h2>
                        </div>
                }
            </div>
        </div>
    );
};

export default Categories;