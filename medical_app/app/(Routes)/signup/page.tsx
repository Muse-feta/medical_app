import Breadcumb from '@/components/Breadcumb'
import SignUpForm from '@/components/signup/SignUpForm'
import React from 'react'

const page = () => {
  return (
    <div>
        <Breadcumb title="signup" subtitle="signup"/>
        <SignUpForm/>
    </div>
  )
}

export default page