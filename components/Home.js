import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import RoomItem from './room/RoomItem'

function Home({title = 'Home | Royal Hotel '}) {
    const {rooms} = useSelector(state=>state.allRooms)
    //console.log(rooms)
    return (
        
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <section id="rooms" className="container mt-5">

            <h2 className='mb-3 ml-2 stays-heading'>Stays in Our fineset Hotel</h2>

           <Link href='#'>
              <a className='ml-2 back-to-search'> <i className='fa fa-arrow-left'></i> Back to Search</a>
           </Link>
            <div className="row">
              

            { rooms.data && rooms.data.length === 0 ?
                <div className="alert alert-danger mt-5 w-100"><b>No Rooms.</b></div>
                :
                rooms.data && rooms.data.map(room => (
                  <RoomItem key={room._id} room={room} />
                ))
            }

            </div>
            </section>

        </div>
    )
}

export default Home
