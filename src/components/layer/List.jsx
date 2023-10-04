import React from 'react'

const List = ({className, children}) => {
  return (
    <ul className={`flex justify-between ${className}`}>{children}</ul>
  )
}

export default List