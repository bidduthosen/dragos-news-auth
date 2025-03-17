import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestMarque = () => {
    return (
        <div className='flex  items-center bg-gray-200 p-3 gap-3 mt-4'>
            <h4 className='bg-[#D72050] px-4 py-2 font-semibold text-lg text-white'>Latests</h4>
            <div className='font-semibold'>
                <Marquee pauseOnHover={true} speed={100} gradient gradientWidth={100} gradientColor='gray'>
                    <Link to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..</Link>
                    <Link to={'/news'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..</Link>
                    <Link to={'/news'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default LatestMarque;