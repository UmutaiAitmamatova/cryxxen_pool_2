import React from 'react'
import './Menu.css'

const Menu = ({ header, items, active, setActive }) => {
    console.log(items);
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
        <div className="menu__content">
            <div className="menu__header">{header}</div>
            <ul>
                {items.map(item => 
                    <li>
                        <a href={item.href}>{item.value}</a>
                    </li>
                )}
            </ul>
        </div>
    </div>
  )
}

export default Menu