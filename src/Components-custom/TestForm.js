import React, { useState } from 'react'
import './NavBar.css'


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

  const methodClear =()=>{
    setText('');
  }

  
  const changeStyle =()=>{
      let str = text;
      
      setText(str);

  }

  const reverseStr = ()=>{
   if(text.length > 0){
    let str = text.split(" ");
    let str2 = "";
    for(let i = str.length-1;i>=0;i--){
        str2 = str2+str[i];
        str2 = str2+" ";
    }

    setText(str2);
   }else{
    setText(text);
   }
  }

 var setFontStyle = ()=>{
  if(stylishText.fontSize == '20px'){
    setTextStyle({
      fontFamily:"'Courier New', Courier, monospace",
      fontSize:'10px'
    });
  }else{
    setTextStyle({
      fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'",
      fontSize:'20px'
    });
  }
  
  }

  const [text,setText] = useState("");
  const [stylishText,setTextStyle] = useState({
    fontFamily:"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif'",
    fontSize:'20px'
  })
    return (
      <>
        <div className="container">
          <div className="mb-3">
            
            <label htmlFor="myBox" className="form-label font">
              {props.main}
              
            </label>
            <textarea
              style={stylishText}
              className="form-control"
              id="myBox"
              rows="6"
              onChange={method1}
              value={text}
            ></textarea>
            
          </div>

          <button className="btn btn-info mx-1" onClick={method2}>
            Convert to Uppercase
          </button>
          <button className="btn btn-info mx-1" onClick={lowerCase}>
            Convert to LowerCase
          </button>
          <button className="btn btn-info mx-1" onClick={methodClear}>Clear Text</button>

          <button className="btn btn-info mx-1" onClick={reverseStr}>Reverse the Text</button>

          <button className="btn btn-info mx-1" onClick={setFontStyle}>Change font style</button>
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
