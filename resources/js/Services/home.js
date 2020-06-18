import React, { useEffect, useState } from "react";
import Navbar from "../Services/Layout/Navbar";
import Header from "./Layout/Header";
import ShrtLink from "../Services/Layout/shrtLink";
import Headline from "../Services/Layout/Headline";
import "../Services/app.css";
import { FetchData } from "../AppServices/FetchData";
import CardRow from "./Layout/CardRow";
import { Link } from "react-router-dom";

export default function Home_services() {
    const [Article, SetArticle] = useState([]);
    const [Project, SetProject] = useState([]);
    const [Empm, SetEmpm] = useState([]);

    useEffect(() => {
        document.title = "CCINFO | CHIALI Services";

        FetchData("/api/post_s").then(res => {
            console.log(res.data);
            SetArticle(res.data.data);
        });

        FetchData("/api/project").then(res => {
            SetProject(res.data.data);
        });

        FetchData("/api/empm").then(res => {
            SetEmpm(res.data.data);
        });
    }, []);

    return (
        <div>
            <Navbar />
            <Header img_src="/photo_headar/home.png" />

            <div className="main_content_home">
                <div className="main_container">
                    <ShrtLink />
                </div>
            </div>

            <div className="main_content_home">
                <div className="main_container">
                    <Headline title="Actualités" />

                    <div className="GroupCard">
                        {Article.map((item, index) => {
                            return (
                                <CardRow
                                    key={index}
                                    data={item}
                                    index={index}
                                    path="actualites"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="main_content_home">
                <div className="main_container">
                    <Headline title="Nos Projets" />

                    <div className="GroupCard">
                        {Project.map((item, index) => {
                            return (
                                <CardRow
                                    key={index}
                                    data={item}
                                    index={index}
                                    path="nos_project"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="main_content_home">
                <div className="main_container">
                    <Headline title="Employé du Mois" />

                    <div className="GroupCard">
                        {Empm.map((item, index) => {
                            return (
                                <div className="Card_empm">
                                    <Link to={"/rhinfo/" + item.post_id}>
                                        <div className="Card_empm_top">
                                            <div className="avatar">
                                                <img
                                                    className="empm_avatar"
                                                    src={
                                                        "http://127.0.0.1:8000/avatars/" +
                                                        item.photo
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div className="Card_empm_bottom">
                                            <div className="name_empm">
                                                <h5>
                                                    {" "}
                                                    {item.name +
                                                        " " +
                                                        item.p_name}{" "}
                                                </h5>
                                            </div>

                                            <div className="name_empm">
                                                <h5 className="empm_post">
                                                    {" "}
                                                    {item.post}{" "}
                                                </h5>
                                            </div>

                                            <div className="name_empm">
                                                <div
                                                    className="empm_post"
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.content
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="name_empm">
                                                <h5 className="empm_brv">
                                                    Employé du mois de{" "}
                                                    {item.mois} {item.ann}
                                                </h5>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
