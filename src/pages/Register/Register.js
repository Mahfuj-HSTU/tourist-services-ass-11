import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import useTitle from '../../Hooks/useTitle';

const Register = () => {
    const [ error, setError ] = useState( '' )
    const { createUser } = useContext( AuthContext )
    useTitle( 'Registration' )

    // handle user create
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;

        // const user = { name, email, password, photoUrl }

        // registered user create
        createUser( email, password )
            .then( result => {
                const user = result.user;
                console.log( user );
                form.reset();
                toast.success( 'Registration successful.' )
                setError( '' )
            } )
            .catch( error => {
                console.error( error )
                setError( error.message );
            } )
    }


    return (
        <div className="hero w-full my-24">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Register </h1>
                <form onSubmit={ handleRegister } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        <p className='text-red-600 font-semibold'>{ error.slice( 22, 42 ) }</p>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                </form>
                {/* if you are old user and you have an account */ }
                <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
