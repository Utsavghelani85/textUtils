import React from 'react'


export default function about(props) {

  let myStyle = {
    color: props.mode ==='dark'?'white' : 'rgb(23 23 24',
    backgroundColor : props.mode ==='dark'?'rgb(24 75 116)' :'white',
    border : '1px solid',
    borderColor: props.mode ==='dark'?'white':'dark'
  } 

  // const [myStyle,setMyStyle] = useState({
  //       color: 'black',
  //       backgroundColor: 'white'
  //   })

  //    const [btntext,setBtntext] = useState(" dark mode")

  //    const toggleStyle = ()=>{
  //      if(myStyle.color === 'white'){
  //        setMyStyle({
  //          color: 'black',
  //          backgroundColor: 'white'
  //        })

  //        setBtntext(" dark mode")
  //      }
  //      else{
  //       setMyStyle({
  //         color: 'white',
  //         backgroundColor: 'black'
  //       })
  //       setBtntext("light mode")
  //     }
  //    }

  return (
    <div className="container" style={{ color: props.mode ==='dark'?'white' : '#042743'}}>
        <h2>About us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Character Count</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      The character count feature allows users to determine the total number of characters present in a given text. This includes all letters, numbers, punctuation marks, and spaces, providing a comprehensive count of every individual character.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Text Conversion</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text Conversion is a versatile feature in TextUtils that allows users to transform text into different formats effortlessly. This tool is especially useful for writers, developers, and anyone who needs to manipulate text for various purposes.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Programming</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Programming, often referred to as coding, is the process of creating software applications, scripts, and systems by writing instructions for computers to execute. These instructions are written in programming languages, each designed to express computations and algorithms in a way that a computer can understand and execute.
      </div>
    </div>
  </div>
</div>
 {/* <div className="container my-3">
    <button onClick={toggleStyle} type="button" className="btn btn-primary"> {btntext}</button>
    </div>  */}
    </div>
  )
}
