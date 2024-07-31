import React from "react";
import NavBar from "../Home/HomeSec1/Navbar";
import Bottompage from "../Home/Bottompage";
import BlogIndex from "./BlogSec1/BlogIndex";

function Portfoliopage(){

    return(
        <div className="AppHome">
            <NavBar/>
            <BlogIndex/>
            <Bottompage/>
        </div>
    );
}
export default Portfoliopage;