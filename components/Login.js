import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify'

import { loginAction } from '../redux/actions/authActions';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter()

    const confirm_message = useSelector(state=> state.authInfo.userInfo.message)
    useEffect(()=>{
        toast.success(confirm_message)
    },[confirm_message])
    


    const submit = (e)=>{
        e.preventDefault();
        let data = {email, password}
        //console.log(data)
        dispatch(loginAction(data, router))
        //data = router.query;

    }

    return (
        <div>
             <div className="container container-fluid">
                <div className="row wrapper"> 
                <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submit}>
                    <h1 className="mb-3">Login</h1>
                    <div className="form-group">
                    <label htmlFor="email_field">Email</label>
                    <input
                        type="email"
                        id="email_field"
                        className="form-control"
                        name="email"
                        onChange={e => setEmail(e.target.value)}
                        
                    />
                    </div>
        
                    <div className="form-group">
                    <label htmlFor="password_field">Password</label>
                    <input
                        type="password"
                        id="password_field"
                        className="form-control"
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                        
                    />
                    </div>

                    <a href="#" className="float-right mb-4">Forgot Password?</a>
        
                    <button
                    id="login_button"
                    type="submit"
                    className="btn btn-block py-3"
                    >
                    LOGIN
                    </button>

                    <Link href='/register'>
                        <a className="float-right mt-3">New User?</a>
                    </Link>
                </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login
