import React from "react";


export default function CommentList({ data }) {





  return (
    <div>
      <div className="GroupeComment">
        {data.map((item, index) => {
          return (
            <div  key={index} className="Comment">
              <div className="NameComment">
                <div className="AvataComment">
                  <img src={'http://127.0.0.1:8000/avatars/'+item.photo} />
                </div>
                <div className="NameUserComment">
          <strong className="username_Comment">{item.username}</strong>
                  <strong className="Data_Comment">{item.date_diff}</strong>
                </div>
              </div>
              <div className="CoreComment">
                <p>
                  {item.comm}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
