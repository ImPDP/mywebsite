import React from "react";




const Skills=()=>{
    return(
        <div id='skills'  className='skillsbg container-fluid' >
            <div  className='myfont d-flex flex-column align-items-center justify-content-center'>
                    <h1 className='danceanim'>My <span style={{color:'grey'}}>Skills</span></h1>
                    <span style={{margin:10, height:2,backgroundColor:'black',width:80}}></span>
                </div>

                <div style={{padding:10}} className='myfont text-center d-flex flex-column align-items-center justify-content-center'>   
                 <span style={{color:'grey'}}>“And if my heart be scarred and burned, The safer, I, for all I learned.”</span>
                 <span style={{color:'grey'}}>- Dorothy Parker</span>
            </div> 
<div style={{padding:20}} className='row'>

        <div style={{marginStart:10,marginBottom:10}} className='zoom col-md-4'>
           
            <div  style={{borderWidth:0,backgroundColor:'#16ade3',borderTopRightRadius:5,borderTopLeftRadius:5}} className='myfont list-group-item text-center'>
            <i style={{color:'white'}} className="fa fa-code"></i>
                 <b style={{color:'white'}}> Languages</b></div>
            <div style={{borderTopLeftRadius:0,borderTopRightRadius:0}} className='myfont list-group'>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Java</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Javascript</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>HTML</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>CSS</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Python</div>
            </div>
        </div>

        <div style={{marginStart:10,marginBottom:10}} className='zoom col-md-4'>
            <div style={{borderWidth:0,backgroundColor:'#16ade3',borderTopRightRadius:5,borderTopLeftRadius:5}} className='myfont list-group-item text-center'>
                <i style={{color:'white'}} className="fa fa-terminal"></i>
                <b style={{color:'white'}}> Frameworks/Libraries</b></div>
            <div style={{borderTopLeftRadius:0,borderTopRightRadius:0}} className='myfont list-group'>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>React</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Bootstrap</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Native Android</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>React Native</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Node js</div>
            </div>
        </div>

        <div style={{marginStart:10,marginBottom:10}} className='zoom col-md-4'>
            <div style={{backgroundColor:'#16ade3',borderWidth:0,borderTopRightRadius:5,borderTopLeftRadius:5}} className='myfont list-group-item text-center'>
            <i style={{color:'white'}} className="fa fa-wrench"></i>
                <b style={{color:'white'}}> Tools</b></div>
            <div style={{borderTopLeftRadius:0,borderTopRightRadius:0}} className='myfont list-group'>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Android Studio</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Visual Studio Code</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Firebase</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Command line</div>
            <div style={{borderWidth:0}} className='list-group-item text-center bg-light'>Figma(UI)</div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Skills