import React, { useRef, useState, useEffect } from 'react';
import './LifestyleCollections.css';
import img1 from './img/img1.avif';
import img2 from './img/img2.avif';
import img3 from './img/img3.avif';
import img4 from './img/img4.avif';
import img5 from './img/img5.avif';
import img6 from './img/img6.avif';

function LifestyleCollections() {
    const scrollContainerRef: any = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [scrollPositions, setScrollPositions] = useState<number[]>([]);

    const calculateScrollPositions = () => {
        const viewportWidth = window.innerWidth;
        const positions: number[] = [];
        
        if (viewportWidth >= 1024) { // For large screens
            positions.push(0, 1350, 2800); // Adjust these values as needed
        } else if (viewportWidth >= 768) { // For medium screens
            positions.push(0, 1350, 2800);
        } else { // For small screens
            positions.push(0, 360, 720);
        }
        
        setScrollPositions(positions);
    };

    const checkScrollPosition = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    };

    const scrollToPosition = (position: number) => {
        scrollContainerRef.current.scrollTo({
            left: position,
            behavior: 'smooth',
        });
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
        const currentPos = scrollContainerRef.current.scrollLeft;
        const nearestPosition = getNearestScrollPosition(currentPos, 'left');
        scrollToPosition(nearestPosition);
    };

    const handleScrollRight = () => {
        const currentPos = scrollContainerRef.current.scrollLeft;
        const nearestPosition = getNearestScrollPosition(currentPos, 'right');
        scrollToPosition(nearestPosition);
    };

    const handleButtonClick = (index: number) => {
        if (scrollPositions[index] !== undefined) {
            scrollToPosition(scrollPositions[index]);
        }
    };

    const itemsArray: any = [
        { src: img1, head: 'Men’s Breathable Shoes' },
        { src: img2, head: 'Women’s Breezy Styles' },
        { src: img3, head: 'Men’s Sporty Styles' },
        { src: img4, head: 'Women’s Athleisure Styles' },
        { src: img5, head: 'Men’s Lightweight Styles' },
        { src: img6, head: 'Women’s Packable Shoes' },
    ];

    useEffect(() => {
        calculateScrollPositions();
        checkScrollPosition();
        const handleScroll = () => checkScrollPosition();
        window.addEventListener('resize', calculateScrollPositions);
        scrollContainerRef.current.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('resize', calculateScrollPositions);
            scrollContainerRef.current.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPositions]);

    return (
        <div className=''>
            <div className="flex gap-3 md:gap-8 m-8">
                <div className="relative">
                    <button
                        onClick={() => handleButtonClick(0)}
                        className='inline-block transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal text-sm md:text-xl'>
                        Everyday Wear
                    </button>
                </div>

                <div className="relative">
                    <button
                        onClick={() => handleButtonClick(1)}
                        className='inline-block pb-0 transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal text-sm md:text-xl'>
                        On The Move
                    </button>
                </div>

                <div className="relative">
                    <button
                        onClick={() => handleButtonClick(2)}
                        className='inline-block pb-0 transition-all duration-300 before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-px before:bg-black before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 font-normal text-sm md:text-xl'>
                        Travel Ready
                    </button>
                </div>
            </div>

            <div className="m-3 md:m-8 px-2 max-h-max ">
                <div className="w-full h-full relative z-20 hidden md:block">
                    <div className="absolute top-[50px] md:top-[320px] h-full left-0">
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
                <div className="w-full h-full relative z-20 hidden md:block">
                    <div className="absolute top-[50px] md:top-[320px] h-full right-0">
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
                    className="flex gap-2 md:space-x-4 overflow-x-scroll scrollbar-hide max-h-max"
                    style={{ scrollBehavior: 'smooth', width: '100%' }}
                >
                    {itemsArray.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="min-w-[49%] md:min-w-[47%] h-full flex w-full items-center justify-center text-xl font-bold"
                        >
                            <div className='relative hero11'>
                                <div className="overflow-hidden heroimg h-full w-full">
                                    <img
                                        src={item.src}
                                        className='w-full h-full object-cover duration-300 ease-in-out hover:scale-105'
                                        alt="Product"
                                    />
                                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20'>
                                        <h1 className='text-white text-center p-2 font-bold text-sm md:text-2xl'>
                                            {item.head}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LifestyleCollections;
