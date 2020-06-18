import React, { useEffect, useState, useRef } from "react";
import Navbar from "../Services/Layout/Navbar";
import Header from "../Services/layout/Header";
import ShrtLink from "../services/layout/shrtLink";
import Headline from "../services/layout/Headline";
import CommentList from "../services/layout/CommentList";
import { Row, Col, Carousel, Form, Button } from "react-bootstrap";
import axios from "axios";

import { FetchDataWhere, FetchData } from "../AppServices/FetchData";
import StorData from "../AppServices/StorData";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


export default function Singel_post(match) {
  const [data, SetData] = useState([]);
  const [CatPost, SeTCatPost] = useState("");
  const [Comment, SetComment] = useState("");
  const [CommentData, SetCommentData] = useState([]);
  const [Refresh, SetRefresh] = useState([]);
  const MySwal = withReactContent(Swal);
  const [album, setalbum] = useState([])
  const [redirect, setredirect] = useState(false)
 

  const CommentInput = useRef(null);

  useEffect(() => {
    window.scrollTo(10, 500)

    LoadData();
    FetchData('http://127.0.0.1:8000/api/album/'+match.match.params.id).then(res => {
      setalbum(res.data)
    })



  }, []);











  const check = (Path, Body) => {

    axios.post(Path, Body).then(res => {

    })

  }


  const LoadData = () => {
    switch (match.match.path) {
      case "/nos_project/:id":
        FetchDataWhere(
          "http://127.0.0.1:8000/api/project",
          match.match.params.id
        ).then((res) => {
          SetData(res.data.data[0]);
          SeTCatPost("project");
          FetchDataWhere(
            "http://127.0.0.1:8000/api/cmnt",
            "project/" + match.match.params.id
          ).then((res) => {
            SetCommentData(res.data.data);
          });
        });
        check('http://127.0.0.1:8000/api/userservices', { IdPost: match.match.params.id, IdUser: 10, Path: 'project' });

        break;

      case "/actualites/:id":
        FetchDataWhere(
          "http://127.0.0.1:8000/api/post_s",
          match.match.params.id
        ).then((res) => {
          SetData(res.data.data[0]);
          SeTCatPost("actualites");
          FetchDataWhere(
            "http://127.0.0.1:8000/api/cmnt",
            "actualites/" + match.match.params.id
          ).then((res) => {
            SetCommentData(res.data.data);
          });
        });
        check('http://127.0.0.1:8000/api/userservices', { IdPost: match.match.params.id, IdUser: 10, Path: 'actualites' });

        break;

      case "/rhinfo/:id":
        FetchDataWhere(
          "http://127.0.0.1:8000/api/rh_info",
          match.match.params.id
        ).then((res) => {
          SetData(res.data.data[0]);
          SeTCatPost("rhinfo");
          FetchDataWhere(
            "http://127.0.0.1:8000/api/cmnt",
            "rhinfo/" + match.match.params.id
          ).then((res) => {
            SetCommentData(res.data.data);
          });
        });
        check('http://127.0.0.1:8000/api/userservices', { IdPost: match.match.params.id, IdUser: 10, Path: 'rhinfo' });

        break;

      default:
    }
  };


  const handalComment = () => {


    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();

    const final_date = y + '-' + m + '-' + d;

    const name = localStorage.getItem('fullname'); 
    const photo = localStorage.getItem('userinfo');

    console.log(photo)

    const Url = "http://127.0.0.1:8000/api/cmnt/add";
    const Body = {
      username: name,
      id_post: match.match.params.id,
      id_user: 5,
      comnt: Comment,
      user: CatPost,
      title: data.name,
      date_diff: final_date,
      photo : photo
    };

    StorData(Url, Body).then((res) => {
      if (res.data.status === true) {
        LoadData();
        CommentInput.current.value = ''
        SetComment('')

        Swal.fire({
          position: "top-end",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        })



      }
    });
  };



  return (
    <div>
      <Navbar />
       <Header img_src="/photo_headar/Bondeau Actualites fin copie.png" />

      <div className="main_content_home post_container">
      <div className="couverture" >
      <img src={'http://127.0.0.1:8000/post_image/'+data.couverture} />
</div>
        <div className="main_container">

          <div className="post_container">
 
            <Row className="row_post">
              <Col>
                <div className="title_post">
                  <h2> {data.name}  </h2>
                  <strong className="Data_Comment" > {data.date_diff} </strong>
                </div>

                <div className="core_post">

                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.content
                    }}></div>

                </div>
              </Col>
              <Col>
                <div className="post_core">
                  <Carousel>


                    {album.map((item, index) => {

                      const url = 'http://127.0.0.1:8000/album/' + item.name;

                      return (


                        <Carousel.Item>
                          <img
                            className="d-block w-100"
                            src={url}
                            alt="First slide"
                          />
                        </Carousel.Item>

                      );
                    })}



                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="main_content_home">
        <div className="main_container">
          <Headline title="Commentaires" />
          <CommentList data={CommentData} />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Laisser un commentaire </Form.Label>
            <Form.Control
              onChange={(e) => {
                SetComment(e.target.value);
              }}
              ref={CommentInput}
              as="textarea"
              rows="3"
            />
          </Form.Group>

          <div className="action_btn">
            <Button onClick={handalComment} variant="primary">
            Envoyer le commentaire
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}
