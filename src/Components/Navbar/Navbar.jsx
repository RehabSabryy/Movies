import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const isLogged = localStorage.getItem('user');
  function Logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
  
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="left-cont d-flex">
    <Link className="navbar-brand fw-bold" to={"/"}>Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to={"movies"}>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to={"tv"}>Tv</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to={"people"} >People</Link>
        </li>
      </ul>
      </div>
    </div>
     
    
    <div>
      <div className="right-cont">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {!isLogged && ( 
          <>
      <li className="nav-item">
          <Link className="nav-link fw-bold" to={"login"} >Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to={"register"} >Register</Link>
        </li>
        </>
        )}
        {isLogged && (
          <>
        <li className="nav-item">
          <Link className="nav-link fw-bold" to={"profile"}>Profile</Link>
        </li>
        <li className="nav-item">
          <button onClick={Logout} className="nav-link fw-bold">Logout</button>
        </li>
        </>
        )}
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
