import React, { useRef, useEffect, useState } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Side from "../ServicesDash/lyoute/side";
import {FetchData} from '../AppServices/FetchData';


export default function email() {

  
        const [data,setdata] = useState([]);

    useEffect(()=>{
 
    
        
        FetchData('api/get_mails',{
     
        }).then(res=>{
    
          setdata(res.data.data)
          console.log(res.data);
    
        })
    
      },[])





    return (
        <div>
            <div className="main_page">
                <div className="side">
                    <Side />
                </div>

                <div className="main_body">
                    <div className="main_section ">
                        <div className="headline">
                            <h5>Liste des operation mailing </h5>
                        </div>

                        <div className="padding_dash w-100" >

                        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>

    {
        data.map((item,key)=>{

            return (
                <tr  >
                <th scope="row">1</th>
                <td> {item.name} </td>
                <td>Otto</td>
                <td><button type="button" class="btn btn-primary">Primary</button><button type="button" class="btn btn-primary">Primary</button><button type="button" class="btn btn-primary">Primary</button></td>

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
