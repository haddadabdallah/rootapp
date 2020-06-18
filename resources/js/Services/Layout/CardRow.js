import React from 'react'
import { Link } from 'react-router-dom'

export default function Card_row(props) {

    const {name,id,vin} = props.data
    const path = '/'+props.path+'/'+id

    return (
        <div className="Card" >
        <div className="img_card">
        <Link to={path}  ><img src={'/post_image/'+vin}  /></Link>
        </div>
        <div className="title_card">
           <Link to={path}  > <span>{name}</span> </Link>
        </div>
      </div>
    )
}
