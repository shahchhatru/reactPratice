
import './App.css';
import User from './User.js';
import React,{useState,useEffect,useRef} from 'react';

function App(){
  const refDiv =useRef();
  const changeColor=(refDiv)=>{
    let r=Math.floor(Math.random()*255+1);
    let g=Math.floor(Math.random()*255+1);
    let b=Math.floor(Math.random()*255+1);
    let a=Math.floor(Math.random()*10)/10;
    refDiv.current.style.backgroundColor="rgba("+r+","+g+","+b+","+a+")";
  }
  return(
    <>
    <div class="box-container" ref={refDiv}></div>
    <button onClick={()=>{changeColor(refDiv)}} >Click</button>
    </>
  )
}
 

export default App;
