import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const {loginUserEmail} = useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')

        loginUserEmail(email, password)
        .then(res=> {
            console.log('toast')
            e.target.reset()
            toast.success('Congress!. user Login success.')
        })
        .catch(err =>{
            toast.error(`${err.message}`)
        })

    }
    return (
        <div className="card  flex mx-auto mt-16 w-full max-w-sm">
            <h1 className='text-center font-bold text-xl py-2'>Login!</h1>
            <form onSubmit={handleLogin} className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
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