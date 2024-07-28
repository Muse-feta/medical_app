import FormAppointment from '@/components/appointement/FormAppointemnt'
import Breadcumb from '@/components/Breadcumb'
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