import React, { useRef, useEffect, useState } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Side from "../ServicesDash/lyoute/side";
import { FetchData } from '../AppServices/FetchData';
import Navbar from "../Services/Layout/Navbar";
import { NavLink } from "react-router-dom";


export default function email() {


    const [data, setdata] = useState([]);

    useEffect(() => {



        FetchData('api/get_mails', {

        }).then(res => {

            setdata(res.data.data)
            console.log(res.data);

        })

    }, [])





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
                                            <NavLink to='/lists'>
                                                <i class="im im-award"></i>

                                                <h5 class="card-title">Gestion des listes</h5>

                                            </NavLink>
                                        </div>
                                    </div>
                                </div>



                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <NavLink to='/operations'>
                                                <i class="im im-flip-chart-o"></i>

                                                <h5 class="card-title">Opérations emailing</h5>

                                            </NavLink>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <NavLink to='/rh_info'>
                                                <i class="im im-megaphone"></i>

                                                <h5 class="card-title">Statistiques</h5>


                                            </NavLink>

                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
