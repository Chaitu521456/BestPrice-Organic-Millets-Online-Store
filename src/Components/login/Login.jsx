import { useForm } from 'react-hook-form';
import './Login.css'; 
import { validateForm } from './validateLogin'; 
import { useState } from 'react';

function Login() {
    let { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState({});

    function handleFormSubmit(userObj) {
        const validationErrors = validateForm(userObj);
        if (Object.keys(validationErrors).length===0){
            console.log('Login successful:', userObj);
            setErrors({}); 
        } 
        else{
            setErrors(validationErrors);
        }
    }

    return (
        <div className="border border-6 how">
            <h1 className="text-center text-darkorange display-3 mb-4 mt-4">Login using your Credentials</h1>

            <form className="w-50 mt-5 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="form-label"><h4>Enter Username</h4></label>
                    <input type="text" {...register('Username')} id="username" className="form-control" placeholder="Username" />
                    <p>Please enter the registered username</p>
                    {errors.username && <p className="text-danger">{errors.username}</p>} 
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="form-label"><h4>Enter Password</h4></label>
                    <input type="password" {...register('Password')} id="password" className="form-control" placeholder="Password" />
                    <p>Use the latest password</p>
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                </div>

                {/* Submit Button */}
                <div className="Submit mb-5">
                    <button type="submit" className="btn btn-submits bg-success text-white">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
