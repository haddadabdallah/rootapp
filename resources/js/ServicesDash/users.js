import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'

export default function Users() {

   
    useEffect(()=>{

        const varToken = localStorage.getItem('token');
 
        axios({
            method: 'GET', //you can set what request you want to be
            url: 'http://10.2.2.36:8080/annuaireb/allContacts',
           
           
          }).then(res => {
              console.log(res.data)
          })

    },[])



    return (

        <div className='main_page'>

            <div className="side" >
                    <Side />
            </div>

            <div className="main_body" >

   
                <div className="main_section" >

                    <div className="headline" >
                        <label>Utilisateurs</label>
                    
                    </div>

                    <div className="main_content" >

                        <table class="table table-striped">
                            <thead>
                                <tr>

                                </tr>
                            </thead>
                            <tbody>

                                            <tr>
                                         
                                            </tr>
                                      
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </div>

    )
}
