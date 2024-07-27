import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import ImageExp from './ImageExp.png';
import img1 from './Eximg1.png';
import img2 from './Eximg2.png';
// import img3 from './Eximg3.png';

function Experience() {

    return (
        <section className="Exp">
            <Container>
            <Row className="ExpRow">
                <Col>
                    <span id="ssp1">WHY CHOOSE US</span>
                    <h2>Outstanding Digital Experience</h2>
                    <p>Srsolution is an advanced and modern day digital service provider<br /> and we at Srsolution seek to provide our clients with an outstanding<br /> digital experience through our services. We aim to keep our clients at<br /> par with others and provide them with their desired solutions.</p>
                    <div className="Exele">
                        <span className="d-flex justify-content-around">
                            <span>
                                <img src={img1} alt="Event Element" />
                            </span>
                            <span className="Ex1">
                                <h4>Best Performance</h4>
                                <p>We at Srsolution aim at providing the best services and ensure<br /> best performance through our unique style, values and results.</p>
                            </span>
                        </span>
                        <span className="d-flex justify-content-around">
                            <span>
                                <img src={img2} alt="Event Element" />
                            </span>
                            <span>
                                <h4>Dedicated Team Members</h4>
                                <p>Srsolution is supported by a group of dedicated team members<br /> who aim to uphold the working values of the company in order to<br /> provide the best services to the clients.</p>
                            </span>
                        </span>
                        <span className="d-flex justify-content-around">
                            <span>
                                <img src={img1} alt="Event Element" />
                            </span>
                            <span>
                                <h4>24/7 Support!</h4>
                                <p>We at Srolution seek to provide our clients with 24/7 support and<br /> seek to resolve any issue in the shortest possible time.</p>
                            </span>
                        </span>
                    </div>
                </Col>
                <Col>
                    <img className="imgAb" src={ImageExp} alt="Event Element" />
                </Col>
            </Row>
            </Container>
        </section>
    );
}
export default Experience;