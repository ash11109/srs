import React from 'react'
import Banner from '../../components/Banner'
import Newsletter from '../../components/Newsletter'
import ClientSlider from '../../components/ClientSlider'
import Testimonials from '../../components/Testimonials'
import Technologies from '../../components/Technologies'

const Home = () => {
    return (
        <div>
            <Banner />
            <ClientSlider />
            <Technologies />
            <Testimonials />
            <Newsletter />
        </div>
    )
}

export default Home