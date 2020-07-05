import React from "react";
import '../App.css';


const Profile=()=>{
    return(
        <div id='profile' style={{paddingRight:0,paddingLeft:0,height:'100vh',width:'auto',backgroundColor:'#16ADE3'}} className='container-fluid d-flex justify-content-center flex-column '>
                
                <div style={{position:'relative'}} className=' mx-auto'>
                <div style={{
                        width:150,
                        borderWidth:10,
                        position:'absolute',
                        borderColor:'rgba(255,255,255,0.2)',
                        borderStyle:'groove none none none',
                        height:150 ,
                        objectFit:'cover'}} 
                      className=' rotate-border rounded-circle mx-auto d-block' 
                     ></div>
                <img style={{
                        width:150,
                        height:150 ,
                        objectFit:'cover'}} 
                      className='rounded-circle  mx-auto d-block' 
                      alt='Pradeep Annadurai'
                      src={require('../Assets/Images/myphoto.png')}/>
                </div>
            

                <h1 className='biotext text-center'>Pradeep Annadurai </h1>
                <span className='text-center'  style={{color:'#f0f0f0',fontSize:14}}>
                    Web | Mobile Application Developer 
                </span>
                <div style={{marginTop:20,alignSelf:'center'}} className='underline' ></div>
    
                <div style={{flexDirection:'column',marginTop:10,marginBottom:20,alignSelf:'center'}}>

                    <a href='https://linkedin.com/in/pdpdev' rel="noopener noreferrer" target='_blank'>
                        <i className='myicon fa fa-linkedin'></i>
                    </a>  

                    <a href='https://twitter.com/diaforus' rel="noopener noreferrer" target='_blank'>
                        <i className='myicon fa fa-twitter'></i>
                    </a> 

                    <a href='https://github.com/imPDP' rel="noopener noreferrer" target='_blank'>
                        <i className='myicon fa fa-github'></i>
                    </a> 
                </div>


                 <span className=' text-center  text-light typewriter'>
                       I love learning So developing.
                   </span>
    </div>
    )
}

export default Profile