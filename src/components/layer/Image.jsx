import React from 'react'

const Image = ({src , href, alt}) => {
  return (
    <a href={href}>
        <picture>
            <img src={src} alt={alt} />
        </picture>
  </a>
  )
}

export default Image