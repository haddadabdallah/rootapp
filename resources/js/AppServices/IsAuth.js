import React, { useState, useEffect } from 'react'
import {Route, useHistory} from 'react-router-dom';

export default function IsAuth({ component: Components, ...rest }) {

    const [IsAuthUser,SetIsAuthUser] = useState(false);
    const history = useHistory();

    useEffect(()=>{
     
        if(window.localStorage.getItem('token')){
            
            SetIsAuthUser(true)
        }else{
            SetIsAuthUser(false)
            window.localStorage.removeItem('token')
            history.push('/login');
        }
    },[])



    return (
        <Route
        {...rest}
        render={
          (params) => {
          if(IsAuthUser !== null && IsAuthUser === true) return <Components {...params}  />
          }} />
    )
}
