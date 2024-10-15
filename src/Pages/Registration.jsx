import React from 'react'
import signupImg from '../assets/login.png'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className='registration h-svh w-full text-white flex justify-evenly items-center'>
            <div className='rounded-xl border w-2/6 p-7'>
                <h1 className='text-4xl'>Sign Up</h1>
                <form>
                    <div>
                        <i className="fa-solid fa-user text-slate-300"></i>
                        <input type="text" placeholder='Your Name' className='inputtag p-1 m-2 w-4/6 bg-transparent border-botto' />
                    </div>
                    <div>
                        <i className="fa-solid fa-envelope text-slate-300"></i>
                        <input type="email" placeholder='Your Mail' className='inputtag p-1 m-2 w-4/6 bg-transparent border-botto' />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock text-slate-300"></i>
                        <input type="password" placeholder='Password' className='inputtag p-1 m-2 w-4/6 bg-transparent border-botto' />
                    </div>
                    <div>
                        <i className="fa-solid fa-lock text-slate-300"></i>
                        <input type="password" placeholder='Repeat your Password' className='inputtag p-1 m-2 w-4/6 bg-transparent border-botto' />
                    </div>
                    <div className='flex items-center gap-4 mt-3'>
                        <input type="checkbox" className='appearance-none h-4 w-4 border border-gray-300 rounded-sm relative checked:border-transparent focus:outline-none focus:ring-none ' />
                        <p>I agree all statements in Terms of service</p>
                    </div>
                    <button className='bg-white rounded-sm text-black px-3 py-2 text-md font-bold mt-5'>Sign Up</button>
                </form>
            </div>
            <div className='flex flex-col w-2/6'>
                <img src={signupImg} alt="" />
                <Link to={'/'}></Link>
            </div>
        </div>
    )
}

export default Registration