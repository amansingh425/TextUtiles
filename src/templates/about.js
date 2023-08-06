import  React  from 'react'
 export default function About(props){
   
    const mystyle = {
      color: props.mode==='light'? "black": "white",
      backgroundColor: props.mode==='light'? "white": "#1d2d56",
      border: props.mode==='light'? "1px solid black": "1px solid white"
    }
    
      return (
      <>
      <div className='container my-5' >
        <h2 style={{color: props.mode==='light'? "black": "white"}}>About us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample" >
          <div className="accordion-item my-1" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={mystyle} >
               <strong>Analyse Your Text</strong> 
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample" >
              <div className="accordion-body">TextUtiles is your ultimate text manipulation app, equipped with powerful tools to analyze and transform your text in various ways. Whether you're a professional writer, a student, or someone who simply enjoys playing with words, TextUtiles caters to all your needs. Count words and characters effortlessly, switch between lowercase and uppercase, or vice-versa, and even fine-tune your reading experience with slow and fast reading options in minutes.</div>
            </div>
          </div>
          <div className="accordion-item my-1" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={mystyle}>
             <strong>Free to Use</strong> 
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">We believe that enhancing your text should be an open opportunity for everyone. That's why TextUtiles is completely free to use! No hidden charges, no subscription fees – just free, unlimited access to all the features and functionalities. Empower yourself with the freedom to experiment and improve your writing without any restrictions. TextUtiles is here to be your go-to text manipulation hub, empowering you with its wide range of features at absolutely no cost.</div>
            </div>
          </div>
          <div className="accordion-item my-1" style={mystyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={mystyle}>
              <strong>Browser Compatible</strong>  
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">At TextUtiles, we prioritize accessibility and user convenience. Our app is carefully designed to work seamlessly across all major web browsers, ensuring a consistent and reliable experience no matter which one you prefer. Whether you're on Chrome, Firefox, Safari, or any other browser, TextUtiles promises smooth functionality and user-friendly interaction, allowing you to access your favorite text manipulation tools from anywhere. </div>
            </div>
          </div>
        </div>
        </div>
        </>
      );
    }
  