import React, { useEffect } from "react";
import * as Details  from "./ProjectInfo";
import * as ProjectImages from "./ProjectImages";
import ProjDetMOb from "./ProjDetMOb";
import { Link } from "react-router-dom";





const ProjectMobile=()=>{



    useEffect(()=>{
       window.scrollTo(0,0)
    },[])


   return(
       <div>
           <div style={{paddingLeft:5,paddingTop:10,paddingBottom:10}} className='myfont bg-info d-flex align-items-center'>
              <Link to='/'>
               <i style={{fontSize:25,marginLeft:15,color:'#f0f0f0'}} className='fa fa-chevron-left'></i>
               </Link>
               <span style={{marginLeft:15,color:'#f0f0f0',fontSize:25}}>Projects</span>
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
            
                      
            <ProjDetMOb 
                    id={1} 
                    img = {ProjectImages.MainAppImages}
                    title={Details.TITLE1}
                    desc1={Details.DESC1}  
                    desc2={Details.DESC_1}  
                    store={Details.STORE1}  />

            <ProjDetMOb
                    id={2}
                    img = {ProjectImages.DeliveryAppImages}
                    title={Details.TITLE3} 
                    desc1={Details.DESC3}  
                    desc2={Details.DESC_3}  
                    store={Details.STORE3}  />


            <ProjDetMOb 
                    id={3}
                    img = {ProjectImages.ReactNativeImages}
                    title={Details.TITLE2} 
                    desc1={Details.DESC2}  
                    desc2={Details.DESC_2}  
                    store={Details.STORE2}  />

            <ProjDetMOb 
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

            <div style={{padding:10}} className='p-5 d-flex flex-column align-items-center text-justify justify-content-center myfont'>   
                 <span style={{color:'black'}}>I have not done any real world projects. Waiting to start/join a new project eagerly. This site was built with <a style={{color:'#00d8ff'}} rel="noopener noreferrer" href='https://en.wikipedia.org/wiki/React_(JavaScript_library)' target='_blank'>React</a> as 
                 my learning projects.
                 </span>
                 <a href='https://github.com/ImPDP/mywebsite' target='_blank' rel="noopener noreferrer">
                     <span className='githubbtn btn m-5'>
                      VIEW CODE
                      </span>
                     </a>
            </div> 
       </div>
   )
}


export default ProjectMobile