import Breadcumb from '@/components/Breadcumb'
import UserAppointement from '@/components/UserAppointement'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcumb title="Appointments" subtitle="Appointments"/>
      <UserAppointement/>
    </div>
  )
}

export default page