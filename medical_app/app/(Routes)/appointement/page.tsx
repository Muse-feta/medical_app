import { Breadcumb, FormAppointment } from '@/components'
import React from 'react'

const Appointment = () => {
  return (
    <div>
        <Breadcumb title="Appointments" subtitle="Appointments"/>
        <FormAppointment/>
    </div>
  )
}

export default Appointment