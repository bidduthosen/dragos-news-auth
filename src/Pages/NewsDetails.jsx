import React from 'react';
import NavTitle from '../components/NavTitle';
import RightNav from '../components/RightNav';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsDetailsCart from '../components/NewsDetailsCart';

const NewsDetails = () => {
    const data = useLoaderData()
    const newsDetails = data.data[0]
    return (
        <div>
            <header>
                <NavTitle></NavTitle>
            </header>
            <main>
                <section className='max-w-screen-2xl mx-auto px-4 mb-10'>
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-9">
                            <h2 className='font-bold text-xl py-4'>Dragons News</h2>
                            <NewsDetailsCart newsDetails={newsDetails}></NewsDetailsCart>
                        </div>
                        <div className="col-span-12 md:col-span-3">
                            <RightNav></RightNav>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;