import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
    const[Mode , setMode] = useState('light');
    const[alert , setAlert] = useState(null);

    const showAlert =(message , type)=>{
        setAlert({
            msg:message,
            type :type,
        })
        setTimeout(() => {
          setAlert(null)
        },1500 );
    }

     const toggleMode  = ()=>{
      if(Mode === 'light'){
        setMode ('dark');
        document.body.style.backgroundColor =" #042743";
        showAlert("Dark Mode has been Enabled" , "Sucess");
        document.title="TextUtils - DarkMode";
        // setInterval(() => {
        //    document.title= 'TextUtils is Amazing Mode';
        // }, 2000);
        
        // setInterval(() => {
        //    document.title= ' Install TextUtils Now';
        // }, 1500);

      }
      else{
        setMode ( 'light');
         document.body.style.backgroundColor =" white";
          showAlert("Light Mode has been Enabled" , "sucess");
          document.title="TextUtils - LightMode"
      }
    }
    
  return (
       <>
       <Router>
       <Navbar title=" TextUtils" mode ={Mode}  toggleMode ={toggleMode} AboutText ="About TextUtils"/>
           <Alert alert={alert}/>
        <div className="container my-4">
        <Routes>
          <Route exact path="/about"element={<About />} />
          <Route exact path="/" element= {<TextForm showAlert={showAlert} backgroundColor='red' heading="Enter Your Text To Analyze"  mode={Mode}  />}/>
        </Routes>
        </div>
        </Router>
        </>
  );

}

export default App;
