import React from 'react'


import { wrapper } from '../../redux/store'
import Layout from '../../components/layout/Layout'
import AllBooking from '../../components/booking/AllBooking'
import { allBookingAction } from '../../redux/actions/bookingActions'

function allBooking() {
    return (
        <Layout>
            <AllBooking />
        </Layout>
        
    )
}

export default allBooking

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    await store.dispatch(allBookingAction(ctx.query.id, ctx))
    //console.log(ctx.query.id)
   
  })