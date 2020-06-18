import React, { useEffect, useState, Fragment } from "react";



import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Card_col from "../services/layout/Card_col";

import Serche from "../services/layout/Serche";
import Headline from "../services/layout/Headline";

import DocsRow from "../services/layout/DocsRow";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FetchData , FetchDataWherePost } from "../AppServices/FetchData";



export default function Documents(SerchData) {
  const [AdmDoc, SetAdmDoc] = useState([]);
  const [ParDoc, SetParDoc] = useState([]);
  const [SerchValue, SetSercheValue] = useState("");
  const [ModeSerche, SetModeSerche] = useState(false);
  const [resdoc,setresdoc] = useState([]);

  useEffect(() => {
    FetchData("/api/docs").then((res) => {
      const data = res.data.data;

      const filter = () => {
        return new Promise((resolve, reject) => {
          const AdmDoc = [];
          const ParDoc = [];

          for (let i = 0; i < data.length; i++) {
            if (data[i].cat === 2) {
              AdmDoc.push(data[i]);
            }
          }

          for (let i = 0; i < data.length; i++) {
            if (data[i].cat === 3) {
              ParDoc.push(data[i]);
            }
          }

          resolve({ ParDoc, AdmDoc });
        });
      };

      filter().then((res) => {
        console.log(res);
        SetAdmDoc(res.AdmDoc);
        SetParDoc(res.ParDoc);
      });
    });
  }, []);

  const handalSerch = (e) => {
    if (e.length === 0) {
      SetModeSerche(false);
    } else {
      SetModeSerche(true);
      const value = e

      const req = () =>{

        return new Promise((resolve,reject)=>{

          FetchDataWherePost('/api/doc/serche',{serche:value}).then(res => {

            resolve(res.data)
          })
        })
      }

      req().then(res =>{

        setresdoc(res.data)

      })




    }
  };

  return (
    <div>
      <Navbar />
      <Header img_src="/photo_headar/doc.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
        </div>
      </div>

      <div className="main_content_home">
        <div className="main_container"></div>
        <div className="filter">
          <div className="serche_container">
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                onKeyUp={(e) => {
                  handalSerch(e.target.value);
                  SetSercheValue(e.target.value)
                }}
                type="text"
                placeholder="Recherche"
              />
            </Form.Group>
          </div>
        </div>
      </div>

      {ModeSerche ? (
        <div className="main_content_home">
          <div className="main_container">
            <Headline title="Résultats de recherche" />
            
              <div className="GroupeCardDoc">
                {
                
                resdoc == "" ? <div>Aucun document ne correspond aux {SerchValue}</div> :      resdoc.map((item, index) => {
                  return (
                    <DocsRow
                      key={index}
                      name={item.name}
                      date={item.date_edit}
                      path={item.doc_name}
                      image={item.img}
                    />
                  );
                })
                
                
                
           }
              </div>
          </div>
        </div>
      ) : (
        <Fragment>
          <div className="main_content_home">
            <div className="main_container">
              <Headline title="Documents Administratifs" />

              <div className="GroupeCardDoc">
                {AdmDoc.map((item, index) => {
                  return (
                   
                    <DocsRow
                      key={index}
                      name={item.name}
                      date={item.date_edit}
                      image={item.img}
                      path={item.doc_name}
                    />
                   
                  );
                })}
              </div>
            </div>
          </div>

          <div className="main_content_home">
            <div className="main_container">
              <Headline title="Documents partagés" />

              <div className="GroupeCardDoc">
                {ParDoc.map((item, index) => {
                  return (
                    <DocsRow
                      key={index}
                      name={item.name}
                      date={item.date_edit}
                      image={item.img}
                      path={item.doc_name}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fragment>
      )}

    
    </div>
  );
}
