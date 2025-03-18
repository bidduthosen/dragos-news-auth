import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <header className='max-w-screen-2xl mx-auto px-4 mb-10'>
                <Navbar></Navbar>
            </header>
            <main>
                <section  className='max-w-screen-2xl mx-auto px-4 mb-10'>
                    <Outlet></Outlet>
                </section>
            </main>
            
        </div>
    );
};

export default Auth;