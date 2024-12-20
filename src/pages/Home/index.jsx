import React from 'react'
import Banner from '../../components/Banner'
import Roadmap from '../../components/Roadmap'
import ClientSlider from '../../components/ClientSlider'
import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'
import Technologies from '../../components/Technologies'
import WhyChooseUs from '../../components/WhyChooseUs'
import TeamMembers from '../../components/TeamMembers'

const Home = () => {
    return (
        <div>
            <Banner />
            <ClientSlider />
            <WhyChooseUs />
            <Services />
            <TeamMembers/>
            <Technologies />
            <Testimonials />
            <Roadmap />
        </div>
    )
}

export default Home