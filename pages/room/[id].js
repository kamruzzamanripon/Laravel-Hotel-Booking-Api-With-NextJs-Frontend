import { getRoomDetails } from '../../redux/actions/roomActions'
import { wrapper } from '../../redux/store'
import {parseCookies} from 'nookies'


import RoomDetails from '../../components/room/RoomDetails'
import Layout from '../../components/layout/Layout'
import redirectTo from '../../util/redirectTo'

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails />
  </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
  await store.dispatch(getRoomDetails(ctx.req, ctx.params.id, ctx))
  
  // const {snactum_frontend} = parseCookies(ctx)
  // if(!snactum_frontend){
  //     const {res} = ctx
  //     res.writeHead(302,{Location:"/login"})
  //     res.end()
  // }

  redirectTo(ctx)
  
})