import React, { useState } from 'react'
import Side from '../ServicesDash/lyoute/side'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Add_doc(props) {

    const [Title, SetTitle] = useState('');
    const [Cat, Setcat] = useState('');
    const [date, Setdate] = useState('');
    const [doc, Setdoc] = useState('');

    //validation 

    const [Valid_Doc, SetValidDoc] = useState(false);
    const [Valid_title, SetValid_title] = useState(false);
    const [Valid_date, SetValid_date] = useState(false);
    const [Valid_cat, SetValid_cat] = useState(false);
    const [Valid_Size,SetValidSize] = useState(false);
    const [succsses, setsuccsses] = useState(false);


    const handle_doc = (e) => {

        const document = e.target.files[0]
        Setdoc(document);

        if (document.size > 2000000) { //validation de size

            SetValidDoc({ status: true, msg: 'size of image is big then 3 mb' })

        } else {
            SetValidSize(true);
        }


    }

    const handle_post = () => {

        console.log(Valid_date)

  
        if (Title === '') {
            SetValid_title({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            SetValid_title({ status: false, msg: '' })
        }


        if (Cat === '') {
            SetValid_cat({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            SetValid_cat({ status: false, msg: '' })
     
        }


        if (date === '') {
            SetValid_date({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            SetValid_date({ status: false, msg: '' })
     
        }


        
        if (doc === '') {
            SetValidDoc({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            SetValidDoc({ status: false, msg: '' })
            if (doc.size > 2000000) { SetValidDoc({ status: true, msg: 'size of image is big then 3 mb' }); }
            SetValidSize(true);
        }


        





        const title = Title;
        const Categorie = Cat;
        const data = date;
        
        const formdata = new FormData();

        formdata.append('document', doc);
        formdata.append('title', Title);
        formdata.append('data', date);
        formdata.append('Categorie', Cat);

        if(Categorie == 3)
        {
            formdata.append('img', 'doc_Par.jpg');
        }else{

            formdata.append('img', 'doc_Int.jpg');
        }





        if (Title !== '' & Cat !== '' & doc !== '' & date !== '' ) {

            // validation true 

            if(Valid_Size){
              
                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/docs',
                    data: formdata
    
                }).then(res => {
    
                    if(res.data.status === true)
                    {
                        setsuccsses(true);
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        props.history.push('/docs');
                    }else
                    {


                    }
    
                })

            }else{
                
            }

            
            
            
        }else{
            console.log('false')
        }


    }





    return (
        <div className='main_page'>

            <div className="side" >

                <Side />

            </div>

            <div className="main_body" >
                <div className="main_section" >

                    <div className="headline" >

                        <h5>Ajouter un Document {Cat} </h5>
                    </div>

                    <div className="main_content" >
                    {succsses ? <div class="alert alert-success" role="alert">ajouté avec succès</div> : <div></div>}

                        <table className="table ">
                            <thead>
                                <tr>
                                    <div className="form-group">
                                    {Valid_title.status ? <div class="alert alert-danger" role="alert">{Valid_title.msg}</div> : <div></div>}

                                        <label for="exampleInputEmail1">Titre : </label>
                                        
                                        <input onKeyUp={(e) => { SetTitle(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        
                                    </div>
                                </tr>
                            </thead>
                            <tbody>



                                <tr>
                                    <div class="form-group">
                                    {Valid_cat.status ? <div class="alert alert-danger" role="alert">{Valid_cat.msg}</div> : <div></div>}

                                        <label for="exampleFormControlSelect1">Catégorie :</label>
                                        <select onChange={(e) => { Setcat(e.target.value) }} class="form-control" id="exampleFormControlSelect1">
                                            <option value="1" >Catégorie</option>
                                            <option value="2" >Documents Administratifs</option>
                                            <option value="3" >Documents partagés</option>
                                        </select>
                                    </div>
                                </tr>

                                <tr>
                                    <div class="form-group">
                                    {Valid_date.status ? <div class="alert alert-danger" role="alert">{Valid_date.msg}</div> : <div></div>}

                                        <label for="exampleFormControlSelect1">Date d'édition :</label>
                                        <input onKeyUp={(e) => { Setdate(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                </tr>


                                <tr>

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Document :</label>
                                        <br />
                                        {Valid_Doc.status ? <div class="alert alert-danger" role="alert">{Valid_Doc.msg}</div> : <div></div>}

                                        <div class="card">
                                            <div class="card-body">
                                                <input onChange={(e) => { handle_doc(e) }} type='file' name="doc" />
                                                <small id="emailHelp" class="form-text text-muted">Taille maximum des pièces jointes 5Mo</small>

                                            </div>
                                        </div>

                                    </div>

                                </tr>


                                <tr>

                                    <td className="action_btn_post" >
                                        <button onClick={() => { handle_post() }} className="btn btn_action" type="button" >Ajouter</button>
                                    </td>
                                </tr>


                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </div>
    )
}
