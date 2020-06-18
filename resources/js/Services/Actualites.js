import React, { useEffect, useState } from "react";

import Navbar from "../Services/Layout/Navbar";
import Header from "../Services/Layout/Header";
import ShrtLink from "../Services/Layout/shrtLink";
import Card_col from "../Services/Layout/Card_col";

import {FetchData} from "../AppServices/FetchData";

export default function Actualites() {

    const [IsAuth,SetIsAutu] = useState(false);
 
  const [Article, SetArticle] = useState([]);

  useEffect(() => {
    FetchData("/api/post_s").then((res) => {
      SetArticle(res.data.data);
    });
  },[]);

  return (

    <div>

      <Navbar />
      <Header img_src="/photo_headar/Bondeau Actualites fin copie.png" />

      <div className="main_content_home">
        <div className="main_container">
          <ShrtLink />
  

          {Article.map((item, index) => {
            return (
              <div key={index} className="GroupeCard_col">
                <Card_col data={item} path="actualites" />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
