import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Side from '../ServicesDash/lyoute/side'
import Swal from 'sweetalert2'


export default function Add_Post(props) {


    const [link, setlink] = useState('');
    const [linkvalid, setlinkvalid] = useState(false)



    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/enqsatis').then(res => {
            setlink(res.data.data.link)

        })

    }, [])




    const handal_post = () => {


        axios.post('http://127.0.0.1:8000/api/enqsatis/add', { link: link }).then(res => {




            Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            })


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

                        <h5>Enquête de satisfaction</h5>
                    </div>

                    <div className="main_content" >

                        <table className="table ">
                            <thead>
                                <tr>

                                    <div className="form-group">

                                        <label for="exampleInputEmail1">Lien : </label>
                                        <input defaultValue={link} onKeyUp={(e) => { setlink(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                </tr>
                            </thead>
                            <tbody>







                                <td className="action_btn_post" >
                                    <button onClick={() => { handal_post() }} className="btn btn_action" type="button" >Ajouter</button>
                                </td>



                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </div>
    )
}
