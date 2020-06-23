import React, { useState } from 'react'
import axios from 'axios'
import Side from "../ServicesDash/lyoute/side";
import { NavLink, useHistory } from "react-router-dom";


export default function add_mail() {

    const history = useHistory();

        const [name,setname] = useState('');
        const [objet,setobjet] = useState('');
        const [type,settype] = useState('');



        const handelpost = () =>
        {
                axios.post('/api/add_mail',{
                    name: name,
                    objet:objet,
                    type:type

                }).then(res =>{

                    if(res.data.status === true)
                    {
                        history.push('/add_content_mail/'+res.data.id)
                    }

                })
        }
        


    return (
        <div>
            <div className="main_page">
                <div className="side">
                    <Side />
                </div>

                <div className="main_body">






                    <div className="main_section ">




                        <div className="main_content" >


                            <div class="row">
                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center active_card">

                                            <i class="im im-award"></i>

                                            <h5 class="card-title">Creation </h5>


                                        </div>
                                    </div>
                                </div>



                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">

                                            <i class="im im-flip-chart-o"></i>

                                            <h5 class="card-title">Rédaction</h5>


                                        </div>
                                    </div>
                                </div>


                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center">
                                            <i class="im im-megaphone"></i>
                                            <h5 class="card-title">Envoi</h5>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="main_section ">
                        <div className="headline" >

                            <h5>Paramètre</h5>
                        </div>
                        <div class="main_content">

                            <div class="form-group">
                                <label for="exampleInputEmail1">Nom de l'operation</label>
                                <input onKeyUp={(e) => { setname(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                            <div class="form-group">
                                <label for="exampleInputEmail1">Objet</label>
                                <input onKeyUp={(e) => { setobjet(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                        </div>
                    </div>



                    <div className="main_section ">
                        <div className="main_content ">

                            <div class="form-group">
                              <button  onClick={()=>{handelpost()}} type="button" class="btn btn-primary">Etape suivante</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}
