// import { Breadcumb, Login } from '@/components'
import Breadcumb from '@/components/Breadcumb'
import Login from '@/components/login/Login'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcumb title="Login" subtitle="Login"/>
        <Login/>
    </div>
  )
}

export default page