import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
// import Loginpage from '../../Login/Loginpage';

function NavBar() {

    // const navigate = useNavigate();
    // function toLoginpage(){
    //     navigate('/Loginpage');
    // }

    const [activePage, setActivePage] = useState(() => localStorage.getItem("activePage") || 1);

    useEffect(() => {
        localStorage.setItem("activePage", activePage);
    }, [activePage]);

    const handleNavigateToInputForm = () => {
        setActivePage("1");
    };
    const handleNavigateToListView = () => {
        setActivePage("2");
    };

    const handleNavigateToGridView = () => {
        setActivePage("3");
    };
    
    const handleNavigateToNutrition = () =>{
        setActivePage("4");
    }

    return (

        <div className='nav'>
            <Navbar expand="lg" className="bg-body-tertiary container p-0">
                <Container className='navinner p-0'>
                    <Navbar.Brand href="#home"><img className="imgNv" src='https://sysrootsolution.com/wp-content/uploads/2022/01/logo1.png' alt='logo'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav defaultActiveKey={activePage}
                            onSelect={(selectedKey, event) => {
                                // event.preventDefault();
                                console.log("selected key is: ", selectedKey);
                                setActivePage(selectedKey);
                            }} className="navItems ms-auto">
                            <Nav.Link className='navItem mx-3' href="/">Home</Nav.Link>
                            <Nav.Link className='navItem mx-3' href="/about">About</Nav.Link>
                            <Nav.Link className='navItem mx-3' href="/services">Services +</Nav.Link>
                            <Nav.Link className='navItem mx-3' href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='navItem mx-3' href="/blog">Blog</Nav.Link>
                            <Nav.Link className='navItem mx-3' href="/contact">Contact</Nav.Link>
                            {/* <Nav.Link className='navItem mx-2' href="/ar">AR</Nav.Link> */}
                            {/* <Button className='btnn mx-3 px-5' onClick={toLoginpage}>Book Now</Button> */}
                        </Nav>
                        {/* <Button className='btnn mx-3 px-5'>Book Now</Button> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}
export default NavBar;