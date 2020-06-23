

import React, { useState } from 'react'
import axios from 'axios'
import Side from "../ServicesDash/lyoute/side";
import { NavLink } from "react-router-dom";


export default function Parametre() {



    return (
        <div>
            <div className="main_page">
                <div className="side">
                    <Side />
                </div>

                <div className="main_body">



                    <div className="main_section" >

                        <div className="headline" >
                            <label>Emailing</label>

                        </div>

                        <div className="main_content" >


                            <div class="row">
                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <NavLink to='/mail_parametre/9'>
                                                <i class="im im-award"></i>

                                                <h5 class="card-title">Paramètre </h5>

                                            </NavLink>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <NavLink to='/Conception_mail/33'>
                                                <i class="im im-flip-chart-o"></i>

                                                <h5 class="card-title">Conception</h5>

                                            </NavLink>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <NavLink to='/send_mail/33'>
                                                <i class="im im-megaphone"></i>

                                                <h5 class="card-title">Envoie</h5>


                                            </NavLink>

                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>











                    <div className="main_section ">
                        <div className="headline" >

                            <h5>Paramètre </h5>
                        </div>


                        <div class="main_content">



                            <div class="form-group">
                                <label for="exampleInputEmail1">Objet</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>





                            <div class="form-group">
                                <button onClick={() => { sendhandal() }} type="button" class="btn btn-primary">Envoyer</button>
                            </div>

                        </div>
                    </div>














                    
                </div>


            </div>





        </div>
    )
}
