import "./App.css"

import React,{useRef} from "react";
import User from "./User"
function App(){
  const InputRef=useRef(null);
  return(
    <>
    <div className="App">
      <h1>Forward Ref in react</h1>
      <User ref={InputRef}/>
      <button onClick={()=>{InputRef.current.style.backgroundColor="red"}}>Update Inputbox</button>
    </div>
    </>
  )
}

export default App;