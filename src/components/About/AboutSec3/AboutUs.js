import React from "react";
// import NavBar from './HomeSec1/Navbar';
// import Index from './HomeSec2/Index';
import { Row, Col, ProgressBar, Button, Container } from 'react-bootstrap';
import ImageAbout from './ImageAbout.png';

function About() {

    return (
        <section className="Aboutp">
            <Container>
            <Row className=" Erow">
                <Col className="Ecol1 " id="Ecol">
                    <img className="imgAb" src={ImageAbout} alt="Event Element" />
                </Col>
                <Col className="Ecol2 flex-col align-items-start" id="Ecol" >
                    <div>
                        <span id="ssp1">ABOUT US</span>
                        <h2 className="">We Are Increasing Business <br /> Success With Technology</h2>
                        <p id="para3">Srsolution is a multipurpose digital service providing company that <br />was registered in the year 2018 as “Sysroot Solution Pvt. Ltd.” under <br />the Ministry Of Corporate Affairs with an aim to provide the customer <br />with an easy access to the digital world. We, at Srsolution aim to<br /> provide you with various solutions that ease your tasks and which <br />have:</p>
                    </div>
                    <div className="Pbar">
                        <span className="text d-flex"><h3>Unique Style</h3>
                        {/* <p>100%</p> */}
                        </span>
                        <ProgressBar
                            striped
                            now={100}
                            variant="danger"
                            aria-label="Default striped example"
                        />
                        <span className="text d-flex">
                            <h3>Clean & Professional Approach</h3>
                            {/* <p>100%</p> */}
                        </span>
                        <ProgressBar
                            striped
                            variant="success"
                            now={100}
                            aria-label="Info striped example"
                        />
                        <h3>Pixel-Perfect Code</h3>
                        <ProgressBar
                            striped
                            now={100}
                            aria-label="Warning striped example"
                        />
                        <h3>Compatible With Any Device</h3>
                        <ProgressBar
                            striped
                            variant="info"
                            now={100}
                            aria-label="Danger striped example"
                        />
                    </div>
                    <Button className='btnn mx-3 px-5' >Know More</Button>
                </Col>
            </Row>
            </Container>
        </section>
    );
}
export default About;