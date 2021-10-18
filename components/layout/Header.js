import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../redux/actions/authActions';
import Cookie from 'js-cookie'
import Image from 'next/image'

function Header() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [user, setUser] = useState('')

    const logOut = ()=>{
        dispatch(logoutAction(router))
    }

    const user_info = Cookie.get('user_info');
    const user_exits = user_info ? JSON.parse(user_info) : ""

    useEffect(()=>{
        if(user_exits && user_exits.email.length > 1){
            setUser('true')
        }
    },[])

   
    //console.log(user_info)

    return (
        <div>
            <nav className="navbar row justify-content-center sticky-top">
                <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Link href='/'>
                            <img style={{ cursor: 'pointer' }} src="/images/bookit_logo.png" alt="BookIT" />
                        </Link>
                    </div>
                   
                </div>

                <div className="col-3 p-0">
                { user && (
                        <>
                            <p>Welcome to our Hotel Mr. <strong>{user_exits ? user_exits.name : "Unknown"}</strong>
                            <span><Image className="avater-image" src={!(user_exits.avatar) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + user_exits.avatar)} alt={user_exits.name} height="45"
                    width="45" /></span>
                            </p>
                            
                        </>
                    )}
                   
                </div>

                <div className="col-3 mt-3 mt-md-0 text-center">

                    { !user && (
                        <>
                            <Link href='/login'>
                                <a className="btn btn-danger px-4 text-white login-header-btn float-right mr-2">Login</a>
                            </Link>
                            <Link href='/register'>
                                <a className="btn btn-danger px-4 text-white login-header-btn float-right">Register</a>
                            </Link>
                        </>
                    
                    )}
                    
                    { user && (
                        <>
                            <Link href='/'>
                            <a className="btn btn-danger px-4 text-white login-header-btn float-right" onClick={()=>logOut(router)}>Logout</a>
                            </Link>
                        </>
                    )}

                </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
