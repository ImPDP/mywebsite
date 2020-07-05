import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavBar=()=>{

   return(
                <nav style={{backgroundColor:'#16ade3', padding:5,}} className="myfont d-none d-lg-block d-md-block d-xl-block navbar navbar-expand-md nav-pills nav-justified ">
                        <div className="collapse navbar-collapse" id="navbarCollapse">

                <AnchorLink style={{color:'white',backgroundColor:'rgba(255,255,255,0)'}} href="#profile" className="nav-item nav-link active">Profile</AnchorLink>
                <AnchorLink offset={()=>50}  href='#work' style={{color:'white',backgroundColor:'rgba(255,255,255,0)'}}  className="nav-item nav-link active">Works</AnchorLink>
                <AnchorLink offset={()=>50} style={{color:'white',backgroundColor:'rgba(255,255,255,0)'}} href="#skills" className="nav-item nav-link">Skills</AnchorLink>
                <AnchorLink style={{color:'white',backgroundColor:'rgba(255,255,255,0)'}}href="#contact" className="nav-item nav-link">Contact</AnchorLink>
                </div>
</nav>
   )
}

export default NavBar