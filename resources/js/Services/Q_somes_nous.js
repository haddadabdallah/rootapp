import React from "react";
import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Card_col from "../services/layout/Card_col";
import Headline from "../services/layout/Headline";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Q_somes_nous() {
  return (
    <div>
      <Navbar />
      <Header img_src="/photo_headar/q_somme.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
    
          <Headline title="CHILALI Services en Chiffres" />


          <Row>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2001.svg" />
            </Col>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2002.svg" />
            </Col>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2003.svg" />
            </Col>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2004.svg" />
            </Col>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2005.svg" />
            </Col>
            <Col className="col-4 box_qi" >
              <img src="/images/Chiffre%2006.svg" />
            </Col>
          </Row>
        </div>
      </div>
      <div className="main_content_home">
        <div className="main_container">
          <Headline title="CHILALI Services en Chiffres" />
          <Row xs={1} md={2}>
            <Col className="box_qi_2" >
              <img src="/images/Domaine_01.png" />
            </Col>
            <Col className="box_qi_2" >
              <img src="/images/Domaine_02.png" />
            </Col>
            <Col className="box_qi_2" >
              <img src="/images/Domaine_03.png" />
            </Col>
            <Col className="box_qi_2" >
              <img src="/images/Domaine_01.png" />
            </Col>
          </Row>

        </div>
      </div>



      <div className="main_content_home blue_container">
        <div className="main_container">


<Row>

<Col xs="3">

    <img src="/images/Atout01.png" />
    <p className="para_qi">Formée, expérimentée et qualifiée pour relever tous les défis propres à la réalisation des grands projets.</p>

</Col>
<Col xs="3">
<img src="/images/Atout02.png" />
<p className="para_qi">
Moyens matériels fiables et d’envergure conformes à la nature des différents projets.
</p>

</Col>
<Col xs="3">
<img src="/images/Atout03.png" />
<p className="para_qi">
Combinaison optimale des moyens avec une gestion scientifique des projets afin de proposer des délais raisonnables et de les respecter.
</p>

</Col>
<Col xs="3">
<img src="/images/Atout04.png" />
<p className="para_qi">Toutes les mesures sont prises en vue de concevoir les meilleures solutions dans le respect de l’environnement.</p>

</Col>

</Row>



        </div>
      </div>



    </div>
  );
}