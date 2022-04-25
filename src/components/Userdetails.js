import React from 'react'
import { useParams } from 'react-router-dom'

export const Userdetails = () => {
    const params = useParams()
    const userId = params.userId
  return (
    <div>User details {userId}</div>
  )
}
