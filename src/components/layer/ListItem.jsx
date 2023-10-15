import React from 'react'

const ListItem = ({listInnerItem, active, className , listLiClassName}) => {
  return (
    <li className={listLiClassName}>
      <a className={`inline-block font-DM text-sm font-bold w-full ${className} ${active}`} href="#">
        {listInnerItem}
      </a>
    </li>
  )
}

export default ListItem
