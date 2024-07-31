import React from "react";
import NavBar from './HomeSec1/Navbar';
import Index from './HomeSec2/Index';
import Clients from './HomeSec3/Clients';
import About from './HomeSec4/About';
import ProcessModel from './HomeSec5/ProcessModel'
import Experience from "./HomeSec6/Experience";
import Services from "./HomeSec7/Services";
import ExtServices from "./HomeSec8/ExtServices";
import Values from "./HomeSec9/Values";
import Solutions from "./HomeSec10/Solutions";
import Technology from "./HomeSec11/Technology";
import Bottompage from "./Bottompage";
import Testimonials from "./HomeSec12/Testimonials";
import Contact from "./HomeSec13/Contact";
import Blogs from "./HomeSec14/Blogs";

function Homepage(){

    return(
        <div className="AppHome">
            <NavBar/>
            <Index/>
            <Clients/>
            <About/>
            <ProcessModel/>
            <Experience/>
            <Services/>
            <ExtServices/>
            <Values/>
            <Solutions/>
            <Technology/>
            <Testimonials/>
            <Contact/>
            <Blogs/>
            <Bottompage/>
        </div>
    );
}
export default Homepage;