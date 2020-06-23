import React, { useRef, useEffect, useState } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Side from "../ServicesDash/lyoute/side";
import axios from 'axios';
import { NavLink } from "react-router-dom";
import ReactFileReader from 'react-file-reader';
import Swal from 'sweetalert2'
export default function show_list(match) {

    const tableRef = useRef(null);
    const wrapperRef = useRef(null);
    const [data, setdata] = useState([]);
    const [ListName, SetListName] = useState('');
    const [R_load, SetR_load] = useState(false);
    const [base, setbase] = useState('');
    const [data_contact, setdata_contact] = useState([]);

    const [load, setload] = useState(true);






    useEffect(() => {
        console.log(match.match.params.id)
        axios.post('/api/get_all_list', { id:match.match.params.id }).then(res => {
            console.log(res.data.data)
   
            setdata_contact(res.data.data)
        })
    }, [])







    const csvhandal = () => {
        Swal.showLoading()

        axios.post('/api/base64', { base: base }).then(res => {
            const obj = res.data.username;

            const count = Object.keys(obj).length

            for (let index = 0; index < count; index++) {
                const username = res.data.username[index]
                const password = res.data.password[index]

                axios.post('/api/add_list_contact', { username: username, password: password, id: match.match.params.id }).then(res => {

                    axios.post('/api/get_all_list', { id: match.match.params.id }).then(res => {
                        setdata_contact(res.data.data)
                        Swal.hideLoading()
                    })

                })


            }




        })
    }





    const handleFiles = files => {
        setbase(files.base64)
    }

    const deletallhandal = () =>{





        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
               
                axios.post('/api/delete_all_contact_list',{id:match.match.params.id}).then(res =>{
          
                    if(res.data.status === true)
                    {
                        axios.post('/api/get_all_list', { id: match.match.params.id }).then(res => {
                            setdata_contact(res.data.data)
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


    const deletehandal = (id)=>{



        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
               
                axios.post('/api/delete_contact',{id:id}).then(res =>{

                    if(res.data.status === true)
                    {
                        axios.post('/api/get_all_list', { id: match.match.params.id }).then(res => {
                            setdata_contact(res.data.data)
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









                        <div className="padding_dash w-100" >

                            <ReactFileReader fileTypes={[".csv", ".zip"]} base64={true} multipleFiles={false} handleFiles={handleFiles}>
                                <img className="up_svg" src='/server.svg' />
                                <button className='btn'></button>
                                <label>Charger une liste a partire d'un fichier CSV</label>

                            </ReactFileReader>

                            <button onClick={() => { csvhandal() }} type="button " class="btn  add_btn">Charger La Liste </button>

                        </div>

                    </div>


                    <div className="main_section ">
                        <div className="headline">
                            <h5>Contacts </h5>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle add_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Actions Générale
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a onClick={()=>{deletallhandal()}} class="dropdown-item" >Supprimer tous</a>


                                </div>
                            </div>
                        </div>









                        <div className="padding_dash w-100" >


                            <table class="table table-striped">
                                <thead>
                                    <tr>

                                        <th scope="col"><label className="tab_title" >Nom</label></th>

                                        <th scope="col"><label className="tab_title" >Prénom</label></th>
                                        <th scope="col"><label className="tab_title" ></label></th>
                                        <th scope="col"><label className="tab_title" >Email</label></th>

                                        <th scope="col"><label className="tab_title" ></label></th>

                                    </tr>
                                </thead>
                                <tbody>


                                    {




                                                data_contact.map((item, key) => {

                                                    return (
                                                        <tr key={key}>
                                                            <td><NavLink data-toggle="modal" data-target="#exampleModal" to=''>{item.username}<h6></h6></NavLink></td>
                                                            <td><NavLink data-toggle="modal" data-target="#exampleModal" to=''>{item.password}<h6></h6></NavLink></td>

                                                            <td></td>
                                                            <td><span class="badge badge-success">Success</span></td>

                                                            <td className="action_btn" >

                                                                <div class="dropdown">
                                                                    <button class="btn btn-secondary dropdown-toggle add_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        Actions
              </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                        <a class="dropdown-item" href="#">Modifier</a>
                                                                        <a class="dropdown-item" onClick={()=>{deletehandal(item.id)}}  > Supprimer</a>

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
