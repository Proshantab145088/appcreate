import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { userContext } from './Context'

const Item = () => {
  const user = useContext(userContext)
  console.log(user);
  
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
         const timer = setTimeout(()=>{
            navigate('/')
         } , 3000)
         return ()=>clearTimeout(timer)
    }, [])
  return (
    <div>Item params: {id}</div>
  )
}

export default Item