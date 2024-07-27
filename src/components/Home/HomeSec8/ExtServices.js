import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import img4 from './Simg4.png';


function ExtServices() {

    return (
        <section className="ExS pt-0">
            <Container>
                <Row className="ExRow">
                    <Col className="ExCol">
                        <span id="ssp12">OTHER SERVICES</span>
                        <h3>We provide<br /> bunch of<br /> other<br /> services to<br /> our<br /> customers.</h3>
                    </Col>
                    <Col className="ExCol">
                        <img src={img4} alt="Event Element" />
                        <h4>ADMISSION<br/>CONSULTANCY</h4>
                    </Col>
                    <Col className="ExCol">
                        <img src={img4} alt="Event Element" />
                        <h4>TRAINING<br/>&<br/>INTERNSHIP</h4>
                    </Col>
                    <Col className="ExCol">
                        <img src={img4} alt="Event Element" />
                        <h4>JOB<br/>CONSULTANCY</h4>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
export default ExtServices;