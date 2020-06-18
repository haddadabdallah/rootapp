import React, { useState, useEffect } from "react";
import Navbar from "../Services/Layout/Navbar";
import Header from "../Services/Layout/Header";
import ShrtLink from "../Services/Layout/shrtLink";
import Card_col from '../Services/Layout/Card_col'
import {FetchData} from "../AppServices/FetchData";

export default function Nos_Project() {

  const [Project, SetProject] = useState([]);

useEffect(() => {

    FetchData("/api/project").then((res) => {
      console.log(res.data)
      SetProject(res.data.data);
    });

  }, []);

  return (
    <div>
      <Navbar />
      <Header  img_src="/photo_headar/project.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />


          {Project.map((item, index) => {
            return (
              <div key={index} className="GroupeCard_col">
                <Card_col data={item} path="nos_project" />
              </div>
            );
          })}
         

        </div>
      </div>

    </div>
  );
}
