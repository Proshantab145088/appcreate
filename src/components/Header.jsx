import React from 'react'
import List from './List'
import Image from './Image'
import Flex from './Flex'

const Header = () => {
  return (
    <Flex className={`justify-between`}>
       <Image src={`vite.svg`} alt={`logo`}/>
        <List/>
    </Flex>
  )
}

export default Header