import {useState} from 'react';
export default function Navigation(props)
{
  const [mode,setMode]=useState("dark");
  const toggleMode=()=>{
    props.sendToParent(mode);
    if (mode==='dark')
    {
      setMode('light');
    }
    else
    {
      setMode('dark');
    }
  }

    return(
        <>
        <nav className={`navbar navbar-expand-lg bg-${mode==='light'?"warning":"dark"}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${mode==='light'?'dark':'light'}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${mode==='light'?'dark':'light'}`} href="/">{props.aboutus}</a>
        </li>
        
        <li className="nav-item form-check form-switch m-2">
          <label className={`form-check-label text-${mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">{mode==='light'?"Switch to Darkmode":"Switch to Lightmode"}</label>
          <input onClick={toggleMode} className={`form-check-input bg-${mode==='dark'?'light':'primary'}`} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className={`btn btn-outline-${mode==='light'?'dark':'light'}`} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    );
}