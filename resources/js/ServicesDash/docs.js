import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'

export default function Docs() {

    const [data, setdata] = useState([]);
    const [post_n,set_post_n] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/docs').then(res => {
            if (res.data.status === true) {
                setdata(res.data.data)
                set_post_n(res.data.data.length)
            }
        })
    }, [])

    


    const supp = (id) => {

        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {

                axios.post('http://127.0.0.1:8000/api/docs/delete', {
                    id: id
                }).then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).then(() => {
                    axios.get('http://127.0.0.1:8000/api/docs').then(res => {
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

            <Compteur_post name="Documents" post_n={post_n} />

                <div className="main_section" >

                    <div className="headline" >
                        <h5>Documents </h5>
                        <NavLink to='/add_doc' ><button type="button" class="btn add_btn"> Ajouter un Document   </button></NavLink>
                    </div>

                    <div className="main_content" >

                        <table class="table table-striped">
                            <thead>
                                <tr>

                                    <th className="tab_title" scope="col">Titre du Document	</th>
                                    <th className="tab_title" scope="col">Date Edition</th>
                                    <th className="tab_title" scope="col">Catégorie </th>
                                    
                                    <th className="tab_title" scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr>
                                                <td><NavLink to={'/show_doc' + '/' + item.id}><h6>{item.name}</h6></NavLink></td>
                                                <td>{item.date_edit}</td>
                                                <td>{item.cat === 2 ? 'Documents Administratifs' : 'Documents partagés'}</td>
                                                
                                                <td className="action_btn" >
                                                    <button className="btn btn_action" type="button" > Voir </button>
                                                    <NavLink to={'/show_doc' + '/' + item.id}>  <button className="btn btn_action" type="button" > Modifier</button></NavLink>
                                                    <button onClick={() => { supp(item.id) }} className="btn btn_action" type="button" > Supprimer</button>
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
