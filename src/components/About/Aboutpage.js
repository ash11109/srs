import React from "react";
import Navbar from '../../../src/components/Home/HomeSec1/Navbar';
import About1 from "./AboutSec2/AboutIndex";
import About2 from "./AboutSec3/AboutUs";
import PModel from '../../../src/components/Home/HomeSec5/ProcessModel';
import Experience from "../Home/HomeSec6/Experience";
import Values from "../Home/HomeSec9/Values";
import Bottompage from "../Home/Bottompage";
// import Index from "../../../src/components/Home/HomeSec2/Index";

function Aboutpage(){

    return(
        <div >
            <Navbar/>
            <About1/>
            <About2/>
            <PModel/>
            <Experience/>
            <Values/>
            <Bottompage/>
        </div>
    );
}
export default Aboutpage;