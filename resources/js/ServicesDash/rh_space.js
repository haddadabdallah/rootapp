import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'

export default function Rh_space() {





    return (

        <div className='main_page'>

            <div className="side" >
                <Side />
            </div>

            <div className="main_body" >




                <div className="main_section" >

                    <div className="headline" >
                        <label>Espace RH</label>

                    </div>

                    <div className="main_content" >

                
                            <div class="row">
                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                        <NavLink to='/empm'>
                                        <i class="im im-award"></i>

                                            <h5 class="card-title">Employé du mois</h5>
                                          
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                        <NavLink to='/Enq_satis'>
                                        <i class="im im-flip-chart-o"></i>

                                            <h5 class="card-title">Enquête de satisfaction</h5>
                                         
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                        <NavLink to='/rh_info'>
                                        <i class="im im-megaphone"></i>

                                            <h5 class="card-title">Rh info</h5>
                                           
                                         
                                            </NavLink>

                                        </div>
                                    </div>
                                </div>


                          
                        </div>


                    </div>

                </div>
            </div>

        </div>

    )
}
