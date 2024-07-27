import React from "react";
import {Container} from 'react-bootstrap';
import img1 from "./Vimg1.png";
import img2 from "./Simg1.png";
import img3 from "./Vimg2.png";
import img4 from "./Vimg3.png";
import img5 from "./Simg6.png";


function Values() {
  
    return (
        <section className="Valuep">
            <Container>
            <div className="d-flex align-items-center">
            <div className="Vp1">
                <span>CORE VALUES</span>
                <p id="Vptext">We believe in providing our clients with the best services at<br/>affordable rates. We uphold the virtues of transparency and seek to<br/>develop a relationship with our clients that is based on:</p>

                <div className="d-flex">
                <img src={img2} alt="Values Element" />
                <div>
                <h3>Trust</h3>
                <p>We at Srsolution seek to build a relation with our clients on the<br/>grounds of 100% mutual trust.</p>
                </div>
                </div>

                <div className="d-flex">
                <img src={img3} alt="Values Element" />
                <div>
                <h3>Satisfaction</h3>
                <p>Our main aim is to provide our clients with the satisfaction of the<br/>results and we work our level best to ensure it.</p>
                </div>
                </div>

                <div className="d-flex">
                <img src={img4} alt="Values Element" />
                <div>
                <h3>Team Spirit</h3>
                <p>We at Srsolution uphold the value of team spirit that ensures<br/>effective and efficient working and thus delivering satisfactory<br/>results.</p>
                </div>
                </div>

                <div className="d-flex">
                <img src={img5} alt="Values Element" />
                <div>
                <h3>Stabilization</h3>
                <p>For us, stability is the key and we at Srsolution seek to provide our<br/>clients with a stabilized and progressive work environment that<br/>ensures efficiency of results.</p>
                </div>
                </div>
            </div>
            <div className="d-flex">
            <img className="Vimag" src={img1} alt="Values Element" />
            </div>
            </div>
            </Container>
        </section>
    );
  }
  export default Values;