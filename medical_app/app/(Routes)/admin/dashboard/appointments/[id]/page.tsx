import React from 'react'

type Params = { id: string }

function page({ params }: { params: Params }) {
  return (
    <div>appointment {params.id}</div>
  )
}

export default page