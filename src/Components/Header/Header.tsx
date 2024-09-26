import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Layout from '../Layout/Layout'
import CartPage from '../../Pages/Cart/CartPage'
import myContext from '../../Context/myContext'

function Header() {
    const context = useContext(myContext)
    const [head, setHead] = useState(0)
    const [menunum, setMenunum] = useState(0)
    const [resmenu, setResmenu] = useState(false)
    const {cartopen, opencart}:any = context
    
    const text = async () => {
        setHead((head + 1) % 3)
        console.log(head);
    }

    const menuresponse = () => {
        setResmenu(!resmenu);
        console.log(resmenu);

    }
    const menuclick = (num: number) => {
        if (num == menunum) {
            setMenunum(0)
        }
        else {
            setMenunum(num)
        }

    }
    // useEffect(opencart)

    return (
        <section className='sticky top-0 z-30 bg-white shadow drop-shadow-xl shadow-slate-100/50'>
            <section className='block w-full relative'>
                <section className='bg-custom-green hidden items-center justify-center md:flex'>
                    <div className='w-3/5 flex justify-between relative'>
                        {head == 0 ? <li className=' text-white text-center p-3 text-xs col-8 w-full'>The New Tree Glider Has Landed: Lightweight. Airy. Made For Life In Motion. <Link to='/' className='underline'> Shop Men</Link> | <Link to='/' className='underline'>Shop Women</Link> </li> : ''}
                        {head == 1 ? <li className=' text-white text-center p-3 text-xs col-8 w-full'>Limited Edition Drop: Your Favorite Flats In New Patterns. <Link to='/' className='underline'>Shop Tree Breezer</Link> </li> : ''}
                        {head == 2 ? <li className=' text-white text-center p-3 text-xs col-8 w-full'>Free Shipping On Orders Over $75. Free returns.</li> : ''}

                        <button onClick={text} className='col-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed" ><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                        </button>


                    </div>
                </section>
                <div className='relative w-full sticky top-0 pb-1 bg-white pt-2'>

                    <section>
                        <section className='grid w-full flex-nowrap grid-cols-3 text-xs justify-around items-center my-3 md:my-5'>
                            <div className='ms-2 md:ms-5 xl:block hidden'>
                                <ul className='flex flex-wwrap gap-3 md:gap-5'>
                                    <li><Link to='' onClick={() => menuclick(1)} className='hover:underline'>MEN</Link></li>
                                    <li><Link to='' onClick={() => menuclick(2)} className='hover:underline'>WOMEN</Link></li>
                                    <li><Link to='' onClick={() => menuclick(3)} className='hover:underline'>KIDS</Link></li>
                                    <li><Link to='/shocks' className='hover:underline'>SOCKS</Link></li>
                                    <li><Link to='' onClick={() => menuclick(5)} className='hover:underline'>SALE</Link></li>
                                </ul>

                            </div>
                            <div className='xl:hidden block'>
                                <Link to='' className='box-content' >
                                    <button onClick={menuresponse} className='box-content border-2 border-black rounded ms-2 p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className='box-content' fill="#000000" version="1.1" id="Capa_1" width="15px" height="auto" viewBox="0 0 24.75 24.75">
                                            <g>
                                                <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2   c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2   c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z" />
                                            </g>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div className='text-dark mx-auto'>
                                <Link to='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 694.3 220.7" className="h-8 "><title className="jsx-652857408">Allbirds Logo</title><path d="M393.3,60.4c0.4,0,0.9,0,1.3-0.1c6.6-0.7,12.5-6.1,13.5-12.8c1-6.6-3.2-12.1-9.6-12.8c-0.4,0-0.9-0.1-1.3-0.1 c-0.4,0-0.9,0-1.3,0.1c-6.6,0.7-12.5,6.1-13.5,12.8c-0.5,3.5,0.4,6.6,2.3,9C386.7,58.9,389.7,60.4,393.3,60.4z" className="jsx-652857408"></path><path d="M694.3,167.8c0-17.6-8.6-33.7-16.2-47.9c-6.5-12.1-12.3-23.1-10.8-31.3c1.1-5.9,5.3-9.3,11.8-9.7c0,0,0,0,0,0 c0.2,0,0.4-0.1,0.6-0.1c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.2,0.5-0.5,0.6-0.8c0-0.1,0.1-0.1,0.1-0.2l3.2-8.3c0.3-0.9,0.4-1.5,0.1-2.1 c-0.2-0.4-0.5-0.8-1-1.2c-0.6-0.5-1.6-0.9-2.9-1.3c-1.8-0.6-4.1-1-6.2-1c-9.4,0-20.9,3.1-30.9,28c-0.4,1-19.7,51-20.3,52.6 c-2.4,5.9-7.5,13-18.3,13c-4.7,0-8.5-1.8-10.6-4.8c-0.4-0.6-0.7-1.2-1-1.8c-0.8-2-1.1-4.4-0.6-7c0.2-0.9,0.4-1.9,0.7-2.9 c0.5-1.7,1.2-3.6,2-5.5c7.4-18.9,33.7-86.2,41.8-106.9c1-2.6-0.4-4.7-3.2-4.7h-9.3c-1,0-2.1,0.3-3,0.8c-1.7,0.8-3.1,2.3-3.8,3.9 c-3.6,9.1-8.7,22.3-14.1,36.2c-4.2,10.7-8.5,21.8-12.5,31.9c-1.2-2-2.6-3.9-4.1-5.7c-1.6-1.8-3.3-3.5-5.1-5 c-7.8-6.4-17.7-9.9-28.6-9.9c-13.4,0-26.3,5.4-36.4,14.2c-0.4,0.3-0.7,0.7-1.1,1c-0.3,0.2-0.5,0.5-0.8,0.7 c-6.6,6.2-11.8,13.9-15,22.4c0,0.1-0.1,0.2-0.1,0.4c-0.4,1.1-0.7,2.2-1.1,3.4c-0.6,2.1-1.1,4.2-1.4,6.4c-0.3,2-0.5,4-0.6,6 c-0.2,5.8,0.7,11.5,2.5,16.7c-0.9,1.5-2.1,2.9-3.4,4.2c-3.7,3.5-8.6,5.8-13.7,6.2c-0.5,0-0.9,0-1.4,0c-2,0-3.9-0.4-5.6-1 c-2.1-0.8-3.9-2.1-5.1-3.8c-2.3-3.3-2.3-8.1-0.2-13.6c0.5-1.4,3.7-9.9,6.6-17.5c2.2-5.9,4.2-11.4,4.6-12.5c0.2-0.6,0.6-1.5,0.9-2.6 c0.5-2.1,0.8-5-0.6-8c-0.6-1.2-1.3-2.2-2.1-3.1c-1.6-1.7-3.7-2.7-5.7-3.5c-0.8-0.3-1.6-0.6-2.4-0.8c-1.4-0.4-2.9-1-4.6-1.7 c-0.1,0-0.1-0.1-0.2-0.1c-2.8-1.2-16.3-7.5-16.3-19.5c0-0.3,0-0.6,0-0.8c0-0.1,0-0.2,0-0.3c0-0.1,0-0.3,0-0.4 c-0.2-1.8-0.8-2.9-1.6-3.5c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c0,0,0,0,0,0 c0,0,0,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.5-0.2-1-0.3-1.6-0.3H437c-1.9,0-4,1-5.4,2.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-2,5.1-4.4,11.2-6.9,17.7c-8.8,22.6-19.3,49.7-22.3,57.4c-0.1,0.3-0.2,0.6-0.3,0.9c-2.4,5.9-7.5,13-18.4,13 c-4.7,0-8.6-1.8-10.6-4.8c-1.2-1.8-1.8-4.1-1.7-6.8c0.1-2.1,0.6-4.4,1.5-6.8c1.9-5,6-15.4,10.3-26.4c4.1-10.5,8.4-21.7,11.4-29.3 c1-2.6-0.4-4.7-3.2-4.7h0h-9.3h-0.9h0c-0.6,0-1.3,0.1-2,0.3c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-2.2,0.6-4.4,2.1-5.7,3.7 c-4.8,5.8-11,10.5-17.8,13.9c-6.8,3.4-14.1,5.6-21.1,6.4c-1-2.6-2.3-5.2-3.9-7.6c-0.1-0.1-0.1-0.2-0.2-0.3c-1-1.5-2-2.9-3.2-4.3 c-8.3-9.6-20.2-14.9-33.7-14.9c-7.2,0-14.2,1.6-20.8,4.4c3.3-8.5,6.6-17.1,9.7-25.2c3.8-9.9,7.4-19.1,10.3-26.7 c0.5-1.2,0.4-2.2,0-3.1c-0.5-1-1.6-1.6-3.1-1.6H288h-9.2h-0.1c-1.1,0-2.3,0.4-3.4,1c-1.3,0.7-2.4,1.7-3,2.9 c-0.1,0.3-0.3,0.5-0.4,0.8C260,58.7,241,107.8,232,131.3c-2.5,6.4-4.2,11-4.9,12.7c-2.4,5.9-7.5,13-18.3,13c-1,0-1.9-0.1-2.7-0.2 c-3.4-0.6-6.3-2.1-7.9-4.6c-0.3-0.5-0.6-1-0.9-1.6c-0.9-2-1.2-4.5-0.7-7.2c0.2-1.3,0.9-3.4,1.7-5.5c1.1-3,2.2-5.9,2.2-5.9 c0,0,4-10.2,9.7-25c0.6-1.6,1.3-3.3,2-5.1c0.1-0.2,0.2-0.4,0.2-0.6c8.8-22.6,20.6-53.1,29.1-75.1c3.4-8.9,6.3-16.4,8.3-21.4 c1-2.6-0.4-4.7-3.2-4.7h-9.3c-2.8,0-5.8,2.1-6.8,4.7c-1.1,2.8-10.9,28.2-21.9,56.6c-14.2,36.6-30.3,78.2-32,82.7 c-0.4,0.9-0.8,1.8-1.3,2.7c-1.5,2.9-3.8,5.7-7,7.7c-2.6,1.6-6,2.6-10.1,2.7c-3.8,0-7-1.1-9.2-3.2c-0.5-0.5-1-1-1.5-1.6 c-1.5-2.3-2.1-5.2-1.5-8.6c0,0,0-0.1,0-0.1c0.5-2.9,4.4-13.1,4.4-13.3c2.5-6.4,5.4-14,8.5-22.1c10.3-26.5,22.9-59.3,31-80 c0.2-0.6,0.3-1.2,0.3-1.8c-0.1-0.8-0.4-1.6-1-2.1c-0.6-0.5-1.4-0.8-2.5-0.8h-9.3c-1,0-2.1,0.3-3.1,0.8c-1.4,0.7-2.6,1.8-3.3,3.1 c-0.1,0.2-0.3,0.5-0.4,0.7c-2.4,6.1-5,12.9-7.8,20.1c-3,7.8-6.2,16.1-9.5,24.4c-12.8,33-25.5,66.1-27.6,71.4 c-0.7,1.7-1.6,3.4-2.7,5.1c-3,4.3-7.8,7.9-15.7,7.9c-2.9,0-5.5-0.7-7.6-1.9c-1.2-0.8-2.3-1.7-3-2.9c-0.5-0.8-0.9-1.6-1.2-2.5 c-0.6-1.8-0.7-3.9-0.3-6.2c0.5-2.8,3.3-10.1,3.8-11.2c0-0.1,0.1-0.2,0.1-0.2l19.1-49.2c1-2.6-0.4-4.7-3.2-4.7h-9.3h0 c-1.7,0-3.5,0.8-4.9,2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.1c-0.8,0.7-1.4,1.6-1.7,2.5l-1.9,5l-3,7.8c-0.6-0.9-1.2-1.8-1.8-2.7 c0,0,0,0,0,0c-0.6-0.9-1.3-1.7-2-2.5c0,0,0,0,0,0c-3-3.5-6.6-6.5-10.5-8.8c-6.7-4-14.6-6.1-23.1-6.1c-20.9,0-40.7,13.2-50.4,31.8 c-2.7,5.2-4.6,10.8-5.5,16.6c-2.1,13.6,1.4,26.5,9.8,36.2c2.6,3,5.5,5.6,8.8,7.7c0.6,0.4,1.3,0.8,2,1.2c6.7,3.9,14.5,6,22.9,6h0 c0,0,0,0,0,0c13.5,0,26.6-5.6,36.8-14.5c0,0,0,0,0,0c0.3,0.6,0.7,1.2,1.1,1.8c0.2,0.3,0.5,0.7,0.7,1c0,0.1,0.1,0.1,0.1,0.2 c0.2,0.3,0.5,0.6,0.7,0.9c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.2,0.3,0.3,0.5,0.5c0.3,0.3,0.6,0.6,0.8,0.9c0.1,0.1,0.2,0.2,0.3,0.3 c0.4,0.3,0.7,0.7,1.1,1c0,0,0,0,0.1,0.1c3.4,2.9,7.7,5.2,12.7,6.4c0.1,0,0.2,0.1,0.3,0.1c0.5,0.1,1,0.2,1.5,0.3 c0.2,0,0.4,0.1,0.7,0.1c0.4,0.1,0.8,0.1,1.3,0.2c0.4,0,0.7,0.1,1.1,0.1c0.3,0,0.6,0.1,1,0.1c0.7,0,1.4,0.1,2.2,0.1c0,0,0,0,0,0h0 c0,0,0,0,0,0c5.2,0,10.1-1,14.6-2.9c1.7-0.7,3.3-1.5,4.8-2.5c0.5-0.3,1-0.6,1.5-1c2-1.4,3.9-2.9,5.6-4.7c0.6,0.8,1.3,1.5,2,2.2 c4.6,4.7,10.8,7.6,17.9,8.5c0.2,0,0.5,0.1,0.7,0.1c0.2,0,0.4,0,0.6,0c0.4,0,0.8,0.1,1.2,0.1c0.2,0,0.4,0,0.5,0c0.4,0,0.9,0,1.3,0 c0,0,0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0h0c10.4,0,19.6-3.9,26.4-10.9c2.6,3.2,5.9,5.8,9.7,7.7c4.3,2.1,9.2,3.2,14.4,3.2 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h0h0c2.7,0,5.3-0.3,7.8-0.8c10.9-2.2,19.9-9.1,25.4-19.5 c0.3,0.5,0.6,0.9,0.9,1.4c0.4,0.6,0.8,1.2,1.2,1.8c0.6,0.8,1.2,1.5,1.8,2.3c8.3,9.6,20.2,14.9,33.7,14.9h0h0 c18.4,0,36-10.3,46.5-25.3c4.8-6.9,8.1-14.7,9.4-23c0.3-2.1,0.5-4.2,0.6-6.3c1.8-0.2,3.6-0.5,5.3-0.9c7.7-1.5,14.9-4,21.3-7.4 c-0.2,0.5-0.4,1.1-0.6,1.6c-3,7.9-5.7,14.7-7.1,18.4c-4.4,11.1-3.7,21.9,2,30.3c2.1,3.1,4.8,5.7,7.9,7.7c5,3.2,11,5,17.6,5h0h0 c15.9,0,29-9.1,35.2-24.5c0.8-2,2.4-6.2,4.5-11.7c4.4-11.3,11-28.3,17-43.7c0.5-1.4,1.1-2.8,1.6-4.1c5.2,6.5,12.2,11.4,19,14.3 c0.4,0.2,0.7,0.3,1.1,0.5c0.8,0.3,1.6,0.6,2.3,0.9c-3.4,9.2-8.8,23.8-9.5,25.4c-2.7,6.9-3.5,13.6-2.3,19.7 c0.7,3.8,2.2,7.4,4.3,10.6c1.4,2,3,3.8,4.8,5.4c5,4.3,11.5,6.9,18.7,7.3c0.7,0,1.3,0.1,2,0.1c1.1,0,2.2-0.1,3.3-0.2 c0.2,0,0.5,0,0.7-0.1c0.1,0,0.2,0,0.3,0c4.6-0.5,9-1.9,13.1-3.9c4.2-2.1,8-4.9,11.2-8.2c6.3,6.2,14.4,10.2,23.5,11.7 c2.5,0.4,5.1,0.6,7.8,0.6h0h0c3.4,0,6.8-0.4,10.1-1c9.1-1.8,17.7-6.1,24.9-12c0.7-0.5,1.3-1.1,1.9-1.7c0.4,0.7,0.8,1.4,1.2,2 c3.5,5.1,8.5,8.8,14.4,10.9c0.3,0.1,0.6,0.2,0.8,0.3c0.3,0.1,0.7,0.2,1,0.3c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.6,0.1,0.9,0.2 c0.4,0.1,0.7,0.2,1.1,0.2c0.3,0.1,0.6,0.1,0.9,0.2c0.4,0.1,0.7,0.1,1.1,0.1c0.4,0,0.8,0.1,1.2,0.1c0.3,0,0.6,0.1,0.9,0.1 c0.7,0,1.4,0.1,2.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0h0h0c15.9,0,29-9.1,35.2-24.5 c0.3-0.9,6.1-15.4,10.8-27.4c1.4-3.6,2.7-7,3.7-9.7c0.5,1.1,1.1,2.3,1.6,3.4c1.9,3.8,3.9,7.7,6,11.7c1.7,3.2,3.5,6.5,5.1,9.8 c4.9,9.8,9,19.8,9,29.6c0,28.9-19.6,34-25.6,34.9c-4,0.6-7,3.7-7.6,7.5c-0.1,0.9-0.2,1.8,0,2.7c0,0.3,0.1,0.6,0.2,0.8 c1,4,4.6,6.9,8.7,6.9c0.2,0,0.4,0,0.7,0c0.2,0,0.4,0,0.7,0c4.7-0.7,9.7-2.2,14.4-4.5C681.8,208.9,694.3,193.7,694.3,167.8 L694.3,167.8L694.3,167.8z M579.1,123.9c-1.7,11.8-9.2,22.2-19,28.1c-0.1,0.1-0.3,0.2-0.4,0.2c0,0-0.1,0-0.1,0.1 c-5.2,3-11,4.7-17,4.7c-2.8,0-5.5-0.4-8-1.2c-4.4-1.4-8.3-3.9-11.2-7.4c-2.9-3.5-4.7-7.8-5.4-12.6c0,0,0-0.1,0-0.1c0,0,0,0,0,0 c-0.4-2.9-0.4-5.9,0.1-9c0.7-4.6,2.2-9,4.5-13c3-5.4,7.2-10,12.1-13.5c5.9-4.1,12.8-6.6,19.9-6.6c4.8,0,9.2,1.1,12.9,3.3 c2.4,1.4,4.5,3.2,6.3,5.3c0.9,1.1,1.7,2.2,2.3,3.4c2.3,4,3.4,8.7,3.4,13.7C579.5,120.8,579.4,122.3,579.1,123.9z M271.6,156.1 c-4.9-1.3-9.1-3.9-12.2-7.8c-4.7-5.7-6.6-13.4-5.4-21.7c0,0,0-0.1,0-0.1c0.3-2.1,0.8-3.9,1.3-5.4c0.7-1.8,1.4-3.7,2.2-5.6 c0,0,0,0,0,0c0.1-0.3,0.3-0.5,0.4-0.8c0.3-0.5,0.5-1,0.8-1.5c0.1-0.2,0.2-0.3,0.3-0.5c2.2-3.7,4.9-7,8-9.8 c6.6-5.8,14.9-9.4,23.5-9.4c3.9,0,7.6,0.8,10.8,2.2c3.3,1.5,6.1,3.6,8.4,6.4c4.7,5.7,6.6,13.4,5.4,21.8 c-2.7,18.2-19.1,33.1-36.6,33.1C276.1,157,273.8,156.7,271.6,156.1z M45.3,157c-7.9,0-14.7-3.1-19.3-8.6c-0.5-0.6-0.9-1.2-1.3-1.8 c-3.8-5.5-5.2-12.5-4.1-20c2.7-18.2,19.2-33.1,36.8-33.1c7.9,0,14.7,3.1,19.3,8.6c4.7,5.7,6.7,13.4,5.4,21.8 c-0.2,1.4-0.5,2.8-0.9,4.2C76.8,144.3,61.5,157,45.3,157z" className="jsx-652857408"></path></svg>
                                </Link>
                            </div>
                            <div className='me-5'>
                                <div className='ms-5'>
                                    <ul className='flex flex-wwrap lg:gap-5 items-center justify-end xl:justify-center'>
                                        <li><Link to='' className='uppercase hidden xl:block hover:underline'>Sustainability</Link></li>
                                        <li><Link to='/rerun' className='uppercase hidden xl:block hover:underline'>ReRun</Link></li>
                                        <li><Link to='' className='uppercase hidden xl:block hover:underline'>stores</Link></li>
                                        <li><Link to='' className='text-dark'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" ><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" fill='black' /></svg></Link></li>
                                        <li className='hidden lg:block'><Link to='/login'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path fill='black' d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg></Link></li>
                                        <li className='hidden lg:block'><Link to=''><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path fill='black' d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg></Link></li>
                                        <li className='relative' onClick={opencart}><Link to=''><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3155631937"><path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="jsx-3155631937"></path><path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="jsx-3155631937"></path><path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="jsx-3155631937"></path></svg>
                                            <li className='absolute top-0 left-1/4 ps-1'>1</li></Link></li>
                                    </ul>

                                </div>
                            </div>
                        </section>
                    </section>



                </div>
                <section className='absolute w-screen xl:hidden z-20'>
                    <section className={resmenu == false ? 'hidden menuanimation2' : 'h-screen block menuanimation1 bg-white'}>
                        dddddddddddd
                    </section>
                </section>
                <section className={menunum != 0 ? 'px-12 bg-slate-100 max-h-96 overflow-y-scroll absolute w-full hidden xl:flex menuanimation z-50' : "hidden"}>
                    <div className='flex w-full justify-around px-12'>
                        <div>
                            <li className='my-5'><Link to='' className=''>SHOES</Link></li>
                            <li className='py-1'><Link to='' className='text-sm font-normal' >Everyday Sneakers</Link></li>
                            <li className='py-1'><Link to='' className='text-sm font-normal'>Active Shoes</Link></li>
                            {/* <li><Link to='' className=''>Water-Repellent Sneakers</Link></li>
                            <li><Link to='' className=''>Slip-Ons</Link></li>
                            <li><Link to='' className=''>Hiking</Link></li>
                            <li><Link to='' className=''>High Tops</Link></li>
                            <li><Link to='' className=''>Sale</Link></li>
                            <li><Link to='' className=''>Shop all</Link></li> */}
                        </div>
                        <div>
                            <h1 className='my-5'><Link to='' className=''>Bestsellers</Link></h1>
                            <li className='py-1'><Link to='' className='text-sm font-normal'>Tree Glider</Link></li>
                            <li className='py-1'><Link to='' className='text-sm font-normal'>Tree Runner</Link></li>
                            {/* <li><Link to='' className=''>Tree Dasher 2</Link></li>
                            <li><Link to='' className=''>Canvas Pipers</Link></li>
                            <li><Link to='' className=''>Tree Runner Go</Link></li>
                            <li><Link to='' className=''>Tree Dasher Relay</Link></li>
                            <li><Link to='' className=''>Tree Lounger</Link></li>
                            <li><Link to='' className=''>Shop all</Link></li> */}
                        </div>
                        <div>
                            <h1 className='my-5'><Link to='' className=''>Apparel & More</Link></h1>
                            <li className='py-1'><Link to='' className='text-sm font-normal'>Socks</Link></li>
                            <li className='py-1'><Link to='' className='text-sm font-normal'>Underwear</Link></li>
                        </div>
                        <div className=''>
                            <h1 className='my-5'><Link to='' className=''>FEATURED</Link></h1>
                            <div className='relative w-3/4 my-4 py-1'>
                                <img src='https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533/cms/27KD93SD0rhtKMTXVxiKNE/76aff7ab213396e701b753fb02a32889/24Q3_TreeGlider_Site_Nav_Tile_WomenMen_Mobile_1125x324.jpg' height='' width='100%' className='m-auto' />
                                <div className='flex absolute top-0 w-full text-white text-sm bg-dark h-full bg-opacity-25 items-center justify-center'>THE NEW TREE GLIDER</div>
                            </div>
                            <div className='relative w-3/4 my-4 py-1'>
                                <img src='https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533/cms/1UfQv06V8odtR87s7W3OnJ/a35e36c770339c4d8a342782621b9c1a/24Q3_July_SeasonalCore_WorldOfBreeze_Site_Nav_Tile_Mobile_1125x324.jpg' height='' width='100%' className='m-auto' />
                                <div className='flex absolute top-0 w-full text-white text-sm bg-dark h-full bg-opacity-25 items-center justify-center uppercase'>Lightweight, Breezy Shoes</div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className={`${cartopen ? 'flex w-full top-0 absolute h-screen z-50 bg-black bg-opacity-60 flex flex-row-reverse translate-x-0' : 'w-0 top-0 absolute h-screen z-50 bg-black bg-opacity-60 flex-row-reverse overflow-hidden translate-x-[100vw]'}`}>
                <div className={`${cartopen ? 'w-full md:w-1/2 lg:w-1/3 translate-x-0 duration-500 me-0':'w-full md:w-1/2 lg:w-1/3 translate-x-[100vw] overflow-hidden'}`}>
                    <CartPage />
                </div>
                <div className='md:1/2 lg:w-2/3' onClick={opencart}></div>
            </section>
        </section>
    )
}

export default Header