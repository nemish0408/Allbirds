import React from 'react'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <Layout>
                <div className='grid lg:grid-cols-2 grid-cols-1 bg-[#f1ebe7] xl:p-48'>
                    <div className='lg:p-10'>
                        <h2 className='mb-[50px] font-semibold text-2xl px-16'>LOGIN</h2>
                        <form>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>EMAIL</label>
                                <input type='email' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>PASSWORD</label>
                                <input type='password' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16'>
                                <button type='button' className='text-xs font-semibold w-full bg-black text-white p-6 border-2 border-black transition duration-300 hover:bg-transparent hover:text-black mb-6'>SIGN IN</button>
                                <Link to=''><h2 className='text-xs font-semibold text-center underline'>FORGOT PASSWORD</h2></Link>
                            </div>
                        </form>
                    </div>
                    <div className='lg:p-10'>
                        <div className='px-16'>
                            <h2 className='mb-5 font-semibold text-2xl '>Create an Account</h2>
                            <p className='mb-5 text-sm font-normal'>We never save credit card information.</p>
                            <p className='mb-8 text-sm font-normal'>Registering makes checkout fast and easy and saves your order information in your account.</p>
                        </div>
                        <form>
                        <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>FIRST NAME</label>
                                <input type='text' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>LAST NAME</label>
                                <input type='text' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>EMAIL*</label>
                                <input type='email' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>PASSWORD*</label>
                                <input type='password' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6'>
                                <label className='text-xs font-semibold mb-3 block'>CONFIRM PASSWORD*</label>
                                <input type='password' className='form-control block w-full p-5 font-light'></input>
                            </div>
                            <div className='px-16 mb-6 flex'>
                                <input type='checkbox' id='check' className=' inline-block me-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'></input>
                                <label htmlFor='check' className='inline-block text-sm font-normal'>
                                Email me with news and offers
                                </label>
                            </div>
                            <div className='px-16 '>
                                <button type='button' className='text-xs font-semibold w-full bg-black text-white p-6 border-2 border-black transition duration-300 hover:bg-transparent hover:text-black mb-5'>REGISTER</button>
                                <p className='text-[11px] font-thin leading-1 tracking-tight text-center mb-6  '>By creating an account, you agree to our Terms of Use and Privacy Policy.</p>
                                <h2 className='text-sm font-semibold text-center'>* REQUIRED FIELDS</h2>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Login