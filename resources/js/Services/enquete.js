import React, { useEffect, useState } from "react";
import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Headline from "../services/layout/Headline";
import CardRow from "../services/layout/CardRow";
import {Link} from "react-router-dom";

import { FetchData } from "../AppServices/FetchData";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Enquete() {

  const redirection = () =>{
    // Simulate an HTTP redirect:
window.location.replace("http://www.google.com");
  }

  return (
    <div>
      <Navbar />
      <Header img_src="/photo_headar/rh_v_b.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
          <Headline title="" />

          <div className="row_rh">

                
                <div className="rh2">

                    <p>
                    
                    Nous jugeons qu’il est important de connaitre les opinions de nos employés, leur niveau de satisfaction ou d’insatisfaction afin de mieux appréhender les dimensions humaines, sociales et professionnelles pour le développement de de notre organisation.

L’enquête de satisfaction a pour objectif principal d’améliorer notre management des ressources humaines, ce programme nous permettra d’adopter une démarche de qualité et d’amélioration pour optimiser la satisfaction de nos employés concernant leur travail et leur environnement professionnel.

La réussite de ce programme nécessite la participation de l’ensemble des employés afin d’assurer des résultats représentatifs des attentes.
                    
                    </p>
<button onClick={redirection} > Accés </button>

                </div>

                <div className="rh1">
                    <img src="/images/rh_v.png"  />
                </div>






          </div>

          <div className="GroupCard">
   
          </div>

     

        </div>
      </div>





    </div>
  );
}
