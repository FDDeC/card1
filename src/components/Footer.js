import React from 'react'
import './Footer.css'
export default function Footer(){
    return(
       <div className='footer'>
       <button className='bbtn'><span className='tweeter'/></button>    
        <button className='bbtn'><span className='face'/></button> 
        <button className='bbtn'><span className='insta'/></button> 
        <button className='bbtn'><span className='git'/></button> 
       </div>  
    )   
}