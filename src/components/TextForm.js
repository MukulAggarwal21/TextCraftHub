import React , {useState} from 'react'

  //  const[text , SetText] = useState('Enter Text Here');
export default function TextForm(props) {
  const handleUpClick =()=>{
    // console.log("UPPERCASE WAS CLICKED" );
    //  localStorage.setitem(1,text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","Success")
  }
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
        props.showAlert("Converted to LowerCase!","Success")

  }
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking!!!","Success")
}
 
const handleExtraSpaces = () => {
   console.log(text);
    let newtext = text.replace(/\s+/g, ' ');
      //  In this code, we're using the replace function with a regular expression to replace one or more spaces (\s+) with a single space ' '. This effectively removes extra spaces from the string.
  setText(newtext);
  props.showAlert("Extra Spaces Removed","Success")
}

const RemoveSpaces = () => {
   console.log(text);
    let newtext = text.replace(/\s+/g, '');
      //  In this code, we're using the replace function with a regular expression to replace one or more spaces (\s+) with a no space ' '. This effectively removes extra spaces from the string.
  setText(newtext);
  props.showAlert("All Spaces got Removed","Success")
}




const undo =()=> {
let itm=localStorage.getItem(1)
setText(itm) 
   props.showAlert("Undo Function Called","Success")
}
localStorage.setItem('1', 'Clear Me!!!');


// const handleCopy =()=>{
//   console.log("COPIED");
//   var text = document.getElementById("text");
//   text.select('text');
//   navigator.clipboard.writeText(text.value);
// }

  const handleOnChange = (event )=>{
    // console.log("omchange");
    setText(event.target.value);
  }
  const handleClearClick = () => {
    let newtext = ''
    setText(newtext);
    props.showAlert("Text has been Cleared","Success")
  }
  
    const [text, setText] = useState('');
    // text = "New text"   wrong way to do 
    // setText("New Text")  correct way

  return (
    <>
    <div className='container' style={{color :  props.mode ==='dark' ? 'white' :'#042743'  }}>
    <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="Box1" value={text} onChange={handleOnChange} style={{backgroundColor :  props.mode ==='dark' ? 'grey' :'white' , color: props.mode ==='dark' ? 'white' :'#042743'  }}  rows="8"></textarea>

</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary my-2" onClick={RemoveSpaces}>Space Remover</button>
<button className="btn btn-primary mx-2" onClick={speak} >Speak Loud</button>
{/* <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button> */}
<button className="btn btn-primary my-2" onClick={handleExtraSpaces}>REMOVE EXTRA SPACES</button>
<button className="btn btn-primary mx-2 " onClick={undo}>Undo</button>
    </div> 
    <div className="container my-4" style={{color:props.mode ==='dark' ? 'white' :'#042743'  }} >
     <h1> Your Text Summary</h1>
     <p> {text.split(" ").length} words , {text.length} characters</p>
     <p>{ 0.008 *text.split("").length } Minutes Read </p>
     <h2> Preview</h2>
     <p>{text.length>0?text : "Enter Something in the Text Box Above to Preview"}</p>
    </div>
    </>
  )
}
