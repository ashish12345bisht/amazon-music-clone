import React from 'react'
import PodcastComponentHeader from './PodcastComponentHeader'

function PodcastMiniComponent({title,text}) {
  return (
    <div style={{color:"white",width:"95vw",margin:"auto"}}>
    <PodcastComponentHeader />
      <h1 style={{fontSize:"4em",margin:"1em 0em",fontWeight:"900"}}>{title}</h1>
      <p style={{textAlign:"center"}}>{text}</p>
    </div>
  )
}

export default PodcastMiniComponent