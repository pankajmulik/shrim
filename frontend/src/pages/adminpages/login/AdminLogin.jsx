// AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../signup/Signup';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (value) => {
        // Simple email validation pattern
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (!validateEmail(value)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
            // Handle form submission logic here
            navigate('/admin/santu/home');
            console.log('Form submitted:', email);
        }
    };

    return (
        <div className='w-full h-auto mx-auto grid'>
            <div className='my-10'>
                <p className='text-center text-4xl text-teal-950'>
                    Shri Mukundraj Mobile Shpee <br /> Login Page
                </p>
                <p className='text-center m-4'>
                    Please fill in the details to sign in
                </p>
                <div className="grid my-10 loginform w-80 p-3 m-auto rounded-md shadow-lg bg-slate-300">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="mb-5">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`w-full rounded border p-3 shadow mt-2 outline-none text-neutral-800 ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    value={email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                />
                                {error && <p className="mt-2 text-red-500">{error}</p>}
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-5"/>
                                <span>Password</span>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className={`w-full rounded border p-3 shadow mt-2 outline-none text-neutral-800 ${error ? 'border-red-500' : 'border-gray-300'}`}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Enter your password"
                                    required
                                />

                        <div className='text-center'>

                            <button type="submit" className='text-center bg-slate-500 text-white p-2 rounded-md mt-5'>

                                Login

                                    </button>
                                    </div>
                            
</div>

                    </form>

             



                don't have an account? <span onClick={() => {
                    navigate('signup')
                    }}>
                    signup</span>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
