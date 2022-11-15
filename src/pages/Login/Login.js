import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin } = useContext( AuthContext )
    const googleProvider = new GoogleAuthProvider();



    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const user = { email, password }
        console.log( user )
    }

    const handleGoogleSignIn = () => {
        providerLogin( googleProvider )
            .then( result => {
                const user = result.user;
                console.log( user );
            } )
            .catch( error => console.error( 'error ', error ) )
    }

    return (
        <div className="hero w-full my-20">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Login </h1>
                <form onSubmit={ handleLogin } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New to Safe Travel <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>

                <button onClick={ handleGoogleSignIn } className="btn btn-outline btn-info mx-9 mt-5"><FaGoogle /> <span className='ml-2'>Google</span></button>

            </div>
        </div>
    );
};

export default Login;
