import Router from 'next/router'
import {parseCookies} from 'nookies'

export default function redirectTo(ctx) {
    const {snactum_frontend} = parseCookies(ctx)
    if(!snactum_frontend){
        const {res} = ctx
        res.writeHead(302,{Location:"/login"})
        res.end()
    }
}