import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Bottompage() {

    return (
        <section className="Bottomp">
            <Container>
                <Row className="d-flex">
                    <Col>
                        <div className="footerLogo">
                            <a href="https://sysrootsolution.com/"><img className="imgBt" src='https://sysrootsolution.com/wp-content/uploads/2022/01/logo1.png' alt='logo' /></a>
                        </div>

                        <div className="text1">
                            <p>Srsolution is a multipurpose digital service providing<br />company that was registered in the year 2018 as<br />“Sysroot Solution Pvt. Ltd.” under the Ministry Of<br />Corporate Affairs with an aim to provide the customer<br />with an easy access to the digital world.</p>
                        </div>

                        <ul>
                            <li>
                                <a>
                                    <span>
                                        <i class="fa-brands fa-facebook"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <i class="fa-brands fa-twitter"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <i class="fa-brands fa-pinterest-p"></i>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span>
                                        <i class="fa-brands fa-instagram"></i>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col id="Btcol2">
                        <div className="NavHaed">
                            <h3>IT Services</h3>
                        </div>
                        <div className="Btmenu">
                        <span>
                            <li>
                                <a href="https://sysrootsolution.com/web-development/">
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a href="https://sysrootsolution.com/app-development/">
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a href="https://sysrootsolution.com/graphic-design/">
                                    Graphic Design
                                </a>
                            </li>
                            <li>
                                <a href="https://sysrootsolution.com/software-development">
                                    Software Development
                                </a>
                            </li>
                        </span>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default Bottompage;