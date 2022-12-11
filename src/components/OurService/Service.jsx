import React from 'react'
import './Service.css'
import ServiceBlock from '../ServersBlock/ServiceBlock'

const Service = ({servers}) => {
    return (
        <div className='service'>
            <div className="container">
                <div className="service__block">
                {
                servers.map((item) => {
                    return (
                        <ServiceBlock
                            key={item.id}
                            contentImg={item.contentImg}
                            title={item.title}
                            subtitle={item.subtitle}
                            p={item.p}
                        />
                    )
                })
            }
                </div> 
            </div>
        </div>
    )
}

export default Service