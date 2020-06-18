import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'
import { Supp } from '../ServicesDash/Services/delete'
import { Confirm_alert } from '../ServicesDash/lyoute/confirm_alert'
import "./app.css"
export default function Project() {

    const [data, setdata] = useState([]);
    const [post_n, set_post_n] = useState('');


    const [comm_count,setcommcount] = useState('');

    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/all_statis').then(res => {

            if(res.data.status === true)
            {
            
                setcommcount(res.data.comnt_project)
            }

        })

    },[])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/project').then(res => {
            if (res.data.status === true) {
                setdata(res.data.data)
                set_post_n(res.data.data.length)
            }
        })
    }, [post_n])


    const Supp_post = (id) => {
        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
                Supp(id, 'project').then(
                    set_post_n(true),
                    Confirm_alert()   
                );
            }
        })
    }
    

    return (

        <div className='main_page'>

            <div className="side" >

                <Side />
            </div>

            <div className="main_body" >


                <Compteur_post commnt='Commentaires' name="Projets" post_n={post_n} comm={comm_count} />

                <div className="main_section" >

                    <div className="headline" >
                        <label>Projets</label>
                        <NavLink to='/add_project' ><button type="button" class="btn add_btn"> Ajouter un projet   </button></NavLink>
                    </div>

                    <div className="main_content" >

                        <table class="table table-striped">
                            <thead>
                                <tr>

                                <th scope="col"><label className="tab_title" >Titre</label></th>
                                    <th scope="col"><label className="tab_title" >Date de Diffusion</label></th>
                                    <th scope="col"><label className="tab_title" >Interactions</label></th>
                                    <th scope="col"><label className="tab_title" >Commentaires</label></th>

                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr>
                                                <td><NavLink to={'/show_project_s' + '/' + item.id}><h6>{item.name}</h6></NavLink></td>
                                                <td>{item.date_diff}</td>
                                                <td>{item.view}</td>
                                                <td>{item.comm}</td>
                                                <td className="action_btn" >
                                                    <button className="btn btn_action" type="button" > Voir </button>
                                                    <NavLink to={'/show_project_s' + '/' + item.id}>  <button className="btn btn_action" type="button" > Modifier</button></NavLink>
                                                    <button onClick={() => { Supp_post(item.id) }} className="btn btn_action" type="button" > Supprimer</button>
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

    )
}
