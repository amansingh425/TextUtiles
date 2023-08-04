import React, {useState} from 'react'
export default function TextAreaTo (props){
 
  const words = ()=>{
    let nwords = text.split(/ +/).length;
    if(text===""){
        nwords = 0;
    }
   return nwords;
  }
 const handleTextChange = (event)=>{
   setText(event.target.value);
 }
 const handleClickTU = ()=>{
 let newtext = text.toUpperCase();
 setText(newtext);
 props.showAlert('success', 'converted to uppercase');
 }
 const handleClickTl = ()=>{
  let newtext = text.toLowerCase();
 setText(newtext);
 props.showAlert('success', 'converted to lowercase');
 }

const handleClickClear = ()=>{
  setText("");

}

const handleSpaces =()=>{
let newtext =  text.split(/ +/);
setText(newtext.join(" "));
props.showAlert('success', 'Extra spaces removed');
}


const handleCopyTxt = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert('success', 'Text is copied to clipboard');
}
 const [text, setText] = useState("Enter text here");

    return(
        <>
        <div className='container my-5' style={{color:props.mode==='dark'? 'white': 'black'}}>
          <h2>Enter text To analyse below</h2>
        <div className="form-floating">
  <textarea className="form-control"   id="floatingTextarea" value={text} onChange={handleTextChange} style={{color:props.mode==='dark'? 'white': 'black', backgroundColor:props.mode==='dark'? '#1d2d56': 'white',  height: '21rem' }}></textarea>
</div>
<button className="btn btn-primary my-3" onClick={handleClickTU}>text to uparcase</button>
<button className="btn btn-primary my-3 mx-3" onClick={handleClickTl}>text to lowercase</button>
<button className="btn btn-primary my-3 mx-3" onClick={handleClickClear}>clear</button>
<button className="btn btn-primary my-3 mx-3" onClick={handleSpaces}>Remove spaces</button>
<button className="btn btn-primary my-3 mx-3" onClick={handleCopyTxt}>copy text</button>

<p className='my-3 mx-5'>{text.length} characters and {words()} words</p>
<p className='my-3 mx-5'>fast reading time {(0.008*words()).toFixed(3)}min , slow reading time {(0.022*words()).toFixed(3)}min</p>
<p className='my-3 mx-5'>Preview the text</p>
<p className='my-3 mx-5 text-success'>{text}</p>
</div> 
        </>
    );
 }