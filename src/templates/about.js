import  React ,{useState} from 'react'
 export default function About(){
   
    const changeMode = ()=>{
           if(mystyle.color === 'white'){
             setMyStyle({color: 'black',
             backgroundColor: 'white'});
             setBtnText("Enable DarkMode");
           }
           else{
            setMyStyle({color: 'white',
            backgroundColor: 'black'});
            setBtnText("Enable Lightmode");
           }
    }
    const [mystyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
        });

        const [btntext, setBtnText] = useState("Enable Darkmode");
    
      return (
      <>
      <div className='container'>
      <div className='container my-5' style={mystyle}>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle}>
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" style={mystyle}>
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        </div>
        <button className='btn btn-primary my-3 mx-2' onClick={changeMode}>{btntext}</button>
        </div>
        </>
      );
    }
  