import React from 'react'

export default function compteur_post(props) {


    

    return (
        <div className="main_section" >
        <div class="row">

            <div class="col-sm">

                <div className="post_box_info" >
                    <div className='post_box_icon' ><i class="im im-files-o"></i></div>
                    <div className='post_info' >
                        <div className="post_box_title"><h6>{props.name}</h6></div>
                        <div className="post_box_number"><h3>{props.post_n}</h3></div>
                    </div>
                </div>

            </div>


            <div class="col-sm">
            <div className="post_box_info" >
                    <div className='post_box_icon' ><i class="im im-speech-bubble"></i></div>
                    <div className='post_info' >
    <div className="post_box_title"><h6>{props.commnt}</h6></div>
                        <div className="post_box_number"><h3>{props.comm}</h3></div>
                    </div>
                </div>
            </div>



        </div>
    </div>
    )
}
