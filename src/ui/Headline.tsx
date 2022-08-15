import React from 'react'
import './Headline.scss'

const Headline = ({headline}:{headline: string}) => {
    return (
      <div className="Headline">{headline}</div>
    )
}
  
export default Headline