import React from 'react'
import { Link } from 'react-router-dom'
import Flex from './Flex'

const List = () => {
  return (
    <div>
        <Flex className={`list-none gap-6 `}>
            <li className='text-white bg-amber-700 py-3 px-4 rounded-lg text-3xl hover:bg-amber-100 hover:text-black transition-all'><Link to='/'>Home</Link></li>
            <li className='text-white bg-amber-700 py-3 px-4 rounded-lg text-3xl hover:bg-amber-100 hover:text-black transition-all'><Link to='./about'>About</Link></li>
            <li className='text-white bg-amber-700 py-3 px-4 rounded-lg text-3xl hover:bg-amber-100 hover:text-black transition-all'><Link to='./product'>Product</Link></li>
            <li className='text-white bg-amber-700 py-3 px-4 rounded-lg text-3xl hover:bg-amber-100 hover:text-black transition-all'><Link to='./contact'>Contact</Link></li>
        </Flex>
    </div>
  )
}

export default List