import React, { useEffect, useState } from 'react'
import back1 from './img/back1.avif'
import back2 from './img/back2.avif'
import back3 from './img/back3.avif'
import back4 from './img/back4.avif'
import back5 from './img/back5.avif'
import back6 from './img/back6.avif'
import './Slider.css'
import { Link } from 'react-router-dom';


const Slider = () => {
    const slides = [
        {
            imageUrl: back1,
            caption: "Slide 1 Caption"
        },
        {
            imageUrl: back2,
            caption: "Slide 2 Caption"
        },
        {
            imageUrl: back3,
            caption: "Slide 3 Caption"
        }
    ];
    const slides1 = [
        {
            imageUrl: back4,
            caption: "Slide 1 Caption"
        },
        {
            imageUrl: back5,
            caption: "Slide 2 Caption"
        },
        {
            imageUrl: back6,
            caption: "Slide 3 Caption"
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fade, setFade] = useState(false)
    const slideInterval = 7000;

    const nextSlide = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setFade(true);
        }, 100);
    };

    const goToSlide = (index: number) => {
        setFade(false);
        setTimeout(() => {
            setCurrentSlide(index);
            setFade(true);
        }, 100);
    };


    useEffect(() => {
        const interval = setInterval(nextSlide, slideInterval);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="relative w-full overflow-hidden hidden md:block">
                <div
                    className={`flex fade-in-out transition-opacity ${fade ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={slide.imageUrl}
                                alt={slide.caption}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex flex-col space-y-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full opacity-50 ${index === currentSlide ? "bg-white scale-150" : "bg-slate-400"
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>

                <div className='absolute bg-white bottom-8 p-8 text-sm px-12 ms-12'>
                    <div>
                        <ul>
                            <li className='leading-10'><h1>FEATURED</h1></li>
                            <li className="relative leading-8 text-normal">
                                <Link
                                    to=""
                                    className="inline-block pb-0 transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal"
                                >
                                    Men's Shoes
                                </Link>
                            </li>

                            <li className="relative leading-8">
                                <Link
                                    to=""
                                    className="inline-block pb-0 transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal"
                                >Women's Shoes</Link></li>
                            <li className="relative leading-8">
                                <Link
                                    to=""
                                    className="inline-block pb-0 transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal"
                                >New Arrivals</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="absolute bottom-10 right-8">
                    <div className='flex gap-5' >
                        <div className='bg-white p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor'>
                            <Link to='' className='uppercase font-medium text-sm '>SHop Men
                            </Link>
                        </div>
                        <div className='bg-white p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor'>
                            <Link to='' className='uppercase font-medium text-sm'>Shop Women
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='absolute top-0 left-1/3 mt-8'>
                    <h2 className='font-normal text-2xl'>LABOR DAY SALE</h2>
                    <h1 className='text-8xl font-light'>30% OFF</h1>
                    <h2 className='text-4xl font-light'>SITEWIDE</h2>
                    <p className='tracking-tighter font-normal'>-------</p>
                    <p className='text-xs font-light'>EXCLUSIONS APPLY. PRICES AS MARKED.</p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden block md:hidden">
                <div
                    className={`flex fade-in-out w-full transition-opacity ${fade ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides1.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={slide.imageUrl}
                                alt={slide.caption}
                                className="w-full h-auto"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex flex-col space-y-2">
                    {slides1.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full opacity-50 ${index === currentSlide ? "bg-white scale-150" : "bg-slate-400"
                                }`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>



                <div className="absolute bottom-5 flex justify-center w-full">
                    <div className='flex gap-3 w-full justify-center px-5' >
                        <div className='bg-white w-full text-center p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor'>
                            <Link to='' className='uppercase font-medium text-sm '>SHop Men
                            </Link>
                        </div>
                        <div className='bg-white w-full text-center p-3 px-8 cursor-pointer hover:bg-black hover:text-white bgcolor'>
                            <Link to='' className='uppercase font-medium text-sm'>Shop Women
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='absolute top-0 w-full mt-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 860 1078" fill="none" className="injected-svg" data-src="//images.ctfassets.net/9uo1qvvet3xa/2BKlasr98flJq99yD8DSWm/79b84ce45caa5418da1ff60240a04791/24Q3_LaborDaySale_TreeRunner_Black_Homepage_Hero_Mobile_860x1078.svg" role="img" aria-hidden="true" focusable="false">
                        <g clip-path="url(#clip0_2401_26885-110)">
                            <text fill="#F5F5F5" font-family="Geograph" font-size="32" font-weight="500" letter-spacing="0.2em"><tspan x="257.478" y="99.1647">LABOR DAY SALE</tspan></text>
                            <text fill="white" font-family="Geograph" font-size="164.037" font-weight="500" letter-spacing="0.05em"><tspan x="411.17" y="279.552"> </tspan></text>
                            <text fill="white" font-family="Geograph" font-size="164.037" font-weight="500" letter-spacing="0.05em"><tspan x="87.1842" y="279.552">30</tspan></text>
                            <text fill="white" font-family="Geograph" font-size="164.037" font-weight="500" letter-spacing="-0.08em"><tspan x="294.377" y="279.552">%</tspan></text>
                            <text fill="white" font-family="Geograph" font-size="164.037" font-weight="500" letter-spacing="0.01em"><tspan x="454.454" y="279.552">OFF</tspan></text>
                            <text fill="#F5F5F5" font-family="Geograph" font-size="40" font-weight="500" letter-spacing="0.2em"><tspan x="296.401" y="362.005">SITEWIDE*</tspan></text>
                            <path d="M385 416.805L475 416.805" stroke="white" stroke-width="3" stroke-linecap="round"></path>
                            <text fill="white" font-family="Geograph" font-size="20" letter-spacing="0.2em"><tspan x="304.963" y="484.405">EXCLUSIONS APPLY.
                            </tspan><tspan x="303.693" y="512.405">PRICES AS MARKED.</tspan></text>
                        </g>
                        <defs>
                            <clipPath id="clip0_2401_26885-110">
                                <rect width="860" height="1078" fill="white"></rect>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Slider