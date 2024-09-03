import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './img/img1.avif'
import img2 from './img/img2.avif'


function BestSeller() {
    return (
        <section>
            <div className="grid md:grid-cols-2 gap-2">
                <div className=''>
                    <div className='relative z-20 hero1'>
                        <div className="overflow-hidden heroimg">
                            <img
                                src={img1}
                                className='w-full h-full object-cover duration-300 ease-in-out hover:scale-105'
                                alt="Product"
                            />
                            <div className='absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full'>
                                <h1 className='text-white text-center font-bold text-3xl mt-12'>
                                    Women’s Flats
                                </h1>
                                <h2 className='text-white text-center font-thin text-xl mt-2'>
                                    Soft Feel, Sophisticated Style
                                </h2>
                                <div className='grid grid-cols-1 bottom-2 md:bottom-8 absolute hero1show w-full mb-5'>
                                    <div className='text-center'>
                                        <Link to='' className='bg-white p-3 px-24 md:px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                            SHOP TREE BREEZERS
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='relative z-20 hero1 h-[125%] md:h-full'>
                        <div className="overflow-hidden h-full heroimg">
                            <img
                                src={img2}
                                className='w-full h-[125%] md:h-full object-cover duration-300 ease-in-out hover:scale-105'
                                alt="Product"
                            />
                            <div className='absolute top-0 left-0 bg-black bg-opacity-20 w-full h-full'>
                                <h1 className='text-white text-center font-bold text-3xl mt-12'>
                                    Bestsellers
                                </h1>
                                <h2 className='text-white text-center font-thin text-xl mt-2'>
                                    Fan Favorite Styles
                                </h2>
                                <div className='grid grid-cols-1 bottom-2 md:bottom-8 absolute hero1show w-full mb-5'>
                                    <div className='text-center flex justify-center gap-2'>
                                        <Link to='' className='bg-white p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                            SHOP MEN
                                        </Link>
                                        <Link to='' className='bg-white p-3 px-7 md:px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                            SHOP WOMEN
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestSeller