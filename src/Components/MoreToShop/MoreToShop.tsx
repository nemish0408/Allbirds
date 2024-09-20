import React, { useEffect, useRef, useState } from 'react';
import './MoreToShop.css';
import pic1 from './img/pic1.avif';
import pic2 from './img/pic2.avif';
import pic3 from './img/pic3.avif';
import pic4 from './img/pic4.avif';
import { Link } from 'react-router-dom';

function MoreToShop() {
    const scrollContainerRef: any = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [iArray, setIArray] = useState([]);
    const [tab, setTab] = useState(true);

    const scrollPositions = [0, 1450, 2900, 4350];

    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < (scrollWidth - 1));
        }
    };

    const scrollToPosition = (position: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                left: position,
                behavior: 'smooth',
            });
        }
    };

    const getNearestScrollPosition = (currentPos: number, direction: 'left' | 'right') => {
        let nearestPosition = scrollPositions[0];
        for (let i = 0; i < scrollPositions.length; i++) {
            const position = scrollPositions[i];
            if (direction === 'right') {
                if (position > currentPos && (position < nearestPosition || nearestPosition <= Math.ceil(currentPos))) {
                    nearestPosition = position;
                }
            } else {
                if (position < currentPos && (position > nearestPosition || nearestPosition >= currentPos)) {
                    nearestPosition = position;
                }
            }
        }
        return nearestPosition;
    };

    const handleScrollLeft = () => {
        const currentPos = scrollContainerRef.current?.scrollLeft ?? 0;
        const nearestPosition = getNearestScrollPosition(currentPos, 'left');
        scrollToPosition(nearestPosition);
    };

    const handleScrollRight = () => {
        const currentPos = scrollContainerRef.current?.scrollLeft ?? 0;
        const nearestPosition = getNearestScrollPosition(currentPos, 'right');
        scrollToPosition(nearestPosition);
    };

    const itemsArray: any = [
        { src: pic1, head: 'Men’s Breathable Shoes' },
        { src: pic2, head: 'Women’s Breezy Styles' },
        { src: pic1, head: 'Men’s Sporty Styles' },
        { src: pic2, head: 'Women’s Athleisure Styles' },
        { src: pic1, head: 'Men’s Lightweight Styles' },
        { src: pic2, head: 'Women’s Packable Shoes' },
    ];

    const itemsArray1: any = [
        { src: pic3, head: 'Men’s Breathable Shoes' },
        { src: pic4, head: 'Women’s Breezy Styles' },
        { src: pic3, head: 'Men’s Sporty Styles' },
        { src: pic4, head: 'Women’s Athleisure Styles' },
        { src: pic3, head: 'Men’s Lightweight Styles' },
        { src: pic4, head: 'Women’s Packable Shoes' },
    ];

    const womwnHandler = () => {
        setIArray(itemsArray);
        setTab(true);
    };

    const manHandler = () => {
        setIArray(itemsArray1);
        setTab(false);
    };

    useEffect(() => {
        manHandler();
        womwnHandler();
        const handleScroll = () => checkScrollPosition();
        
        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className='my-16 md:my-5'>
            <div className='flex w-full justify-between p-3 pt-12 md:p-12'>
                <div className='flex font-medium'>
                    <h1>More To Shop</h1>
                </div>
                <div className="flex flex-end gap-3 md:gap-8">
                    <div className="relative font-medium">
                        <button
                            onClick={womwnHandler}
                            className={`inline-block transition-all font-medium duration-300 ${tab && 'before:absolute before:bottom-0 before:h-px before:bg-black before:transition-all before:duration-300 before:w-full hover:before:w-full before:left-0 hover:before:left-0 font-bold'} `}>
                            WOMENS
                        </button>
                    </div>

                    <div className="relative font-medium">
                        <button
                            onClick={manHandler}
                            className={`inline-block transition-all font-medium duration-300 duration-300 ${!tab && 'before:absolute before:bottom-0 before:h-px before:bg-black before:transition-all before:duration-300 before:w-full hover:before:w-full before:left-0 hover:before:left-0 font-bold'} `}>
                            MENS
                        </button>
                    </div>
                </div>
            </div>

            <div className="mx-2 md:mx-8 px-2 max-h-max">
                <div className="hidden md:block w-full h-full relative z-20">
                    <div className="absolute top-[200px] h-full left-0">
                        <div className="flex w-full align-middle justify-between px-2 opacity-50">
                            <button
                                onClick={handleScrollLeft}
                                className={`bg-white text-black px-2 py-2 rounded-full transition duration-300 ${!canScrollLeft && 'opacity-0'}`}
                                disabled={!canScrollLeft}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block w-full h-full relative z-20">
                    <div className="absolute top-[200px] h-full right-0">
                        <div className="flex w-full align-middle justify-between px-2 opacity-50">
                            <button
                                onClick={handleScrollRight}
                                className={`bg-white text-black px-2 py-2 rounded-full transition duration-300 ${!canScrollRight && 'opacity-0'}`}
                                disabled={!canScrollRight}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    ref={scrollContainerRef}
                    className="flex space-x-4 overflow-x-scroll hide-scrollbar max-h-max flex-auto flex-nowrap w-full h-full"
                    style={{ scrollBehavior: 'smooth', width: '100%' }}
                >
                    {iArray.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="min-w-[75%] h-full flex items-center justify-center relative flex h-full duration-300 md:min-w-[24%] md:h-full text-xl font-bold"
                        >
                            <Link to=''>
                                <div className='relative more1 '>
                                    <div className="overflow-hidden moreimg h-full w-full bg-black bg-opacity-10">
                                        <img
                                            src={item.src}
                                            className='w-full h-full object-cover duration-300 ease-in-out '
                                            alt="Product"
                                        />
                                    </div>
                                    <div className='top-0 left-0 w-full h-full'>
                                        <h1 className='font-bold text-sm xl:text-base'>
                                            {item.head}
                                        </h1>
                                        <p className='text-sm xl:text-base font-normal'>Blizzard</p>
                                        <p className='text-sm xl:text-base font-normal text-red-600'>$160 <del className='text-black text-sm xl:text-base font-normal'>$180</del></p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MoreToShop;
