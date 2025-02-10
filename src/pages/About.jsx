import React, { useContext } from 'react'
import { userContext } from '../components/Context';

const About = () => {
  const user = useContext(userContext)
  console.log(user.title);
  return (
    <div>
      {user.title}
    </div>
  )
}

export default About