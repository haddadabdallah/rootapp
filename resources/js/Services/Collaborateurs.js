import React,{useEffect,useState} from "react";
import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Card_col from "../services/layout/Card_col";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FetchData , FetchDataWherePost } from "../AppServices/FetchData";

export default function Collaborateurs() {

  const [data,setdata] = useState([]);
  const [set,setser] = useState('');
  const [name,setname] = useState('');

  useEffect(()=>{
    window.scrollTo(10, 500)

    
    FetchDataWherePost('http://127.0.0.1:8000/api/anuu',{
 
    }).then(res=>{

      setdata(res.data)

    })

  },[])


  useEffect(()=>{




   
  
      FetchDataWherePost('http://127.0.0.1:8000/api/anuu',{
        name : name,
        fill: set
      }).then(res=>{
        console.log(res.data)
         setdata(res.data)
       
      })
  
      





  },[set,name])

 

  return (
    <div>
      <Navbar />
      <Header img_src='/photo_headar/anu.png' />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />




         
         

        </div>
      </div>

      <div className="main_content_home">
        <div className="filter">
          <div className="serche_container">
         

          <Row>
    <Col>
    <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>recherche par mot</Form.Label>
    <Form.Control onKeyUp={(e)=>{setname(e.target.value) 
   
     }} type="text" placeholder="Ex : Abdallah haddad" />
  </Form.Group>
    
    </Col>
    <Col xs={5}>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Recherche par structure</Form.Label>
    <Form.Control onChange={(e)=>{
      setser(e.target.value)
      
    
    }} as="select">
      <option value='' >Tout les Collaborateur</option>
      <option>Direction</option>
      <option>Informatique</option>
      <option>Réalisation</option>
      
    </Form.Control>
  </Form.Group>


    </Col>
    <Col>
    <Form.Group controlId="exampleForm.ControlSelect1">
  </Form.Group></Col>
  </Row>



          </div>
        </div>
      </div>




      <div className="main_content_home">




      <Row>


    {
      data.map((item,key)=>{

        return(

          <Col xs="4">
          <div className='colab_box'>
            <div className='colab_top'>
                <div className='colab_avatar'>
                <div className='fill' >{item.Filiales}</div>
                  <img className="avatar_colab" src={'http://127.0.0.1/avatar/'+item.avatar} />
           
                </div>
            </div>
            <div className='colab_bottom'>
          
              <div className='post' ><h6>{item.l_name} {item.p_name}</h6></div>
              <div className='post' >{item.Fonction}</div>
              <div className='post' >{item.Filiales}</div>

              <div className='email' ><a href={"mailto:"+item.email} >{item.email_ex}</a></div>
             
              <div className='phone' >{item.mobile}</div>
            </div>
          </div>
          </Col>

        )

      })
    }




   
    
  
  </Row>





      </div>




    </div>
  );
}
