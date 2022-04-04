import React from 'react'
import About from './About'
import Interests from './Interests'
import './Info.css'
export default function Info(){
    return(
        <div className='info'>                
        <div className='info--data'>
        <div className='info--name'>Federico di Donato</div>
        <div className='info--work'>Fullstack from Henry</div>
        </div>
        
        
        <div className='info--buttons'>
        <button className='info-buttons email'><span className='imgb1'/>Email</button>
        <button className='info-buttons linkedin'><span className='imgb2'/>LinkedIn</button>
        </div> 
        <div className='info--extra'>
        <About/>
        <Interests/>               
        </div>
        <div className='info--weblink'>
        <a href='https://app.eControls.com.ar'>acairialapagdetuproy.com</a>
        </div>
        </div>
         
    )
   
}