import React ,{useState}from 'react'

export default function About() {
    
 const[myStyle , setMyStyle] = useState(   {
        color:'black',
        backgroundColor : 'white ',
      

    })
    const [btntext, setBtnText] = useState("Enable Dark Mode ")
    
   const toggleStyle=()=>{
        if (myStyle.color ==='black'){
            setMyStyle({
                color: 'white',
                backgroundColor :'black',
                border : '2px solid white'
            })
            setBtnText("Enable Light Mode ")
        }
        else{
            setMyStyle({
                color:'black ',
                backgroundColor: ' white'
            })
            setBtnText("Enable Dark  Mode ")
        }
    }
  
  return (
    <div className="container  " style={myStyle}>
    <h1 className='my-4 '>About Us</h1>

<div className="accordion" id="accordionExample" >
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button" type="button"  data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
    TextUtils Description
    </button>
</h2>
<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body"style={myStyle}>
    <strong>Textutils is a versatile software tool used for various text processing tasks.</strong> It provides a range of functionalities to manipulate and analyze text data efficiently. Users can perform tasks such as tokenization, stemming, lemmatization, and more using this library. Additionally, textutils often includes features for handling regular expressions, string formatting, and character encoding conversions. It is commonly used in programming languages like Python to streamline text-related operations, making it a valuable resource for tasks such as natural language processing, data cleaning, and information extraction from text sources. Overall, textutils plays a crucial role in facilitating effective text manipulation in software development and data analysis projects.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    TextUtils-Usage
    </button>
</h2>
<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body"style={myStyle}>
    <strong>Textutils is a powerful tool widely employed in programming for handling text data</strong> 
 It offers a suite of functions to simplify tasks like tokenization, cleaning, and analysis. With textutils, developers can effortlessly break down large bodies of text into manageable units, making it easier to process and extract meaningful information. It also aids in tasks like removing special characters, converting text to lowercase, and performing various transformations essential for text-based applications. Whether it's in natural language processing, data mining, or information retrieval, textutils proves invaluable in enhancing the efficiency and accuracy of text-related operations, ultimately contributing to the success of software projects.
    </div>
</div>
</div>
<div className="accordion-item">
<h2 className="accordion-header">
    <button className="accordion-button collapsed  " type="button" data-bs-toggle="collapse" style={myStyle }data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
    TextUtils-Extra Advantage 
    </button>
</h2>
<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body"style={myStyle}>
    <strong> Textutils offers several advantages over other text processing libraries.</strong> Firstly, it provides a comprehensive set of functionalities for tasks like tokenization, stemming, lemmatization, and regular expression handling, making it a versatile tool for a wide range of text processing needs. Additionally, it is often integrated into popular programming languages like Python, making it easily accessible to a large community of developers.
Furthermore, textutils is known for its efficiency and speed, enabling faster processing of large volumes of text data. Its extensive documentation and user-friendly interfaces make it easy for developers to quickly integrate and use in their projects.
Overall, the combination of functionality, accessibility, efficiency, and user-friendliness sets textutils apart from other text processing libraries.
    </div>
</div>
</div>
</div>
<div className="conatiner my=x-3" >
<button type='button'  onClick={toggleStyle} className='btn btn-primary' >{btntext}</button>
</div>
    </div>
  )
}
