import React, {useState} from 'react'
export default function TextForm(props) {

    const handleUpClick = ()=>{
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText("you have clicked on handleupclick")
        setText(newText);
        props.showalert("convertd to Uppercase!..","success");
    }

    const handleloClick = ()=>{
        // console.log("uppercase was clicked" + text);
         let newText = text.toLowerCase();
         setText("you have clicked on handleloclick")
         setText(newText);
         props.showalert("convertd to lowercase!.. ","success");
     }

    const handleonChange = (event)=>{
        //console.log("on change");
        setText(event.target.value);

    }
    const handleclearClick = ()=>{
        // console.log("uppercase was clicked" + text);
         let newText = '';
         setText(newText);
          props.showalert("all data cleard!..","success");
    }

    const [text, setText] = useState(' ');
    //setText("new text");
    return (
    <>
        <div className="container" style={{ color : props.mode === 'dark'?'white' : '#042743' }}>
            <h1>{props.heading}</h1>   
            <div className="mb-3">
            <textarea className="form-control" value={text}   onChange={handleonChange}  style={{backgroundColor : props.mode === 'dark'?'rgb(24 75 116)' : 'white', color: props.mode === 'dark'?'white' : '#042743' }} id="myBox" rows="8"></textarea>
            </div>
             <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleUpClick}> convert to uppercase</button>
             <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleloClick}> convert to lowercase</button>
             <button disabled={text.length===0} className="btn btn-primary mx-2 my-1"  onClick={handleclearClick}> clear all</button>
             
        </div> 
        <div className="container my-3"  style={{color : props.mode === 'dark'?'white' : '#042743' }}>
            <h2>your text summary</h2>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").filter((Element) => { return Element.length!==0}).length} minutes read</p>
            <h3>preview</h3>
            <p>{text.length>0?text:"nothing to priview"}</p>

        </div>
    </>
  )
}
