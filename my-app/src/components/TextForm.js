import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleonchange=(event)=>{
        console.log('state changed')
        setText(event.target.value)
    }
    const [text,setText]= useState('')
  return (
   <>
   <h1>{props.heading}</h1>
   <div className="mb-3">
  <label htmlFor="myEmail" className="form-label">{props.email}</label>
  <input type="email" className="form-control" id="myEmail" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="myArea" className="form-label">Enter the text</label>
  <textarea className="form-control" id="myArea" rows="10" value={text} onChange={handleonchange} placeholder="enter your text here"></textarea>
</div>
<div>
   <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
<div className="container">
    <h1>Your word counter</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
   </>
  )
}
