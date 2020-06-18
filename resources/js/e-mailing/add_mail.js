import React, { useState } from 'react'
import axios from 'axios'
import Side from "../ServicesDash/lyoute/side";


export default function add_mail() {

    const [Title,SetTitile] = useState('');
    const [Content,SetContent] = useState('');
    const [List,SetList] = useState('');

    const sendhandal = () =>
    {
        axios.post('/api/send_mail',{title:Title,content:Content,list:List}).then(res =>{
            console.log(res.data)
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
                    <div className="headline" >

<h5>Ajouter un Article</h5>
</div>
                    <div class="container">
                    <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onKeyUp={(e)=>{SetTitile(e.target.value)}} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea onKeyUp={(e)=>{SetContent(e.target.value)}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select onChange={(e)=>{SetList(e.target.value)}} class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

  <div class="form-group">
  <button onClick={()=>{sendhandal()}} type="button" class="btn btn-primary">Envoyer</button>
      </div>

                        </div>
                        </div>
                        </div>


                </div>

              

          
   
        </div>
    )
}
