import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Side from "../ServicesDash/lyoute/side";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";


export default function Dashboard() {
    const [chartdata, setchartdata] = useState({});
    const [bardata, setbardata] = useState({});
    const [visit, setvisit] = useState([]);
    const [coun, setcoun] = useState([]);
    const [statis_page, set_statispage] = useState([]);
    //const [month,setmonth] = useState('')



    /// statis 

    const [post_n, set_post_n] = useState();
    const [Projets, set_Projets_n] = useState();
    const [rh_info, set_rh_info_n] = useState();
    const [docs, set_docs_n] = useState();
    const [empm, set_empm_n] = useState();
    const [comnt, set_comnt_n] = useState();

    const [cmntarticle, setcmntarticle] = useState();
    const [cmntproject, setcmntproject] = useState();
    const [cmntrhinfo, setcmntrhinfo] = useState();



    const [star_mnt, set_star_mnt] = useState();
    const [end_mnt, set_end_mnt] = useState();


    const [page_start, set_pagestart] = useState();
    const [page_end, set_pageend] = useState();


    const [calc_totle, set_calc_totle] = useState();


    const [article_bar, setarticle_bar] = useState(0);
    const [doc_bar, setdocbar] = useState(0);

    const [videos_bar, setvideos] = useState(0);
    const [rh_info_bar, set_rhinfo_bar] = useState(0);


    useEffect(() => {

        axios.get('http://127.0.0.1:8000/api/all_statis').then(res => {

            if (res.data.status === true) {
                set_post_n(res.data.article)
                setcmntarticle(res.data.comnt_article)
                set_Projets_n(res.data.project)
                setcmntproject(res.data.comnt_project)
                set_rh_info_n(res.data.rh_info)
                setcmntrhinfo(res.data.comnt_rhinfo)
                set_docs_n(res.data.doc)
                set_empm_n(res.data.empm)
                set_comnt_n(res.data.comnt)

            }
        })






        axios.get('http://127.0.0.1:8000/api/statis/page/').then(async (res) => {


                set_statispage([res.data.article, res.data.videos, res.data.doc, res.data.rh_info])

            
            }




        )











    }, [])


    useEffect(()=>{


        
        axios
        .get("http://127.0.0.1:8000/api/login_log")
        .then(async (res) => {


            set_calc_totle(res.data.totel)

            const data = await res.data.data;
            const deys = Object.keys(data);

            setvisit(deys);

            const visiteur = [];
            for (let index = 0; index < deys.length; index++) {
                const jour = deys[index];

                visiteur.push(res.data.data[jour].length);
            }

            setcoun(visiteur);
        });

    },[])






    
    useEffect(() => {
        chart();
    }, [coun]);

    useEffect(() => {
        chart();
    }, [statis_page]);



    // useEffect(() => {
    // const d = new Date();
    // const n = d.getMonth() + 1;
    // const m = new Date().toISOString().slice(0, 10)
    // getstati(n);
    // getstati_page(m)
    //  statis_count()
    //  }, []);


    const statis_count = () => {

        /// article 
        axios.get('http://127.0.0.1:8000/api/all_statis').then(res => {

            if (res.data.status === true) {
                set_post_n(res.data.article)
                setcmntarticle(res.data.comnt_article)
                set_Projets_n(res.data.project)
                setcmntproject(res.data.comnt_project)
                set_rh_info_n(res.data.rh_info)
                setcmntrhinfo(res.data.comnt_rhinfo)
                set_docs_n(res.data.doc)
                set_empm_n(res.data.empm)
                set_comnt_n(res.data.comnt)
            }

        })


    }

    const chart = () => {
        setchartdata({
            labels: visit,
            datasets: [
                {
                    label: "Nombre de visites par mois",
                    data: coun,
                    backgroundColor: "#273c75",
                },
            ],
            borderWidth: 4,
        });

        setbardata({
            labels: ["Actualités", "Documentation", "Mulitmédia", "Espace RH"],
            datasets: [
                {
                    label: "Nombre de visites par mois",
                    data: statis_page,
                    backgroundColor: ["#273c75", "#415a9b"],
                },
            ],
        });
    };

    const getstati = () => {


        axios
            .get("http://127.0.0.1:8000/api/login_log/" + star_mnt + "/" + end_mnt)
            .then(async (res) => {


                set_calc_totle(res.data.totel)

                const data = await res.data.data;
                const deys = Object.keys(data);

                setvisit(deys);

                const visiteur = [];
                for (let index = 0; index < deys.length; index++) {
                    const jour = deys[index];

                    visiteur.push(res.data.data[jour].length);
                }

                setcoun(visiteur);
            });
    };



    const getstati_page = () => {


        axios.get('http://127.0.0.1:8000/api/statis/page/' + page_start + '/' + page_end).then(async (res) => {



         
              set_statispage([res.data.article, res.data.videos, res.data.doc, res.data.rh_info])




        })

    };

    return (
        <div className="main_page">
            <div className="side">
                <Side />
            </div>

            <div className="main_body">
                <div class="row row-cols-2">
                    <div class="col coldash">
                        <div className="main_section">
                            <div className="headline">
                            <h4>{calc_totle}</h4> <label>Visite</label>

                                <select
                                    onChange={(e) => {
                                        set_star_mnt(e.target.value);

                                    }}
                                    class="form-control form-control-sm w_dash"
                                >
                                    <option>Début</option>
                                    <option value="1">janvier</option>
                                    <option value="2">février</option>
                                    <option value="3">mars</option>
                                    <option value="4">avril</option>
                                    <option value="5">mai</option>
                                    <option value="6">juin</option>
                                    <option value="7">juillet</option>
                                    <option value="8">août</option>
                                    <option value="9">septembre</option>
                                    <option value="10">octobre</option>
                                    <option value="11">novembre</option>
                                    <option value="12">décembre</option>
                                </select>


                                <select
                                    onChange={(e) => {
                                        set_end_mnt(e.target.value);

                                    }}
                                    class="form-control form-control-sm w_dash"
                                >
                                    <option>Fin</option>
                                    <option value="1">janvier</option>
                                    <option value="2">février</option>
                                    <option value="3">mars</option>
                                    <option value="4">avril</option>
                                    <option value="5">mai</option>
                                    <option value="6">juin</option>
                                    <option value="7">juillet</option>
                                    <option value="8">août</option>
                                    <option value="9">septembre</option>
                                    <option value="10">octobre</option>
                                    <option value="11">novembre</option>
                                    <option value="12">décembre</option>
                                </select>

                                <button onClick={() => { getstati() }} >Sélectionner </button>

                            </div>

                            <Line
                                data={chartdata}
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                precision: 0,
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div class="col coldash">
                        <div className="main_section">
                            <div className="headline">
                                <label>Pages visités</label>

                                <select
                                    onChange={(e) => {
                                        set_pagestart(e.target.value);
                                    }}
                                    class="form-control form-control-sm w_dash"
                                >
                                    <option>Début</option>
                                    <option value="1">janvier</option>
                                    <option value="2">février</option>
                                    <option value="3">mars</option>
                                    <option value="4">avril</option>
                                    <option value="5">mai</option>
                                    <option value="6">juin</option>
                                    <option value="7">juillet</option>
                                    <option value="8">août</option>
                                    <option value="9">septembre</option>
                                    <option value="10">octobre</option>
                                    <option value="11">novembre</option>
                                    <option value="12">décembre</option>
                                </select>


                                <select
                                    onChange={(e) => {
                                        set_pageend(e.target.value);
                                    }}
                                    class="form-control form-control-sm w_dash"
                                >
                                    <option>Fin</option>
                                    <option value="1">janvier</option>
                                    <option value="2">février</option>
                                    <option value="3">mars</option>
                                    <option value="4">avril</option>
                                    <option value="5">mai</option>
                                    <option value="6">juin</option>
                                    <option value="7">juillet</option>
                                    <option value="8">août</option>
                                    <option value="9">septembre</option>
                                    <option value="10">octobre</option>
                                    <option value="11">novembre</option>
                                    <option value="12">décembre</option>
                                </select>
                                <button onClick={() => { getstati_page() }} >Sélectionner</button>
                            </div>

                            <Bar
                                data={bardata}
                                options={{
                                    scales: {
                                        yAxes: [{
                                            ticks: {
                                                precision: 0,
                                                beginAtZero: true
                                            }
                                        }]
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <div class="col coldash">


                        <div className="main_section" >


                            <div className='row row-cols-2' >


                                <div class="col coldash">
                                    <div className="post_box_info" >
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6> Utilisateurs</h6></div>
                                            <div className="post_box_number"><i class="im im-users"></i> <h4>430</h4> </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className="post_box_info" >
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6>Commentaires</h6></div>
                                            <div className="post_box_number"><i class="im im-speech-bubble-comments"></i> <h4>{comnt}</h4></div>
                                        </div>
                                    </div>
                                </div>

         





                            </div>




                        </div>
                    </div>




                    <div class="col">


                        <div className="main_section" >
                           

                            <div className='row row-cols-2' >


                                <div class="col">
                                    <div className="post_box_info" >
                               
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6> Actualités</h6></div>
                                            <div className="post_box_number"> <i class="im im-apartment"></i> <h4>{post_n}</h4>  <i class="im im-speech-bubble-comments"></i>    <h4>{cmntarticle} </h4> </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className="post_box_info" >
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6>Projets</h6></div>
                                            <div className="post_box_number"> <i class="im im-tools"></i> <h4>{Projets}</h4>   <i class="im im-speech-bubble-comments"></i>    <h4>{cmntproject}</h4>  </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className="post_box_info" >
                                     
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6>Documents</h6></div>
                                       

                                            <div className="post_box_number"> <i class="im im-files-o"></i> <h4>{docs}</h4>    </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div className="post_box_info" >
                                    
                                        <div className='post_info' >
                                            <div className="post_box_title"><h6>Rh info</h6></div>
                            
                                            <div className="post_box_number"><i class="im im-sitemap"></i> <h4> {rh_info}</h4>   <i class="im im-speech-bubble-comments"></i>  <h4> {cmntrhinfo}</h4>   </div>

                                        </div>
                                    </div>
                                </div>

         

                            </div>




                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}
