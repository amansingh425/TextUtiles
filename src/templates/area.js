import React, {useState} from 'react'
export default function TextAreaTo (props){
 
  const words = ()=>{
    let nwords = text.split(/\s+/).filter((element)=>{
    return element.length!==0;
    }).length;
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
let newtext =  text.split(/\s+/);
setText(newtext.join(" "));
props.showAlert('success', 'Extra spaces removed');
}

const handleCopyTxt = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert('success', 'Text is copied to clipboard');
}

const printTxt = ()=>{
  let printarea = window.open();
  printarea.document.write(text);
  printarea.document.close();
  // printarea.focus();
  printarea.print();
  printarea.close();

 
}
 const [text, setText] = useState("");

    return(
        <>
        <div className='container my-5' style={{color:props.mode==='dark'? 'white': 'black'}}>
          <h2>Enter text to analyse below</h2>
        <div className="form-floating">
  <textarea className="form-control"   id="floatingTextarea" value={text} onChange={handleTextChange} style={{color:props.mode==='dark'? 'white': 'black', backgroundColor:props.mode==='dark'? '#1d2d56': 'white',  height: '18rem' }}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClickTU}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClickTl}>Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClickClear}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopyTxt}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={printTxt}>Print Text</button>

<p className='my-3 mx-5'><strong>{text.length}</strong> characters and <strong>{words()}</strong> words</p>
<p className='my-3 mx-5'>fast reading time <strong>{(0.008*words()).toFixed(3)}</strong>min , slow reading time <strong>{(0.022*words()).toFixed(3)}</strong>min</p>
<h3 className='my-3 mx-5'>Preview </h3>
<p className='my-3 mx-5' >{text.length>0?text:"Nothing to preview"}</p>
</div> 
        </>
    );
 }