import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import img1 from './atom.png';
import img2 from './dollar.png';
import img3 from './medical.png';
import img4 from './diamond.png';
import img5 from './idea.png';
import img6 from './virus.png';
import img7 from './reel.png';
import img8 from './strategy.png';
import img9 from './target.png';
import img10 from './logistics.png';

function Solutions() {

    return (
        <section className="Solp">
            <Container>
                <span id="ssp">WORK FOR ANY INDUSTRY</span>
                <h2>Best Solutions, For All<br />Organizations</h2>
                <div >
                    <Row className="Sp1">
                        <Col>
                            <div className="p-5">
                                <img src={img1} alt="Solutions Element" />
                                <h5>Software</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img2} alt="Solutions Element" />
                                <h5>Fintech</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img3} alt="Solutions Element" />
                                <h5>Healthcare</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img4} alt="Solutions Element" />
                                <h5>Data Mining</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img5} alt="Solutions Element" />
                                <h5>Machine<br />Learning</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="Sp1">
                        <Col>
                            <div className="p-5">
                                <img src={img6} alt="Solutions Element" />
                                <h5>Medical</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img7} alt="Solutions Element" />
                                <h5>Entertainment</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img8} alt="Solutions Element" />
                                <h5>AI</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img9} alt="Solutions Element" />
                                <h5>Manufacturing</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-5">
                                <img src={img10} alt="Solutions Element" />
                                <h5>Logistics</h5>
                            </div>
                        </Col>
                    </Row>

                    {/* <span> */}
                    {/* <div className="p-5">
                            <img src={img1} alt="Solutions Element" />
                            <h5>Software</h5>
                        </div>
                    </span>
                    <span>
                        <div className="p-5">
                            <img src={img2} alt="Solutions Element" />
                            <h5>Fintech</h5>
                        </div>
                    </span>
                    <span>
                        <div className="p-5">
                            <img src={img3} alt="Solutions Element" />
                            <h5>Healthcare</h5>
                        </div>
                    </span>
                    <span>
                        <div className="p-5">
                            <img src={img4} alt="Solutions Element" />
                            <h5>Data Mining</h5>
                        </div>
                    </span>
                    <span>
                        <div className="p-5">
                            <img src={img5} alt="Solutions Element" />
                            <h5>Machine<br />Learning</h5>
                        </div>
                    </span>
                </div>

                <div className="Sp1">
                    <span><div className="p-5">
                        <img src={img6} alt="Solutions Element" />
                        <h5>Medical</h5>
                    </div>
                    </span>
                    <span><div className="p-5">
                        <img src={img7} alt="Solutions Element" />
                        <h5>Entertainment</h5>
                    </div>
                    </span>
                    <span><div className="p-5">
                        <img src={img8} alt="Solutions Element" />
                        <h5>AI</h5>
                    </div>
                    </span>
                    <span><div className="p-5">
                        <img src={img9} alt="Solutions Element" />
                        <h5>Manufacturing</h5>
                    </div>
                    </span>
                    <span><div className="p-5">
                        <img src={img10} alt="Solutions Element" />
                        <h5>Logistics</h5>
                    </div>
                    </span> */}
                </div>
            </Container>
        </section>
    );
}
export default Solutions;