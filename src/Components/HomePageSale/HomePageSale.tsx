import React from 'react'
import './HomePageSale.css'
import back1 from './img/back1.gif'
import prod from './img/prod.avif'
import { Link } from 'react-router-dom'

function HomePageSale() {
    const itemsArray: any = [{
        img: prod,
        name: 'Tree Runners',
        category: 'Mist',
        price: '$98',
        sale_price: '$68'
    }, {
        img: prod,
        name: 'Tree Runners',
        category: 'Mist',
        price: '$98',
        sale_price: '$68'
    }, {
        img: prod,
        name: 'Tree Runners',
        category: 'Mist',
        price: '$98',
        sale_price: '$68'
    }, {
        img: prod,
        name: 'Tree Runners',
        category: 'Mist',
        price: '$98',
        sale_price: '$68'
    },]

    return (
        <section>
            <div className='grid md:grid-cols-2 md:m-8 md:p-2 gap-2'>
                <div>
                    <div className='relative z-20'>
                        <div className="overflow-hidden saleimg">
                            <img
                                src={back1}
                                className='w-full h-full object-cover duration-300 ease-in-out hover:scale-105'
                                alt="Product"
                            />
                            <div className='absolute bottom-12 md:bottom-24 text-left left-0 bg-black bg-opacity-20 ms-8'>
                                <h1 className='text-white text-xl text-left font-bold md:text-4xl mt-12'>
                                    30% Off Sitewide*
                                </h1>
                                <h2 className='text-white text-sm text-left font-thin md:text-xl md:mt-2'>
                                    Save Big During Our Labor Day Sale
                                </h2>
                            </div>
                            <div className='grid grid-cols-1 bottom-3 md:bottom-8 absolute w-full visible md:ms-8'>
                                <div className='text-center flex gap-3 justify-center '>
                                    <Link to='' className='bg-white p-2 px-11 md:p-3 md:px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                        SHOP MEN
                                    </Link>
                                    <Link to='' className='bg-white p-2 px-9 md:p-3 md:px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                        SHOP WOMEN
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex flex-auto flex-nowrap space-x-4 overflow-x-scroll hide-scrollbar w-full h-full md:grid md:grid-cols-2 gap-2'
                    style={{ scrollBehavior: 'smooth', width: '100%' }}>
                        {itemsArray.map((item: any, index: any) => (
                            <div className='min-w-[75%] h-full flex items-center justify-center relative flex z-20 h-full sale1 duration-300'>
                                <div className="overflow-hidden w-full h-full saleimg duration-300">
                                    <img
                                        src={item.img}
                                        className='w-full h-full object-cover duration-300 ease-in-out hover:scale-105'
                                        alt="Product"
                                    />
                                    <div className='absolute md:grid grid-cols-2 w-full bottom-0 text-left bottom-0 left-0 p-3 text-black'>
                                        <div>
                                            <h1 className=' text-left font-bold text-normal md:text-sm mt-12'>
                                                {item.name}
                                            </h1>
                                            <h2 className=' text-left font-thin text-xs md:mt-2'>
                                                {item.category}
                                            </h2>
                                        </div>
                                        <div className='font-bold text-sm md:mt-12'>
                                            <p className='md:text-right font-bold text-xs'> <span className='font-normal text-red-600'>{item.sale_price}</span> <span><del  className='font-normal'>{item.price}</del></span></p>
                                        </div>
                                    </div>
                                    <div className='hidden md:grid grid-cols-1 bottom-28 left-16  absolute sale1show ms-8'>
                                        <div className='text-center flex flex-col gap-3 '>
                                            <Link to='' className='bg-white p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                                SHOP MEN
                                            </Link>
                                            <Link to='' className='bg-white p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-bold text-xs'>
                                                SHOP WOMEN
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageSale