import React from 'react'
import Profile from '../../components/Profile'
import { profiletAction } from '../../redux/actions/authActions'

import { wrapper } from '../../redux/store'
import Layout from '../../components/layout/Layout'

function index() {
    return (
        <Layout>
            <Profile />
        </Layout>
        
    )
}

export default index

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    await store.dispatch(profiletAction(ctx.query.id, ctx))
    
   
  })