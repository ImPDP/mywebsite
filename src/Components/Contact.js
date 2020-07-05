import React from "react";



const Contact=()=>{
    return(
        <div id='contact' style={{margin:0,padding:0}} className=' container-fluid'>
           <div  className='p-2 bg-dark d-flex flex-column align-items-center'>

           <div style={{paddingTop:30}} className='d-flex flex-column align-items-center text-center justify-content-center'>   
                 <span style={{color:'grey'}}>“If I had asked people what they wanted, they would have said faster horses.”</span>
                 <span style={{color:'grey'}}>- Henry Ford</span>
            </div> 

               <h4 style={{paddingTop:30,color:'white'}} className='lead text-center '>
                   <strong>Looking for a Web and Mobile developer?</strong></h4>
               <span className='lead' style={{padding:0,fontSize:15, margin:10,color:'#f0f0f0',textAlign:'center'}}>
                   If you are in search of an all-rounder who can build for Android, ios(non-native) and Web,</span>
               <span style={{width:200,margin:10}} className='btn btn-success text-center'>
                   <a className='text-white' href='mailto:pradeepannadurai@outlook.com'>Hire Me!</a>
                   </span>

               <span style={{color:'grey'}} className='p-3 text-center'>© 2020 Pradeep Annadurai and respective clients</span>
              
           </div>
        </div>
    )
}

export default Contact