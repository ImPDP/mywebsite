
import React, { useState } from "react";




const Project=(props)=>{

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



    const renderOnOdd=()=>{
        return(
            <div style={{marginTop:50}} className='row'>
            <div className='col-4 d-inline-flex justify-content-center'>
                
                <div className={props.className+' carousel slide'} style={{width:250,margin:20}} id="myCarousel"  data-ride="carousel">

                    <div className="zoom carousel-inner text-center">
                        <div className={"carousel-ani carousel-item "+ activeState1}>
                            <img style={{height:'auto',width:250}} src={props.img[0]} alt="First Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState2}>
                            <img style={{height:'auto',width:250}} src={props.img[1]} alt="sec Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState3}>
                            <img style={{height:'auto',width:250}} src={props.img[2]} alt="third Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState4}>
                            <img style={{height:'auto',width:250}} src={props.img[3]} alt="fourth Slide"/>
                        </div>
                    </div>
                    

                    <div className=" prev-next-hover carousel-control-prev" onClick={prev} data-slide="prev">
                    <i className="text-dark fa fa-chevron-left"></i>
                    </div>
                    <div className="prev-next-hover carousel-control-next" onClick={next}  data-slide="next">
                    <i className=" text-dark fa fa-chevron-right"></i>
                    </div>
                </div>
            </div>

            <div className='col-8 d-inline-flex justify-content-start align-items-center'>
                <div className='myfont'>
                     {props.id===1?
                         <h5>
                     <a rel="noopener noreferrer" href='https://atithikhana.com' target='_blank'>

                         <strong>{props.title}</strong></a>
                         </h5>
                     :
                     <h5>
                         <strong>{props.title}</strong>
                    </h5>
                     }
                    <p className='p-0 m-0'>{props.desc1}</p>
                    <p className='p-0 m-0 mt-2'>{props.desc2}</p>
            
                    {props.store&&
                       <a rel="noopener noreferrer" target='_blank' href='https://play.google.com/store/apps/details?id=com.boredboy.atithikhana'>
                       <span className='storebtn mt-4 btn align-items-center'>
                           VIEW IN STORE
                       </span>
                   </a> 
                    }
                </div>
            </div>
        </div>
        )
    }


    const renderOnEven=()=>{
        return(
        <div style={{marginTop:30}} className='row'>
             <div className='pl-5 col-8 d-inline-flex justify-content-start align-items-center'>
                <div className='myfont'>
                    <h5><a href={props.id===1?'https://atithikhana.com':undefined} rel="noopener noreferrer" target='_blank'><strong>{props.title}</strong></a></h5> 
                    <p className='p-0 m-0'>{props.desc1}</p>
                    <p className='p-0 m-0 mt-2'>{props.desc2}</p>
            
                    {props.store&&
                        <a target='_blank' rel="noopener noreferrer" href='https://play.google.com/store/apps/details?id=com.boredboy.atithikhana'>
                        <span className='storebtn mt-4 btn align-items-center'>
                            VIEW IN STORE
                        </span>
                    </a> 
                    }
                </div>
            </div>
            <div className='zoom col-4 d-inline-flex justify-content-center'>
                
                <div className={props.className+' carousel slide'} style={{width:250,margin:20}} id="myCarousel"  data-ride="carousel">

                    <div className="carousel-inner text-center">
                        <div className={"carousel-ani carousel-item "+ activeState1}>
                            <img style={{height:'auto',width:250}} src={props.img[0]} alt="First Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState2}>
                            <img style={{height:'auto',width:250}} src={props.img[1]} alt="Firsst Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState3}>
                            <img style={{height:'auto',width:250}} src={props.img[2]} alt="Fissrst Slide"/>
                        </div>
                        <div className={"carousel-ani carousel-item "+ activeState4}>
                            <img style={{height:'auto',width:250}} src={props.img[3]} alt="Fissrst Slide"/>
                        </div>
                    </div>

                    {props.id!==4&&
                    <div>
                    <div className=" prev-next-hover carousel-control-prev" onClick={prev} data-slide="prev">
                                      <i className="text-dark fa fa-chevron-left"></i>
                                      </div>
                                      <div className="prev-next-hover carousel-control-next" onClick={next}  data-slide="next">
                                      <i className="text-dark fa fa-chevron-right"></i>
                                      </div>
                    </div>
                    }
                </div>
            </div>
        </div>
        )
    }

  
    if(props.id===1||props.id===3){
        return(
         renderOnOdd()
         )
    }
    else{
        return(
        renderOnEven()
        )
    }


}


export default Project