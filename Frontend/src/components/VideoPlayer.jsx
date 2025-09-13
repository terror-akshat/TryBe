import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoPlayer({ url }){
if(!url) return <img src={'/src/assets/placeholder.jpg'} className="w-full rounded-xl" alt="placeholder" />
return (
<div className="rounded-xl overflow-hidden">
<ReactPlayer url={url} width="100%" height="360px" controls={true} />
</div>
)
}