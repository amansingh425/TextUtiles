// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import Navbar from './templates/navbar.js'
import TextAreaTo from './templates/area.js';
import About from './templates/about.js';
import Alert from './templates/alert';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
function App() {
 const [mode, setMode] = useState('light');
 const toggleMode = ()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert('success', "lightmode enabled");
   
  }
  else{
    setMode('dark');
    document.body.style.backgroundColor = "#1d2d56";
    showAlert('success', "Darkmode enabled");

    // setInterval(() => {
    //   document.title = "TextUtiles is Amazing";
    // }, 1300);
    // setInterval(() => {
    //   document.title = "TextUtiles is Perfect";
    // }, 1000);
  }
 }

 const [alert, setAlert] = useState(null);

 const showAlert = (alert, msg)=> {
       setAlert({ 
        type: alert,
        massage: msg
       })
       setTimeout(() => {
        setAlert(null);
       }, 1700);
 }

  return (
    < >
  <Router >

  <Navbar  mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>

  <div className='container '>
  <Routes>
    <Route exact path='/about' element={<About  mode={mode}/>}></Route>
<Route  exact path='/' element={<TextAreaTo  mode={mode}   showAlert={showAlert}/>}></Route>   
  </Routes>
  </div>
                                   
  </Router>
  </>
  );
}

export default App;
