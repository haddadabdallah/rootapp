import axios from 'axios'


export const Supp = (id) => {

return new Promise((resolve,reject)=> {


    if(axios.post('http://127.0.0.1:8000/api/post_s/delete', {id: id}))
    {
        axios.get('http://127.0.0.1:8000/api/post_s').then(res => {
                if (res.data.status === true) {

                    resolve(res.data.data)
                }
        })

    }
    
})}