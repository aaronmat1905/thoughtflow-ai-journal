import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            <div className='card-base w-full max-w-md text-center'>
                <div className='logo-title mb-6'>
                    <h1 className='text-3xl font-semibold text-gray-300'>Thoughtflow.ai</h1>
                </div>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Username</label>
                        <input
                            type="text"
                            className='input-field'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className='form-group'>
                        <label className='block text-gray-300 mb-2'>Password</label>
                        <input
                            type="password"
                            className='input-field'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button className='button w-full' disabled={loading}>
                        {loading ? (
                            <span className='loading loading-spinner'></span>
                        ) : (
                            "Login"
                        )}
                    </button>

                    <div className='text-center mt-4'>
                        <Link to='/signup' className='text-blue-400 hover:text-blue-500'>
                            Don't have an account? Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;