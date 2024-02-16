import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{ 
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }


    const [text, setText] = useState(''); 
    return (
        <>
        <div className="container" > 
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3"> 
            <textarea className="form-control" placeholder='Enter Your Text Here' value={text} onChange={handleOnChange} style={{backgroundColor: props.modeFromParent==='light'?'#D3D3D3':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${props.modeFromParent==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.modeFromParent==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className={`btn btn-${props.modeFromParent==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <center>
            <h2 className={`text-${props.modeFromParent==='dark'?'dark':'light'}`}>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            </center>
            
        </div>
        </>
    )
}