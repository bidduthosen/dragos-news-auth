import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState({})
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        const updateUser = {
            displayName: name,
            photoURL: photo
        };

        if (name.length < 4) {
            setErrorMessage({ ...errorMessage, name: 'must be 4 charecter latter' });
            return

        }
        createUser(email, password)
            .then(res => {
                toast.success('Create user success.')
                e.target.reset()
                navigate('/')
                updateUserProfile(updateUser)
                    .then(() => {
                        toast.success('Update Users')
                    }).catch((err) => { console.error("updateUser", err.message) })
            })
            .catch(err => {
                toast.error(`${err.message}`)
            })
    }
    return (
        <div className="card  flex mx-auto mt-16  w-full max-w-sm  ">
            <h1 className='text-center font-bold text-xl py-2'>Register Now!</h1>
            <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    <label className="fieldset-label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="fieldset-label">Phot Url</label>
                    <input type="text" name='photo' className="input" placeholder="Photo Url" />
                    <label className="fieldset-label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="fieldset-label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <br />
                {
                    <p className='text-red-500 font-serif text-xs text-center'>{errorMessage?.name}</p>
                }
                {
                    <p className='text-red-500 font-serif text-xs text-center'>{errorMessage?.signUp}</p>
                }
                <hr />
                <div className='text-center'>
                    Already have an account, plz <Link to={'/auth'} className='underline text-red-500 ml-1'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;