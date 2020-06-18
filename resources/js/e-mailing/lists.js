import React, { useRef, useEffect, useState } from "react";
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Side from "../ServicesDash/lyoute/side";
import axios from 'axios';
export default function lists() {

    const tableRef = useRef(null);
    const wrapperRef = useRef(null);
    const [data, setdata] = useState([]);
    const [ListName, SetListName] = useState('');
    const [R_load, SetR_load] = useState(false);

    useEffect(() => {
        axios.post('/api/get_all_site').then(res => {
            console.log(res)
            setdata(res.data.data)
            const grid = new Grid({
                from: tableRef.current,

            }).render(wrapperRef.current);
        })
    }, [])


   

    useEffect(() => {

        axios.post('/api/get_all_site').then(res => {
            setdata(res.data.data)
            console.log(res.data.data)
        })



    }, [R_load])


    const posthandal = () => {


        axios.post('/api/add_list', { title: ListName, count: 0 }).then(res => {
            if (res.data.status === true) {
                SetR_load(!R_load)
            }
        })

    }


    return (
        <div>
            <div className="main_page">
                <div className="side">
                    <Side />
                </div>







                <div className="main_body">


                    <div className="main_section ">
                        <div className="headline">
                            <h5>Ajouter une liste </h5>
                        </div>

                        <div className="padding_dash w-100" >
                            <div class="form-group  ">
                                <input onKeyUp={(e) => { SetListName(e.target.value) }} class="form-control w-100" type="text" placeholder="Default input" />
                            </div>


                            <button onClick={() => { posthandal() }} type="button" class="btn btn-primary">Primary</button>

                        </div>

                    </div>


                    <div className="main_section ">
                        <div className="headline">
                            <h5>Listes </h5>
                        </div>


                        <div className="padding_dash w-100" >


                        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
    
    </tr>
  </thead>
  <tbody>

        {
            data.map((item,key)=>{
                    return (
                        <tr key={key} >
                        <th >{item.title}</th>
                    <td className="action_btn" >{item.count}</td>
                        <td><td><button type="button" class="btn btn-primary">Primary</button></td></td>
                        <td><td><button type="button" class="btn btn-primary">Primary</button></td></td>
                        <td><td><button type="button" class="btn btn-primary">Primary</button></td></td>

                   
                      </tr>
                    )
            })
        }

  

  </tbody>
</table>

                      
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
