import React from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img1 from './firstimg.png';
import img2 from './secondimg.png';
import img3 from './thirdimg.png';

function Index() {

    return (
        <section className="Indexp">
            {/* <Container className="contain"> */}
                <Carousel className='caro11'>
                    <Carousel.Item interval={3000}>
                        <div className='firstele'>
                            <div className='Itext'>
                                <span>DESIGN AND DEVELOPMENT</span>
                                <h1>CREATIVE AND EFFECTIVE</h1>
                                <p>We, at Srsolutions aim to provide our customers with the most creative and<br />effective design and development services that will make a mark in<br />the market. Innovation for us is the key to success.</p>
                                <Button className='btnn mx-3 px-5' >Let's Talk</Button>
                            </div>
                            <div>
                                <img src={img1} alt="Index Element" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className='firstele'>
                            <div>
                                <span>SEO CONSULTANCY</span>
                                <h1>WE ARE EVERYWHERE</h1>
                                <p>We, at Srsolutions aim to provide our customers with the most creative and<br />effective design and development services that will make a mark in<br />the market. Innovation for us is the key to success.</p>
                                <Button className='btnn mx-3 px-5' >Let's Talk</Button>
                            </div>
                            <div>
                                <img src={img2} alt="Index Element" />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <div className='firstele'>
                            <div>
                                <span>SOCIAL MEDIA MARKETING</span>
                                <h2>WE ARE THE NEXT GENERATION OF THE<br/>ADVERTISING WORLD</h2>
                                <p>We, at Srsolutions aim to provide our customers with the most creative and<br />effective design and development services that will make a mark in<br />the market. Innovation for us is the key to success.</p>
                                <Button className='btnn mx-3 px-5' >Let's Talk</Button>
                            </div>
                            <div>
                                <img src={img3} alt="Index Element" />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            {/* </Container> */}
        </section>
    );

}
export default Index;