import Hero from '../../components/Hero';
import ClientSlider from '../../components/ClientSlider';
import WhyChooseUs from '../../components/WhyChooseUs';
import Services from '../../components/Services';
import TeamMembers from '../../components/TeamMembers';
import Technologies from '../../components/Technologies';
import Testimonials from '../../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero />
            <ClientSlider />
            <WhyChooseUs />
            <Services />
            <TeamMembers />
            <Technologies />
            <Testimonials />
        </div>
    )
}

export default Home