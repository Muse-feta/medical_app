import { Breadcumb, SignUpForm } from '@/components'
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