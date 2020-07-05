import React from "react";
import '../App.css';
import Works from "./Works";
import Skills from "./Skills";
import Profile from "./Profile";
import Contact from "./Contact";
import NavBar from "./NavBar";



const Home=()=>{


    return(
        <div>
             <NavBar/>
        <Profile />
        <Works />
        <Skills/>
        <Contact/>
        </div>
    )
}

export default Home