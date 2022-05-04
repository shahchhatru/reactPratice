
import './App.css';
import User from './User.js';
import React,{useState,useEffect} from 'react';

function App(){
  let [count,setcount]=useState(0);
  let [index,setIndex]=useState(0);

  useEffect(()=>{
    console.log("count incremented");
  },[count]);

  useEffect(()=>{
    console.log("index incremented");
  },[index])

  return(
    <>
    <h1>count {count }</h1>
    <h2>index{index}</h2>
    <div>
      <button onClick={()=>{setcount(count+1)}}>Click Me</button>
    </div>
    <div>
      <button onClick={()=>{setIndex(index+1)}}>index inc</button>
    </div>
    </>
  )
}
 

export default App;
