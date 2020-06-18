import axios from 'axios'

export const Supp = (id,path) => {

return new Promise((resolve,reject)=> {


    if(axios.post('http://127.0.0.1:8000/api/'+path+'/delete', {id: id}))
    {
        axios.get('http://127.0.0.1:8000/api/'+path).then(res => {
                if (res.data.status === true) {
                    resolve(res.data.data)
                }
        })
    }
    
})}