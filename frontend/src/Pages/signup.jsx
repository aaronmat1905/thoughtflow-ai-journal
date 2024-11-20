import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            <div className='card-base w-full max-w-md'>
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-semibold text-gray-300'>
                        Join <span className='text-blue-500'>Thoughtflow</span>
                    </h1>
                    <p className='text-gray-400 mt-2'>Create your AI journal account</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Full Name</label>
                        <input
                            type="text"
                            className='input-field'
                            placeholder="John Doe"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Username</label>
                        <input
                            type="text"
                            className='input-field'
                            placeholder="johndoe"
                            value={inputs.username}
                            onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Password</label>
                        <input
                            type="password"
                            className='input-field'
                            placeholder="Minimum 6 characters"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Confirm Password</label>
                        <input
                            type="password"
                            className='input-field'
                            placeholder="Confirm your password"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Gender</label>
                        <select 
                            className='input-field'
                            value={inputs.gender}
                            onChange={(e) => setInputs({...inputs, gender: e.target.value})}
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <button 
                        className='button w-full' 
                        disabled={loading}
                    >
                        {loading ? (
                            <span className='loading loading-spinner'></span>
                        ) : (
                            "Create Account"
                        )}
                    </button>

                    <div className='text-center mt-4'>
                        <Link to='/login' className='text-blue-400 hover:text-blue-500'>
                            Already have an account? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;