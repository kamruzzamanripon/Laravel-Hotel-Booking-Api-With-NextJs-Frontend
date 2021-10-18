import React, {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch} from 'react-redux'
import {toast} from 'react-toastify'
import Pagination from 'react-js-pagination'



import { clearErrors} from '../redux/actions/roomActions'
import RoomItem from './room/RoomItem'

function Home({title = 'Home | Royal Hotel '}) {

    const dispatch = useDispatch()
    const router = useRouter()

    const {rooms, error} = useSelector(state=>state.allRooms)
    const {first, path} = useSelector(state=>state.allRooms.rooms.links)
    const confirm_message = useSelector(state=>state.authInfo.userInfo.message)
    const {current_page, per_page, total} = useSelector(state=>state.allRooms.rooms.meta)
        
   //Pagination 
    let { location, page = 1 } = router.query;
    page = Number(page)
    const handlePagination = (page) => {
        const currentPath = path;
        const currentQuery = router.query;
        currentQuery.page = page;

        router.push({
             pathname: currentPath,
                query: currentQuery,
        });

    };

    useEffect(() => {
        toast.error(error)
        toast.success(confirm_message)
        dispatch(clearErrors())
    }, [error,confirm_message])


    return (
        
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <section id="rooms" className="container mt-5">

            <h2 className='mb-3 ml-2 stays-heading'>{location ? `Room in ${location}` : "Stays in Our fineset Hotel"}</h2>

           <Link href='/search'>
              <a className='ml-2 back-to-search'> <i className='fa fa-arrow-left'></i> Back to Search</a>
           </Link>
            <div className="row">
              

            { rooms.data && rooms.data.length === 0 ?
                <div className="alert alert-danger mt-5 w-100"><b>No Rooms.</b></div>
                :
                rooms.data && rooms.data.map((room,index) => (
                  <RoomItem key={index} room={room} />
                ))
            }

            </div>
            </section>
            
            {total > per_page &&
                <div className="d-flex justify-content-center mt-5">
            <Pagination
                        activePage={current_page}
                        itemsCountPerPage={per_page}
                        totalItemsCount={total}
                        onChange={handlePagination}
                        nextPageText={'Next'}
                        prevPageText={'Prev'}
                        firstPageText={'First'}
                        lastPageText={'Last'}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            }

        </div>
    )
}

export default Home
