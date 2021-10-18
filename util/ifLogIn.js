import Router from 'next/router'
import {parseCookies} from 'nookies'

export default function ifLogIn(ctx) {
    const {snactum_frontend} = parseCookies(ctx)
    if(snactum_frontend){
        const {res} = ctx
        res.writeHead(302,{Location:"/"})
        res.end()
    }
}