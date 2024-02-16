import './App.css';
import React from "react";
import {useState} from 'react';
import Navigation from './component/Navigation';
import Textarea from './component/Textarea';
// import About from './component/About';

function App() {
  const[parentMode,setPatrentMode]=useState("light");
  const handleDataFromChild=(mode)=>{
    setPatrentMode(mode);
  }
  if (parentMode==='light')
  {
    document.body.style.backgroundColor = 'grey';
  }
  else{
    document.body.style.backgroundColor = 'aqua';
  }
  
  return (
    <>
    <Navigation title="TextUtils" aboutus="AboutUs" sendToParent={handleDataFromChild}/>

    <Textarea modeFromParent={parentMode}/>
        
    

    </>
  );
}

export default App;
