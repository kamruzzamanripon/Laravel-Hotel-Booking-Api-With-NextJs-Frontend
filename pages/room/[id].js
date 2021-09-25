import { getRoomDetails } from '../../redux/actions/roomActions'
import { wrapper } from '../../redux/store'
import { Carousel} from 'react-bootstrap'
import Image from 'next/image'

import RoomDetails from '../../components/room/RoomDetails'
import Layout from '../../components/layout/Layout'

export default function RoomDetailsPage() {
  return (
    <Layout>
      <RoomDetails title="Room Details" />
  </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({req, params})=>{
  await store.dispatch(getRoomDetails(req, params.id))
})