import React from "react";
import {Carousel, Container} from 'react-bootstrap';
// import NavBar from './HomeSec1/Navbar';
// import Index from './HomeSec2/Index';
import img1 from './Cimg1.png';
import img2 from './Cimg2.png';
import img3 from './Cimg3.png';
import img4 from './Cimg4.png';
import img5 from './Cimg5.png';
import img6 from './Cimg6.png';


function Clients(){

    return(
        <section className="Clp">
            <Container>
            <Carousel >
                    <Carousel.Item interval={3000}>
                        <div className='secele'>
                                <img src={img1} alt="Index Element" />
                                <img src={img2} alt="Index Element" />
                                <img src={img3} alt="Index Element" />
                                <img src={img4} alt="Index Element" />
                                <img src={img5} alt="Index Element" />

                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className='secele'>
                        <img src={img1} alt="Index Element" />
                                <img src={img2} alt="Index Element" />
                                <img src={img3} alt="Index Element" />
                                <img src={img4} alt="Index Element" />
                                <img src={img5} alt="Index Element" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className='secele'>
                        <img src={img1} alt="Index Element" />
                                <img src={img2} alt="Index Element" />
                                <img src={img3} alt="Index Element" />
                                <img src={img4} alt="Index Element" />
                                <img src={img5} alt="Index Element" />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    );
}
export default Clients;