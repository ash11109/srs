import React from 'react'
import Banner from '../../components/Banner'
import Newsletter from '../../components/Newsletter'
import ClientSlider from '../../components/ClientSlider'

const Home = () => {
    return (
        <div>
            <Banner />
            <ClientSlider />
            <Newsletter />
        </div>
    )
}

export default Home