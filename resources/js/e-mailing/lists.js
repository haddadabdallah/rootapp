import React, { useRef, useEffect, useState } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Side from "../ServicesDash/lyoute/side";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2'


export default function lists() {

    const tableRef = useRef(null);
    const wrapperRef = useRef(null);
    const [data, setdata] = useState([]);
    const [ListName, SetListName] = useState('');
    const [R_load, SetR_load] = useState(false);

    useEffect(() => {
        axios.post('/api/get_all_site').then(res => {
            console.log(res)
            setdata(res.data.data)
           
        })
    }, [])




    useEffect(() => {

        axios.post('/api/get_all_site').then(res => {
            setdata(res.data.data)
            console.log(res.data.data)
        })



    }, [R_load])


    const posthandal = () => {


        axios.post('/api/add_list', { title: ListName, count: 0 }).then(res => {
            if (res.data.status === true) {
                SetR_load(!R_load)
                
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
            }
        })

    }


    const delete_list = (id) =>{






        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
               
                axios.post('api/deleteliste',{id:id}).then(res =>{
                    if(res.data.status === true)
                    {
        
                        axios.post('/api/get_all_site').then(res => {
                            console.log(res)
                            setdata(res.data.data)
        
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                showConfirmButton: false,
                                timer: 1500
                            })
                           
                        })
        
        
                    }
        
                })
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
                        <div className="headline">
                            <h5>Ajouter une liste </h5>
                        </div>

                        <div className="padding_dash w-100" >
                            <div class="form-group  ">
                                <input onKeyUp={(e) => { SetListName(e.target.value) }} class="form-control w-100" type="text" placeholder="Default input" />
                            </div>


                            <button onClick={() => { posthandal() }} type="button " class="btn  add_btn">Ajouter</button>

                        </div>

                    </div>


                    <div className="main_section ">
                        <div className="headline">
                            <h5>Listes </h5>
                        </div>









                        <div className="padding_dash w-100" >


                            <table class="table table-striped">
                                <thead>
                                    <tr>

                                        <th scope="col"><label className="tab_title" >Titre</label></th>
                                        <th scope="col"><label className="tab_title" ></label></th>
                                        <th scope="col"><label className="tab_title" >Count</label></th>


                                    </tr>
                                </thead>
                                <tbody>


                                    {
                                        data.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td><NavLink to={'show_list/'+item.id}>{item.title}<h6></h6></NavLink></td>
                                                    <td></td>
                                                    <td><span class="badge badge-success">Success</span></td>

                                                    <td className="action_btn" >

                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle add_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Actions
  </button>
                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a onClick={()=>{delete_list(item.id)}} class="dropdown-item" > Supprimer</a>
                                                            </div>
                                                        </div>

                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }






                                </tbody>
                            </table>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
