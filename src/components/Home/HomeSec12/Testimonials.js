import React from "react";
import { Container } from 'react-bootstrap';
import img from './testimonial.png';

function Testimonials() {

    return (
        <section className="Testp">
            <span className="Testp1">
            <Container>
                <div className="Tep">
                    <div className="Timg">
                        <img src={img} alt="Values Element" />
                    </div>
                    <div>
                        <span id="ssp1">
                            TESTIMONIALS
                        </span>
                        <h2>
                            What Customers Say
                        </h2>
                        <p>
                            We at Srsolutions aim at developing a transparent and healthy<br />relationship with our clients and provide them with the best services.<br />Let us see what our valued clients have to say about us
                        </p>
                    </div>
                </div>

                {/* <div className="Tep1">
                    <div>
                        <span>
                           <img src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/quote2.png" alt="Values Element" />
                        </span>
                        <p>
                            
                        </p>
                    </div>
                    <div>

                    </div>
                </div> */}
            </Container>
            </span>
        </section>
    );
}
export default Testimonials;