import React from 'react'

const Image = ({src , href, alt, className}) => {
  return (
    <div>
      <a href={href}>
          <picture>
              <img className={className} src={src} alt={alt} />
            </picture>
      </a>
    </div>
  )
}

export default Image