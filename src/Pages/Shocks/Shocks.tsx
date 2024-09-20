import React from 'react'
import Layout from '../../Components/Layout/Layout'
import banner from './img/banner.avif'
import { Link } from 'react-router-dom'
import shock1 from './img/shock1.avif'
import './Shocks.css'

function Shocks() {
    const Shocks = [{
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    },
    {
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    },
    {
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    },
    {
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    },
    {
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    },
    {
        color: 'Rugged Beige',
        src: shock1,
        price: '$14'
    }]
    return (
        <Layout>
            <section className='h-[200px] sm:h-full'>
                <div className='relative h-[200px] sm:h-full mb-5'>
                    <img src={banner} className='object-none sm:object-cover h-[200px] sm:h-full'></img>
                    <div className='absolute bottom-0 top-5 md:top-0 left-0 flex md:items-center h-full w-full md:px-[200px] lg:px-[355px]  justify-center md:text-center'>
                        <div className='text-white'>
                            <h1 className='md:text-4xl text-lg font-bold p-2 leading-5 md:p-5'>Anytime Socks</h1>
                            <p className='md:text-base text-xs font-normal p-2'>Made with a blend of light, breathable materials like tree fiber and Organic Cotton, our socks keep your feet cool, dry, and smiling (if feet could smile).</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='md:my-20 m-3 md:mx-24'>
                <section>
                    <div>
                        <h2 className='mb-8 text-[22px] leading-[1.32rem] font-bold'>
                            No Show Socks
                        </h2>
                        <p className='mb-8 text-base leading-6 font-normal'>
                            Light, breathable and made to move and groove without budging.
                        </p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {Shocks.map((item: any, color: any) => (
                                <div className='shock-show'>

                                    <div className='cursor-pointer relative bg-white hover-shadow'>
                                        <Link to='#' >
                                            <img src={item.src} className='mb-3'></img>
                                            <h3 className='font-bold leading-[1.43rem] text-[14px] mb-[6px]'>
                                                Anytime No Shock
                                            </h3>
                                            <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                                {item.color}
                                            </p>
                                        </Link>
                                        <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            {item.price}
                                        </p>
                                        <div className='absolute w-full z-20 bg-white pb-5 hidden mx-auto hover-shadow shock-add'>
                                            <p className='font-bold leading-[1.43rem] text-[14px] mb-[10px]'>
                                                Quick Add
                                            </p>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>S</p>
                                                    <p className='text-xs font-normal'>(W5-7)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>M</p>
                                                    <p className='text-xs font-normal'>(W8-10 / M8)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>L</p>
                                                    <p className='text-xs font-normal'>(W11 / M9-12)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>XL</p>
                                                    <p className='text-xs font-normal'>(M13-14)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <div className='w-full block bg-gray-300 mt-10 h-0.5'></div>

                <section className='mt-10'>
                    <div>
                        <h2 className='mb-8 text-[22px] leading-[1.32rem] font-bold'>
                            Ankle Socks
                        </h2>
                        <p className='mb-8 text-base leading-6 font-normal'>
                            Designed to keep you comfortable for workouts or work.</p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {Shocks.map((item: any, color: any) => (
                                <div className='shock-show'>

                                    <div className='cursor-pointer relative bg-white hover-shadow'>
                                        <Link to='#' >
                                            <img src={item.src} className='mb-3'></img>
                                            <h3 className='font-bold leading-[1.43rem] text-[14px] mb-[6px]'>
                                                Anytime Ankle Shock
                                            </h3>
                                            <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                                {item.color}
                                            </p>
                                        </Link>
                                        <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            {item.price}
                                        </p>
                                        <div className='absolute w-full z-20 bg-white pb-5 hidden mx-auto hover-shadow shock-add'>
                                            <p className='font-bold leading-[1.43rem] text-[14px] mb-[10px]'>
                                                Quick Add
                                            </p>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>S</p>
                                                    <p className='text-xs font-normal'>(W5-7)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>M</p>
                                                    <p className='text-xs font-normal'>(W8-10 / M8)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>L</p>
                                                    <p className='text-xs font-normal'>(W11 / M9-12)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>XL</p>
                                                    <p className='text-xs font-normal'>(M13-14)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <div className='w-full block bg-gray-300 mt-10 h-0.5'></div>

                <section className='mt-10'>
                    <div>
                        <h2 className='mb-8 text-[22px] leading-[1.32rem] font-bold'>
                            Crew Socks
                        </h2>
                        <p className='mb-8 text-base leading-6 font-normal'>
                            A classic crew height sock designed to keep you comfortable whether it’s the <br />workweek or the weekend.</p>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {Shocks.map((item: any, color: any) => (
                                <div className='shock-show'>

                                    <div className='cursor-pointer relative bg-white hover-shadow'>
                                        <Link to='#' >
                                            <img src={item.src} className='mb-3'></img>
                                            <h3 className='font-bold leading-[1.43rem] text-[14px] mb-[6px]'>
                                                Anytime Crew Shock
                                            </h3>
                                            <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                                {item.color}
                                            </p>
                                        </Link>
                                        <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            {item.price}
                                        </p>
                                        <div className='absolute w-full z-20 bg-white pb-5 hidden mx-auto hover-shadow shock-add'>
                                            <p className='font-bold leading-[1.43rem] text-[14px] mb-[10px]'>
                                                Quick Add
                                            </p>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>S</p>
                                                    <p className='text-xs font-normal'>(W5-7)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>M</p>
                                                    <p className='text-xs font-normal'>(W8-10 / M8)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>L</p>
                                                    <p className='text-xs font-normal'>(W11 / M9-12)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>XL</p>
                                                    <p className='text-xs font-normal'>(M13-14)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </section>

                <div className='w-full block bg-gray-300 mt-10 h-0.5'></div>

                <section className='mt-10'>
                    <div>
                        <h2 className='mb-8 text-[22px] leading-[1.32rem] font-bold'>
                            3-Pack Socks
                        </h2>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            
                                <div className='shock-show'>
                                    <div className='cursor-pointer relative bg-white hover-shadow'>
                                        <Link to='#' >
                                            <img src={shock1} className='mb-3'></img>
                                            <h3 className='font-bold leading-[1.43rem] text-[14px] mb-[6px]'>
                                                Anytime Ankle Shock
                                            </h3>
                                            <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            Blizzard/Medium Grey/Natural Black
                                            </p>
                                        </Link>
                                        <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            $38
                                        </p>
                                        <div className='absolute w-full z-20 bg-white pb-5 hidden mx-auto hover-shadow shock-add'>
                                            <p className='font-bold leading-[1.43rem] text-[14px] mb-[10px]'>
                                                Quick Add
                                            </p>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>S</p>
                                                    <p className='text-xs font-normal'>(W5-7)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>M</p>
                                                    <p className='text-xs font-normal'>(W8-10 / M8)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>L</p>
                                                    <p className='text-xs font-normal'>(W11 / M9-12)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>XL</p>
                                                    <p className='text-xs font-normal'>(M13-14)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='shock-show'>
                                    <div className='cursor-pointer relative bg-white hover-shadow'>
                                        <Link to='#' >
                                            <img src={shock1} className='mb-3'></img>
                                            <h3 className='font-bold leading-[1.43rem] text-[14px] mb-[6px]'>
                                                Anytime Crew Shock
                                            </h3>
                                            <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            Blizzard/Medium Grey/Natural Black
                                            </p>
                                        </Link>
                                        <p className='font-normal leading-[1.43rem] text-[14px] mb-[6px]'>
                                            $45 
                                        </p>
                                        <div className='absolute w-full z-20 bg-white pb-5 hidden mx-auto hover-shadow shock-add'>
                                            <p className='font-bold leading-[1.43rem] text-[14px] mb-[10px]'>
                                                Quick Add
                                            </p>
                                            <div className='grid grid-cols-2 gap-2'>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>S</p>
                                                    <p className='text-xs font-normal'>(W5-7)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>M</p>
                                                    <p className='text-xs font-normal'>(W8-10 / M8)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>L</p>
                                                    <p className='text-xs font-normal'>(W11 / M9-12)</p>
                                                </div>
                                                <div className='text-center border border-black p-2 hover:bg-gray-200'>
                                                    <p className='text-sm font-bold'>XL</p>
                                                    <p className='text-xs font-normal'>(M13-14)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
            </section>
        </Layout >
    )
}

export default Shocks