import Login from '../components/Login'
import Layout from '../components/layout/Layout'
import { loginAction } from '../redux/actions/authActions'
import { wrapper } from '../redux/store'
import ifLogIn from '../util/ifLogIn'

export default function Index() {
  return (
    <Layout>
      <Login />
  </Layout>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (ctx)=>{
    ifLogIn(ctx)
})