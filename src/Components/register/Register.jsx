import {useForm} from 'react-hook-form';
import "./Register.css";
import {validateForm} from './validateRegister'; 
import {useState} from 'react';

function Register() {
    const { register,handleSubmit} =useForm();
    const [errors,setErrors] =useState({}); 

    function handleFormSubmit(userObj) {
        const validationErrors = validateForm(userObj); 
        if(Object.keys(validationErrors).length===0){

            console.log('Form submitted successfully:',userObj);
            setErrors({}); 
        } 
        else{
            setErrors(validationErrors);
        }
    }

    return (
        <div className="border border-6 how">
            <h1 className="text-center text-darkorange display-3 mb-4 mt-4">New User Sign Up </h1>

            <form className="w-50 mt-5 mx-auto " onSubmit={handleSubmit(handleFormSubmit)}>
                {/* Username */}
                <div className="mb-4">
                    <label htmlFor="username" className="form-label"><h4>Username</h4></label>
                    <input type="text" {...register('Username')} id="username" className="form-control" placeholder='Username'/>
                    <p>Please select Unique Username with atleast 6 characters</p>
                    {errors.username && <p className="text-danger">{errors.username}</p>} 
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label htmlFor="password" className="form-label"><h4>Password</h4></label>
                    <input type="password" {...register('Password')} id="password" className="form-control" placeholder='Password' />
                    <p>Atleast 8 characters with uppercase, lowercase, numbers and special Characters</p>
                    {errors.password && <p className="text-danger">{errors.password}</p>} 
                </div>

                {/* Gmail */}
                <div className="mb-4">
                    <label htmlFor="mail" className="form-label"><h4>E-mail</h4></label>
                    <input type="email" {...register('gmail')} id="mail" className="form-control" placeholder='Email Address' />
                    <p>Give Frequently used Email</p>
                    {errors.email && <p className="text-danger">{errors.email}</p>} 
                </div>

                {/* Submit Button */}
                <div className="Submit mb-5">
                    <button type="submit" className="btn btn-submits bg-success text-white">Register</button>
                    <button type="reset" className="btn btn-resets bg-danger text-white">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
