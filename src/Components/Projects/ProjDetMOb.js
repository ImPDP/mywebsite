import React, { useState } from "react";


const ProjDetMOb=(props)=>{
    
    const[activeState1,setActiveState1]=useState('active')
    const[activeState2,setActiveState2]=useState('')
    const[activeState3,setActiveState3]=useState('')
    const[activeState4,setActiveState4]=useState('')
    const[activeitem,setActiveItem]=useState('1')


    

    const prev=()=>{
        switch (activeitem) {
            case '1':
                  setActiveState2('')
                  setActiveState1('')
                  setActiveState3('')
                  setActiveState4('active')
                  setActiveItem('4')
                  break;
            case '2':
                    setActiveState2('')
                    setActiveState1('active')
                    setActiveState3('')
                    setActiveState4('')
                    setActiveItem('1')

                break;
            case '3':
                setActiveState2('active')
                setActiveState1('')
                setActiveState3('')
                setActiveState4('')
                setActiveItem('2')
                break;
            case '4':
                setActiveState2('')
                setActiveState1('')
                setActiveState3('active')
                setActiveState4('')
                setActiveItem('3')
                break;
            default:
                break;
        }
    }



    const next=()=>{
        switch (activeitem) {
            case '1':
                  setActiveState2('active')
                  setActiveState1('')
                  setActiveState3('')
                  setActiveState4('')
                  setActiveItem('2')
                  break;
            case '2':
                    setActiveState2('')
                    setActiveState1('')
                    setActiveState3('active')
                    setActiveState4('')
                    setActiveItem('3')

                break;
            case '3':
                setActiveState2('')
                setActiveState1('')
                setActiveState3('')
                setActiveState4('active')
                setActiveItem('4')
                break;
            case '4':
                setActiveState2('')
                setActiveState1('active')
                setActiveState3('')
                setActiveState4('')
                setActiveItem('1')
                break;
            default:
                break;
        }
    }

    return(
        <div className='container'>
<div className='row'>
        <div className='col-12 d-flex justify-content-center'>
            
            <div style={{width:350,marginTop:40}} id="myCarousel" className="carousel slide" data-ride="carousel">

                <div className='move-right carousel-inner text-center'>
                    <div className={"carousel-ani carousel-item "+ activeState1}>
                        <img style={{height:'auto',width:350}} src={props.img[0]} alt="First Slide"/>
                    </div>
                    <div className={"carousel-ani carousel-item "+ activeState2}>
                        <img style={{height:'auto',width:350}} src={props.img[1]} alt="Second Slide"/>
                    </div>
                    <div className={"carousel-ani carousel-item "+ activeState3}>
                        <img style={{height:'auto',width:350}} src={props.img[2]} alt="Third Slide"/>
                    </div>
                    <div className={"carousel-ani carousel-item "+ activeState4}>
                        <img style={{height:'auto',width:350}} src={props.img[3]} alt="Fourth Slide"/>
                    </div>
                </div>
               
               
                {props.id!=='4'&&
               <div>
 <div className=" prev-next-hover carousel-control-prev" onClick={prev} data-slide="prev">
                <i style={{color:'black'}} className="fa fa-chevron-left"></i>
                </div>
                <div className="prev-next-hover carousel-control-next" onClick={next}  data-slide="next">
                <i style={{color:'black'}} className="fa fa-chevron-right"></i>
                </div>
               </div>
               }
               
            </div>
        </div>

        <div className='col-12  text-justify d-inline-flex justify-content-center align-items-center'>
            <div className='myfont'>
                <h5 className='text-center'><a rel="noopener noreferrer" href='https://atithikhana.com' target='_blank'><strong>{props.title}</strong></a></h5> 
                <p >{props.desc1}</p>
                <p className='mt-2'>{props.desc2}</p>
                <div className='text-center'>
                {props.store&&
                    <a rel="noopener noreferrer" target='_blank' href='https://play.google.com/store/apps/details?id=com.boredboy.atithikhana'>
                    <span style={{backgroundColor:'#de5246'}} className='mt-4 btn btn-danger'>
                        VIEW IN STORE
                    </span>
                </a> 
                }
                </div>
        
                
            </div>
        </div>
    </div>
        </div>
    )

}


export default ProjDetMOb