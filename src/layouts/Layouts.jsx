import React from 'react';
import NavTitle from '../components/NavTitle';
import LatestMarque from '../components/LatestMarque';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import LeftNav from '../components/LeftNav';

const Layouts = () => {
    return (
        <div>
            <header>
                {/* nav title */}
                <NavTitle></NavTitle>
                <div className='max-w-screen-xl mx-auto px-4 hidden md:block'>
                    <LatestMarque></LatestMarque>
                </div>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <Navbar></Navbar>
                </div>
            </header>
            <main className='max-w-screen-xl mx-auto px-4'>
                <section className='grid grid-cols-12 gap-4'>
                    <aside className='col-span-12 md:col-span-3'>
                        <LeftNav></LeftNav>
                    </aside>
                    <div className="main-section col-span-12 md:col-span-6">
                        <Outlet></Outlet>
                    </div>
                    <aside className='col-span-12 md:col-span-3'></aside>
                </section>
            </main>

        </div>
    );
};

export default Layouts;