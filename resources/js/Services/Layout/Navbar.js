import React from 'react'
import {NavLink} from "react-router-dom";
import { NavDropdown, Nav, Col, Form, Button } from 'react-bootstrap';
import "../../Services/app.css"

export default function Navbar() {
    return (
<div className="main_nav">

<div className="top_bar">
  <div className="logo_nav">
    <img src={"/logo.png"} />
  </div>
  <div className="user_nav">

    <div className='avatar_nav'>
    <img src={"/avatars/"+localStorage.getItem('userinfo')} />
    </div>
    <div className='avatar_name'>
      <label> {localStorage.getItem('fullname')} </label>
    </div>

  </div>
</div>

<div className="bottom_bar">

      <ul className='navbar_ul'>
          <NavLink to='/services'><li>Accueil</li></NavLink>
          <NavLink to='/q_somes_nous'> <li>Qui Sommes-Nous </li></NavLink>
          <NavLink to='/nos_project'> <li>Nos Projets </li></NavLink>
          <NavLink to='/actualites' ><li>Actualités</li></NavLink>
          <NavLink to='/documents' ><li>Documents Internes </li></NavLink>
          <NavLink to='/collaborateurs' > <li> Collaborateurs </li></NavLink>
          
          
<NavDropdown title="Espace RH" id="basic-nav-dropdown">
<NavLink to='/programmes_rh' ><NavDropdown.Item href="#action/3.2">Programmes RH</NavDropdown.Item></NavLink>
<NavLink to='/enquete' ><NavDropdown.Item href="#action/3.2">Enquête de satisfaction</NavDropdown.Item></NavLink>
  <NavLink to='/rhinfo' ><NavDropdown.Item href="#action/3.1" > Rh info</NavDropdown.Item></NavLink>
</NavDropdown>

      </ul>

</div>
</div>
    )
}
