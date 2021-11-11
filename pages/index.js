import Home from '../components/Home'
import Layout from '../components/layout/Layout'

import { getRooms } from '../redux/actions/roomActions'
import { wrapper } from '../redux/store'


export default function Index() {
  return (
    <Layout>
      <Home />
  </Layout>
  )
}



//  export const getStaticProps = wrapper.getStaticProps(store => async (ctx)=>{
//   await store.dispatch(getRooms(ctx.query.page, ctx.query.location, ctx.query.guests, ctx.query.category))
 
// })


export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
  await store.dispatch(getRooms(ctx.query.page, ctx.query.location, ctx.query.guests, ctx.query.category))
 
})