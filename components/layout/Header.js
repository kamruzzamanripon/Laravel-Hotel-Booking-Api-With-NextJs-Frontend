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
    },[user_exits])

   
    //console.log(user_exits.id)

    return (
        <div>
            <nav className="navbar row justify-content-center sticky-top">
                <div className="container">
                <div className="col-3 p-0">
                    <div className="navbar-brand">
                        <Link href='/'>
                            <Image className="avater-image" src="/images/bookit_logo.png" alt="BookIT" height="55" width="55" />
                        </Link>
                    </div>
                   
                </div>


                <div className="col-3 mt-3 mt-md-0 text-center">

                    {user ? (
                        <div className="ml-4 dropdown d-line">
                            <a
                                className="btn dropdown-toggle mr-4"
                                id='dropDownMenuButton'
                                data-toggle='dropdown'
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <figure className="avatar avatar-nav">
                                <Image className="avater-image" src={!(user_exits.avatar) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + user_exits.avatar)} alt={user_exits.name} height="45"
                                width="45" />
                                </figure>
                                <span>{user_exits ? user_exits.name : "Unknown"}</span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby='dropDownMenuButton'>

                                {/* {user.role === 'admin' && (
                                    <>

                                        <Link href='/admin/rooms'>
                                            <a className="dropdown-item">Rooms</a>
                                        </Link>

                                        <Link href='/admin/bookings'>
                                            <a className="dropdown-item">Bookings</a>
                                        </Link>

                                        <Link href='/admin/users'>
                                            <a className="dropdown-item">Users</a>
                                        </Link>

                                        <Link href='/admin/reviews'>
                                            <a className="dropdown-item">Reviews</a>
                                        </Link>

                                        <hr />

                                    </>
                                )} */}

                                <Link href={`/booking/${user_exits.id}`}>
                                    <a className="dropdown-item">My Bookings</a>
                                </Link>

                                <Link href={`/profile/${user_exits.id}`}>
                                    <a className="dropdown-item">Profile</a>
                                </Link>

                                <Link href='/'>
                                <a className="btn btn-danger px-4 text-white login-header-btn float-right" onClick={()=>logOut(router)}>Logout</a>
                                </Link>

                            </div>

                        </div>
                    ) :
                        <>
                            <Link href='/login'>
                                <a className="btn btn-danger px-4 text-white login-header-btn float-right mr-2">Login</a>
                            </Link>
                            <Link href='/register'>
                                <a className="btn btn-danger px-4 text-white login-header-btn float-right">Register</a>
                            </Link>
                        </>
                    }


                    </div>
              
                </div>
            </nav>

        </div>
    )
}

export default Header
