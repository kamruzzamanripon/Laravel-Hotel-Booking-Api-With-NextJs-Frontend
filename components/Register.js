import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { newUserAction } from '../redux/actions/authActions';
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
import Image from 'next/image'

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');
    const [picture,setPicture] = useState("")
    const dispatch = useDispatch();
    const router = useRouter()

    const submit = (e)=>{
        e.preventDefault();
        const new_userInfo = {name, email, password, password_confirmation, picture}
        console.log(new_userInfo)
        const confirm_message = toast.success("Successful done your registration")
        dispatch(newUserAction(new_userInfo, router, confirm_message))
    }
    return (
        <div className="container container-fluid">
                <div className="row wrapper"> 
                <div className="col-10 col-lg-5">
                <form className="shadow-lg" onSubmit={submit}>
                    <h1 className="mb-3">Join Us</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">Full Name</label>
                        <input
                        type="text"
                        id="name_field"
                        className="form-control"
                        name="name"
                        onChange={e => setName(e.target.value)}
                        />
                    </div>

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

                    <div className="form-group">
                    <label htmlFor="password_field">Confirm Password</label>
                    <input
                        type="password"
                        id="password_field"
                        className="form-control"
                        name="password_confirmation"
                        onChange={e => setpassword_confirmation(e.target.value)}
                    />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                    {/* <Image className="responsive-img" src={picture?URL.createObjectURL(picture):""} /> */}
                                </figure>
                            </div>
                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='avatar'
                                    className='custom-file-input'
                                    id='customFile'
                                    accept="image/*"
                                    onChange={(e)=>setPicture(e.target.files[0])}
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Choose Avatar
                                </label>
                            </div>
                        </div>
                    </div>

        
                    <button
                    id="login_button"
                    type="submit"
                    className="btn btn-block py-3"
                    >
                    REGISTER
                    </button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register
