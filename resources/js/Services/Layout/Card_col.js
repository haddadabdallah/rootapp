import React from 'react'
import {NavLink} from "react-router-dom";
export default function Card_col(props) {

    const {name,disc,vin,id,content} = props.data
    const path = '/'+props.path+'/'+id
    return (
        <div className="Card_Col">
        <div className="info_card">
         <NavLink to={path}> <h1>{name}</h1></NavLink>


          <div
                    dangerouslySetInnerHTML={{
                      __html: content
                    }}></div>


        </div>
        <div className="image_card">
        <NavLink to={path}> <img src={'http://127.0.0.1:8000/post_image/'+vin} /></NavLink>
        </div>
      </div>
    )
}
