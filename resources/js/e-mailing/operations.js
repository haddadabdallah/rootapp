import React, { useEffect, useState } from 'react'
import Side from "../ServicesDash/lyoute/side";
import { NavLink, useHistory } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

export default function operations() {

    const [data,setdata] = useState([]);
    const history = useHistory();

    
    useEffect(()=>{

        axios.post('/api/get_all_mails').then(res =>{
            if(res.data.status === true)
            {
                setdata(res.data.data)
            }
        })

    },[])



    const redirectionhandal = (step,id)=>
    {

        console.log(step)

        if(step === 1)
        {
          history.push('/add_content_mail/'+id)
        }

          if(step === 2)
          {
            history.push('/envoi/'+id)
          }

    }


    const deletemail = (id) =>
    {



        Swal.fire({
            text: "Voulez-vous supprimer",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then((result) => {
            if (result.value) {
               
                axios.post('api/delete_mail',{id:id}).then(res =>{
                    if(res.data.status === true)
                    {
        
                 
                        axios.post('/api/get_all_mails').then(res =>{
                            if(res.data.status === true)
                            {
                                setdata(res.data.data)
        
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    showConfirmButton: false,
                                    timer: 1500
                            })
                            }
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
                            <h5>Opérations emailing </h5>

                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle add_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Creation
  </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                   <NavLink to={'/add_mail'} > <a class="dropdown-item" > Note de service</a></NavLink>
                                </div>
                            </div>

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
                                                    <td><h6 onClick={()=>{redirectionhandal(item.step,item.id)}} >{item.name}</h6></td>
                                                    <td></td>
                                                    <td> {item.step === 3 ?  <span class="badge badge-success">Envoyé</span> :  <span class="badge badge-info">Non remis</span>  }</td>

                                                    <td className="action_btn" >

                                                        <div class="dropdown">
                                                            <button class="btn btn-secondary dropdown-toggle add_btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Actions
  </button>
                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                <a onClick={()=>{deletemail(item.id)}} class="dropdown-item" > Supprimer</a>
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
    )
}
