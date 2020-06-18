import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'

export default function Commentaires() {

    const [data, setdata] = useState([]);
    const [post_n,set_post_n] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/cmnt').then(res => {
            if (res.data.status === true) {
                setdata(res.data.data)
                set_post_n(res.data.data.length)
            }
        })
    }, [])



    const supp = (item) => {





        Swal.fire({

            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {

                axios.post('http://127.0.0.1:8000/api/cmnt/delete', {
                    id: item.id,
                    id_post: item.id_post,
                    path : item.user
                }).then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).then(() => {
                    axios.get('http://127.0.0.1:8000/api/cmnt').then(res => {
                        if (res.data.status === true) {
                            setdata(res.data.data)
                            set_post_n(res.data.data.length)
                        }
                    })
                })

            }
        })



    }




    return (

        <div className='main_page'>

            <div className="side" >
                    <Side />
            </div>

            <div className="main_body" >



                <div className="main_section" >

                    <div className="headline" >
                        <label>Commentaires</label>
                    
                    </div>

                    <div className="main_content" >

                        <table class="table table-striped">
                            <thead>
                                <tr>

                                    <th scope="col"><label className="tab_title" >Utilisateur</label></th>
                                    <th scope="col"><label className="tab_title" >Commentaire</label></th>
                                    <th scope="col"><label className="tab_title" >Date de Diffusion</label></th>
                                    <th scope="col"><label className="tab_title" >Article</label></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr>
                                                <td><h6>{item.username}</h6></td>
                                                <td>{item.comm}</td>
                                                <td>{item.date_diff}</td>
                                                <td><NavLink to={'/'+item.user+'/'+item.id_post}>{item.title}</NavLink></td>
                                                <td className="action_btn" >
                                                    <button onClick={() => { supp(item) }} className="btn btn_action" type="button" > Supprimer</button>
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
