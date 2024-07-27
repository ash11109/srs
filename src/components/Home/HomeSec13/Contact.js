import React from "react";
import {Container, Button} from 'react-bootstrap';
import img from './person.png';

function Contact() {
  
    return (
        <section className="Contactp">
            <Container>
                <div className="d-flex">
                <div>
                <img src={img} alt="Values Element" />
                </div>
                <div>
                    <span>
                    <i class="fa fa-phone"></i>
                    </span>
                    <div>
                        <h2>CALL US 24/7</h2>
                    </div>
                    <div>
                        <h3>
                            <span>
                            +91-8789171115
                            </span>
                        </h3>
                    </div>
                    <div>
                        <span>DEFINE YOUR CHOICES</span>
                        <h2>
                            <span>
                                WE HELP YOU GROW
                            </span>
                        </h2>
                    </div>
                    <div>
                        <p>We believe that success happens only when we have a clear idea of<br/>what we want. Srsolution intends to assist its clients in defining their<br/>choices through a wide range of services. These choices will then<br/>decide the success of the client which is our top most priority.</p>
                    </div>
                    <Button className='btnn mx-3 px-5' >Let's Talk</Button>
                </div>
                </div>
            </Container>
        </section>
    );
  }
  export default Contact;