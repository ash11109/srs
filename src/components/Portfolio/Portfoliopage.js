import React from "react";
import NavBar from "../Home/HomeSec1/Navbar";
import Bottompage from "../Home/Bottompage";
import PortfolioIndex from './PortfolioSec1/PortfolioIndex'


function Portfoliopage(){

    return(
        <div className="AppHome">
            <NavBar/>
            <PortfolioIndex/>
            <Bottompage/>
        </div>
    );
}
export default Portfoliopage;