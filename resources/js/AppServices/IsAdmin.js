import React, { useState, useEffect } from 'react'
import {Route, useHistory} from 'react-router-dom';
import axios from 'axios';

export default function IsAdmin({ component: Components, ...rest }) {

    const [IsAuthUser,SetIsAuthUser] = useState(false);
    const history = useHistory();

    useEffect(()=>{
     
        if(window.localStorage.getItem('token')){
            
           

            const key = localStorage.getItem('key')
            console.log(key)
                axios.post('/api/getuserinfo',{username:key}).then(res =>
                    {
                           if(res.data[0].role === 'admin')
                           {
                            SetIsAuthUser(true) 
                           }else{
                            history.push('/services');

                           }
                    })



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
