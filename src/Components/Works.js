import React, { useState } from "react";
import Project from "./Projects/Project";
import * as Details  from "./Projects/ProjectInfo";
import * as ProjectImages from "./Projects/ProjectImages";
import { Link } from "react-router-dom";

const Works=()=>{


    const[titleClass1,setTitleClass1]=useState('')
    const[titleClass2,setTitleClass2]=useState('')
    const[titleClass3,setTitleClass3]=useState('')
    const[titleClass4,setTitleClass4]=useState('')
    const[mobileclass1,setMobileclass1]=useState('')



    window.onscroll=()=>{
        if(sessionStorage.getItem('scrolled')!=='true'){
            if(document.documentElement.scrollTop>400){
                setTitleClass1('move-right')
                setMobileclass1('mobileWork')
            }
            else{
                setTitleClass1('no-move')
                setMobileclass1('no-move')
            }
            if(document.documentElement.scrollTop>700){
                setTitleClass2('move-left')
            }
            else{
                setTitleClass2('no-move')
            }
            if(document.documentElement.scrollTop>1000){
                setTitleClass3('move-right')
            }
            else{
                setTitleClass3('no-move')
            }
            if(document.documentElement.scrollTop>1300){
                setTitleClass4('move-left')
                sessionStorage.setItem('scrolled','true')
            }
            else{
                setTitleClass4('no-move')
            }
        }
    }

    return(
        <div id='work' className='myfont container-fluid'>
            <div className='d-none d-md-block d-lg-block d-xl-block'>
             <div style={{paddingTop:50}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <h1 className='danceanim'>My <span style={{color:'grey'}}>Works</span></h1>
                 <span style={{margin:10, height:2,backgroundColor:'black',width:80}}></span>
            </div> 


             <div style={{padding:10}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <span style={{color:'grey'}}>“Your determination when you have nothing - your attitude when you have everything.”</span>
                 <span style={{color:'grey'}}>- Peng Joon</span>
            </div>             

            <div style={{paddingTop:50}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <h1 className='sub-title'>
                    <span className='letter1' ></span>
                     <span className='letter1'>m </span>
                     <span className='letter2'>o </span>
                     <span className='letter3'>b </span>
                     <span className='letter4'>i </span>
                     <span className='letter5'>l </span>
                     <span className='letter6'>e </span>
                     <span >apps</span>

                 </h1>
            </div> 
            
                      
            <Project className={titleClass1}
                    id={1} 
                    img = {ProjectImages.MainAppImages}
                    title={Details.TITLE1}
                    desc1={Details.DESC1}  
                    desc2={Details.DESC_1}  
                    store={Details.STORE1}  />

            <Project 
                    className={titleClass2}
                    id={2}
                    img = {ProjectImages.DeliveryAppImages}
                    title={Details.TITLE3} 
                    desc1={Details.DESC3}  
                    desc2={Details.DESC_3}  
                    store={Details.STORE3}  />


            <Project 
                    className={titleClass3}
                    id={3}
                    img = {ProjectImages.ReactNativeImages}
                    title={Details.TITLE2} 
                    desc1={Details.DESC2}  
                    desc2={Details.DESC_2}  
                    store={Details.STORE2}  />

            <Project 
                    className={titleClass4}
                    id={4}
                    img = {ProjectImages.BusinessAppImages}
                    title={Details.TITLE4} 
                    desc1={Details.DESC4}  
                    desc2={Details.DESC_4}  
                    store={Details.STORE4}  />


<div style={{paddingTop:50}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <h1 className='sub-title'>
                    <span className='letter1' ></span>
                     <span className='letter1'>w </span>
                     <span className='letter2'>e </span>
                     <span className='letter3'>b </span>
                     <span >apps</span>

                 </h1>
            </div> 

            <div style={{padding:10}} className='p-5 d-flex flex-column align-items-center text-center justify-content-center myfont'>   
                 <span style={{color:'black'}}>I have not done any real world projects yet. Waiting to start/join a new project eagerly. This site was built with <a rel="noopener noreferrer" style={{color:'#00d8ff'}} href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='_blank'>React</a> as my learning project.
                 </span>
                     <a href='https://github.com/ImPDP/mywebsite' target='_blank' rel="noopener noreferrer">
                     <span className='githubbtn btn m-5'>

                     <i className='fa fa-github mr-2'></i>
                      VIEW SOURCE CODE
                      </span>
                     </a>
            </div>  






            </div>




            <div className='d-sm-block d-md-none d-lg-none d-xl-none'>
            <div style={{paddingTop:50}} className='d-flex flex-column align-items-center justify-content-center'>
                    <h1>My <span style={{color:'grey'}}>Works</span></h1>
                    <span style={{margin:10, height:2,backgroundColor:'black',width:80}}></span>
                </div>

                
             <div style={{padding:10}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <span style={{color:'grey'}}>“Your determination when you have nothing - your attitude when you have everything.”</span>
                 <span style={{color:'grey'}}>- Peng Joon</span>
            </div>    

                <div  className='row  justify-content-center'>
                <div style={{padding:10}} className=' col-md-4 text-center' > 
                    <img alt='projectimage1' className={'project-image ' + mobileclass1} src ={require('../Assets/Images/aklogo.jpg')}/>
                </div>

                <div style={{padding:10}} className='col-md-4 text-center' > 
                    <img alt='projectimage2' className={'project-image ' + mobileclass1} src ={require('../Assets/Images/akdel.jpg')}/>
                </div>

                <div style={{padding:10}} className='col-md-4 text-center' > 
                    <img alt='projectimage3' className={'project-image ' + mobileclass1} src ={require('../Assets/Images/akbus.jpg')}/>
                </div>
                </div>
                <div>
                    <p className='p-0 m-3 text-justify'>As the <strong>Native android developer</strong>, I have developed a Home Food ordering app.
                       And an admin application for business use and a delivery partner app. 
                       Later I have developed the <strong>React Native app</strong> which will replace the android food ordering app in the store.
                    </p>
                </div>
              <div className='text-center mb-5'>
                  <Link to='/projects'>
              <span style={{backgroundColor:'#16ade3'}} className='btn text-light'>VIEW MORE</span>
              </Link>
              </div>
            </div>
        </div> 
    )
}

export default Works
