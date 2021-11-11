import React from 'react'
import {useSelector} from 'react-redux'
import Image from 'next/image'

function Profile() {
       const {userInfo} = useSelector(state=>state.profile)
       console.log(userInfo)

    return (
        <div className="container container-fluid">
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form className='shadow-lg'>
                    <h1 className="mb-3">{userInfo.name} <small>({userInfo.role})</small> Profile</h1>

                    <div className="form-group">
                        <label htmlFor="name_field">Full Name</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            value={userInfo.name}
                            disabled
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={userInfo.email}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name_field">User Roll</label>
                        <input
                            type="text"
                            id="name_field"
                            className="form-control"
                            value={userInfo.role}
                            disabled
                        />
                    </div>
                   

                    <div className='form-group'>
                        <label htmlFor='avatar_upload'>Avatar</label>
                        <div className='d-flex align-items-center'>
                            <div>
                                <figure className='avatar mr-3 item-rtl'>
                                <Image src={!(userInfo.avatar) ?('https://via.placeholder.com/150') : (process.env.ImagebaseUrl + userInfo.avatar)} alt={userInfo.name} height="290px" width="290px" />
                                </figure>
                            </div>
                           
                        </div>
                    </div>


                    <button
                        id="update-btn"
                        type="submit"
                        className="btn btn-block py-3 update-btn"
                    >
                        Edit
                    </button>
                </form>
            </div>
        </div>
    </div>

    )
}

export default Profile
