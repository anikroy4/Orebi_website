import React from 'react'

const ListItem = ({listInnerItem, active}) => {
  return (
    <li>
      <a className={`text-[#767676] font-DM text-sm font-bold hover:text-[262626} ${active}`} href="#">
        {listInnerItem}
      </a>
    </li>
  )
}

export default ListItem
