import React, { useState } from 'react'

export default function TestForm(props) {
  
  const method1 = (event)=>{
    setText(event.target.value);
    
  } 

  const lowerCase = ()=>{
   let str = text;
    setText(str.toLowerCase());
  }
  const method2 = ()=>{
    let str = text;
    setText(str.toUpperCase());
  }
  const [text,setText] = useState("");
    return (
    <>
    <div className='container'>
    <div className="mb-3">
    <h1>{props.main}</h1>
    <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" id="myBox" rows="6" onChange={method1} value={text}></textarea>
    </div>
    <button className="btn btn-info mx-1" onClick={method2}>Convert to Uppercase</button>
    <button className="btn btn-info mx-1" onClick={lowerCase}>Convert to LowerCase</button>
    </div>
    <div className="container my-2">
        <h2>Your text summary:</h2>
        <p>{text.split(" ").length}:Words</p>
        <p>{text.length}:Char</p>
        <p>{0.08 * text.split(" ").length}:Minutes taken to read</p>
        <h2>Preview:</h2>
        <p>{text}</p>

    </div>
    </>
  );
}
