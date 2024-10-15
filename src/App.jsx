import { useForm } from 'react-hook-form'
import './App.css'
import signupImg from './assets/login.png'
import { useState } from 'react'

function App() {
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm()
  const [userInfo, setUserInfo] = useState()

  const onSubmit = (data) => {
    setUserInfo(data)
    alert(`${data.username} Registered Successfully `)
    reset()
  }

  const password = watch('password')

  return (
    <div className='registration h-screen w-full text-white flex justify-evenly items-center'>
      <div className='rounded-xl border lg:w-2/6 p-7 w-5/6'>
        <h1 className='text-4xl'>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <i className="fa-solid fa-user text-slate-300"></i>
            <input
              type="text"
              placeholder='Your Name'
              className='inputtag p-1 m-2 lg:w-4/6 w-5/6 bg-transparent'
              {...register('username', { required: 'Username is required' })}
            />
            {errors.username && <p className='text-red-500'>{errors.username?.message}</p>}
          </div>
          <div>
            <i className="fa-solid fa-envelope text-slate-300"></i>
            <input
              type="email"
              placeholder='Your Mail'
              className='inputtag p-1 m-2 lg:w-4/6 w-5/6 bg-transparent'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email address'
                }
              })}
            />
            {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
          </div>
          <div>
            <i className="fa-solid fa-lock text-slate-300"></i>
            <input
              type="password"
              placeholder='Password'
              className='inputtag p-1 m-2 lg:w-4/6 w-5/6 bg-transparent'
              {...register('password', {
                required: 'Password is required',
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                  message: 'Password must be at least 8 characters, include one uppercase letter, one number, and one special character'
                }
              })}
            />
            {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
          </div>
          <div>
            <i className="fa-solid fa-lock text-slate-300"></i>
            <input
              type="password"
              placeholder='Repeat your Password'
              className='inputtag p-1 m-2 lg:w-4/6 w-5/6 bg-transparent'
              {...register('repeatPassword', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
            />
            {errors.repeatPassword && <p className='text-red-500'>{errors.repeatPassword?.message}</p>}
          </div>
          <div className='flex items-center gap-4 mt-3'>
            <input
              type="checkbox"
              className='appearance-none h-4 w-4 border border-gray-300 rounded-sm relative checked:border-transparent focus:outline-none focus:ring-none'
              {...register('terms', { required: 'You must agree to the terms' })}
            />
            <p>I agree to all statements in Terms of Service</p>
          </div>
          {errors.terms && <p className='text-red-500'>{errors.terms?.message}</p>}

          <div className="flex flex-wrap mt-5">
            <button type="submit" className='bg-white rounded-sm text-black px-3 py-2 text-md font-bold mr-5'>
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className='bg-white rounded-sm text-black px-3 py-2 text-md font-bold'
            >
              Reset
            </button>
          </div>
        </form>
      </div>
      <div className='lg:flex flex-col w-2/6 hidden'>
        <img src={signupImg} alt="Sign up illustration" />
      </div>
    </div>
  )
}

export default App
