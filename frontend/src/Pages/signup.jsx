import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
// import logo from './logo.png'; // Update with the actual path to your logo
const logo = "./logo.jpeg"
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
            <div className='card-base w-full max-w-md text-center'>
                <div className='logo-title mb-6'>
                    <h1 className='text-3xl font-semibold text-gray-300'>Thoughtflow.ai</h1>
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
                            onChange={(e) => setInputs({...inputs , password: e.target.value})}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Confirm Password</label>
                        <input
                            type="password"
                            className='input-field'
                            placeholder="Re-enter password"
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
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button className='button w-full' disabled={loading}>
                        {loading ? (
                            <span className='loading loading-spinner'></span>
                        ) : (
                            "Signup"
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