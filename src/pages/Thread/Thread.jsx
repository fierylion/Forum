import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
const Thread = () => {
    const { id} = useParams()

  return (
    <div>
    <Navbar />
    <div>Thread: {id}</div>
    </div>
    
  )
}




export default Thread


