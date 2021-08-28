import React from 'react'
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import { Link } from 'react-router-dom';
import Service from '../component/Service';
import FeaturedRoom from '../component/FeaturedRoom';


export default function Home() {
    return (
        <>
            <Hero>
                <Banner title='luxurious room' subTitle='deluxe rooms starting at $299'>
                    <Link to='/rooms' className='btn-primary'>
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Service/>
            <FeaturedRoom />
          
        </>
        
    )
}
