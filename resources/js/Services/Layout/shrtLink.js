import React from "react";
import { Container, Row, Col } from "react-bootstrap";



export default function shrtLink() {
  return (
    <Container className="short_container">
      <Row className="short_main">


        <Col xs>
          <div className="main_box">
            <a href="http://10.2.2.8/groupe/">
            <div className="icon_box">
              <img src="/resource/1.png" />
            </div>
            <div className="title_box">
              <span className='title_shrt'>Espace Groupe</span>
            </div>
            </a>
          </div>
        </Col>

        <Col xs>
          <div className="main_box">
          <a href="http://10.2.2.8/groupe/annuaire">
            <div className="icon_box">
              <img src="/resource/2.png" />
            </div>
            <div className="title_box">
              <span className='title_shrt'>Annuaire collaborateurs Groupe </span>
            </div>
            </a>
          </div>
        </Col>

        <Col xs>
          <div className="main_box">
          <a href="http://10.2.2.8/groupe/documentation">
            <div className="icon_box">
              <img src="/resource/3.png" />
            </div>
            <div className="title_box">
              <span className='title_shrt'>Documentation Technique & Commerciale </span>
            </div>
            </a>
          </div>
        </Col>

        <Col xs>
          <div className="main_box">
          <a href="http://10.2.2.8/groupe/liens-utiles">
            <div className="icon_box">
              <img src="/resource/4.png" />
            </div>
            <div className="title_box">
              <span className='title_shrt'>Liens utiles </span>
            </div>
            </a>
          </div>
        </Col>


      </Row>
    </Container>
  );
}
