import React from "react";
import {Row, Col, Button, Container} from 'react-bootstrap';

function ProcessModel() {
  
    return (
        <section className="PModel">
          <Container className="Element1">
            <Row className="PMRow ">
                <Col className="PMCol container">
                <h4>Process Model</h4>
                <p>WE AT SRSOLUTION PROVIDE SERVICES<br/> THAT ADHERE TO THE NEEDS OF THE<br/> CLIENTS AND ARE THESE SERVICES ARE<br/> BASED ON THE PROCESS OF</p>
                <Button className='btnn1 mx-3 px-5' >Get Started</Button>
                </Col>
                <Col className="PMCol container">
                <div className="Widget1 ">
                <h4>Envisioning</h4>
                <p>We tend to provide our<br/> clients with services that are<br/> formulated keeping in mind<br/> the future possibilities as<br/> well as enivision the growth<br/> and success of our clients.</p>
                </div>
                <div className="Widget1 ">
                <h4>Development</h4>
                <p>The plans formulated at<br/> further developed in a way<br/> that suits the requirements<br/> of the clients and modified<br/> accordingly.</p>
                </div>
                </Col>
                <Col className="PMCol container">
                <div className="Widget2 ">
                <h4>Planning</h4>
                <p>The working at Srsolution<br/> is done with utmost<br/> planning and precision in<br/> order to ensure uniformity.</p>
                </div>
                <div className="Widget2 ">
                <h4>Stabilization</h4>
                <p>We at Srsolution seek to<br/> develop services that are<br/> a product of a stabilized<br/> process and thus seek to<br/> produce a well planned<br/> and envisioned service.</p>
                </div>
                </Col>
            </Row>
          </Container>
        </section>
    );
  }
  export default ProcessModel;