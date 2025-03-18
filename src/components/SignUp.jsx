import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name') 
        const email = form.get('email') 
        const password = form.get('password') 
        console.log({name, email, password})
    }
    return (
        <div className="card  flex mx-auto mt-16  w-full max-w-sm  ">
            <h1 className='text-center font-bold text-xl py-2'>Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="fieldset-label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <br />
                <hr />
                <div className='text-center'>
                    Already have an account, plz <Link to={'/auth'} className='underline text-red-500 ml-1'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;