import '../styles/globals.css'
import { wrapper } from '../redux/store'
import axios from 'axios'
import Cookie from 'js-cookie'
import { useEffect } from 'react'
import {parseCookies} from 'nookies'


function MyApp({ Component, pageProps }) {
    
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)

