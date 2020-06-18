import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import CKEditor from 'ckeditor4-react';
import Side from '../ServicesDash/lyoute/side'

export default function Show_empm(match) {

    const [name, setname] = useState();
    const [pr_name, setpr_name] = useState();
    const [Structure, setStructure] = useState();
    const [post, setpost] = useState();
    const [mois, setmois] = useState();
    const [anne, setanne] = useState();
    const [photo, setphoto] = useState();
    const [content, setcontent] = useState();
    const [attch, setattch] = useState();



    const [valid_name, setvalid_name] = useState(false);
    const [valid_pr_name, setvalid_pr_name] = useState(false);
    const [valid_Structure, setvalid_Structure] = useState(false);
    const [valid_post, setvalid_post] = useState(false);
    const [valid_mois, setvalid_mois] = useState(false);
    const [valid_anne, setvalid_anne] = useState(false);
    const [valid_photo, setvalid_photo] = useState(false);
    const [valid_content, setvalid_content] = useState(false);
    const [valid_attch, setvalid_attach] = useState(false);

    const [sucssess,setsucssess] = useState(false);
    const [valid_size,setvalid_size] = useState(false);
    const [data, setdata] = useState([]);
    const [select,setselect] = useState();


    useEffect(()=>{

        axios.get('http://127.0.0.1:8000/api/empm/'+match.match.params.id).then(res => {

           
       
        if(res.data.status === true)
        {

            setname(res.data.data[0].name);
            setpr_name(res.data.data[0].p_name);
            setStructure(res.data.data[0].str)
            setpost(res.data.data[0].post)
            setmois(res.data.data[0].mois)
            setanne(res.data.data[0].ann)
            setphoto(res.data.data[0].photo)
            setcontent(res.data.data[0].content)
            setselect(res.data.data[0].post_id)

        }else{

            

        }



        })




            axios.get('http://127.0.0.1:8000/api/rh_info').then(res => {
                if (res.data.status === true) {
                    setdata(res.data.data)
                 
                }
            })
    
    
      



    },[])


    const handelfile = (e) => {

        const photo = e.target.files[0]
        setphoto(photo);


        if (photo.size > 2000000) {
            setvalid_size(false)
            setvalid_photo({ status: true, msg: 'size of image is big then 3 mb' })

        } else {
          
            setvalid_photo(false)
            setvalid_size(true);

        }


    }

    const handel_post = () => {


        if (photo === undefined) {
            setvalid_photo({ status: true, msg: "ce champ est Ce champ est obligatoire" })

        } else {

            setvalid_photo({ status: false, msg: '' })
            if (photo.size > 2000000) {
                
                setvalid_photo({ status: true, msg: 'size of image is big then 3 mb' });
            
            
            }else{
                setvalid_size(true);
            }
            
        }
    

        if (name === undefined) {
            setvalid_name({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_name(false)
        }

        if (pr_name === undefined) {
            setvalid_pr_name({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_pr_name(false)
        }


        if (Structure === undefined) {
            setvalid_Structure({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_Structure(false)
        }
        
        if (post === undefined) {
            setvalid_post({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_post(false)
        }

        if (mois === undefined) {
            setvalid_mois({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_mois(false)
        }

        if (anne === undefined) {
            setvalid_anne({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_anne(false)
        }

        if (content === undefined) {
            setvalid_content({ status: true, msg: "ce champ est Ce champ est obligatoire" })
        } else {
            setvalid_content(false)
        }



        if(name !== undefined & pr_name !== undefined & Structure !== undefined & post !== undefined & mois !== undefined &  anne !== undefined  & content !== undefined  )

        {


     
            
        const formatdata = new FormData();

         formatdata.append('name',name)
         formatdata.append('p_name',pr_name)
         formatdata.append('str',Structure)
         formatdata.append('post',post)
         formatdata.append('mois',mois)
         formatdata.append('ann',anne)
         formatdata.append('content',content)
         formatdata.append('photo',photo)
         formatdata.append('id_post',select)
         


axios({
  method: 'post',
  url: 'http://127.0.0.1:8000/api/empm/update/'+match.match.params.id,
  data: formatdata
}).then(res => {
   
    setsucssess(true);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500
    })


})
          



        
            
        }else{
        
        }

        


    }



    const onEditorChange = (evt) => 
    {

        setcontent(evt.editor.getData());

    }

    return (
        <div className='main_page'>

            <div className="side" >

            <Side />

            </div>

            <div className="main_body" >


                <div className="main_section" >

                    <div className="headline" >
    <h5>Ajouter un Employé du mois {select}</h5>
                        {match.match.params.id}
                    </div>


                    <div className="main_content" >
                    {sucssess ? <div class="alert alert-success" role="alert">ajouté avec succès</div> : <div></div>}

                        <table className="table ">
                            <thead>
                                <tr>

                                    <div class="row row-cols-3 full_w">
                                        <div class="col">
                                        {valid_name.status ? <div class="alert alert-danger" role="alert">{valid_name.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Nom</label>
                                                <input defaultValue={name} onChange={(e) => { setname(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            {valid_pr_name.status ? <div class="alert alert-danger" role="alert">{valid_pr_name.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Prénom </label>
                                                <input defaultValue={pr_name} onChange={(e) => { setpr_name(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                        </div>
                                        <div class="col">
                                        {valid_Structure.status ? <div class="alert alert-danger" role="alert">{valid_Structure.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Structure </label>
                                                <input defaultValue={Structure} onChange={(e) => { setStructure(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            {valid_post.status ? <div class="alert alert-danger" role="alert">{valid_post.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Poste </label>
                                                <input defaultValue={post} onChange={(e) => { setpost(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>

                                        </div>
                                        <div class="col">
                                        {valid_mois.status ? <div class="alert alert-danger" role="alert">{valid_mois.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Mois</label>
                                                <input defaultValue={mois} onChange={(e) => { setmois(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>
                                            {valid_anne.status ? <div class="alert alert-danger" role="alert">{valid_anne.msg}</div> : <div></div>}

                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Annes</label>
                                                <input defaultValue={anne} onChange={(e) => { setanne(e.target.value) }} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            </div>

                                        </div>

                                    </div>

                                </tr>

                            </thead>
                            <tbody>


                                <tr>
                                {valid_content.status ? <div class="alert alert-danger" role="alert">{valid_content.msg}</div> : <div></div>}

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
                                    {valid_photo.status ? <div class="alert alert-danger" role="alert">{valid_photo.msg}</div> : <div></div>}

                                    <label for="exampleInputEmail1">Photo</label>
                                    <div class="card">
                                        <div class="card-body">

                                            <input onChange={(e) => { handelfile(e) }} multiple="true" type='file' />
                                        </div>
                                    </div>

                                </tr>




                                <tr>
                                    <div class="form-group">
                                    {valid_attch.status ? <div class="alert alert-danger" role="alert">{valid_attch.msg}</div> : <div></div>}

                                        <label for="exampleFormControlSelect1">Attaché a un article</label>
                                        <select value={select} onChange={(e)=>{setattch(e.target.value)
                                            setselect(e.target.value)}} class="form-control" id="exampleFormControlSelect1">
                                        <option  >Sélectionner l'article</option>
                                            {
                                                data.map((item,index)=>{

                                                    return(
                                                        <option value={item.id}  key={index} >{item.name}</option>
                                                    )

                                                })
                                            }
                                           
                                     
                                        </select>
                                    </div>
                                </tr>





                                <tr>

                                    <td className="action_btn_post" >
                                        <button onClick={() => { handel_post() }} className="btn btn_action" type="button" >Ajouter</button>
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
