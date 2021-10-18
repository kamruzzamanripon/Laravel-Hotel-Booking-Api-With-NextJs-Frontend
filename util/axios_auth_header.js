import axios from 'axios'
import {parseCookies} from 'nookies'

export default function axios_auth_header(ctx) {
   
    const {snactum_frontend} = parseCookies(ctx) ? parseCookies(ctx) : ""
    const token = snactum_frontend ? snactum_frontend : ""
    const api = axios.create({
        withCredentials: true,
        headers:{
            'Authorization': `Bearer ${token}`
          }
    })

       
    return api
    
    //api.defaults.headers.common['Authorization'] = `Bearer ${snactum_frontend}`;

    
}