import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import img1 from './Simg1.png';
import img2 from './Simg2.png';
import img3 from './Simg3.png';
import img4 from './Simg4.png';
import img5 from './Simg5.png';
import img6 from './Simg6.png';

function Services() {

    return (
        <section className="Servicesp">
            <Container>
                <span id="ssp12">SERVICES</span>
                <h2>What Solutions We Provide<br /> to Our Valued Customers</h2>

                <Row className="Srow d-flex">
                    <Col>
                        <div className="Sgrid1">
                            <img src={img1} alt="Event Element" />
                            <span>
                                <h4>WEB DEVELOPMENT</h4>
                                <p>ALL TYPE OF WEBSITE RANGING FROM<br /> SCHOOL COLLEGES TO BUISNESS.</p>
                            </span>
                        </div>
                        <div className="Sgrid1">
                            <img src={img4} alt="Event Element" />
                            <span>
                                <h4>GRAPHIC DESIGN</h4>
                                <p>From your Logo to catalog we provide<br /> you with every inch of graphic design<br /> solution.</p>
                            </span>
                        </div>
                        <div className="Sgrid1">
                            <img src={img1} alt="Event Element" />
                            <span>
                                <h4>SEO & DIGITAL MARKETING</h4>
                                <p>We help you list your business on google<br /> with help of SEO and Digital Marketing<br /> on Varioud social media plattforms</p>
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className="Sgrid2">
                            <img src={img2} alt="Event Element" />
                            <span>
                                <h4>SOFTWARE DEVELOPMENT</h4>
                                <p>Custom Software Development as per<br /> your need</p>
                            </span>
                        </div>
                        <div className="Sgrid2">
                            <img src={img5} alt="Event Element" />
                            <span>
                                <h4>BUISNESS SERVICES</h4>
                                <p>From Company Registration to Gst<br /> Registration Our dedicated team is there<br /> to help you</p>
                            </span>
                        </div>
                        <div className="Sgrid2">
                            <img src={img2} alt="Event Element" />
                            <span>
                                <h4>CCTV INSTALLATION</h4>
                                <p>We provide Cctv Installation for your<br /> home and shops to make you feel secure.</p>
                            </span>
                        </div>
                    </Col>
                    <Col>
                        <div className="Sgrid3">
                            <img src={img3} alt="Event Element" />
                            <span>
                                <h4>APP DEVELOPMENT</h4>
                                <p>Both Hybrid & Native Android & Ios Apps</p>
                            </span>
                        </div>
                        <div className="Sgrid3">
                            <img src={img6} alt="Event Element" />
                            <span>
                                <h4>ECOMMERCE SOLUTION</h4>
                                <p>At vero eos et accusamus etiusto odio<br /> praesentium accusamus etiusto odio<br /> data center for managing database.</p>
                            </span>
                        </div>
                        <div className="Sgrid3">
                            <img src={img3} alt="Event Element" />
                            <span>
                                <h4>DOMAIN & HOSTING</h4>
                                <p>We provide sclable cloud and Vps server<br /> for your vast hosting needs.</p>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Services;