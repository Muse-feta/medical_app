import { AddressMap, Breadcumb, OpenHours } from '@/components'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Contact Us",
};

const Contact = () => {
  return (
    <div>
        <Breadcumb title="Contact Us" subtitle="Contact Us"/>
        <OpenHours/>
        <AddressMap/>
    </div>
  )
}

export default Contact