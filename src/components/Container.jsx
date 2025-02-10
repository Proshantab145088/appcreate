import React from 'react'

const Container = ({children}) => {
  return (
    <div className={`max-w-9/10 mx-auto p-3`}>{children}</div>
  )
}

export default Container