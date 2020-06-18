import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import Side from '../ServicesDash/lyoute/side'

import PropTypes from 'prop-types';
import CKEditor from 'ckeditor4-react';




export default function Add_rh_info(props) {

    const [vin, setvin] = useState('');
    const [couverture, setcouverture] = useState('');
    const [album, setalbum] = useState('');
    const [title, settitle] = useState('')
    const [content, secontent] = useState('')

    ///validation 

    const [Valid_Vin, Set_Valid_Vin] = useState(false);
    const [Valid_Couverture, Set_Valid_Couverture] = useState(false);
    const [Valid_Title, Set_Valid_Title] = useState(false);
    const [Valid_Content, Set_Valid_Content] = useState(false);
    const [Valid_Album, Set_Valid_Album] = useState(false);
    const [succsses, setsuccsses] = useState(false);
    const [Valid_Album_status, Set_Valid_Album_status] = useState(false);

    const [size_validation, set_size_validation] = useState({ vin: false, couverture: false, album: false });



    const HandelFile_vin = (e) => {

        let file = e.target.files[0]
        if (file.size > 2000000) {
            Set_Valid_Vin({ status: true, msg: 'size of image is big then 3 mb' })
            set_size_validation({ ...size_validation, vin: true })
                ;
        }else{
            set_size_validation({ ...size_validation, vin: false })
        }
        setvin(file)

    }


    const HandelFile_couverture = (e) => {

        let couverture = e.target.files[0]
        console.log(couverture.name);
        if (couverture.size > 2000000) {
            Set_Valid_Couverture({ status: true, msg: 'size of image is big then 3 mb' })
            set_size_validation({ ...size_validation, couverture: true })
                ;
        }else{
            set_size_validation({ ...size_validation, couverture: false })
        }
        setcouverture(couverture)

    }



    const Handle_album = (e) => {
        let album = e.target.files

        for (let index = 0; index < album.length; index++) {

            console.log(album[index].size)

            if (album[index].size > 2000000) {
                Set_Valid_Album({ status: true, msg: 'size of image is big then 3 mb' })
                Set_Valid_Album_status(true)
                set_size_validation({ ...size_validation, album: true })
            } else {
                Set_Valid_Album({ status: false, msg: '' })
                Set_Valid_Album_status(false)
                set_size_validation({ ...size_validation, album: false })
            }

        }


        setalbum(album)

    }



    const handelPost = () => {


        console.log(size_validation)


        if (vin === '') {
            Set_Valid_Vin({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            Set_Valid_Vin({ status: false, msg: '' })
            if (vin.size > 2000000) { Set_Valid_Vin({ status: true, msg: 'size of image is big then 3 mb' }); }
        }

        if (couverture === '') {
            Set_Valid_Couverture({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {
            Set_Valid_Couverture({ status: false, msg: '' })
            if (couverture.size > 2000000) { Set_Valid_Couverture({ status: true, msg: 'size of image is big then 3 mb' }); }
        }

        if (album === '') {
            Set_Valid_Album({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {
            Set_Valid_Album({ status: false, msg: '' })
            if (Valid_Album_status) {
                Set_Valid_Album({ status: true, msg: "size of image is big then 3 mb" })
            }
        }

        if (title === '') {
            Set_Valid_Title({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            Set_Valid_Title({ status: false, msg: '' })
        }

        if (content === '') {
            Set_Valid_Content({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            Set_Valid_Content({ status: false, msg: '' })
        }



        const formdata = new FormData();

        formdata.append('vin', vin);
        formdata.append('couverture', couverture);

        formdata.append('title', title);
        formdata.append('content', content);

        const date = new Date();
        const d = date.getDate();
        const m = date.getMonth()+1;
        const y = date.getFullYear();

        const final_date = y+'-'+m+'-'+d;



        formdata.append('date_diff', final_date);



        for (let i = 0; i < album.length; i++) {
            formdata.append('album[]', album[i])
        }


        if (title !== '' & content !== '' & vin !== '' & couverture !== '' & album !== '') {

            if (size_validation.vin === false & size_validation.couverture === false & size_validation.album === false) {

                axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/api/upload_rh_info',
                    data: formdata

                }).then(response => {

                    console.log(response.data)

                    if (response.data.status === true) {
                        setsuccsses(true)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                          })

                          props.history.push('/rh_info');
                    }
                });



            } else {



            }


        }


    }



    const onEditorChange = (evt) => 
    {

        secontent(evt.editor.getData());

    }


    return (
        <div className='main_page'>

            <div className="side" >
            <Side />

            </div>

            <div className="main_body" >
                <div className="main_section" >

                    <div className="headline" >

                        <h5>Ajouter un Article Rh</h5>
                    </div>

                    <div className="main_content" >
                        {succsses ? <div class="alert alert-success" role="alert">ajouté avec succès</div> : <div></div>}

                        <table className="table ">
                            <thead>
                                <tr>
                                    {Valid_Title.status ? <div class="alert alert-danger" role="alert">{Valid_Title.msg}</div> : <div></div>}

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Titre : </label>
                                        <input onChange={(e) => { settitle(e.target.value) }} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        
                                    </div>
                                </tr>
                            </thead>
                            <tbody>






                                <div class="row">
                                    <div class="col">
                                        {Valid_Vin.status ? <div class="alert alert-danger" role="alert">{Valid_Vin.msg}</div> : <div></div>}

                                        <tr>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Photo de vignette : </label>
                                                <br />
                                                <input type="file" name="file" onChange={(e) => { HandelFile_vin(e) }} />
                                                <small id="emailHelp" class="form-text text-muted">Taille recommandée: 808 x 404 frorma JPG</small>

                                            </div>
                                        </tr>



                                    </div>
                                    <div class="col">
                                        {Valid_Couverture.status ? <div class="alert alert-danger" role="alert">{Valid_Couverture.msg}</div> : <div></div>}

                                        <tr>
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Photo de la Couverture : </label>
                                                <br />
                                                <input type="file" name="couverture" onChange={(e) => { HandelFile_couverture(e) }} />
                                                <small id="emailHelp" class="form-text text-muted">Taille recommandée: 1921px x 885px frorma JPG</small>

                                            </div>
                                        </tr>
                                    </div>
                                </div>



                                <tr>
                                    {Valid_Album.status ? <div class="alert alert-danger" role="alert">{Valid_Album.msg}</div> : <div></div>}

                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Album photo : </label>
                                        <br />
                                        <input multiple="true" type='file' name="album[]" onChange={(e) => { Handle_album(e) }} />
                                        <small id="emailHelp" class="form-text text-muted">Taille recommandée: 808 x 404 frorma JPG</small>

                                    </div>
                                </tr>


                                <tr>
                                    {Valid_Content.status ? <div class="alert alert-danger" role="alert">{Valid_Content.msg}</div> : <div></div>}

                                    <div className="form-group">
                                        <label for="exampleFormControlTextarea1">Example textarea</label>
                                     


                                        <CKEditor
                                        data={content}
                                        onChange={onEditorChange}
                                        
                                                                                
                                        config={ {
                                            toolbar: [ [ 'Bold' ] ]
                                        } }
                                        />


                                    </div>
                                </tr>


                                <tr>

                                    <td className="action_btn_post" >
                                        <button onClick={() => { handelPost() }} className="btn btn_action" type="button" >Ajouter</button>
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
