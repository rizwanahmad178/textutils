import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UPPERCASE clicked");
        let newText = text.toUpperCase();
        setText(newText);
        //setText("You haev clicked on handleUpClick");
        props.showAlert("Converted to UpperCase!", "success");
    };
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success");
      };
    const handleOnChange = (event)=>{
        //console.log("OnChange clicked");
        setText(event.target.value);
    };
    const handleClearText = (event)=>{
        setText("");
        props.showAlert("Text Cleared!", "success");
    };
    const handleCopyText = (event)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied!", "success");
    };
    const handleExtraSpace = (event)=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!", "success");
    };
    

  const [text, setText] = useState("");
//   text = "new text"; //wrong way to change the state
//   setText("new text"); //correct way to change the state
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Exrta Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> Words & <b>{text.length}</b> Characters</p>
        <p><b>{0.008 * text.split(" ").length}</b> minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the text box to preview it here...!"}</p>
    </div>
    </>
  );
}
