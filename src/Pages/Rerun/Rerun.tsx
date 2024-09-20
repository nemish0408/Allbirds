import React from 'react'
import img1 from './img/rerun.avif'
import Layout from '../../Components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function Rerun() {
    return (
        <Layout>
            <section className='p-14'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className=''>
                        <img src={img1} className='pe-7'></img>
                    </div>
                    <div className='flex  items-center p-7'>
                        <div>
                            <h2 className='font-bold text-4xl py-2 '>Allbirds ReRun<sup className='font-extrabold text-lg'> TM</sup></h2>
                            <h2 className='font-bold text-4xl py-2'>A New Way To Get Old Favorites</h2>
                            <p className='py-2 font-normal text-base'>
                                Allbirds ReRun™ is a marketplace where you can shop slightly imperfect and gently used products, extending their life and lowering our impact on the planet. Allbirds has partnered with Trove, a company that specializes in circular commerce, to run Allbirds ReRun™ on our behalf.
                            </p>
                            <h3 className='font-normal text-base py-2 mb-5'><strong>By clicking the link below, you will be leaving allbirds.com and heading to the ReRun marketplace site.</strong></h3>
                            <Link to='' className='bg-white p-2 px-11 md:p-3 md:px-8 cursor-pointer hover:bg-black hover:text-white bgcolor font-normal text-base border-2 border-black '>
                            Start Shopping ReRun™
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
