import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="card  flex mx-auto mt-16 w-full max-w-sm">
            <h1 className='text-center font-bold text-xl py-2'>Login!</h1>
            <form className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
                <br />
                <hr />
                <div className='text-center'>
                    Create a new account <Link to={'/auth/register'} className='underline text-red-500 ml-1'>Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;