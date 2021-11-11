import React from 'react'
import { wrapper } from '../../../redux/store'

import Layout from '../../../components/layout/Layout'
import SingleBookingComponent from '../../../components/booking/SingleBooking'
import { singleBookingAction } from '../../../redux/actions/bookingActions'


function SingleBooking() {
    return (
        <Layout>
            <SingleBookingComponent />
        </Layout>
    )
}

export default SingleBooking

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    await store.dispatch(singleBookingAction(ctx.query.id, ctx))
    console.log(ctx.query.id)
   
  })
