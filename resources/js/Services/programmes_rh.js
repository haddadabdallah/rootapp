import React, { useEffect, useState } from "react";
import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Headline from "../services/layout/Headline";
import CardRow from "../Services/Layout/CardRow";
import {Link} from "react-router-dom";

import { FetchData } from "../AppServices/FetchData";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Programmes_rh() {
  const [Empm, SetEmpm] = useState([]);


  useEffect(()=>{
    FetchData("http://127.0.0.1:8000/api/empm").then((res) => {
      SetEmpm(res.data.data);
    });
  },[])

  return (
    <div>
      <Navbar />
      <Header img_src="/photo_headar/rh_v_b.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
          <Headline title="" />

          <div className="row_rh">

                <div className="rh1">
                    <img src="/images/rh.png"  />
                </div>
                <div className="rh2">

                    <p>Nous jugeons important d'attirer, de conserver et de motiver nos bons employés qui produisent de bons résultats.

Pour cela, nous avons décidé de promouvoir la reconnaissance et la différenciation des performances de nos employés et d’encourager leur engagement dans le travail et les comportements exemplaires dans notre entreprise et par conséquent renforcer en permanence le sentiment de fierté et d’appartenance.

Le programme Employé du mois a pour but de récompenser et de reconnaitre une réalisation exceptionnelle, une grande initiative ou une contribution avec une grande valeur ajoutée pendant un mois spécifique.

Le personnel éligible regroupe l’ensemble des employés des catégories exécution, maitrise et maitrise supérieure à l’exception de l’encadrement.</p>


                </div>
          </div>

          <div className="GroupCard">
   
          </div>

          <Headline title="Employé du Mois" />



          <div className="GroupCard">



              {
                Empm.map((item,index)=>{

                  return(
                       
            <div className="Card_empm">
             <Link to={'/rhinfo/'+item.post_id}>  
            <div className="Card_empm_top">

              <div className="avatar" >
                      <img className="empm_avatar" src={'http://127.0.0.1:8000/avatars/'+item.photo} />
              </div>
  
            </div>
           


            <div className="Card_empm_bottom">


            <div className="name_empm" >
           <h5> {item.name +' '+ item.p_name} </h5>
           </div>

           <div className="name_empm" >
           <h5 className="empm_post" > {item.post} </h5>
           </div>

           <div className="name_empm" >

           <div className="empm_post"
                    dangerouslySetInnerHTML={{
                      __html: item.content
                    }}></div>

        
           </div>

           <div className="name_empm" >
                  <h5 className='empm_brv' >Employé du mois de {item.mois}  {item.ann}</h5>
           </div>





            </div>
            </Link>  
          </div>
    
                  )


                })
              }



           

          </div>

          

        </div>
      </div>





   
    </div>
  );
}
