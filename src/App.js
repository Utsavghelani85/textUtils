import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
 import TextForm from "./components/TextForm";
import Alert from "./components/alert";
 import About from "./components/about";

 import React from "react";
 import {
  BrowserRouter as Router,Routes,
  Route,
 } from "react-router-dom";




function App() {

  const [mode,setMode] = useState(`light`);
  const [alert,setalert] = useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1000);

  } 

  const togglemode = ()=>{
   if (mode === 'light'){ 
    setMode ('dark');
    document.body.style.backgroundColor ="#042743"
    showalert("dark mode has been enabled", "success");
    // document.title = 'Textutil-dark mode';
   }
   else{
     setMode ('light');
     document.body.style.backgroundColor ="white"
     showalert("light mode has been enabled", "success");
    //  document.title = 'Textutil-light mode';
    }
  }
  return (
    <>
      <Router> 
      <Navbar title="textUtile"  mode={mode} togglemode={togglemode} />
      <Alert  alert = {alert}/>
      <div className="container my-3">
       <Routes> 
       <Route exact path="/about" element={<About   mode={mode} />} /> 
           <Route exact path="/" element={<TextForm  showalert = {showalert}heading="Enter the text in the box" mode={mode} /> } />   
          
        
        </Routes> 
    </div>
     </Router>  
  </>
 );

}

export default App;


