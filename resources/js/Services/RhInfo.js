import React, { useEffect, useState } from "react";

import Navbar from "../services/layout/Navbar";
import Header from "../services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Card_col from "../services/layout/Card_col";

import {FetchData} from "../AppServices/FetchData";


export default function RhInfo() {

    const [RhInfo, SetRhInfo] = useState([]);

    useEffect(() => {
      FetchData("http://127.0.0.1:8000/api/rh_info").then((res) => {
        SetRhInfo(res.data.data);
        
      });
    },[]);


  return (
    <div>
      <Navbar />
      <Header img_src="/photo_headar/Bondeau Actualites fin copie.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
    
          {RhInfo.map((item, index) => {
              
            return (
              <div key={index} className="GroupeCard_col">
                 <Card_col data={item} path="rhinfo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
