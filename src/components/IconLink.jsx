import React from 'react'

function IconLink({link, itemClass}) {
const {href, icon} = link;
  return (
    <li>
        <a href={href} className={itemClass}>
            <i className={icon}></i>
        </a>
    </li>
  )
}

export default IconLink