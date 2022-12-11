import React from 'react'
import './ContentBlock.css';

const ContentBlock = ({ContentImg, title}) => {
  return (
    <div className='block'>
      <div className="block__img">
        <img src={ContentImg} alt="" />
      </div>
      <div className="block__title">{title}</div>
    </div>
  )
}

export default ContentBlock;


