import React from "react";
import { Container, Card } from 'react-bootstrap';
import img1 from './Bimg1.jpg';
import img2 from './Bimg2.png';
import img3 from './Bimg3.jpg';

function Blogs() {

    return (
        <section className="Blogp">
            <Container>
                <div>
                    <div className="p-2">
                        <span id="ssp">BLOGS</span>
                        <h2 className="mb-3">Knowledge Base</h2>
                    </div>

                    <div className="cards">
                        <div id="card1">
                        <Card  style={{ width: '18rem'}}>
                            <Card.Img id="imagBlog" variant="top" src={img1} />
                            <Card.Body id="card2">
                                <Card.Title>CRYPTOCURRENCY: A NEW<br/>AGE OF DIGITAL<br/>TRANSACTION</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div id="card1">
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img id="imagBlog" variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Digital Market Space for<br/>Small Business: A Boon</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                        <div id="card1">
                        <Card  style={{ width: '18rem' }}>
                            <Card.Img id="imagBlog" variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Why a good Inventory<br/>System is needed for a<br/>business?</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
export default Blogs;