import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Compteur_post from '../ServicesDash/lyoute/compteur_post'
import Side from '../ServicesDash/lyoute/side'

export default function Empm() {

    const [data, setdata] = useState([]);
    const [post_n, set_post_n] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/empm').then(res => {
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

                axios.post('http://127.0.0.1:8000/api/empm/delete', {
                    id: id
                }).then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).then(() => {
                    axios.get('http://127.0.0.1:8000/api/empm').then(res => {
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


                <Compteur_post post_n={post_n} />

                <div className="main_section" >

                    <div className="headline" >
                        <label>Employé du mois</label>
                        <NavLink to='/add_empm' ><button type="button" class="btn add_btn"> Ajouter un Employé du mois   </button></NavLink>
                    </div>



                    <div className="main_content" >

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"><label className="tab_title" >Photo</label></th>
                                    <th scope="col"><label className="tab_title" >Nom et Prénom	</label></th>
                                    <th scope="col"><label className="tab_title" >Mois	</label></th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    data.map((item, index) => {
                                        return (
                                            <tr>
                                                  <td>

                                                  <div className="avatar_empm" >
                      <img className="empm_avatar" src={'http://127.0.0.1:8000/avatars/'+item.photo} />
              </div>

                                                  </td>
                                                <td><NavLink to={'/show_empm' + '/' + item.id}><h6>{item.name}</h6></NavLink></td>
                                                <td>{item.mois}</td>
                                                <td>{item.view}</td>
                                                <td className="action_btn" >
                                                    <NavLink to={'/show_empm' + '/' + item.id}>  <button className="btn btn_action" type="button" > Modifier</button></NavLink>
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
