import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Side from "../ServicesDash/lyoute/side";
import { NavLink } from "react-router-dom";
import CKEditor from 'ckeditor4-react';

export default function Envoi(match) {

    const [data, setdata] = useState([]);
    const [select,setselect] = useState();

 useEffect(()=>{

    axios.post('/api/get_all_site').then(res => {
        setdata(res.data.data)
        console.log(res.data.data)
    })

 },[])


 const sendhandel = () =>
 {

    axios.post('/api/mail_send',{id_list:select,id:match.match.params.id}).then(res =>{

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
                                        <div class="card-body cart_center">

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
                                        <div class="card-body cart_center active_card">

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

                            <h5>Groupe d'envoi</h5>
                        </div>
                        <div class="main_content">


                                       
                        <div class="form-group">
    
    <select onChange={(e)=>{setselect(e.target.value)}} class="form-control" id="exampleFormControlSelect1">
    
    <option >Sélectionner une liste</option>
        {data.map((item,key)=>{
            return (
                
            <option value={item.id} key={item.key} >{item.title}</option>
            )
        })}
     

    </select>
  </div>


                        </div>
                    </div>



                    <div className="main_section ">
                        <div className="main_content ">

                            <div class="form-group">
                               <button onClick={()=>{sendhandel()}} type="button" class="btn btn-primary">Sned</button>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}
