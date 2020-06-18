import React from 'react'
import {Link} from "react-router-dom";

export default function DocsRow(props) {

    const {name,date,path,image} = props

    return (
<div>
        <div className="CardDoc">
                 <a target="_blank" href={'/docs/'+path}  >  
        <div className="CardDoc_img">
          <img src={'/resource/'+image} />
        </div>
        </a>
        <div className="CardDoc_info">

   

        </div>
      </div>
      
      <div className="docCardBottom">
      <a href={'/docs/'+path} target="_blank"  ><span> {name} </span></a>


              <div className="date_d"
                    dangerouslySetInnerHTML={{
                      __html: date
                    }}></div>
              </div>
              </div>
    )
}
