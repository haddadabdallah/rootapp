import React from 'react'
import { NavLink } from 'react-router-dom'

export default function side() {
    return (
        <div className="main_side">

            <div className='side_logo'>
                <div className="logo_side">
                    <img src='http://ccinfo/uploads/Logo-CCinfo_bln.png' />
                </div>
                    
            </div>

            <div className='side_menu'>

                <ul>
                <NavLink to='/Services_dash'><li><div className="sid_icon"><i class="im im-dashboard"></i></div> Statistiques</li></NavLink>
                <NavLink to='/users'><li><div className="sid_icon"><i class="im im-users"></i></div> Utilisateurs</li></NavLink>
                <NavLink to='/posts'><li><div className="sid_icon"><i class="im im-apartment"></i></div>Actualités</li></NavLink>
                <NavLink to='/project' >  <li><div className="sid_icon"><i class="im im-tools"></i></div>Projets</li></NavLink>
                <NavLink to='/docs' >  <li><div className="sid_icon"><i class="im im-note-o"></i></div>Documents</li></NavLink>
                <NavLink to='/commentaires' >  <li><div className="sid_icon"><i class="im im-speech-bubble-comments"></i></div>Commentaires</li></NavLink>
                <NavLink to='/rh_space' >  <li><div className="sid_icon"><i class="im im-sitemap"></i></div>Espace RH</li></NavLink>
                <NavLink to='/email' >  <li><div className="sid_icon"><i class="im im-mail"></i></div>Emailing</li></NavLink>

                </ul>
               
            </div>

            <div className='side_footer'>
                <div className="credit" >
                <label>Ccinfo 1.0</label>
                </div>
            </div>


        </div>
    )
}
