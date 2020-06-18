
import axios from "axios";

function StorData(Url,Body) {

   return new Promise((resolve,reject)=>{

       axios.post(Url,Body).then(res=>{
           resolve(res)
       })

   })

}


export default StorData
