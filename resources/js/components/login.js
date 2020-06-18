import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Route, useHistory} from 'react-router-dom';


function Home() {

    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const history = useHistory();

    const Loginhandal =  () =>
    {

        axios.post('http://10.2.2.36:8080/annuaireb/login?username='+username+'&password='+password).then(res=>{
    
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('fullname',res.data.fullname)
            localStorage.setItem('key',res.data.key)
          
            const key = res.data.key

            axios.post('/api/getuserinfo',{username:key}).then(res => {
                console.log(res.data)
                localStorage.setItem('userinfo',res.data[0].avatar)

            })


            axios.post('api/login_log/add').then(res =>{
                console.log(res.data)
                history.push('/services');
            })

        })

      

    }   

    return (
        <div className="container">
            <input onChange={(e)=>{setusername(e.target.value)}} placeholder="username" />
            <input onChange={(e)=>{setpassword(e.target.value)}} placeholder="password" />
             <button onClick={Loginhandal} >login</button>
        </div>
    );
}

export default Home;


