import React from 'react'

const VideoCard = ({data}) => {
  return (
    <div>{data.snippet.title}</div>
  )
}

export default VideoCard