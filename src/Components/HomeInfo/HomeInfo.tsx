import React from 'react'
import { Link } from 'react-router-dom'

function HomeInfo() {
    return (
        <section className='md:my-24 m-3 md:mx-24'>
            <div>
                <h1 className='text-2xl font-bold md:text-4xl '>
                    The Allbirds Approach
                </h1>
            </div>
            <div className='md:flex justify-center gap-5 mt-8'>
                <div className='mb-2'>
                    <h2 className='text-xl md:text-2xl font-bold md:mb-3'>
                        Wear-All-Day Comfort
                    </h2>
                    <p className='text-sm font-normal'>
                        Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
                    </p>
                    <Link to='' className='text-sm font-normal underline'>Learn More</Link>
                </div>
                <div className='mb-2'>
                    <h2 className='text-xl md:text-2xl font-bold md:mb-3'>
                        Sustainability In Every Step
                    </h2>
                    <p className='text-sm font-normal'>
                        From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.
                    </p>
                    <Link to='' className='text-sm font-normal underline'>Learn More</Link>
                </div>
                <div className='mb-2'>
                    <h2 className='text-xl md:text-2xl font-bold md:mb-3'>
                        Materials From The Earth
                    </h2>
                    <p className='text-sm font-normal'>
                        We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.
                    </p>
                    <Link to='' className='text-sm font-normal underline'>Learn More</Link>
                </div>
            </div>
        </section>
    )
}

export default HomeInfo