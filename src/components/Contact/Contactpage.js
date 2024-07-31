import React from "react";
import NavBar from "../Home/HomeSec1/Navbar";
import Bottompage from "../Home/Bottompage";
import ContactIndex from './ContactSec1/ContactIndex'
function Portfoliopage(){

    return(
        <div className="AppHome">
            <NavBar/>
            <ContactIndex/>
            <Bottompage/>
        </div>
    );
}
export default Portfoliopage;