import React from 'react'

export default function Navbar(props) {
  return (
    <>
          <a name="top"></a>
     <nav className="navbar navbar-fixed-top  navbar-inverse navbar-dark  navbar-expand-lg " onClick={props.onclick}>
        <div className="container-fluid">
          <a className="navbar-brand " href="#" id="name">Tirthesh Jain</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#skill">My Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#education">My Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#projects">My Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
    </>
  )
}
