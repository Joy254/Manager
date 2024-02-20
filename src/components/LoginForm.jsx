import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'; // Add this import statement
import { BrowserRouter as Router } from 'react-router-dom'; // Add this import statement

const LoginForm = ({ handleLogin }) => {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = (formData) => {
    handleLogin(formData.username, formData.password); // Changed to use formData.username
  };

  return (
    <Router> {/* Wrap your component within the Router component */}
      <div className='container pt-16 pb-10 lg:pt-[6rem] lg:pb-[4.5rem]'>
        <h1 className='text-center font-semibold text-3xl lg:text-4xl lg:max-w-3xl lg:mx-auto'>
          Welcome Back: Your{' '}
          <span className='text-primary'>Productivity</span> Journey Starts Here
        </h1>
        <div className='mt-8 md:flex md:justify-center md:mt-16'>
          <form onSubmit={handleSubmit(onSubmit)} className='grid gap-y-6 w-full md:w-[468px]'>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='username' className={errors.username ? 'text-red-500' : 'text-base'}>
                Username
              </label>
              <input
                {...register('username')}
                type='text'
                id='username'
                autoComplete='off'
                className={errors.username ? 'focus-visible:ring-red-500' : ''}
              />
              {errors.username && (
                <p className='text-red-500'>{errors.username.message}</p>
              )}
            </div>
            <div className='flex flex-col gap-y-2'>
              <label htmlFor='password' className={errors.password ? 'text-red-500' : 'text-base'}>
                Password
              </label>
              <input
                {...register('password')}
                type='password'
                id='password'
                autoComplete='off'
                className={errors.password ? 'focus-visible:ring-red-500' : ''}
              />
              {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
              )}
            </div>
            <button type='submit' disabled={isSubmitting}>
              {isSubmitting && (
                <div className='mr-2 w-5 h-5 animate-spin' />
              )}
              Sign In
            </button>
            <Link to='/register' className='text-center text-base'> {/* Use Link */}
              Don't have an account yet?<br />Create one
            </Link>
          </form>
        </div>
      </div>
    </Router>
  );
};

export default LoginForm;