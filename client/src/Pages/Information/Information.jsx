import React from 'react'
import InformationData from '../../Assets/Data/Information.json'

function Information() {
  return (
    <div>
       {
        InformationData.map((item, index)=> {
            return(
                <div key={index}>
                    <p>{item.heading}</p>
                    <p>{item.body}</p>
                </div>
                
            )
        })
       }
    </div>
  )
}

export default Information