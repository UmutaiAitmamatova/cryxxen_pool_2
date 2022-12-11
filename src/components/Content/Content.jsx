import React from 'react'
import './Content.css'
import ContentBlock from '../ContentBlock/ContentBlock'

const Content = ({content}) => {

    return (
        <div className='content'>
            <div className="container">
                <div className="content__inner">
                {
                content.map((item) => {
                    return (
                        <ContentBlock
                            key={item.id}
                            ContentImg={item.contentImg}
                            title={item.title}
                        />
                    )
                })
            }
            </div>
            </div>
        </div>
    )
}

export default Content