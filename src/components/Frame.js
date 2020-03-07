import React from 'react'

const Frame = ({src, width, height}) => (
  <iframe
    title="Demo window"
    src={src}
    className="frame__window"
    style={{height: `${height}px`, width: `${width}px`}}
    name="targetframe"
    frameBorder="0"
  />
)

export default Frame
