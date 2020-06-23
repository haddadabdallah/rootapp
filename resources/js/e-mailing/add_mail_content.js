
import React, { useState } from 'react'
import axios from 'axios'
import Side from "../ServicesDash/lyoute/side";
import { NavLink, useHistory } from "react-router-dom";
import CKEditor from 'ckeditor4-react';

export default function add_mail_content(match) {


    const history = useHistory();

    const [content, secontent] = useState('')


    const onEditorChange = (evt) => 
    {

        secontent(evt.editor.getData());

    }

    const post_handal = () =>
    {

        axios.post('/api/add_content',{content:content,id:match.match.params.id}).then(res =>{
                if(res.data.status === true)
                {
                    history.push('/envoi/'+match.match.params.id)
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
                                        <div class="card-body cart_center ">

                                            <i class="im im-award"></i>

                                            <h5 class="card-title">Creation </h5>


                                        </div>
                                    </div>
                                </div>



                                <div class="col-sm">

                                    <div class="card">
                                        <div class="card-body cart_center active_card">

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

                            <h5>Rédaction du message</h5>
                        </div>
                        <div class="main_content">


                                       
                        <CKEditor
                                        data={content}
                                        onChange={onEditorChange}
                                        
                                                                                
                                        config={ {
                                            toolbar: [ [ 'Bold' ] ]
                                        } }
                                        />


                        </div>
                    </div>



                    <div className="main_section ">
                        <div className="main_content ">

                            <div class="form-group">
                            <NavLink to='/envoi' > <button type="button" class="btn btn-primary">Envoie de test</button></NavLink>
                           <button onClick={()=>{post_handal()}} type="button" class="btn btn-primary">Etape suivante</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>





        </div>
    )
}
